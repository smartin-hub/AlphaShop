import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticoliDataService } from '../services/data/articoli-data.service';

export class Articoli {

  constructor(
    public codArt: string,
    public descrizione: string,
    public um: string,
    public codStat: string,
    public pzCart: number,
    public pesoNetto: number,
    public prezzo: number,
    public isactive: string,
    public dataCreazione: Date,
    public idFamAss: number,
    public idIva: number,
    public idStatoArt: string
  ) { }

}

export class Iva {
  constructor(
    public idIva: number,
    public descrizione: string,
    public aliquota: number

  ) {}

}

export class FamAss {
  constructor(
  public id: number,
  public descrizione: string
  ) {}
}

export class ApiMsg {

  constructor(
    public code: string,
    public message: string
  ) {}
}


@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  NumArt = 0;

  pagina = 1;
  righe = 10;
 
  apiMsg: ApiMsg;
  messaggio: string;

  filter: string = '';
  articolo: Articoli;
  articoli : Articoli[];
  
  constructor(private route: ActivatedRoute, private router: Router, private articoliService: ArticoliDataService) { }

  ngOnInit() {

    this.filter = this.route.snapshot.params['filter']

    if (this.filter != undefined) {
      this.getArticoli(this.filter);
    }
  
  }

  refresh() {
    this.messaggio = "";
    this.getArticoli(this.filter);
    }

  public getArticoli(filter: string) {

    this.articoliService.getArticoliByCodArt(filter).subscribe(
      response => {

        this.articoli = [];

        console.log('Ricerchiamo articoli per codart con filtro ' + filter);

        this.articolo = response;
        console.log(this.articolo);

        this.articoli.push(this.articolo);
        this.NumArt = this.articoli.length
        console.log(this.articoli.length);
        
      },
      error => {
        console.log(error.error);
    
        console.log('Ricerchiamo per descrizione con filtro ' + filter);
        this.articoliService.getArticoliByDescription(filter).subscribe(
          response => {

            this.articoli = response;
            console.log(this.articoli);
            
            this.NumArt = this.articoli.length
            console.log(this.articoli.length);

          },
          error => {
            console.log(error.error);
            console.log('Ricerchiamo per EAN con filtro ' + filter);

            this.articoliService.getArticoliByEan(filter).subscribe(
              response => {
                this.articoli = [];
                
                this.articolo = response;
                console.log(this.articolo);
        
                this.articoli.push(this.articolo);
                this.NumArt = this.articoli.length
                console.log(this.articoli.length);
              },
              error => {
                console.log(error.error);
                this.articoli = [];
              }
            )
          }
        )
      } 
    )
  }

  Elimina(CodArt: string) {
    console.log(`Eliminazione articolo ${CodArt}`);

    this.articoliService.delArticoloByCodArt(CodArt).subscribe(
      response => {
        
        this.refresh();
        this.apiMsg = response;
        this.messaggio = this.apiMsg.message;
        
      }
    )
    
  }

  Modifica(CodArt: string) {
    console.log(`Modifica articolo ${CodArt}`);

    this.router.navigate(['newart',CodArt]);

  }

}
