import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../Model/Profile';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  userprofile={} as Profile;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userprofile=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

  isReadonly(){
    return this.isReadonly;
  }

}
