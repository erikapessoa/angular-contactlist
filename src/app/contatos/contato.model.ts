export class Contato {
  _id?:string;
  name:string;
  phone:string;

  constructor(nome, telefone) {
    console.log("Construtor da classe contato " + "nome = " + nome + "telefone - "
      + telefone);
    this.name = nome;
    this.phone = telefone;
    console.log("Construtor da classe contato " + "nome = " + this.name + "telefone - "
      + this.phone);
    }
}
