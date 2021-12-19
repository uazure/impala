import { AnyAction } from '@reduxjs/toolkit';
import { debounceTime, switchMap, from, Observable, tap, catchError, map, empty, EMPTY } from 'rxjs';
import { store } from './../../app/store';
import { searchParamsSelector } from './selectors';
import { fetchOrganizations } from './organizatins.service';
import { ofType } from 'redux-observable';
import { setOrganizations } from './actions';

const fetchOrganizationsPipe = (source: Observable<any>) => 
  source.pipe(
    switchMap(() => {
      const state = store.getState();
      const { searchName, offset, limit } = searchParamsSelector(state);
      
      if (searchName.length === 0) {
        return EMPTY;
      }

      return from(fetchOrganizations(searchName, offset, limit)).pipe(
        catchError((error: any) => {
          console.log("Caught search error the right way!", error);
          return EMPTY;
        }));
    }),
    map((data) => setOrganizations(data))
  );

export const organizationsEpic = (action$: Observable<AnyAction>) => action$.pipe(
  ofType('setSearchName'),
  debounceTime(500),
  fetchOrganizationsPipe,
);


export const paginationEpic = (action$: Observable<AnyAction>) => action$.pipe(
  ofType('setPage', 'setItemsPerPage'),
  fetchOrganizationsPipe,
);
