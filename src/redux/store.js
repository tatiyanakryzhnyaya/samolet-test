import { createStore } from "redux" 

const defaultState = {
    regions: []
}

const reducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch(type) {
        case 'SET_REGIONS':
            return {
                ...state,
                regions: payload.entity
            }
        default:
            return state
    }
}


const store = createStore(reducer)
export default store;