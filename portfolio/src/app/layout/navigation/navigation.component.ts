import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
  screenHgt: number;
  screenWdth: number;
  links = [
    { title: 'Projects', fragment: 'projects' },
    { title: 'Resume', fragment: 'resume' },
    { title: 'Social Media', fragment: 'social-media' },
    { title: 'Contact', fragment: 'contact' }
  ];
  showMenu = false;

  @HostListener('window:resize', [ '$event' ])
  getScreenSize(event?: Event) {
    this.screenHgt = window.innerHeight;
    this.screenWdth = window.innerWidth;
  }

  constructor(public route: ActivatedRoute) {
      this.getScreenSize();
   }

   public openMenu(): void {
     this.showMenu = !this.showMenu;
   }

}
