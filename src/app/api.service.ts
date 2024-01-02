import { Injectable } from '@angular/core';
//import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
    let data;
   this.sendQRcode(data);
   }
   sendQRcode(data){
    return this.http.post('http://localhost/personnelQRcode/index.php/item/safa',data);
    //console.log(data.status);
    //console.log(data.data); 
    //console.log(data.headers);
   }
   qrcode(){
    return this.http.get('http://localhost/personnelQRcode/index.php/item/mohamed');
    
    
   }
}

