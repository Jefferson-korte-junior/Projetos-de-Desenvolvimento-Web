# 🧠 Simulador de Memória Virtual e Overlay

Este projeto é um **simulador visual de gerenciamento de memória**, desenvolvido com fins didáticos para a disciplina de *Arquitetura e Organização de Computadores*.

## 📌 Visão Geral

O simulador permite compreender, de forma prática e interativa, como funciona a execução de subrotinas em memória, utilizando os modos **Overlay** e **Paginação**. Ele simula o comportamento real da memória ao lidar com processos/páginas, ilustrando conceitos fundamentais de sistemas operacionais.

## ⚙️ Funcionalidades

### 🔹 Modo Overlay
- Simula a execução de subrotinas em memória física.
- Exibe subrotinas **ativas**, **em fila** e **finalizadas**.
- Cada subrotina possui um **tempo de execução individual**.
- Quando uma subrotina termina, outra é carregada automaticamente.

### 🔹 Modo Paginação
- Simula a execução de **páginas de memória virtual**.
- Limita o número de páginas ativas (ex: 5 simultâneas).
- Cada página possui um tempo de execução individual.
- À medida que páginas finalizam, novas páginas entram na execução.

### 🎛️ Controles e Visualização
- **Botões de controle**:
  - `Iniciar`: executa a simulação no modo escolhido.
  - `Parar`: reinicia o simulador.
  - `Overlay / Paginação`: alterna entre os modos.
- Interface com **cores e rótulos distintos** para indicar os estados.
- Título dinâmico indicando o modo atual: `Memória Física` ou `Memória Virtual`.

## 🛠️ Tecnologias Utilizadas
- HTML5  
- CSS3  
- JavaScript (puro)

## 🎯 Objetivo Educacional

O simulador foi criado para auxiliar estudantes na **visualização e entendimento dos conceitos de gerenciamento de memória**, com foco em overlays e paginação, frequentemente abordados em disciplinas de arquitetura e sistemas operacionais.

---
