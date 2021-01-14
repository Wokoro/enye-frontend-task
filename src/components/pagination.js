import React, { Component } from 'react';
import './pagination.css';

class PaginationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], itemsPerPage: 20, maxPage: 0, currentPage: 1 };
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.jump = this.jump.bind(this);
    this.getCurrentData = this.getCurrentData.bind(this);
    this.setCurrentPage = this.setCurrentPage.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.nextHandler = this.nextHandler.bind(this);
    this.prevHandler = this.prevHandler.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const maxPage = Math.ceil(props.data.length / state.itemsPerPage);
    return { data: props.data, maxPage };
  }

  componentDidMount() {
    this.props.currentDataHandler(this.getCurrentData(this.props.defaultPage, this.state.itemsPerPage));
  }

  next(currentPage) {
    this.setCurrentPage(Math.min(+currentPage + 1, this.state.maxPage));
  }

  prev(currentPage) {
    this.setCurrentPage(Math.max(+currentPage - 1, 1));
  }

  jump(page) {
    this.setCurrentPage(Math.min(Math.max(1, page), this.state.maxPage));
  }

  setCurrentPage(pageNumber) {
    console.log('page: ', pageNumber);
    this.setState({ currentPage: +pageNumber });
    this.props.currentDataHandler(this.getCurrentData(pageNumber, this.state.itemsPerPage));
  }

  getCurrentData(currentPage, itemsPerPage) {
    const begin = (+currentPage - 1) * (itemsPerPage);
    const end = begin + +itemsPerPage;

    return this.state.data.slice(begin, end);
  }

  clickHandler(event) {
    this.jump(event.target.id);
  }

  nextHandler(event) {
    this.next(this.state.currentPage);
  }

  prevHandler(event) {
    this.prev(this.state.currentPage);
  }

  render() {
    let ui = [...(new Array(this.state.maxPage))];
    return (
      <div >
        <span onClick={this.prevHandler}>&#60;</span>
        {ui.map((value, index) => (
          <span onClick={this.clickHandler} id={index + 1} key={index}>{index + 1}</span>
        ))}
        <span onClick={this.nextHandler}>&#62;</span>
      </div>
    );
  }
}


export default PaginationComponent;