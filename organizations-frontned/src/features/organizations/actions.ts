import { createAction } from '@reduxjs/toolkit';
import { OrganizationsResult } from './interfaces';

export const reset = createAction('reset');

export const setSearchName = createAction<string>('setSearchName');
export const setItemsPerPage = createAction<number>('setItemsPerPage');
export const setPage = createAction<number>('setPage');
export const setIsLoading = createAction('setIsLoading');
export const setHasError = createAction('setHasError');
export const setOrganizations = createAction<OrganizationsResult>('setOrganizations');
