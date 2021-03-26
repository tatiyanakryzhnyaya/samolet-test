import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRegions } from "../../redux/actions";
import { Link } from "react-router-dom";
import styles from "./regions.module.css"

const Regions = ({regions, fetchRegions}) => {
    useEffect(() => {
        if (!regions.length) fetchRegions();
    }, [])

    return <>
        <div className={styles.regions}>
            {regions && regions.map(({fullname, libraries, order}) => 
                <Link to={`/regions/${order}`}
                    key={order}> {fullname} : {libraries}
                </Link>
            )}
        </div> 
    </>
}

const mapStateToProps = (state, props) => ({
    regions: state.regions.map(({fullname, libraries, order}) => ({fullname, libraries, order}))
})

export default connect(mapStateToProps, { fetchRegions })(Regions)
