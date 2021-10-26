import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Url } from "../models/url";

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  selectedUrl: Url = {
    full: '',
    clicks: 0,
    short: '',
  };
  urls: Url[] = [];
  URL_API = 'http://localhost:4000/api/urls'

  constructor(private http:HttpClient) { }

  getUrls(){
    return this.http.get<Url[]>(this.URL_API);
  }

  createUrl(url: Url){
    return this.http.post(this.URL_API, url);
  }
}
