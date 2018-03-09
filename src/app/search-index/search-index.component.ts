import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import * as _ from 'lodash';
import 'rxjs/Rx';


@Component({
  selector: 'app-search-index',
  templateUrl: './search-index.component.html',
  styleUrls: ['./search-index.component.css']
})
export class SearchIndexComponent implements OnInit, AfterViewInit {

  searchValue = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // $('#textSearch').focus();
  }


  onSearch(event: string): void {
    console.log(event);
    console.log("searchValue: " + this.searchValue);
    let keywords: Array<any> = this.searchValue.split(" ");

    for (let keyword in keywords) {
      console.log('keyword: ' + keywords[keyword]);
    }
    // console.log('indexof: ' + keywords[0].indexOf('年'))
    // if(keywords[0] && keywords[0].indexOf('年') != -1){
    if (keywords[0]) {   	// 年
      // if(keywords[1] && keywords[1].indexOf('月') != -1){
      if (keywords[1]) { 	// 月
        // date = keywords[0].replace("年","") + '/' + keywords[1].replace("月","") + '/';
        let year = keywords[0].replace("年","");
        let month = keywords[1].replace("月","");
        console.log('年：', year);

        // 发送http请求到服务器
        const params = new HttpParams()
          .set('year', year)
          .set('month', month);
        console.log("params " + params);
        this.http
          .get("/api/search", {params})
          .subscribe(data => {
            // 回调处理
            console.log("data: " + data);
            if (data == '1') {
              console.log('data: ' + data);
              window.location.href = "/#/home/downloadPage?year=" + year + "&month=" + month;
            }
            else {
              window.location.href = "/#/home/downloadPage";
              // alert('不存在');
            }
          });

      }
    }
  }

}
