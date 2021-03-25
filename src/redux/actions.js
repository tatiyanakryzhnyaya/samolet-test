import { getData } from "../api";
import store from "./store"

export const fetchRegions = async () => {
    await getData()
        .then(res => store.dispatch({
            type: 'SET_REGIONS',
            payload: {entity: res}
        }))
    
}
