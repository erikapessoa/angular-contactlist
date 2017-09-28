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

  @Input() contato : Contato;
  @Output() onRemoveContato = new EventEmitter();

  removeContato() {
    this.onRemoveContato.emit();
  }

  updateContato() {
    this.contatosService.updateContato(this.contato).subscribe();
  }

}
