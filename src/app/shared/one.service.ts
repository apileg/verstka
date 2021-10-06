import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PeopleResponse} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class OneService {

  constructor(private http: HttpClient) { }

  public fetchPeople(): Observable<any>{
    return this.http.get<PeopleResponse>('https://swapi.dev/api/people')
  }
}
