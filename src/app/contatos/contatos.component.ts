import { Component, OnInit } from '@angular/core';
import { Contato } from './contato.model';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  constructor(private contatosService :ContatosService) { }

  loading = false;

  ngOnInit() {
    this.loading = true;
    this.contatosService.getContatos().subscribe(contatos => {
      this.contatos = contatos;
      this.loading = false;
    });
  }

  contatos: Contato[];

  showGreenAlert = false;
  showRedAlert = false;
  alertText = "";

  showCreate = false;
  showEdit = false;

  createContato(nome, telefone) {
    console.log("Entrei em criar contato");
    console.log("Nome: " + nome);
    console.log("Nome: " + telefone);
    let contatoX:Contato = new Contato(nome, telefone);
    this.showCreate = false;

    this.contatosService.saveContato(contatoX).subscribe(contato => {
      this.contatos.push(contato);
      this.showGreenNotification("Contato Criado");
    }, err => {
      this.showRedNotification("Erro ao criar o contato");
    });
  }

  removeContato(contato) {
    if (confirm("Você tem certeza que quer remover este contato?")) {
      let index = this.contatos.findIndex(c => {
        return (c._id === contato._id);
      });
      this.contatos.splice(index, 1);

      //Remove o contato do servidor
      this.contatosService.deleteContato(contato)
        .subscribe(success => {
            this.showGreenNotification("Contato deletado!");
          }, err => {
            this.showRedNotification("Erro ao deletar o contato");
            // Revert the view back to its original state
            this.contatos.splice(index, 0, contato);
          });
    }
  }

  showNewContatoForm() {
    this.showEdit = false;
    this.showCreate = !this.showCreate;
  }

  showGreenNotification(text) {
    this.alertText = text;
    this.showGreenAlert = true;
    setTimeout(()=>{
      this.showGreenAlert = false;
    }, 1000);
  }

  showRedNotification(text) {
    this.alertText = text;
    this.showRedAlert = true;
    setTimeout(()=>{
      this.showRedAlert = false;
    }, 1000);
  }

}
