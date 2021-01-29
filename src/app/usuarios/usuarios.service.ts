import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable()
export class UsuariosService {

    constructor(private http: HttpClient) { }

    protected UrlServiceV1: string ="https://jsonplaceholder.typicode.com/users" ;

    obterUsuarios() : Observable<Users[]> {
        return this.http.get<Users[]>(this.UrlServiceV1);
    }

    // findByTitle(name: any): Observable<Users[]> {
    //     return this.http.get<Users[]>(`${this.UrlServiceV1}?title=${name}`);
    //   }
}