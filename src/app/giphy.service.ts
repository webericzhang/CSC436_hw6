import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  giphySearch(searchText: string, gRecordCnt: number): Observable<any> {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=wzoFjn6vbdBGNjay6qAEd51G3IBH6H3m&limit=${gRecordCnt}&offset=0&rating=G&lang=en&q=${searchText}`;

    return this.http.get(url).pipe(
      map(res => res['data'].map(res => res['images']['original']['url']))
    );
  }
}
