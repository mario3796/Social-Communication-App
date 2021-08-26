import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../Model/User';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  // myuser={} as User;
  // UserRef:FirebaseListObservable<User[]>;

  user={} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afauth:AngularFireAuth) {

  }

  async register(user:User){
    try{
      const result = await this.afauth.auth.createUserWithEmailAndPassword(user.email,user.password);
      console.log(result);
      this.navCtrl.setRoot(ProfilePage);
    }catch(e){
      console.error(e);
    }
  }

}
