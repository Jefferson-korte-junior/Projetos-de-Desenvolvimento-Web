const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

// Adiciona um evento de clique ao botão de upload
uploadBtn.addEventListener("click", () => {
    inputUpload.click(); // Simula um clique no input de upload oculto
});

// Função para ler o conteúdo do arquivo selecionado
function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name }); // Resolve a Promise com o conteúdo do arquivo
        };

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`); // Rejeita a Promise em caso de erro
        };

        leitor.readAsDataURL(arquivo); // Lê o arquivo como uma URL de dados
    });
}

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

// Adiciona um evento de mudança ao input de upload
inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];

    if (arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url; // Atualiza o src da imagem principal
            nomeDaImagem.textContent = conteudoDoArquivo.nome; // Atualiza o nome da imagem
        } catch (erro) {
            console.error("Erro na leitura do arquivo");
        }
    }
});

const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags");

// Adiciona um evento de clique à lista de tags
listaTags.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("remove-tag")) {
        const tagQueQueremosRemover = evento.target.parentElement;
        listaTags.removeChild(tagQueQueremosRemover); // Remove a tag ao clicar no ícone de fechar
    }
});

// Tags disponíveis para adicionar
const tagsDisponiveis = ["Front-end", "Programação", "Data Science", "Full-stack", "HTML", "CSS", "JavaScript"];

// Função para verificar se a tag existe
async function verificaTagsDisponiveis(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto)); // Resolve a Promise se a tag existir
        }, 1000);
    });
}

// Adiciona um evento de tecla ao input de tags
inputTags.addEventListener("keypress", async (evento) => {
    if (evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
        if (tagTexto !== "") {
            try {
                const tagExiste = await verificaTagsDisponiveis(tagTexto);
                if (tagExiste) {
                    const tagNova = document.createElement("li");
                    tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class="remove-tag">`;
                    listaTags.appendChild(tagNova); // Adiciona a nova tag à lista
                    inputTags.value = ""; // Limpa o campo de input
                } else {
                    alert("Tag não foi encontrada.");
                }
            } catch (error) {
                console.error("Erro ao verificar a existência da tag");
                alert("Erro ao verificar a existência da tag. Verifique o console.");
            }
        }
    }
});

const botaoPublicar = document.querySelector(".botao-publicar");

// Função para simular a publicação do projeto
async function publicarProjeto(nomeDoProjeto, descricaoProjeto, tagsProjeto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() > 0.5;
            if (deuCerto) {
                resolve("Projeto publicado com sucesso.");
            } else {
                reject("Erro ao publicar o projeto.");
            }
        }, 2000);
    });
}

// Adiciona um evento de clique ao botão de publicar
botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) => tag.textContent);

    try {
        const resultado = await publicarProjeto(nomeDoProjeto, descricaoDoProjeto, tagsProjeto);
        console.log(resultado);
        alert("Deu tudo certo!");
    } catch (error) {
        console.log("Deu errado: ", error);
        alert("Deu tudo errado!");
    }
});

const botaoDescartar = document.querySelector(".botao-descartar");

// Adiciona um evento de clique ao botão de descartar
botaoDescartar.addEventListener("click", (evento) => {
    evento.preventDefault();

    const formulario = document.querySelector("form");
    formulario.reset(); // Reseta o formulário

    imagemPrincipal.src = "./img/imagem1.png"; // Reseta a imagem principal para a imagem padrão
    nomeDaImagem.textContent = "image_projeto.png"; // Reseta o nome da imagem

    listaTags.innerHTML = ""; // Limpa a lista de tags
});
