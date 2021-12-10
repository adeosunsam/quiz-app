import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionComponent } from './components/question/question.component';
import { ResponseComponent } from './components/response/response.component';
import { QuestionService } from './services/question.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
