// import axios from "axios";
// import { GITHUB_API_CONTEXT, GET_TEN_POPULAR_REPOS } from './constants';


// export const getRepos = () => async dispatch => {
//     //return () => {
//     try{
//         dispatch(showLoading())
//         await axios.get(GET_TEN_POPULAR_REPOS)
//             .then(res=> {
//                 //console.log("data loaded", res);
//                 dispatch(showLoading())
//                 // res.data.items.map(data => {
//                 //     let userData = hitUserAPI(data.url, dispatch)
//                 //     userData.then(usersDetails => {
//                 //         //console.log("promise resoled", va)
//                 //         data['userDetails'] = usersDetails
//                 //     })
//                 //     //console.log("test user", test)
//                 // })
//                 dispatch(showLoading())
//                 // res.data.items.map(data => {
//                 //     let userStarRepo = hitStarAPI(data.login, dispatch)
//                 //     userStarRepo.then(userStar => {
//                 //         data['starredRepos'] = userStar
//                 //     })
//                 //     //console.log("test star repo", userStarRepo)
//                 // })
//                 console.log("user details", res)
//                 // let checkLoaded = res.data.items
//                 // if(checkLoaded != undefined){
//                     dispatch(hideLoading())
//                     dispatch(setItems(res.data.items))
                    
//                 //}
//             })
//             // .catch(err => {
//             //     console.log("ERROR", err);
//             //     dispatch(hideLoading())
//             //     dispatch(apiLimitsExceeded(err.message))
//             // })
//             dispatch(hideLoading())
//     } catch(error) {
//         console.log("ERROR", error);
//         dispatch(hideLoading())
//         dispatch(apiLimitsExceeded(error.message))
//     }
//     //}
// }

// async function hitUserAPI(url, dispatch) {
//     let userData;
//     await axios.get(url)
//           .then(response => {
//                 userData = response.data;
//                 //console.log("userdara", userData);
//             })
//             .catch(err => {
//                 console.log("ERROR", err);
//                 dispatch(hideLoading())
//                 dispatch(apiLimitsExceeded(err.message))
//             })
//     return userData;
// }

// async function hitStarAPI(userName, dispatch) {
//     let starData;
//     await axios.get(`${GITHUB_API_CONTEXT}users/${userName}/starred`)
//             .then(response => {
//                 starData = response.data;
//                 //console.log("starData", starData);
//             })
//             .catch(err => {
//                 console.log("ERROR", err);
//                 dispatch(hideLoading())
//                 dispatch(apiLimitsExceeded(err.message))
//             })
//     return starData;
// }

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
export function apiLimitsExceeded(message) {
    return {
        type: 'API_EXCEEDED_LIMIT',
        payload: message
    }
}