import axios from 'axios'

export default (state , action) => {
    switch (action.type) {
        case 'SWITCH_CHANGED':
            return Object.assign({}, state, {
                appState : {
                    "switch" : state.appState.switch == 'main list' ? 'main map' : 'main list'
                }
            })
        case 'FETCH_DONE':
            return Object.assign({}, state, {
                data : action.data,
                loading : false
            })
        case 'LOADING':
            return Object.assign({}, state, {
                loading : true
            })
        default:
            return state
    }
};

