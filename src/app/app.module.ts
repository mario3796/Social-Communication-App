import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { FCM } from '@ionic-native/fcm';
import { PostsPage } from '../pages/posts/posts';
import { UserProfilePage } from '../pages/user-profile/user-profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    ProfilePage,
    SearchPage,
    TabsPage,
    PostsPage,
    UserProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDjU_DvevWiypnhp6Wx8pt-ts-HEuuzegg",
    authDomain: "deploy-bab67.firebaseapp.com",
    databaseURL: "https://deploy-bab67.firebaseio.com",
    projectId: "deploy-bab67",
    storageBucket: "deploy-bab67.appspot.com",
    messagingSenderId: "288580547647"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    ProfilePage,
    SearchPage,
    TabsPage,
    PostsPage,
    UserProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FCM
  ]
})
export class AppModule {}
