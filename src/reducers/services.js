import { showLoading, setItems, hideLoading, apiLimitsExceeded } from "./actions";
import { GITHUB_API_CONTEXT, GET_TEN_POPULAR_REPOS } from './constants';
import axios from "axios";

export const getRepos = async (dispatch) => {
    try {
        const result = await axios.get(GET_TEN_POPULAR_REPOS)

        result.data.items.map(data => {
            let userData = hitUserAPI(data.url, dispatch);
            userData.then(usersDetails => {
                data['userDetails'] = usersDetails
            })
        })
        result.data.items.map(data => {
            let userStarRepo = hitStarAPI(data.login, dispatch)
            userStarRepo.then(userStar => {
                data['starredRepos'] = userStar
            })
        })
        setTimeout(() => dispatch(setItems(result.data.items)), 2000)
        setTimeout(() => dispatch(hideLoading()), 2000)

    } catch (error) {
        dispatch(hideLoading())
        dispatch(apiLimitsExceeded(error.message))
    }
}

async function hitUserAPI(url, dispatch) {
    let userData;
    await axios.get(url)
        .then(response => {
            userData = response.data;
        })
        .catch(err => {
            dispatch(hideLoading())
            dispatch(apiLimitsExceeded(err.message))
        })
    return userData;
}

async function hitStarAPI(userName, dispatch) {
    let starData;
    await axios.get(`${GITHUB_API_CONTEXT}users/${userName}/starred`)
        .then(response => {
            starData = response.data;
        })
        .catch(err => {
            dispatch(hideLoading())
            dispatch(apiLimitsExceeded(err.message))
        })
    return starData;
}