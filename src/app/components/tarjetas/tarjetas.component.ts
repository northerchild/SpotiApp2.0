import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

@Input() items:any[] = [];

  constructor(private router:Router) { }

  verArtista(items:any){
  		let artistaId;
  		if(items.type === 'artist') {
  			artistaId = items.id;
  		}else{
  			artistaId = items.artists[0].id;
  		}
  			this.router.navigate(['/artist', artistaId]);
  		}
}
