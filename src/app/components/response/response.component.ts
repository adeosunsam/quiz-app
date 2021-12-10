import { Component, OnInit } from '@angular/core';
import { IResponse } from 'src/app/Interface/IResponse';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {

  response!: IResponse[];
  constructor() { }

  ngOnInit(): void {
    this.response = JSON.parse(localStorage.getItem("response")!);
    console.log(this.response);
    
  }

}
