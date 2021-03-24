import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent {
  artista: any = {};
  topTracks: any[]= [];

  loadingArtist: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loadingArtist = true;

    this.router.params.subscribe((params) => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtista(id: String) {
    this.spotify.getArtista(id).subscribe((data: any) => {
      //this.nuevasCan = data.albums.items;
      console.log(data);
      this.artista = data;
    });
  }

  getTopTracks(id: String) {
    this.spotify.getTopTracks(id).subscribe((data: any) => {
      //this.nuevasCan = data.albums.items;
      console.log(data.tracks);      
      this.topTracks=data.tracks;
    });
  }
}
