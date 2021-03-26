import { getData } from "../api";
import { SET_REGIONS, FETCH_REGIONS, LOADING_TOGGLE } from './constants';


export const fetchRegions = () => async (dispatch) => {
    dispatch(toggleLoading(true))
    await getData()
        .then(res => {
            dispatch(setRegionsData(res))
            dispatch(toggleLoading(false))
        })
}

const toggleLoading = (loading) => ({
    type: LOADING_TOGGLE,
    payload: { loading }
})

const setRegionsData = (entity) => ({
    type: SET_REGIONS,
    payload: {entity}
})