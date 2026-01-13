function gerarDiaDaSemana () {
     //variavel paa guardar o dia da semana
     const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"});
    
    //variavel para guardar a data 
    const data = new Date().toLocaleDateString("pt-BR");
    
    //Variavel para guardar horario
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    });
    
    //Variavel para guardar a data completa
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`

    return dataCompleta;
}

export default gerarDiaDaSemana;