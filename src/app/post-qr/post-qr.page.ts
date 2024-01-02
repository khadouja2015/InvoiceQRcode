import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post-qr',
  templateUrl: './post-qr.page.html',
  styleUrls: ['./post-qr.page.scss'],
})
export class PostQRPage implements OnInit {
private valeur:any;

  constructor(private server:ApiService) { 
    this.sendQR();
  }

  ngOnInit() {
  }

sendQR(){
  var data=new FormData();
  var form=data.append("name",this.valeur);
  console.log(form); 
  
  
this.server.sendQRcode(form).subscribe((result)=>{
  console.log(result);
  
});
}
}
