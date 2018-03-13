import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Code404Component } from './code404/code404.component';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SearchIndexComponent } from './search-index/search-index.component';
import { LayoutComponent } from './layout/layout.component';
import { EchartExampleComponent } from './echart-example/echart-example.component';
import { DownloadPageComponent } from './download-page/download-page.component';
import {DatePipe, HashLocationStrategy, LocationStrategy} from "@angular/common";
import { DataQueryComponent } from './data-query/data-query.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    Code404Component,
    HomeComponent,
    SearchIndexComponent,
    LayoutComponent,
    EchartExampleComponent,
    DownloadPageComponent,
    DataQueryComponent
  ],
  imports: [
    NgxEchartsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe,
    {provide: LocationStrategy, useClass: HashLocationStrategy,}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
