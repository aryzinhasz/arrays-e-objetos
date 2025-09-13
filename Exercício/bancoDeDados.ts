// Definindo o tipo Livro
interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

// Criando um array de livros
const biblioteca: Livro[] = [
  {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
  },
  { titulo: "Dom Casmurro", autor: "Machado de Assis", anoPublicacao: 1899 },
  { titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 },
];

// Exibindo o título do segundo livro
console.log("O segundo livro é:", biblioteca[1].titulo);
