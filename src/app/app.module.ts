import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoHeaderComponent } from './info-header/info-header.component';
import { ContentComponent } from './content/content.component';
import { PostComponent } from './content/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoHeaderComponent,
    ContentComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
