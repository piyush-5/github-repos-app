import axios from "axios";

export function getRepos() {
    return(dispatch) => {
        axios.get(`https://api.github.com/search/users?q=location:Bangalore`)
            .then(res=> {
                console.log("data loaded", res);
                dispatch(setItems(res.data.items))
            })
            .catch(err => {
                console.log("ERROR", err);
            })
    }
}

export function setItems(items) {
    return {
        type: 'SET_ITEMS',
        payload: items
    }
}