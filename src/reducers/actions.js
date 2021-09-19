import axios from "axios";

export function getRepos() {
    return(dispatch) => {
        axios.get(`https://api.github.com/search/users?q=location:Bangalore&language:javascript&sort=stars&order=desc&per_page=10`)
            .then(res=> {
                //console.log("data loaded", res);
                res.data.items.map(data => {
                    let test = hitUserAPI(data.url)
                    test.then(usersDetails => {
                        //console.log("promise resoled", va)
                        data['userDetails'] = usersDetails
                    })
                    //console.log("test user", test)
                })
                console.log("user details", res)
                dispatch(setItems(res.data.items))
            })
            .catch(err => {
                console.log("ERROR", err);
            })
    }
}

async function hitUserAPI(url) {
    let userData;
    await axios.get(url)
          .then(response => {
                userData = response.data;
                //console.log("userdara", userData);
            })
    return userData;
}

export function setItems(items) {
    return {
        type: 'SET_ITEMS',
        payload: items
    }
}