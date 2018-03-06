import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {Code404Component} from "./code404/code404.component";
import {SearchIndexComponent} from "./search-index/search-index.component";
import {LayoutComponent} from "./layout/layout.component";
import {DownloadPageComponent} from "./download-page/download-page.component";

const routes: Routes = [
  { path: '', component: SearchIndexComponent },
  { path: 'home', component: LayoutComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'downloadPage', component: DownloadPageComponent}
    ]
  },
  { path: '**', component: Code404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
