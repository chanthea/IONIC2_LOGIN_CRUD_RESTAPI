import { Component } from '@angular/core';
import {NavController, ModalController, Storage, LocalStorage, ToastController, NavParams } from 'ionic-angular';
import {ModalPagePage} from "../modal-page/modal-page";
import {Page1} from "../page1/page1";
import {MyService} from "../../providers/my-service/my-service";

/*
  Generated class for the AdminPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/admin/admin.html',
  providers : [MyService]
})
export class AdminPage {
  data : any;
  public getsession : any;
  public name : any;
  x : any;
  public local: Storage;
  constructor(private navCtrl: NavController, private modalCtrl : ModalController, private service : MyService, private toastCtrl : ToastController, private navParam :NavParams) {
    this.data = {};
    this.data.title = "";
    this.data.desc = "";
    this.local = new Storage(LocalStorage);


  }


  ionViewWillEnter(){
    this.service.checkToken().then((key)=>{
      this.x = key;
      if( this.x == null){
        let modal = this.modalCtrl.create(ModalPagePage);
        modal.present();
        this.navCtrl.setRoot(Page1);
      }else{
        this.name =this.local.get('username');
        this.name.then((value)=>{
          this.name = value;
        });
      }

    })
  }
  

}
