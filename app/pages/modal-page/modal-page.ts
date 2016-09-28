import { Component } from '@angular/core';
import { NavController, ViewController, Storage, LocalStorage } from 'ionic-angular';
import {MyService} from "../../providers/my-service/my-service";

@Component({
  templateUrl: 'build/pages/modal-page/modal-page.html',
  providers : [MyService]
})
export class ModalPagePage {
  data : any;
  public local : Storage;
  private mydata: any;

  constructor(private navCtrl: NavController, private viewCtrl : ViewController, private service: MyService) {
    this.data = {};
    this.data.username="";
    this.data.password = "";
    this.local = new Storage(LocalStorage);
  }

  login(){
    let username = this.data.username;
    let password = this.data.password;
    let data  = JSON.stringify({username, password});
    this.service.postLogin(data)
        .subscribe(data => {
          this.mydata = data;
          this.local.set('username', this.mydata[0].name);
          this.local.set('token', this.mydata[0].token);
          this.viewCtrl.dismiss();
        }, error =>{
          console.log(error);
        })
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }


}
