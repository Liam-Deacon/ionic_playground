import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { DevicePage } from '../pages/device/device';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { AdMobFree } from '@ionic-native/admob-free';
import { AppRate } from '@ionic-native/app-rate';
import { AppVersion } from '@ionic-native/app-version';
import { BatteryStatus } from '@ionic-native/battery-status';
import { Device } from '@ionic-native/device';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    DevicePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    DevicePage,
    ListPage
  ],
  providers: [
    AdMobFree,
    AppRate,
    AppVersion,
    BatteryStatus,
    StatusBar,
    SplashScreen,
    Device,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
