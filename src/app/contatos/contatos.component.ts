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

  ngOnInit() {
    console.log("Entrei no init de componentes");
    this.loading = true;
    this.contatosService.getContatos().subscribe(lista => {
      this.contatos = lista;
      this.loading = false;
      console.log("saindo do init");
      console.log(this.contatos[0].name);
      console.log(this.contatos[0].phone);
    });
  }


  contatos: Contato[];

  showBlueAlert = false;
  showRedAlert = false;
  alertText = "";
  loading = false;

  createContato(nome, telefone) {
    console.log("Entrei em criar contato");
    console.log("Nome: " + nome);
    console.log("Telefone: " + telefone);
    let contatoX:Contato = new Contato(nome, telefone);
    this.contatosService.saveContato(contatoX).subscribe(contato => {
      this.contatos.push(contato);
      this.showBlueNotification("Contato Criado");
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
            this.showBlueNotification("Contato deletado!");
          }, err => {
            this.showRedNotification("Erro ao deletar o contato");
            // Revert the view back to its original state
            this.contatos.splice(index, 0, contato);
          });
    }
  }

  showBlueNotification(text) {
    this.alertText = text;
    this.showBlueAlert = true;
    setTimeout(()=>{
      this.showBlueAlert = false;
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
