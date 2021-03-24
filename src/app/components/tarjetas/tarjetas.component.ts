import { Component, OnInit , Input} from '@angular/core';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: [
  ]
})
export class TarjetasComponent implements OnInit {

  @Input() data:any;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
    verArtista( item: any ) {
    let artistaId;
    if ( item.type === 'artist' ) {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }

    this.router.navigate([ '/artists', artistaId  ]);

  }


}
