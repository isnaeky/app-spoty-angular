import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) { }
  getQuery(query: String) {
    const url = 'https://api.spotify.com/v1/';
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQB5-WQgH5-wa_tYW4O9BNF-C-lUePZ9a1KhLFWs1TstzNN4NJhZuWqoibHNt0S0mlroFZmhDOe5VpEul0Q',
    });
    return this.http.get(`${url}${query}`, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases');
  }

  getArtistas(termino: String) {
    return this.getQuery(`search?q=${termino}&type=artist`);
  }

  getArtista(termino: String) {
    return this.getQuery(`artists/${termino}`);
  }
  getTopTracks(termino: String) {
    return this.getQuery(`artists/${termino}/top-tracks?market=es`);
  }
}
