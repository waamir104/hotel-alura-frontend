import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { SignInComponent } from './shared/components/sign-in/sign-in.component';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomsPaginationComponent } from './shared/components/rooms-pagination/rooms-pagination.component';
import { RoomComponent } from './shared/components/rooms-pagination/room/room.component';
import { MapComponent } from './shared/components/map/map.component';
import { NewsLetterComponent } from './shared/components/news-letter/news-letter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    CarouselComponent,
    SignInComponent,
    SignUpComponent,
    FooterComponent,
    RoomsPaginationComponent,
    RoomComponent,
    MapComponent,
    NewsLetterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
