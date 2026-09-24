import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Ligas } from '../models/ligas';

@Injectable({
  providedIn: 'root'
})
export class Liga {

    private readonly URL_BASE:string = `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`; 
    private nextUrl = `${this.URL_BASE}?offset=0&limit=20`;

    getLigas(){

			if(this.nextUrl){

				const options = {
					url: this.nextUrl,
					param:{}
				}
				return CapacitorHttp.get(options).then(async (response: HttpResponse) =>{
				console.log('response', response);
				const ligas: Ligas[] = [];

//                	if (response.data){
//                    const results = response.data.results;
//                    this.nextUrl = response.data.next;
//
//                    const promises: Promise<HttpResponse>[] = [];
//                    for(const result of results){
//                        const urlLiga = result.url;
//                        const optionsLiga = {
//                            url: urlLiga,
//                            params: {}
//                        }
//                        promises.push(CapacitorHttp.get(optionsLiga));
//                    }
//
//
//                    return results;
//                }
			});
		}
		return null;
	}
    
}
