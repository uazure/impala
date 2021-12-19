import { itemsPerPageSelector, pageSelector, totalPagesSelector } from './selectors';
import { useCallback, useMemo } from 'react';
import { useAppDispatch } from './../../app/hooks';
import { setItemsPerPage, setPage } from './actions';
import { useSelector } from 'react-redux';

export function Pagination() {
  const dispatch = useAppDispatch();
  const totalPages = useSelector(totalPagesSelector);
  const currentPage = useSelector(pageSelector);
  const itemsPerPage = useSelector(itemsPerPageSelector);
  
  // make array with page indices (0-based)
  const pages = useMemo(() => {
    return Array.from(Array(totalPages).keys());
  }, [totalPages])

  const itemsPerPageOptions = useMemo(() => {
    return [10, 30, 100]
  }, []);

  const setPageHandler = useCallback((ev) => {
    const page = ev.target.value;
    dispatch(setPage(parseInt(page)));
  }, []);

  const setItemsPerPageHandler = useCallback((ev) => {
    const itemsPerPage = parseInt(ev.target.value);
    dispatch(setItemsPerPage(itemsPerPage));
  }, []);

  return (
    <div>
      Page <select value={currentPage} onChange={setPageHandler}>
        {pages.map((pageIndex) => <option key={pageIndex} value={pageIndex}>{pageIndex + 1}</option>)}
      </select>
      Results per page
      <select value={itemsPerPage} onChange={setItemsPerPageHandler}>
        {itemsPerPageOptions.map((itemsPerPageOption) => <option key={itemsPerPageOption} value={itemsPerPageOption}>{itemsPerPageOption}</option>)}
      </select>
    </div>
  )
}
