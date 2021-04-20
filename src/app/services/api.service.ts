import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://gabeshub.tk/themor';
  //url = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  sendMail(data){
  //  console.log(data)
    return  this.http.post(this.url+'/sendmail',data)
  }

}
