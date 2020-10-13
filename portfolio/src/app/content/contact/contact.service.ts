import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    // tslint:disable-next-line: prefer-const
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      Origin: 'https://codingbychad.com',
      Host: 'https://us-central1-innate-path-248719.cloudfunctions.net'
    });

    return this.client.post(this.url, email, { headers, observe: 'body', responseType: 'json'});
  }

}
