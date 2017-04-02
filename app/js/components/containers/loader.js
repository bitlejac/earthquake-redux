import Loader from '../ui/loader.js'
import { connect } from 'react-redux'
import { loading } from '../../actions/action.js'

const mapStateToProps = (store) => {
    return {
        loading : store.loading
    }
}

const Container = connect(mapStateToProps)(Loader);

export default Container
