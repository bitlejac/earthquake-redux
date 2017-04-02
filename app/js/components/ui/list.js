import React from 'react'
import ListElem from './listElem.js'

const List = (data) => {

    return (
        <div className="list-wrapper">
            {data.features.map((d, i) =>
                <ListElem key={i} elemData={d}/>
            )}
        </div>
    )
}

export default List