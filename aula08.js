const generos = ["Ficçao", "açao", "ciencias", "Historia", "Fantasia"];

let livros = [];

function novolivro(nome, autor, tamanho, genero) {
if (!generos.includes(genero)) {
    console.log("Gênero inválido. Os gêneros válidos são: ", generos.join(", "));
    return;
}
const novolivro = { nome, autor, tamanho, genero };
livros.push(novolivro);
console.log("Livro adicionado com sucesso!");
}

function removerlivro(nome) {
const index = livros.findIndex(livro => livro.nome === nome);
if (index !== -1) {
    livros.splice(index, 1);
    console.log("Livro removido com sucesso!");
} else {
    console.log("Livro não encontrado!");
}
}

function listalivro() {
if (livros.length === 0) {
    console.log("Nenhum livro na biblioteca.");
} else {
    livros.forEach((livro, index) => {
        console.log(`${index + 1}. Nome: ${livro.nome}, Autor: ${livro.autor}, Tamanho: ${livro.tamanho} páginas, Gênero: ${livro.genero}`);
    });
    }
}

function atualizarlivro(nomeantigo, novonome, novoautor, novotamanho, novogenero) {
    const index = livros.findIndex(livro => livro.nome === nomeantigo);
    if (index !== -1) {
    if (novogenero && !generos.includes(novogenero)) {
        console.log("Gênero inválido. Os gêneros válidos são: ", generos.join(", "));
        return;
    }
    livros[index] = {
        nome: novonome || livros[index].nome,
        autor: novoautor || livros[index].autor,
        tamanho: novotamanho || livros[index].tamanho,
        genero: novogenero || livros[index].genero
    };
    console.log("Livro atualizado com sucesso!");
    } else {
    console.log("Livro não encontrado!");
    }
}

module.exports = {
novolivro,
removerlivro,
listalivro,
atualizarlivro,
generos
};