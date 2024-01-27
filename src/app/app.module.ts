import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { FocusEpisodeComponent } from './views/focus-episode/focus-episode.component';
import { DatailEpisodesComponent } from './views/datail-episodes/datail-episodes.component';
import { HeaderComponent } from './views/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FocusEpisodeComponent,
    DatailEpisodesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
