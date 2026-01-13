// Seleciona a mensagem para lista vazia
const mensagemListaVazia = document.querySelector(".mesagem-lista-vazia");

//Funçao para verificar se a lista esta vazia
function VerificarlistaVazia(listaDeCompras) {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block"
    }else {
        mensagemListaVazia.style.display = "none"
    }
}

export default VerificarlistaVazia;