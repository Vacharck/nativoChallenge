import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../services/url.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-url-shortener',
  templateUrl: './url-shortener.component.html',
  styleUrls: ['./url-shortener.component.css']
})
export class UrlShortenerComponent implements OnInit {

  constructor(public urlService: UrlService) { }

  ngOnInit(): void { this.getUrls();}

  getUrls(){
    this.urlService.getUrls().subscribe(
      res => {this.urlService.urls = res},
      err => console.error(err)
    )
  }

  addUrl(form: NgForm){
    this.urlService.createUrl(form.value).subscribe(
      res => {
        this.getUrls();
        form.reset();
      },
      err => console.error(err)
    )
  }

}
