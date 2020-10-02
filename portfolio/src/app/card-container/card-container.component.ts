import { Component, Input, OnInit } from '@angular/core';
import { ContentCard } from './content-card/content-card.model';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  @Input() cards: ContentCard[];

  constructor() { }

  ngOnInit(): void {
  }

}
