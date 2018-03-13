import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-data-query',
  templateUrl: './data-query.component.html',
  styleUrls: ['./data-query.component.css']
})
export class DataQueryComponent implements OnInit {

  formModel: FormGroup = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl()
  })

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
    console.log(this.datePipe.transform(this.formModel.value.startDate,'yyyy-MM-dd'));
  }

}
