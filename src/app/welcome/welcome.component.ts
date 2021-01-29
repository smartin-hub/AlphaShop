import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalutiDataService } from '../services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //messaggio = 'Saluti sono il componente welcome'

  saluti = 'Benvenuti nel sito Alphashop'
  titolo2 = 'Seleziona gli articoli da acquistare'

  utente = ''
  messaggio = ''

  constructor(private route:ActivatedRoute, private salutiSrv:SalutiDataService ) { }

  ngOnInit() {

    this.utente = this.route.snapshot.params['userid']
     
   // console.log(this.messaggio);
    
  }

  getSaluti() {
    console.log(this.salutiSrv.getSaluti(this.utente));

    this.salutiSrv.getSaluti(this.utente).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
      
    );
  }

  handleResponse(response) {
    this.messaggio = response;
    console.log(response);
  }

  handleError(error) {
    this.messaggio = error.error.message;
  }


}
