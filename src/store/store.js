import { observable, action, makeObservable, computed } from 'mobx';
import { getAllProfiles } from '../services/transaction';

class Store {
  profiles = getAllProfiles();
  maxDisp = 20;
  currentPage = 1;
  currentDisp = this.profiles.slice(0, this.maxDisp);
  paginationRage = Math.ceil(this.profiles.length / this.maxDisp);

  constructor() {
    makeObservable(this, {
      profiles: observable,
      currentDisp: observable,
      setProfiles: action,
      setCurrentDisp: action,
      setCurrentPage: action,
      profileCount: computed,
      paginationRage: observable,
      currentPage: observable,
      maxDisp: observable
    });
  }

  setProfiles(data) {
    this.profiles.length = 0;
    this.profiles = [...data];
    this.paginationRage = Math.ceil(this.profiles.length / this.maxDisp);
    this.currentPage = 1;
    this.currentDisp = this.profiles.slice(0, this.maxDisp);
  }

  setCurrentPage(pageNumber) {
    this.currentPage = pageNumber;
  }

  setCurrentDisp(data) {
    this.currentDisp = data;
  }

  get getCurrenDisp() {
    return this.currentDisp;
  }

  get profileCount() {
    return this.profiles.length;
  }

  get paginationRange() {
    return this.paginationRage;
  }
}

export default new Store();