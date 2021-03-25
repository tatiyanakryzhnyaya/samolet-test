import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {fetchRegions} from "../../redux/actions";
import {List}  from "antd"

const Regions = ({regions}) => {

    useEffect(() => {
        fetchRegions();
    }, [])

    return <List>
        {regions && regions.map(({fullname, libraries, order}) => <li key={order}>{fullname} : {libraries}</li>)}
    </List> 
}
const mapStateToProps = (state, props) => ({
    regions: state.regions.map(({fullname, libraries, order}) => ({fullname, libraries, order}))
})
const mapDispatchToProps = (dispatch, props) => ({

})
export default connect(mapStateToProps, null)(Regions)
