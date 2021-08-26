import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../Model/User';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
//import { ProfilePage } from '../profile/profile';
//import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user={}as User;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afauth:AngularFireAuth) {
  }

  async login(user:User){
    try{
    const result = this.afauth.auth.signInWithEmailAndPassword(user.email,user.password);
    if(result){
      this.navCtrl.push(TabsPage);
    }
    console.log(result);
  }catch(e){
    console.error(e);
  }
}

  register(){
    this.navCtrl.push(RegisterPage);
  }

}
