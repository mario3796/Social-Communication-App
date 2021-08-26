import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';
import { Profile } from '../../Model/Profile';
import { LoginPage } from '../login/login';
import firebase from 'firebase';
import { Post } from '../../Model/Post';
import { PostsPage } from '../posts/posts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  post={} as Post;
  profileData:FirebaseObjectObservable<Profile>;
  postRef:FirebaseListObservable<Post[]>;

  constructor(public navCtrl: NavController,private afauth:AngularFireAuth,
    private toast:ToastController,private afdatabase:AngularFireDatabase) {
      this.postRef=this.afdatabase.list('post');
  }

  ionViewWillLoad(){
    //check if there is a user login or not//
    this.afauth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: `Welcome to DSS Project, ${data.email}`,
          duration:3000
        }).present();
        this.profileData=this.afdatabase.object(`profile/${data.uid}`);
      }
      else{
        this.toast.create({
          message: `Could not find authentication details`,
          duration:3000
        }).present();
      }
    });
  }

  logOut(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    }).then(()=>this.navCtrl.setRoot(LoginPage));
  }

  makePost(){
    this.postRef.push(this.post);
    this.post={} as Post;
    this.navCtrl.push(PostsPage);
  }


}
