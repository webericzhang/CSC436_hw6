import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  
  constructor(private http: HttpClient) {

  }

  wikiSearch(searchText: string, wRecordCnt: number): Observable<any> {
    let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=${wRecordCnt}&srsearch=${searchText}`;
    
    return this.http.get(url).pipe(
      map(res => res['query'].search.map(res => res['title'])
      )
    );
  }
}
