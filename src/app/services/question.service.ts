import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IData } from '../Interface/IData';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  baseUrl: string = 'https://opentdb.com/api.php?amount=10&category=28&type=multiple'

  constructor(private _httpClient: HttpClient) { }

  getQuestion() : Observable<IData>{
    return this._httpClient.get<IData>(this.baseUrl);
  }
}
