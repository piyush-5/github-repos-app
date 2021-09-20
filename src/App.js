import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems, showLoading, hideLoading, apiLimitsExceeded } from "./reducers/actions";
import Users from './components/Users';
import axios from "axios";
import { GITHUB_API_CONTEXT, GET_TEN_POPULAR_REPOS } from './reducers/constants';


const App = () => {
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    //loadData();
    loadFromStore();
    setList(state.repos.state)
    console.log("LIST", list)
    //return () => { setLoading(false)}
  }, [])

  const loadFromStore = async () => {
    try{
      const result = await axios.get(GET_TEN_POPULAR_REPOS)

        console.log("result", result);

        result.data.items.map(data => {
          let userData = hitUserAPI(data.url);
          userData.then(usersDetails => {
            data['userDetails'] = usersDetails
          })
        })
        result.data.items.map(data => {
          let userStarRepo = hitStarAPI(data.login)
          userStarRepo.then(userStar => {
            data['starredRepos'] = userStar
          })
        })
        setTimeout(()=> dispatch(setItems(result.data.items)), 2000)
        setTimeout(()=> dispatch(hideLoading()), 2000)
        
      // })
    }catch(error){
      console.log("ERROR", error);
      dispatch(hideLoading())
      dispatch(apiLimitsExceeded(error.message))
    }
 
  }

  async function hitUserAPI(url) {
    let userData;
    await axios.get(url)
          .then(response => {
                userData = response.data;
                //console.log("userdara", userData);
            })
            .catch(err => {
                console.log("ERROR", err);
                dispatch(hideLoading())
                dispatch(apiLimitsExceeded(err.message))
            })
    return userData;
}

async function hitStarAPI(userName) {
    let starData;
    await axios.get(`${GITHUB_API_CONTEXT}users/${userName}/starred`)
            .then(response => {
                starData = response.data;
                //console.log("starData", starData);
            })
            .catch(err => {
                console.log("ERROR", err);
                dispatch(hideLoading())
                dispatch(apiLimitsExceeded(err.message))
            })
    return starData;
}
console.log("show state..", state)
  return (
    <>
      {/* { loading ? 
          <p>loading...</p> : 
          <div>
            {list.map(repo => 
              <li key={repo.id}>{repo.login}</li>
            )}
          </div> 
      } */}

      {
        state.repos.loading ?

          <div style={{ display: "flex", justifyContent: "center" }}>
            {state.repos.message !== ''? <span>{state.repos.message}</span> : <span>Loading...</span>}
          </div> :

          <div>
            {
              state.repos.message !== '' ?
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span>{state.repos.message}</span>
                </div> :
                <div>
                  {state.repos.items.map(repo =>
                    //<li key={repo.id}>{repo.login}</li>
                    <Users key={repo.id} detail={repo.userDetails} stars={repo.starredRepos} />
                  )}
                </div>
            }
          </div>
      }

      
      
              
            
    </>
  )
}

export default App;