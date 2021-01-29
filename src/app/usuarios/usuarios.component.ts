import { Component, OnInit } from '@angular/core';
import { Users } from './users';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) { }

  //configuração da paginação
  public users: Users[];
  pag : Number = 1;
  contador : Number = 5;

  title = ''; //configuração da busca

  //configuração do botão da paginação
  handlePageChange(event) {
    this.pag = event;
  }

  // Configuração da ordenação
  key: string = 'nome'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;
  sort(key) {
      this.key = key;
      this.reverse = !this.reverse;
  }

  ngOnInit() {
    this.usuariosService.obterUsuarios()
      .subscribe(
        users => {
          this.users = users;
          console.log(users);
        },
        error => console.log(error)
      );
  }

}
