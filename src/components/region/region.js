import { useEffect } from "react";
import { connect } from "react-redux"
import { marthc, matchPath } from "react-router-dom"
import { fetchRegions } from "redux/actions";
import styles from "./region.module.css"
import Loader from 'components/loader';

const Region = ({region, regions, fetchRegions,  match, loading}) => {
    
    useEffect(() => {
        if (!region) fetchRegions()
    }, [regions])

    if (loading) return <Loader />

    return (
        <div className={styles.region}>
            <div className={styles.regionTitle}>Регион {region && region.fullname}</div>
            <ul>
                {region && Object.keys(region).map(keyProp => 
                    <li key={keyProp}> <b>{keyProp}:</b> {region[keyProp]}</li>
                )}
            </ul>
            
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        region: state.regions.find(reg => reg.order ==  props.match.params.id),
        regions: state.regions,
        loading: state.loading
    }
}
export default connect(mapStateToProps, { fetchRegions })(Region)

