import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://gabe205.tk/lawyer';
  //url = 'http://localhost/nulbulk/lawyer';
  
  constructor(private http: HttpClient) {}
  
  sendMail(data){
    return  this.http.post(this.url+'/sendmail.php',data)  
  }
}
