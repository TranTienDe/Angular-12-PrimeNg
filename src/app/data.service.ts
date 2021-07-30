import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-type': 'application/json',
        //Authorization: 'my-auth-token'
      }
    ),
  };

  constructor(private httpClient: HttpClient) { }

  public getNotes(authorId: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/notes?authorId=` + authorId;
    return this.httpClient.get<any>(url, this.httpOptions);
  }

}
