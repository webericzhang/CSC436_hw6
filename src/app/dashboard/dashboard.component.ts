import { Component, OnInit } from '@angular/core';

import { WikiService } from '../wiki.service';
import { HistoryService } from '../history.service';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  searchText: string = '';
  wRecordCnt = 10;
  gRecordCnt = 10;
  wSearchRecords: string[];
  gSearchRecords: string[];
  

  constructor(private wikiService: WikiService, private giphyService: GiphyService, private historyService: HistoryService) {
  }

  ngOnInit() {
  }

  search() {
    if ('' === this.searchText) {
      return;
    }

    this.wikiService.wikiSearch(this.searchText, this.wRecordCnt).subscribe(
      (res) => {
        this.wSearchRecords = res;
      },
      (err) => {
        console.log(err);
      }
    );

    this.giphyService.giphySearch(this.searchText, this.gRecordCnt).subscribe(
      (res) => {
        this.gSearchRecords = res;
      },
      (err) => {
        console.log(err);
      }
    );

    this.historyService.saveSearchRecord(this.searchText);
        
  }
}
