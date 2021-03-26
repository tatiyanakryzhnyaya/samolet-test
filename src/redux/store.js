import { createStore, applyMiddleware } from "redux" 
import thunk from "redux-thunk"
import { SET_REGIONS, FETCH_REGIONS } from "./constants"

const defaultState = {
    regions: []
}

const reducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch(type) {
        case SET_REGIONS:
            return {
                ...state,
                regions: payload.entity
            }
        case FETCH_REGIONS: {
            return {
                ...state,
            }
        }
        default:
            return state
    }
}


const store = createStore(reducer, applyMiddleware(thunk))

export default store;