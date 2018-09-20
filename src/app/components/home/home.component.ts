import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

	nuevaCanciones:any[] = [];
  loading:boolean;
  error:boolean;
  mensajeError:string;

  constructor(private spotify:SpotifyService) {
      this.loading  = true;
      this.error = false;
  		this.spotify.getNewReleases()
  		.subscribe((data:any)=>{
  			console.log(data);
  			this.nuevaCanciones = data;
        this.loading =false;
  		},(errorServicio)=>{
        this.loading = false
        this.error = true;
        this.mensajeError = errorServicio.error.error.message;
      });
   }

}
