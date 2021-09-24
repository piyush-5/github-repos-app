import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Users from './components/Users';
import { getRepos } from './reducers/services';


const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    loadFromStore();
  }, [])

  const loadFromStore = async () => {
    await getRepos(dispatch)
  }

  return (
    <>
      {
        state.repos.loading ?

          <div style={{ display: "flex", justifyContent: "center" }}>
            {state.repos.message !== '' ? <span>{state.repos.message}</span> : <span>Loading...</span>}
          </div> :

          <div>
            {
              state.repos.message !== '' ?
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span>{state.repos.message}</span>
                </div> :
                <div>
                  {state.repos.items.map(repo =>
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