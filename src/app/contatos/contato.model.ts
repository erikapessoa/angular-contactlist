export class Contato {
  _id?:string;
  nome:string;
  telefone:string;

  constructor(nome, telefone) {
    console.log("Construtor da classe contato " + "Contato.nome = " + nome + "Contato.telefone - "
      + telefone);
    this.nome = nome;
    this.telefone = telefone;
    console.log("Contato ok no construtor");
  }

}
