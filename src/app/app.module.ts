import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';
import { HttpClientModule } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    SplitterModule,
    InputTextareaModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
