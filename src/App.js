import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "./reducers/actions";
import Users from './components/Users';

const App = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    //loadData();
    loadFromStore();
    //return () => { setLoading(false)}
  }, [])

  const loadFromStore = () => {
    dispatch(
      getRepos()
    )
    console.log("show state..", state)
    setList(state.repos.state)
  }

  const loadData = () => {
    setLoading(true)
    return axios
        .get(`https://api.github.com/search/users?q=location:Bangalore&limit=10`)
        .then(res => {
          console.log("data loade", res);
          setList(res.data.items);
          setLoading(false);
        })
        .catch(err => {
          console.log("ERROR", err);
        })
  }

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
      
              {list.map(repo => 
                // <li key={repo.id}>{repo.login}</li>
                <Users detail={repo.userDetails} />
              )}
            
    </>
  )
}

export default App;