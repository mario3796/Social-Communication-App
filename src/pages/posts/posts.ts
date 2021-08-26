import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database';
import { Post } from '../../Model/Post';

/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  postRef:FirebaseListObservable<Post[]>;
  postList:Post[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afdatabase:AngularFireDatabase) {
      this.postRef=this.afdatabase.list('post');
      this.postRef.subscribe((posts)=>{
        this.postList=posts;
      })
  }



}
