import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanglistComponent } from './langlist/langlist.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { PhraseComponent } from './phrase/phrase.component'

@NgModule({
  declarations: [
    AppComponent,
    LanglistComponent,
    HomeComponent,
    PhraseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [importProvidersFrom(HttpClientModule)],
  bootstrap: [AppComponent]
})
export class AppModule { }
