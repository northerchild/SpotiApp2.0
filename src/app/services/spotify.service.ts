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
			'Authorization': 'Bearer BQBMg7RisnSlPpd7Ei8bJeloNjWJ-hTjWyEjMALci6xMArneVw5kmHbdjbnxryLMkEDZADDfdEYQe5rzSqg'
		});

   		return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

   }
    getArtistas(termino:string){
       const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDQyhMzYxdHErHmN4qiar0eLp11GBiKqXkWJ1NSHXTc6YdTZLub7RQuwm5LnF_I1ivegiV5hMwbsQolc_73AppzATy7EvuXG2tJiHJbm8muYS5X6UWrPOl4bl8QWIIpoTeeaH_wvE-_y5kvHjMT20egI-o3qBYvwg'
       });

       return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers}); 
    }   
}
