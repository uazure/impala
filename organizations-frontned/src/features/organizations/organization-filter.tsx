import React, { useCallback } from 'react';
import './organization-filter.css';
import { useAppDispatch } from './../../app/hooks';
import { reset, setSearchName } from './actions';
import { hasNoResultsSelector, searchNameSelector, totalSelector } from './selectors';
import { OrganizationsList } from './organizations-list';
import { Pagination } from './pagination';
import { useSelector } from 'react-redux';

export function OrganizationFilter() {
  const dispatch = useAppDispatch();
  const searchName = useSelector(searchNameSelector);
  const hasNoResults = useSelector(hasNoResultsSelector);
  const hasResults = useSelector(totalSelector) > 0;

  const clearAllCallback = useCallback(() => {
    dispatch(reset());
  }, []);

  const changeSearchNameCallback = useCallback((ev) => {
    dispatch(setSearchName(ev.target.value));
  }, []);


  return (
    <div>
      <div className='OrganizationFilter-head'>
        <h3 className='OrganizationFilter-title'>Organizations Filter</h3>
        <div>
          <button className='OrganizationFilter-clear-button' onClick={clearAllCallback}>Clear All</button>
        </div>
      </div>
      <div className='OrganizationFilter-searchbox'>
        <h4 className='OrganizationFilter-filter-title'>Organization Name Filter</h4>
        <div className='OrganizationFilter-input-container'>
        <input
          className='OrganizationFilter-input'
          type='search'
          value={searchName}
          onChange={changeSearchNameCallback}
          placeholder='Search by name'
          autoFocus
          />
        <span className='OrganizationFilter-adornment'>🔎︎</span>
        </div>
      </div>
      {hasNoResults ? 'No organizations matches your search :(' : <OrganizationsList />}
      {hasResults && <Pagination />}
    </div>
  );
}
