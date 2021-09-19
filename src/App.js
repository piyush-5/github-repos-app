import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "./reducers/actions";
import Users from './components/Users';

const App = () => {
  const [list, setList] = useState([]);
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
                <Users key={repo.id} detail={repo.userDetails} stars={repo.starredRepos}/>
              )}
            
    </>
  )
}

export default App;