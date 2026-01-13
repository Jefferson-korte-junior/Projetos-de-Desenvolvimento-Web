
//Importa a função para gerar dia da semana 
import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

// Obtém o elemento de entrada de texto (input) com o ID "input-item"
const inputItem = document.getElementById("input-item");

let contador = 0;

export function criarItemDaLista () {


    if (inputItem.value === "") {
        alert ("Por favor insira um item!");
        return
    }

    //Cria um novo elemento da lista li, que sera um item da lista de compras 
    const itemDaLista = document.createElement("li");

    //Este div será usado para agrupar o checkbox e o nome do item.
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    //Esta linha cria um novo elemento input e define seu tipo como checkbox
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";

    //Isso garante que cada checkbox tenha um ID único
    inputCheckbox.id = "Checkbox" + contador++;

    //cria um novo elemento de parágrafo p e define seu texto como o valor do campo de entrada inputItem
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value

    //Adiciona um evento quando clicado no checkbox
    inputCheckbox.addEventListener("click", function(){
        if (inputCheckbox.checked) { //Se marcar como comprado
            nomeItem.style.textDecoration = "line-through"; //Para riscar um item da lista
        }else {
            nomeItem.style.textDecoration = "none"; //Para desmarcar o item da lista   
        }
    })

    //Adiciona o checkbox e o nome do item a div
    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    //Adiciona a div ao item da lista 
    itemDaLista.appendChild(containerItemDaLista);

    //Variavel para guardar dia da semana 
    const dataCompleta = gerarDiaDaSemana();

   

    //Cria um elemento 'p' para guardar a dataCompleta
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;

    // Adiciona a classe CSS "texto-data" a este elemento para aplicar estilos definidos no CSS
    itemData.classList.add("texto-data");

    itemData.classList.add("texto-data");

    //Anexa itemData a itemDaLista
    itemDaLista.appendChild(itemData);

    return itemDaLista;

}