import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Ligas } from '../models/ligas';
import { Clasificacion } from '../models/clasificacion';

@Injectable({
  providedIn: 'root'
})
export class Liga {

    private readonly URL_BASE:string = `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`; 
    //private nextUrl = `${this.URL_BASE}`;
	private readonly URL_SEASON:string = `https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?id=`;
	private readonly URL_RESOLUTION:string = `https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?`;
	
	async getligas(): Promise<Ligas[]>{
		try{
			const options = {url: this.URL_BASE};
			const response: HttpResponse =  await CapacitorHttp.get(options);
			
			console.log('response', response);
			return response.data?.leagues || [];
		}catch(error){
			console.error('Error fetching ligas:', error);
			return [];
		}
	}

	async getSeason(idLeague: string): Promise<any[]>{
		try{
			const options = {url: this.URL_SEASON + idLeague};
			const response: HttpResponse = await CapacitorHttp.get(options);
			console.log('response season', response);
			const seasonData = response.data?.seasons||[];
			return seasonData.map((s:any) => s.strSeason)
		}catch(error){
			console.error('Error fetching seasons:', error);
			return [];
		}
		
	}

	async getTabla(idLeague: string, seasons: string): Promise<Clasificacion[]>{
		try{
			const options = {url:this.URL_RESOLUTION + "l=" + idLeague + "&s=" + seasons};
			const response: HttpResponse = await CapacitorHttp.get(options);
			console.log('response clasificacion',response);
			return response.data?.table || [];
		}catch(error){
			console.error('Error fetching tabla:', error);
			return [];
		}

	}
    
}
