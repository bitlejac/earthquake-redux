import React, { Component } from 'react'
import Filter from './../containers/filter.js'
import Map from './../containers/map.js'
import List from './../containers/list.js'
import Loader from './../containers/loader.js'

const Main = (sw) => {

        return (
            <div  className={ sw.switch }>
                <Filter />
                <Map />
                <List />
                <Loader />
            </div>
        )
}

export default Main