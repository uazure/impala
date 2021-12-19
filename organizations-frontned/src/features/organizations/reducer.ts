import { Action, AnyAction } from '@reduxjs/toolkit';
import { Organization } from './interfaces';

export interface OrganizationsState {
  searchName: string,
  page: number,
  itemsPerPage: number,
  isLoading: boolean,
  hasError: boolean,
  organizations: Organization[],
  total: number,
}

export const initialState: OrganizationsState = {
  searchName: '',
  page: 0,
  itemsPerPage: 10,
  isLoading: false,
  hasError: false,
  organizations: [],
  total: 0,
};

export function organizationsReducer(state: OrganizationsState = initialState, action: AnyAction): OrganizationsState {
  switch (action.type) {
    case 'reset':
      return {...initialState};
    case 'setSearchName':
      return { ...state,
        searchName: action.payload,
        page: initialState.page,
        isLoading: action.payload.length > 0 ? true : false,
        hasError: false,
        organizations: initialState.organizations,
        total: initialState.total
      };
    case 'setPage':
      return { ...state, page: action.payload, isLoading: true, hasError: false};
    case 'setItemsPerPage':
      return { ...state, itemsPerPage: action.payload, page: 0, isLoading: true, hasError: false};
    case 'setIsLoading':
      return { ...state, isLoading: true, hasError: false};
    case 'setHasError':
      return {...state, hasError: true, isLoading: false};
    case 'setOrganizations':
      return { ...state, organizations: action.payload.result, total: action.payload.total};
    default:
      return state;
  }
}
