import axios from 'axios'

const fetchData = (dispatch, url) => {
    dispatch(loading())
    axios.get(url)
        .then(function (response) {
            dispatch(fetchDone(response.data))
        })
        .catch(function (error) {
            dispatch(fetchDone(error))
        })
}

export const fetchStart = (filter) => {
    switch(filter){
        case '1hour' :
            return (dispatch) => {
                fetchData(dispatch, 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
            }
        case '1day' :
            return (dispatch) => {
                fetchData(dispatch, 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')
            }
        case '7days' :
            return (dispatch) => {
                fetchData(dispatch, 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
            }
        case '30days' :
            return (dispatch) => {
                fetchData(dispatch, 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson')
            }
        default :
            return (dispatch) => {
                fetchData(dispatch, 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
            }
    }

}
export const switchTrigger = () => {
    return {
        type : 'SWITCH_CHANGED'
    }
}

export const fetchDone = (data) => {
    return {
        type : 'FETCH_DONE',
        data : data
    }
}

export const loading = () => {
    return {
        type : 'LOADING'
    }
}