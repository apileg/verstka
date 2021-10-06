import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  public navLinks: any[] = [];
  public activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'First',
        link: './one',
        index: 0
      }, {
        label: 'Second',
        link: './two',
        index: 1
      }, {
        label: 'Third',
        link: './three',
        index: 2
      }, {
        label: 'Fourth',
        link: './four',
        index: 3
      },
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

  public logout(): void {
    this.router.navigate(['login'])
  }

  public dashboard(): void {
    this.router.navigate(['dashboard'])
  }

  // NavBar

  isExpanded = false;
  isShowing = false; // Отвечает за отображение названия

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}
