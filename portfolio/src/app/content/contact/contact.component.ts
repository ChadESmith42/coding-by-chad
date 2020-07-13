import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      from: [''],
      subject: [''],
      message: ['']
    }, [ Validators.required ]);
  }

  SendMessage() {
    if (this.contactForm.invalid) {
      return null;
    }
    const mailMessage = {
      From: this.contactForm.get('from'),
      Subject: this.contactForm.get('subject'),
      Message: this.contactForm.get('message')
    };
  }
}
