import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  activeLocation: any;
  locations: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private storage: Storage) {
  	this.activeLocation = this.navParams.get("activeLocation");
  	this.locations = [{
  		id: 1,
  		name: 'Hyderabad'
  	},{
  		id: 2,
  		name: 'Hitech City'
  	},{
  		id: 3,
  		name: 'Jubilee Hills'
  	},{
  		id: 4,
  		name: 'Banjara Hills'
  	},{
  		id: 5,
  		name: 'Gachibowli'
  	}];  	
  }

  setLocation(location) {
  	this.storage.set('activeLocation', location);
  	this.activeLocation = location;
  	this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }

}
