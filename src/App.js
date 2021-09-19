import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "./reducers/actions";

// export default class App extends React.Component {
//   state = {
//     loading: true,
//     error: "",
//     data: null
//   };
//   loadData = () => {
//     this.setState({ loading: true });
//     return axios
//       .get(
//         //`https://api.github.com/search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc&type=Repositories`
//         `https://api.github.com/search/users?q=location:Bangalore`
//       )
//       .then(result => {
//         console.log(result);
//         this.setState({
//           data: result.data.items,
//           loading: false,
//           error: false
//         });
//       })
//       .catch(error => {
//         console.error("error: ", error);
//         this.setState({
//           // objects cannot be used as a react child
//           // -> <p>{error}</p> would throw otherwise
//           error: `${error}`,
//           loading: false
//         });
//       });
//   };
//   componentDidMount() {
//     this.loadData();
//   }
//   render() {
//     const { loading, error, data } = this.state;
//     if (loading) {
//       return <p>Loading ...</p>;
//     }
//     if (error) {
//       return (
//         <p>
//           There was an error loading the repos.{" "}
//           <button onClick={this.loadData}>Try again</button>
//         </p>
//       );
//     }
//     return (
//       <div>
//         <h1>Top Github repos</h1>
//         {data.map(repo => <p key={repo.id}>{repo.login}</p>)}
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById("root"));

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
  }

  const loadData = () => {
    setLoading(true)
    return axios
        .get(`https://api.github.com/search/users?q=location:Bangalore&limit=10`)
        .then(res => {
          console.log("data loaded", res);
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
      <div>
            {list.map(repo => 
              <li key={repo.id}>{repo.login}</li>
            )}
          </div> 
    </>
  )
}

export default App;