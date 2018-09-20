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
      'Authorization': 'Bearer BQAnoUfpyaowPkK7Co7Kz9GGfP0j9miGCRp76P7PUmREckbGXqTbXY8_NLJUx0lenKaLJn8f_y7x1mYyeaU'
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
    getArtista(id:string){
       return this.getQuery(`artists/${id}`)
                   //.pipe(map(resp=>resp['artists'].items))            
    }
    getTopTrack(id:string){
       return this.getQuery(`artists/${id}/top-tracks?country=us`)
                  .pipe(map(resp=>resp['tracks']))            
    }      
}
