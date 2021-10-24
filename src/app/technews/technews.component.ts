import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private service : NewsApiService) { }
  technologyNewsResult:any =[];

  ngOnInit(): void {

    this.service.technologyNews().subscribe((result)=>{
      console.log(result);
      this.technologyNewsResult = result.articles;
    })

  }

}
