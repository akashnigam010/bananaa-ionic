import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LocationPage } from '../location/location'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  activeLocation: any;
  constructor(public navCtrl: NavController, private storage: Storage, private viewCtrl: ViewController) {
    this.activeLocation = {
      id: 1,
      name: 'Hyderabad'
    }
    this.setLocationFromCache();  
  }

  clearLoginFlag() {
  	alert('clearing login flag');
    this.storage.set('isSkippedLogin', null);
  }

  openLocation() {
    this.navCtrl.push(LocationPage, {
      activeLocation: this.activeLocation
    });
  }

  ionViewWillEnter() {
    this.setLocationFromCache();  
  }

  setLocationFromCache() {
    this.storage.get('activeLocation').then((val) => {
      if (val) {
        this.activeLocation = val;
      }
    });
  }

}
