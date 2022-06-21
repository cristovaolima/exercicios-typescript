// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

enum Profissoes {
    Atriz,
    Padeiro
};

type Pessoa = {
    nome: string,
    idade: number,
    profissao: Profissoes
}

let pessoa1: Pessoa = {
    nome: "Cristovão Lima",
    idade: 28,
    profissao: Profissoes.Padeiro
}

let pessoa2: Pessoa = {
    nome: 'Maria Lima',
    idade: 29,
    profissao: Profissoes.Atriz
};

let pessoa3: Pessoa = {
    nome: 'Roberto Silva',
    idade: 19,
    profissao: Profissoes.Padeiro
};

let pessoa4: Pessoa = {
    nome: 'Laura Silva',
    idade: 32,
    profissao: Profissoes.Atriz
};