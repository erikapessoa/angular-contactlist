export class Contato {
  _id?:string;
  nome:string;
  telefone:string;

  constructor(nome, telefone) {
    this.nome = nome;
    this.telefone = telefone;
  }

}
