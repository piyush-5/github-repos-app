const initialStore = {
    items: [],
    loading: true,
    message: ""
}


const repoReducer = (state = initialStore, action) => {
    switch(action.type){
        case 'SET_ITEMS':
            return {
                ...state,
                items: action.payload,
                loading: false
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
                loading: false,
                message: action.payload
            }

        default:
            return state;
    }
}
export default repoReducer;