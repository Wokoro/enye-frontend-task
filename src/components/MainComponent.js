import React, { Component } from 'react';
import { getAllProfiles, getProfiles } from '../services/transaction';

import FilterComponent from './FilterComponent';
import SearchComponent from './SearchComponent';
import TrasactionListComponent from './TransactionListComponent';
import PaginationComponent from './pagination';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = { profiles: [], defaultProfiles: [], itemPerPage: 20, currentProfiles: [], pageData: [] };
    this.setFilterInputs = this.setFilterInputs.bind(this);
    this.setCurrentData = this.setCurrentData.bind(this);
  }


  setFilterInputs(filteredProfiles) {
    this.setState({ currentProfiles: filteredProfiles });
  };

  setCurrentData(data) {
    this.setState({ currentProfiles: data, pageData: data });
  }

  static getDerivedStateFromProps(props, state) {
    return { profiles: getAllProfiles() };
  }

  componentDidMount() {
    this.setState({ currentProfiles: getProfiles(), pageData: getProfiles() });
  }

  render() {
    return (
      <div>
        <SearchComponent />
        <FilterComponent default={this.state.pageData} filterHandler={this.setFilterInputs} />
        <PaginationComponent defaultPage={1} data={this.state.profiles} itemPerPage={this.state.itemPerPage} currentDataHandler={this.setCurrentData} />
        <TrasactionListComponent profiles={this.state.currentProfiles} />
        <PaginationComponent defaultPage={1} data={this.state.profiles} itemPerPage={this.state.itemPerPage} currentDataHandler={this.setCurrentData} />
      </div>
    );
  }

}
export default Transaction;
