import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor(private http:HttpClient) {
  		console.log("Servicio de spotify listo");
   }
   getNewReleases(){

   		const headers = new HttpHeaders({
			'Authorization': 'Bearer BQAUlJ0G9_WLLZsPeyzS_tK-eJ_yZeLWnKXvsccXhgS9G9bu0V3ftzmMvdITXdSMcmmJkSMUMWZ_B0wUEySwwlfAFS8LPpDcPVN_V0xZyiuJ0dep06fmxgvARgy-bXjUQFQVxWCSpNL4BLC5CofEA36VPXc-Zc45zQ'
		});

   		this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
   		.subscribe(resp=>{
   			console.log(resp);
   		})
   }
}
