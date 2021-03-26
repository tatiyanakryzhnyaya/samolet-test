import { useEffect } from "react";
import { connect } from "react-redux"
import { marthc, matchPath } from "react-router-dom"
import { fetchRegions } from "redux/actions";
import styles from "./region.module.css"

const Region = ({region, regions, fetchRegions,  match}) => {
    
    useEffect(() => {
        if (!region) fetchRegions()
    }, [regions])

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
    console.log(state.regions, props.match.params.id)
    return {
        region: state.regions.find(reg => reg.order ==  props.match.params.id),
        regions: state.regions
    }
}
export default connect(mapStateToProps, { fetchRegions })(Region)

