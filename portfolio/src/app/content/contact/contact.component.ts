import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
import { Email } from './email.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public response: string;
  public pending = false;
  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit(): void {
    this.response = '';
    this.contactForm = this.fb.group({
      from: [''],
      subject: [''],
      message: ['']
    }, [ Validators.required ]);
  }

  SendMessage() {
    this.response = '';
    if (this.contactForm.invalid) {
      this.response = 'Please complete the form prior to clicking submit.';
      return null;
    }
    const mailMessage: Email = {
      sender: this.contactForm.get('from').value,
      subject: this.contactForm.get('subject').value,
      message: this.contactForm.get('message').value
    };

    console.log(mailMessage);
    this.contactService.SendEmail(mailMessage).subscribe(r => {
      if (r) {
        this.response = 'Your message has been sent.';
      } else {
        this.response = 'There was a problem sending your message. Please try again later.';
      }
    }, (e) => {
      this.response = 'There was a problem sending your message. Please try again later.';
    });
  }
}
