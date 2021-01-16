import React, { useContext } from 'react';
import './pagination.css';
import { StoreContext } from '../../index';
import { observer } from 'mobx-react';

const PaginationComponent = observer(() => {
  const store = useContext(StoreContext);

  function next(currentPage) {
    setCurrentPageData(Math.min(+currentPage + 1, store.paginationRange));
  }

  function prev(currentPage) {
    setCurrentPageData(Math.max(+currentPage - 1, 1));
  }

  function jump(page) {
    setCurrentPageData(Math.min(Math.max(1, page), store.maxDisp));
  }

  function setCurrentPageData(pageNumber) {
    store.setCurrentPage(pageNumber);
    store.setCurrentDisp(getCurrentData(pageNumber, store.maxDisp));
  }

  function getCurrentData(currentPage, itemsPerPage) {
    const begin = (+currentPage - 1) * (itemsPerPage);
    const end = begin + +itemsPerPage;

    return store.profiles.slice(begin, end);
  }

  function clickHandler(event) {
    jump(event.target.id);
  }

  function nextHandler(event) {
    next(store.currentPage);
  }

  function prevHandler(event) {
    prev(store.currentPage);
  }

  let componentsCount = [...(new Array(store.paginationRange))];
  return (
    <div className="btnHolder paginate">
      <span onClick={prevHandler}>&#60;</span>
      {componentsCount.map((value, index) => (
        <span onClick={clickHandler} id={index + 1} className={+store.currentPage === (index + 1) ? "active" : "default"} key={index}>{index + 1}</span>
      ))}
      <span onClick={nextHandler}>&#62;</span>
    </div>
  );
});

export default PaginationComponent;