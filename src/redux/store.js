import { createStore, applyMiddleware } from "redux" 
import thunk from "redux-thunk"
import { SET_REGIONS, FETCH_REGIONS, LOADING_TOGGLE } from "./constants"

const defaultState = {
    regions: [],
    loading: false
}

const reducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch(type) {
        case SET_REGIONS:
            return {
                ...state,
                regions: payload.entity
            }
        case FETCH_REGIONS:
            return {
                ...state,
            }
        case LOADING_TOGGLE: 
            return {
                ...state,
                loading: payload.loading
            }
        default:
            return state
    }
}


const store = createStore(reducer, applyMiddleware(thunk))

export default store;