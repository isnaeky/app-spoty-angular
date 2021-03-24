import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  paises:any[]=[];
  band:boolean;
  error:boolean;
  txtError="";

  nuevasCan:any[] = [];
  constructor(private http:HttpClient, private spotify:SpotifyService) {
    /* this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (data:any) =>{
      console.log(data);
      this.paises=data;
    }); */
    this.band=true;
    //this.error=true;
    this.spotify.getNewReleases().subscribe(( data:any ) => {
      this.nuevasCan = data.albums.items;
      console.log(data.albums.items);
      this.band = false;
      this.error=false;
    },(e) => {
      this.error=true;
      this.band = false;
      this.txtError=e.error.error.message;
    });
  
   }

  ngOnInit(): void {
  }

}
