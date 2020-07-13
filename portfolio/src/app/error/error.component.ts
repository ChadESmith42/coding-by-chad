import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomError } from './custom-error.interface';
import { ErrorService } from './error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public error: CustomError;
  constructor(private router: Router, private errorService: ErrorService) { }

  ngOnInit(): void {
    this.error = this.errorService.Error;
  }

}
