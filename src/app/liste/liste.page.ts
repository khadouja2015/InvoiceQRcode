import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.page.html',
  styleUrls: ['./liste.page.scss'],
})
export class ListePage implements OnInit {
   tab:any;

  constructor(private http:ApiService) {
    this.http.qrcode().subscribe((list)=>{
     
      this.tab=list;
      console.log(this.tab);
      
              });
   }

  ngOnInit() {
  }

}
