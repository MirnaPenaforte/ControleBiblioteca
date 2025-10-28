// sistema de gerenciameto de blibioteca. cria estrutura de dados,. add novos livros, buscar pelo ISBN(id), titulo ou ano, registra emprestimo, alterando disponibilidade. lista apenas os disponiveis para emprestimo e calcular a multa.

type Livro = {
    ISBN : number
    Titulo: string
    Ano: number
    Disponibilidade: boolean
    Emprestimo?: Date
} 


const Biblioteca = [
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

//function adicionarLivro(livro: Livro) {
    //acervoLivros.forEach((livro) => { 
      //  Biblioteca.push(livro)
    //})
   
//}

//isso poderia ser escrito assim
function adicionarLivro(livro: Livro){
    Biblioteca.push(livro)
}

adicionarLivro({Ano : 1693, Disponibilidade: true, ISBN: 11, Titulo: "Qualque um"})


function listarLivros (){
    Biblioteca.map((l) => {console.log(`Todos os livros: ${l.Ano}`)})
}

listarLivros()