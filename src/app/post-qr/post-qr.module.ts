import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostQRPageRoutingModule } from './post-qr-routing.module';

import { PostQRPage } from './post-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostQRPageRoutingModule
  ],
  declarations: [PostQRPage]
})
export class PostQRPageModule {}
