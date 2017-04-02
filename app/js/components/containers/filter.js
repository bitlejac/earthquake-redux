import filter from '../ui/filter.js'
import { connect } from 'react-redux'
import { fetchStart, switchTrigger } from '../../actions/action.js'

    const mapDispatchToProps = (dispatch) => {
        return {
            onChange: (e) => {
                dispatch(fetchStart(e.target.value))
            },
            onSwitch: () => {
                dispatch(switchTrigger())
            }
        }
    }

    const Container = connect(null, mapDispatchToProps)(filter)

export default Container
