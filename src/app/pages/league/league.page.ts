import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid,
   IonCol, IonSelect, IonSelectOption, IonRow } from '@ionic/angular';
import {Ligas} from '../../models/ligas';
import { Liga } from '../../services/liga';
@Component({
  selector: 'app-league',
  templateUrl: './league.page.html',
  styleUrls: ['./league.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCol, IonSelect, IonSelectOption, IonRow]
})
export class LeaguePage implements OnInit {

  private ligaService: Liga=inject(Liga);
  leagues:Ligas[] = [];
  selectedLeagueId: string = "";
  selectedTable: string = "";
  idLeague:string='';
  seasons: any[] = []; 
  constructor() { }

  async ngOnInit() {
   this.leagues = await this.ligaService.getligas();

  }

  async onLeagueChange(event: any) {
    this.idLeague = String(event.detail.value);
    this.seasons = await this.ligaService.getSeason(this.idLeague);
  }

  async onleagueTable(event: any){
    const season = String (event.detail.value);
    const table = await this.ligaService.getTabla(this.idLeague, season);

  }
}
