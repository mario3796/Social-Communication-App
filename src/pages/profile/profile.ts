import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {  Profile } from '../../Model/Profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/take';
//import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile={} as Profile;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afauth:AngularFireAuth,private afdatabase:AngularFireDatabase) {
  }


  /*take the user id and create profile object in profile/userid and pass
  to the HomePage*/

  /*it allows to access profile node inside firebase/person 's uid*
  object not list means one version of data */
  createProfile(){
    this.afauth.authState.take(1).subscribe(auth=>{
      this.afdatabase.object(`profile/${auth.uid}`).set(this.profile).
      then(()=>this.navCtrl.setRoot(HomePage))
    })
  }

}
