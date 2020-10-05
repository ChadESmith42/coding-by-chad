import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from './email.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = environment.emailUrl;

  constructor(private client: HttpClient) { }


  public SendEmail(email: Email): Observable<any | boolean> {
    const headers = {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': 'https://codingbychad.com'
    };
    return this.client.post(this.url, email, { headers, observe: 'body', responseType: 'json'});
  }

}
