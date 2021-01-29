import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-infoclienti',
  templateUrl: './infoclienti.component.html',
  styleUrls: ['./infoclienti.component.css']
})
export class InfoclientiComponent implements OnInit {

  @Input() IdFid: string = "";
  @Input() Nome: string = "";
  @Input() Bollini: number = 0;
  @Input() Attivo: boolean = true;

  @Output() Verifica = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
