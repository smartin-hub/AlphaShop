import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { AuthappService } from '../services/authapp.service';
import { Router } from '@angular/router';
import { ArticoliComponent } from '../articoli/articoli.component';

@Component({
  providers:[ ArticoliComponent ],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //@ViewChild(ArticoliComponent) art: ArticoliComponent;
  //@Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();

  filter: string = '';

  
  constructor(public BasicAuth: AuthappService, private route : Router, private articoli: ArticoliComponent ) { }

  refresh() {
    this.articoli.getArticoli(this.filter);
    //this.onRefresh.emit();
    }

  ngOnInit() {
  }  

}
