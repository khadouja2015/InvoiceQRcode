import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { OCR, OCRSourceType } from '@awesome-cordova-plugins/ocr/ngx';

//import { AES256 } from '@awesome-cordova-plugins/aes-256/ngx';

//import {Md5} from 'ts-md5/dist/md5';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

//import {Md5} from 'ts-md5/dist/md5';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Camera,QRScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}
