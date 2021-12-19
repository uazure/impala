import { createSelector } from '@reduxjs/toolkit';
import { OrganizationsState } from './reducer';

export const sliceSelector = (state: any): OrganizationsState => state.organizations;
export const searchNameSelector = createSelector([sliceSelector], (slice) => slice.searchName);
export const pageSelector = createSelector([sliceSelector], (slice) => slice.page);
export const itemsPerPageSelector = createSelector([sliceSelector], (slice) => slice.itemsPerPage);
export const organizationsSelector = createSelector([sliceSelector], (slice) => slice.organizations);
export const totalSelector = createSelector([sliceSelector], (slice) => slice.total);
export const isLoadingSelector = createSelector([sliceSelector], (slice) => slice.isLoading);
export const hasErrorSelector = createSelector([sliceSelector], (slice) => slice.hasError);
export const totalPagesSelector = createSelector([totalSelector, itemsPerPageSelector], (total, itemsPerPage) => Math.ceil(total / itemsPerPage));
export const hasNoResultsSelector = createSelector([totalSelector, searchNameSelector, isLoadingSelector, hasErrorSelector],
  (total, searchName, isLoading, hasError) => Boolean(total === 0 && searchName.length > 0 && !isLoading && !hasError));

export const searchParamsSelector = createSelector([sliceSelector], (slice) => ({
  searchName: slice.searchName,
  offset: slice.page * slice.itemsPerPage,
  limit: slice.itemsPerPage, 
}))
