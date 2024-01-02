import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
//import {Md5} from 'ts-md5/dist/md5';

import { ReconnaissanceTextPageRoutingModule } from './reconnaissance-text-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { ReconnaissanceTextPage } from './reconnaissance-text.page';
//import { HTTP } from '@awesome-cordova-plugins/http/ngx';
//import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReconnaissanceTextPageRoutingModule,
    QRCodeModule
   
  ],
  declarations: [ReconnaissanceTextPage]
})
export class ReconnaissanceTextPageModule {}
