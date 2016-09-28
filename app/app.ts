import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Storage, LocalStorage } from 'ionic-angular';

import { Page1 } from './pages/page1/page1';
import {AdminPage} from "./pages/admin/admin";

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;
  token : any;
  pages: Array<{title: string, component: any}>;
  public local : Storage;
  constructor(public platform: Platform) {
    this.initializeApp();
    this.local = new Storage(LocalStorage);
    this.local.get('token').then((value)=>{
      this.token = value;
    });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Fetch Data', component: Page1 },
      { title : 'Admin' , component : AdminPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logout(){
    this.local.remove('username');
    this.local.remove('token');
    this.nav.setRoot(Page1);
    this.token = "";
  }

}

ionicBootstrap(MyApp);
