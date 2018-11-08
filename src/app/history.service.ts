import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  searchRecords: any[] = [];

  constructor() { }

  saveSearchRecord(searchText: string) {
    let searchItems = {
      searchText: searchText,
      timestamp: new Date()
    };
    this.searchRecords.push(searchItems);
  }

  getsearchRecords(): any[] {
    return this.searchRecords;
  }
}
