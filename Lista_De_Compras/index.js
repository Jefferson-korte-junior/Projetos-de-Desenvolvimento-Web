//Importa a função criaritemDaLista
import { criarItemDaLista } from "./scripts/criarItemDaLista.js";

import VerificarlistaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");

// Obtém o botão com o ID "adicionar-item"
const botaoAdicionar = document.getElementById("adicionar-item");


// Adiciona um ouvinte de evento para o clique do botão
botaoAdicionar.addEventListener("click", (evento) => {

    // Previne o comportamento padrão do formulário (caso o botão esteja dentro de um formulário)
    evento.preventDefault();

    const itemDaLista = criarItemDaLista();

    //Adiciona o item da lista (li) a lista de compras (ul)
    listaDeCompras.appendChild(itemDaLista);
    
    //Chama função
    VerificarlistaVazia(listaDeCompras);
    
})



//Chama função
VerificarlistaVazia(listaDeCompras);