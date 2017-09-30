import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Contato } from './contato.model';

@Injectable()
export class ContatosService {

  url = "https://nodejs-todolist-api.herokuapp.com/contacts/epa";

  constructor(private http: Http) { }

  //GET
  getContatos() {
          console.log("Entrei em getContatos");
    return this.http.get(this.url)
      .map(response => response.json());
  }

  //POST
  saveContato(contato){
    console.log("Entrei em saveContato");
    console.log(contato.name);
    console.log(contato.phone);
    //Set header to send content-type application/json
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, JSON.stringify(contato), options)
      .map(res => res.json());
  }


  //DELETE
  deleteContato(contato){
    return this.http.delete(this.getContato(contato._id))
      .map(res => res.json());
  }

  getContato(id) {
    return `${this.url}/${id}`;
  }

  /*
  //PUT
  updateContato(contato){
    //Set header to send content-type application/json
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.getContato(contato._id), JSON.stringify(contato), options)
      .map(res => res.json());
  }
  */




}
