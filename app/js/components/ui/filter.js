import React, { Component, PropTypes } from 'react'

const Filter = ({ onChange, onSwitch }) => {

    return(
        <div className="header">
            <div className="filters">
            <select onChange={onChange}>
                <option value="1hour">Past Hour</option>
                <option value="1day">Past 24 hours</option>
                <option value="7days">Past 7 days</option>
            </select>
            </div>
            <div className="switch">
                <button onClick={onSwitch} className="switch-btn"> switch </button>
            </div>
        </div>
    )
}


export default Filter