import { Injectable } from '@angular/core';
import { CustomError } from './custom-error.interface';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  // tslint:disable-next-line: variable-name
  private _error: CustomError = {
    status: 400,
    message: `We're not sure what happened. Maybe go back and try again?`,
    traceId: 'Default message. No error set in service.'
  };
  constructor() { }

  get Error() {
    return this._error;
  }

  set Error(error: CustomError) {
    this._error = {
      status: error.status || 400,
      message: error.message || 'An error occurred.',
      traceId: error.traceId || 'No trace information is available.'
    };
  }
}
