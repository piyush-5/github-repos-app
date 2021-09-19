const repoReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_ITEMS':
            return {
                state: action.payload
            }
        case 'SHOW_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'HIDE_LOADING':
            return {
                ...state,
                loading: false
            }
        case 'API_EXCEEDED_LIMIT':
            return {
                ...state,
                message: "API has exceeded its limits for your current IP"
            }

        default:
            return state;
    }
}
export default repoReducer;