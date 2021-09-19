const repoReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_ITEMS':
            return {
                state: action.payload
            }

        default:
            return state;
    }
}
export default repoReducer;