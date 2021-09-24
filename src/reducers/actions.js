
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