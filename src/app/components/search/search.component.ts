import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent implements OnInit {
  artist: any[] = [];
  band: boolean;
  error:boolean;
  txtError:string;
  constructor(private service: SpotifyService) { }

  ngOnInit(): void { }

  buscar(termino: String) {
    this.band = true;
    if (termino.length > 0) {
      this.service.getArtistas(termino).subscribe((data: any) => {
        this.artist = data.artists.items;
        console.log(data.artists.items);
        this.band = false;
      },(e) => {
        this.error=true;
        this.band = false;
        this.txtError=e.error.error.message;
      });
    }else{
      this.band = false;
      this.artist=[];
    }

  }
}
