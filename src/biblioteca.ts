// sistema de gerenciameto de blibioteca. cria estrutura de dados,. add novos livros, buscar pelo ISBN(id), titulo ou ano, registra emprestimo, alterando disponibilidade. lista apenas os disponiveis para emprestimo e calcular a multa.

type Livro = {
    ISBN : number
    Titulo: string
    Ano: number
    Disponibilidade: boolean
    Emprestimo?: Date
    Devolução?: Date
} 


let Biblioteca: Livro[] = [
    {
        ISBN: 1,
        Titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        Ano: 1954,
        Disponibilidade: false,
        Emprestimo: new Date("2025-10-10"), // Emprestado
    },
    {
        ISBN: 2,
        Titulo: "Harry Potter e a Pedra Filosofal",
        Ano: 1997,
        Disponibilidade: true, // Disponível
    },
    {
        ISBN: 3,
        Titulo: "Harry Potter e a Câmara Secreta",
        Ano: 1998,
        Disponibilidade: false,
        Emprestimo: new Date("2025-10-25"), // Emprestado
    },
    {
        ISBN: 4,
        Titulo: "O Hobbit",
        Ano: 1937,
        Disponibilidade: true, // Disponível
    },
    {
        ISBN: 5,
        Titulo: "O Nome do Vento (Crônicas do Matador do Rei, Livro 1)",
        Ano: 2007,
        Disponibilidade: true, // Disponível
    },
    {
        ISBN: 6,
        Titulo: "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
        Ano: 1950,
        Disponibilidade: true, // Disponível
    },
    {
        ISBN: 7,
        Titulo: "Eragon (Ciclo A Herança, Livro 1)",
        Ano: 2003,
        Disponibilidade: false,
        Emprestimo: new Date("2025-10-28"), // Emprestado (Hoje)
    },
    {
        ISBN: 8,
        Titulo: "A Bússola de Ouro (Fronteiras do Universo, Livro 1)",
        Ano: 1995,
        Disponibilidade: true, // Disponível
    },
    {
        ISBN: 9,
        Titulo: "Mistborn: O Império Final",
        Ano: 2006,
        Disponibilidade: true, // Disponível
    },
    {
        ISBN: 10,
        Titulo: "O Senhor dos Anéis: O Retorno do Rei",
        Ano: 1955,
        Disponibilidade: true, // Disponível
    }
];

function adicionarLivros(livro: Livro){
    Biblioteca.push(livro);
}


function retirarLivro(id: number){
    const livro = Biblioteca.find((l) => l.ISBN === id);
    
    if (livro && livro.Disponibilidade){
        livro.Disponibilidade = false;
        livro.Emprestimo = new Date();
        console.log(`Livro ${livro.Titulo} retirado com sucesso!\n`)

    } else {
        console.log("Livro indisponível")
    }
}



function listarDisponiveis() {
    const disponiveis = Biblioteca.filter((l) => l.Disponibilidade);

    return disponiveis.map((l) => console.log(`Livro disponível: \n ISBN: ${l.ISBN} \n Titulo: ${l.Titulo} \n Ano: ${l.Ano} \n Disponibilidade: ${l.Disponibilidade} \n`));

}

function buscarLivro(nome: string, ano?: number){
    const buscaPorNome = Biblioteca.find((l) => l.Titulo === nome);
    const buscaPorAno = Biblioteca.find((l) => l.Ano === ano);

    return console.log (`Livro encontrado: \n ISBN: ${buscaPorNome.ISBN} \n Titulo: ${buscaPorNome.Titulo} \n Ano: ${buscaPorNome.Ano} \n Disponibilidade: ${buscaPorNome.Disponibilidade} \n`)

}
//conciderando que o prazo de devolução é de 15 dias, e a multa é de 5 reais por dia
function prazoDevolucao(emprestimo: Date, devolucao: Date){
    const dataEmprestimo = emprestimo;
    const dataAtual = devolucao;
    const prazoDeDevolução = dataAtual.getDate() - dataEmprestimo.getDate();
    const prazoMaxDias = 15
    let tempoDeEmprestimo = prazoMaxDias - prazoDeDevolução;
    let multa = 0;


    if (tempoDeEmprestimo < 0){
        tempoDeEmprestimo = tempoDeEmprestimo * -1;
        multa = tempoDeEmprestimo * 5;
        return 
        console.log (`Este Livro esta atrasado ${tempoDeEmprestimo} dias e a multa pelo atraso é de R$ ${multa}`)
    
    }else {
        return
        console.log("Livro devolvido com sucesso!")
    }

}


// // adicionarLivros({ISBN: 11, Titulo: "Harry Potter e o Prisioneiro de Azkaban", Ano: 1999, Disponibilidade: true, Emprestimo: new Date})

// // retirarLivro(9)

// // listarDisponiveis()

buscarLivro("O Hobbit")