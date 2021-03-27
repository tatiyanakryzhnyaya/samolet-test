import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchRegions } from "../../redux/actions";
import { Link } from "react-router-dom";
import styles from "./regions.module.css"
import Loader from 'components/loader';

const Regions = ({regionsList, fetchRegions, loading}) => {
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        if (!regionsList.length) fetchRegions();
    }, [])

    const regions = regionsList.filter(reg => ~reg.fullname.toLowerCase().indexOf(searchValue));

    function onHandlerChange({target}) {
        setSearchValue(target.value)
    }

    if (loading) return <Loader />

    return <>
        <div className={styles.regions}>
            <input className={styles.searchInput} onChange={onHandlerChange}></input>
            {regions && regions.map(({fullname, libraries, order}) => 
                <Link to={`/regions/${order}`}
                    key={order}> {fullname} : {libraries}
                </Link>
            )}
        </div> 
    </>
}

const mapStateToProps = (state, props) => ({
    regionsList: state.regions.map(({fullname, libraries, order}) => ({fullname, libraries, order})),
    loading: state.loading
})

export default connect(mapStateToProps, { fetchRegions })(Regions)
