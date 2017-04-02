import React from 'react'

const Map = ({ val }) => {
    return (
        <div className="map-wrapper">
            Initial idea was to use JS map API to show results here also
            <iframe width="100%" height="100%" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC0VzU88sXQ2iNhEMDbciaBwZ8iBZ4dpCM&q=US"></iframe>
        </div>
    )
}

export default Map