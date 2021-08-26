import { Component } from '@angular/core';
import firebase from 'firebase';
//import { database } from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../Model/Profile';
import { NavController } from 'ionic-angular';
import { UserProfilePage } from '../user-profile/user-profile';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})

export class SearchPage {

  public profileList:Array<any>;
  //Is to store the list of profiles
  public loadedProfileList:Array<any>;
  //Is to use it to return data instead of calling it from firebase
  public profileRef:firebase.database.Reference;
  //Is for creating a database reference

  constructor(public afauth:AngularFireAuth,public afdatabase:AngularFireDatabase,
    public navCtrl:NavController) {

    this.profileRef=firebase.database().ref('/profile');
    //will open reference to firebase database under profile node

    this.profileRef.on('value',profileList=>{
      //is to store firebase data temporally
      let profiles=[];
      // loop through profile list and push it to profileList
      profileList.forEach(profile => {
        profiles.push(profile.val());
        return false;
      });

      this.profileList=profiles;
      this.loadedProfileList=profiles;
    });



  }

  //to initialize data and then assign the value of backup data to it
  initializeItems():void{
    this.profileList=this.loadedProfileList;
  }

  getItems(searchbar){
    // Reset items back to all of the items
    this.initializeItems();
    // set q to the value of the searchbar
    var q=searchbar.srcElement.value;
    // if the value is an empty string don't filter the items
    if(!q){
      return;
    }

    this.profileList=this.profileList.filter((v)=>{
      if(v.FirstName && q){
        if(v.FirstName.toLowerCase().indexOf(q.toLowerCase())>-1){
          return true;
        }
        return false;
      }
    });
    console.log(q,this.profileList.length);
  }

  goToProfile(profile:Profile){
    this.navCtrl.push(UserProfilePage,profile);
  }

}
