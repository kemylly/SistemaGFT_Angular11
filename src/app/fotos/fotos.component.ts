import { Component, OnInit } from '@angular/core';
import { Photos } from './photos';
import { FotoService } from './fotos.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  constructor(private fotosService: FotoService) { }

  public photos: Photos[];
  pag : Number = 1;
  contador : Number = 20;

  //configuração do botão da paginação
  handlePageChange(event) {
    this.pag = event;
  }

  ngOnInit() {
    this.fotosService.obterfotos()
      .subscribe(
        photos => {
          this.photos = photos
          console.log(photos);
        },
        error => console.log(error)
      );
  }

}
