import { getData } from "../api";
import { SET_REGIONS, FETCH_REGIONS } from './constants';


export const fetchRegions = () => async (dispatch) => {
    await getData()
        .then(res => dispatch({
            type: SET_REGIONS,
            payload: {entity: res}
        }))
}