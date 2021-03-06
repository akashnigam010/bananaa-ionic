import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook, 
    private googlePlus: GooglePlus, private storage: Storage) {
  }

  fbLogin() {
  	this.fb.login(['public_profile', 'email'])
	  .then((res: FacebookLoginResponse) => {
	  	alert('Logged into Facebookss!' + res.status)
	  })
	  .catch(e => alert('Error logging into Facebook' + e));
  }

  googleLogin() {
  	this.googlePlus.login({})
	  .then(res => alert('Login to google ' + JSON.stringify(res)))
	  .catch(err => alert('g+ login error' + err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  skipLogin() {
    this.storage.set('isSkippedLogin', 'true');
    this.navCtrl.setRoot(HomePage)
  }
}
