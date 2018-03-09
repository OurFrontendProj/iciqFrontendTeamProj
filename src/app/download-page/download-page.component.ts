import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

declare var $: any;

@Component({
  selector: 'app-download-page',
  templateUrl: './download-page.component.html',
  styleUrls: ['./download-page.component.css']
})
export class DownloadPageComponent implements OnInit {

  private year: number;
  private month: number;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.year = this.routeInfo.snapshot.queryParams['year'];
    this.month = this.routeInfo.snapshot.queryParams['month'];

    // 确定链接url
    if (this.year && this.month) {
      // console.log('year: ' + this.year);
      $('.dwlink').text(this.year + '年' + this.month + '月的相关数据汇总下载');
      $('.dwlink').attr('href', '/api/download?year=' + this.year + '&month=' + this.month);
    }
  }

}
