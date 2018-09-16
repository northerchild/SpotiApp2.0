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
			'Authorization': 'Bearer BQDc-tGdL8-Ggv1GPGOatRP_n1qPPgIBJqmXzaO8cqAKwjTYRoWTeTzmvV_dIcHdYlGA12kS6O_2ZT327W4'
		});

   		return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
   }
}
