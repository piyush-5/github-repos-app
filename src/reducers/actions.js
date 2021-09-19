import axios from "axios";
import { GITHUB_API_CONTEXT, GET_TEN_POPULAR_REPOS } from './constants';

export function getRepos() {
    return(dispatch) => {
        axios.get(GET_TEN_POPULAR_REPOS)
            .then(res=> {
                //console.log("data loaded", res);
                res.data.items.map(data => {
                    let userData = hitUserAPI(data.url)
                    userData.then(usersDetails => {
                        //console.log("promise resoled", va)
                        data['userDetails'] = usersDetails
                    })
                    //console.log("test user", test)
                })
                res.data.items.map(data => {
                    let userStarRepo = hitStarAPI(data.login)
                    userStarRepo.then(userStar => {
                        data['starredRepos'] = userStar
                    })
                    console.log("test star repo", userStarRepo)
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

async function hitStarAPI(userName) {
    let starData;
    await axios.get(`${GITHUB_API_CONTEXT}users/${userName}/starred`)
            .then(response => {
                starData = response.data;
                console.log("starData", starData);
            })
    return starData;
}

export function setItems(items) {
    return {
        type: 'SET_ITEMS',
        payload: items
    }
}
export function showLoading() {
    return {
        type: 'SHOW_LOADING'
    }
}
export function hideLoading() {
    return {
        type: 'HIDE_LOADING'
    }
}