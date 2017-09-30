import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contato } from '../contato.model';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})


export class ContatoComponent implements OnInit {

  constructor(private contatosService :ContatosService) { }

  ngOnInit() {
  }

  //Com o annotation @Input(), estamos informando que a propriedade
  //contato será recebida por quem fizer a criação do componente
  @Input() contato : Contato;
  //Com @Output(), criamos um evento que será disparado pelo nosso
  //componente, e poderá ser tratado do lado de fora, pelo componente
  //mais externo
  @Output() onRemoveContato = new EventEmitter();

  remove() {
    this.onRemoveContato.emit();
  }

  update() {
    this.contatosService.updateContato(this.contato).subscribe();
  }

}
