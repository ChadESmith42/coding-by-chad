import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyright = '';
  constructor() { }

  ngOnInit(): void {
    const now = new Date();
    this.copyright = now.getFullYear().toString();
  }

}
