import { connect } from 'react-redux'
import Map from '../ui/map.js'

    const mapStateToProps = (store) => {
        return {
            val: store.val
        }
    }

    const Component = connect(mapStateToProps)(Map)

export default Component