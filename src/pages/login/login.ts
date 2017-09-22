import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook) {
  }

  fbLogin() {
  	this.fb.login(['public_profile', 'email'])
	  .then((res: FacebookLoginResponse) => {
	  	alert('Logged into Facebookss!' + res.status)
	  })
	  .catch(e => console.log('Error logging into Facebook' + e));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
