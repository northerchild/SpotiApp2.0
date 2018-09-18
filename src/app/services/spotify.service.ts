import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor(private http:HttpClient) {
  		console.log("Servicio de spotify listo");
   }

   getQuery(query:string){
     const url = `https://api.spotify.com/v1/${query}`;
     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBMUV3pau9c0to0TlHANrjmvL1Mx0UQ02ixWjj_3L_dmV_UZHwobhx0RTQeE6OwNPmhttIKteq6vgCpr9U'
    });
     return this.http.get(url,{headers});
   }

   getNewReleases(){

   		/*const headers = new HttpHeaders({
			'Authorization': 'Bearer BQBcGZBQAEvaxXJBEpu3_fi7JTN_4oiVnix9X3GaGgxruW7_CMWyPZxAaAAm8wwbeGMVgiNzrvH--p0MEMM'
		});*/

   		/*return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
                 .pipe(map(data=> data['albums'].items));*/
     return this.getQuery('browse/new-releases')
                .pipe(map(data=> data['albums'].items));            
   }
    getArtistas(termino:string){
       /*const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBcGZBQAEvaxXJBEpu3_fi7JTN_4oiVnix9X3GaGgxruW7_CMWyPZxAaAAm8wwbeGMVgiNzrvH--p0MEMM'
       });*/

       /*return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers})
                  .pipe(map(resp=>resp['artists'].items));*/
       return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                   .pipe(map(resp=>resp['artists'].items))            
    }   
}
