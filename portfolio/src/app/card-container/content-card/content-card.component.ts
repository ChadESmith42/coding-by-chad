import { Component, Input, OnInit } from '@angular/core';
import { ContentCard } from './content-card.model';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input() card: ContentCard;
  constructor() { }

  ngOnInit(): void {
  }

}
