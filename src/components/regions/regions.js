import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchRegions } from "../../redux/actions";
import styles from "./regions.module.css"
import Loader from 'components/loader';
import Select from "react-select";
import Region from '../region';

const Regions = ({regions, fetchRegions, loading}) => {
    const [region, setRegion] = useState(null);

    useEffect(() => {
        if (!regions.length) fetchRegions();
    }, [])

    if (loading) return <Loader />

    return <>
        <div className={styles.regions}>
            {regions && <Select options={regions} aria-labelledby="fullname" isSearchable={true} onChange={setRegion}/>}
            <Region region={region}/>
        </div> 
    </>
}

const mapStateToProps = (state, props) => ({
    regions: state.regions.map(region => ({...region, label: `${region.fullname}: ${region.libraries}`, value: region.order })),
    loading: state.loading,
})

const mapDispatchToProps = (dispatch, props) => ({
    fetchRegions: () => dispatch(fetchRegions())
})
export default connect(mapStateToProps, mapDispatchToProps)(Regions)
