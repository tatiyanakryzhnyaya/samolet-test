// import { createSelector } from 'reselect'

export const regionsSelector = state => state.regions
    .map(region => ({
        ...region,
        label: `${region.fullname}: ${region.libraries}`, 
        value: region.order 
    }));

export const loadingSelector = state => state.loading;

