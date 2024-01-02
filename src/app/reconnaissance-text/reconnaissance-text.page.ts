import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Camera, CameraOptions, CameraResultType, CameraSource } from '@capacitor/camera';
//import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { Capacitor } from '@capacitor/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { Platform } from '@ionic/angular';
//import {Md5} from 'ts-md5/dist/md5';
import { ApiService } from '../api.service';

//import { type } from 'os';
@Component({
  selector: 'app-reconnaissance-text',
  templateUrl: './reconnaissance-text.page.html',
  styleUrls: ['./reconnaissance-text.page.scss'],
})
export class ReconnaissanceTextPage implements OnInit {
  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<HTMLInputElement>;
  photo: SafeResourceUrl;
  isDesktop: boolean;
  public showCamera = false;
public textScanned: string = '';
  public textToCode: string;
  public myAngularxQrCode: string = null;
  public myAngularxQrCode2: any;
    constructor( private qrScanner: QRScanner,  private platform: Platform,
      private sanitizer: DomSanitizer,private http:ApiService,private httpM:HttpClient) { 
        var data = new FormData();
        var form=data.append('name',this.myAngularxQrCode2);
        this.httpM.post('http://localhost/personnelQRcode/index.php/item/safa',form);  
     const options: CameraOptions = {
       quality: 100,
       resultType: CameraResultType.DataUrl
       
     }
      
      
     this.scanCode();
     console.log('test qr code crypté',this.myAngularxQrCode2);
     
     this.http.sendQRcode(this.myAngularxQrCode2)
    }

  ngOnInit() {
   
              
  }
 
  createQRCode() {
   
    this.myAngularxQrCode2 = this.textToCode;
    //let md5=new Md5();
    //this.myAngularxQrCode2=md5.appendAsciiStr(this.myAngularxQrCode).toString();
    //this.myAngularxQrCode2=Md5.hashStr(this.myAngularxQrCode);
    //let t=Md5.hashStr('blah blah blah');
    //let md=md5.hashStr(this.myAngularxQrCode);
    console.log(this.myAngularxQrCode2);

    

    this.textToCode = "";

   // console.log(this.textToCode);
    
  }
  scanCode() {
    this.showCamera = true;
    // Optionally request the permission early
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // start scanning
        console.log('Scan en cours...' + JSON.stringify(status));
        const scanSub = this.qrScanner.scan().subscribe((text: any) => {
          console.log('Scanned something', text.result);
          this.textScanned = text.result;
          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
          this.showCamera = false;
        });
      } else if (status.denied) {
        // camera permission was permanently denied
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    })
    .catch((e: any) => console.log('Error is', e));
  }
  closeCamera() {
    this.showCamera = false;
    this.qrScanner.hide(); // hide camera preview
    this.qrScanner.destroy();
  }
  /* async getPicture() {
    if (!Capacitor.isPluginAvailable('Camera') || (this.isDesktop )) {
      this.filePickerRef.nativeElement.click();
      return;
    }

    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  } */
}