"use strict";
//Classe: Abstração de uma pessoa
//Definindo a abstração de uma pessoa
class Pessoa {
    //Metodos: Ação.
    //Metodo Construtor
    constructor(nome, idade, altura, peso, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.cpf = cpf;
    }
    dormir(nome) {
        this.nome = nome;
        console.log(nome + " esta a mimir...");
    }
    //acessor  getter
    get getcpf() {
        return this.cpf;
    }
    set setcpf(cpf) {
        if (cpf.length !== 14) {
            throw new Error("CPF length is incorretct!");
        }
        this.cpf = cpf;
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, peso, codigo) {
        super(nome, idade, altura, peso, cpf);
        this.codigo = codigo;
    }
    ensinar(nome) {
        console.log(nome, " esta ensinando muito");
    }
}
const pessoaJoana = new Pessoa('Joana', 35, 1.65, 85.5, '458.694.524.90');
const pessoaLucca = new Pessoa('Lucca Sanches', 14, 1.25, 42.5, '688.954.521.32');
pessoaJoana.dormir("Joana");
console.log(pessoaJoana);
pessoaLucca.dormir("Lucca");
console.log(pessoaLucca);
//instanciar pessoas poder usar seus metodos e instanciar os valores do construtor
pessoaJoana.setcpf = "123.456.789.05"; // consegue alterar através do metodo o  valor do cpf
console.log(pessoaJoana.getcpf); // imprime o novo valor do cpf
// objeto da classe professor
const prof1 = new Professor('Walisson', 30, 1.85, '4529874134', 45, '458942');
console.log(prof1);
prof1.dormir('Walisson');
prof1.ensinar('Walisson');
