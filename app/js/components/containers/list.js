import { connect } from 'react-redux'
import List from '../ui/list.js'

const mapStateToProps = (store) => {
    return store.data
}

const Component = connect(mapStateToProps, null)(List)

export default Component