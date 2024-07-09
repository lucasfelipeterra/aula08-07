const prompt = require("prompt-sync")({ sigint: true });
const { novolivro,removerlivro,listalivro,atualizarlivro,generos} = require("./aula08");

function mainMenu() {
    console.log("Bem-vindo à Biblioteca");
    console.log("1. Adicionar livro");
    console.log("2. Remover livro");
    console.log("3. Listar livros");
    console.log("4. Atualizar livro");
    console.log("5. Sair");

    const choice = prompt("Escolha uma opção: ");
    switch (choice) {
        case "1":
            novolivroHandler();
            break;
        case "2":
            removerlivroHandler();
            break;
        case "3":
            listalivroHandler();
            break;
        case "4":
            atualizarlivroHandler();
            break;
        case "5":
            console.log("Saindo...");
            process.exit();
        default:
            console.log("Opção inválida, tente novamente.");
    }
}

function novolivroHandler() {
    const nome = prompt("Nome do livro: ");
    const autor = prompt("Autor do livro: ");
    const tamanho = parseInt(prompt("Tamanho (número de páginas): "), 10);
    console.log("Gêneros disponíveis: ", generos.join(", "));
    const genero = prompt("Gênero: ");
    novolivro(nome, autor, tamanho, genero);
}

function removerlivroHandler() {
    const nome = prompt("Nome do livro a ser removido: ");
    removeBook(nome);
}

function listalivroHandler() {
    listalivro();
}

function atualizarlivroHandler() {
    const nomeantigo = prompt("Nome do livro a ser atualizado: ");
    const novonome = prompt("Novo nome (deixe em branco para não alterar): ");
    const novoautor = prompt("Novo autor (deixe em branco para não alterar): ");
    const novotamanho = prompt("Novo tamanho (número de páginas, deixe em branco para não alterar): ");
    console.log("Gêneros disponíveis: ", generos.join(", "));
    const novogenero = prompt("Novo gênero (deixe em branco para não alterar): ");
    atualizarlivro(nomeantigo, novonome, novoautor, novotamanho, novogenero);
}

while (true) {
    mainMenu();
}
