import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http:HttpClient) { }

  topHeadlinesApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=dc9cde092b574fc7af802c25dd61ce60';

  techNewsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=dc9cde092b574fc7af802c25dd61ce60';
  topHeadlines():Observable<any>
  {
    return this.http.get(this.topHeadlinesApiUrl);
  }

  technologyNews():Observable<any>
  {
    return this.http.get(this.techNewsApiUrl);
  }
}
