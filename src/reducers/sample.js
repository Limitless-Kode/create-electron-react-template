import * as types from '../helpers/types';
function sampleReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case types.COUNTER_INCREMENTED:
            return { value: state.value + action.payload.data }
        case types.COUNTER_DECREMENTED:
            return { value: state.value - 1 }
        default:
            return state
    }
}

export default sampleReducer;