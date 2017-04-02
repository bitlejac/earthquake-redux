import React from 'react'
import main from '../ui/main.js'
import { connect } from 'react-redux'

const mapStateToProps = (store) => {
    return {
        switch : store.appState.switch
    }
}

const Component = connect(mapStateToProps)(main)

export default Component