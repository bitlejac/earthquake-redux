import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Main from './components/containers/main.js'
import initialState from '../initialState.json'
import configureStore from './store/configureStore'
import { fetchStart } from './actions/action.js'

let store = configureStore(initialState)

Main.contextTypes = {
    store : React.PropTypes.object
};

ReactDOM.render(
    <Provider store={ store }>
        <Main switch={ store.getState().appState.switch }  />
    </Provider>,
        document.getElementById('app')
)

store.dispatch(fetchStart(initialState.filter))
