<?php

session_start(); #Iniciando sessao

$_SESSION['cd_usuario'] = 1;

//Verificaçao se o usuario
if (!isset($_SESSION['cd_usuario'])) {
    header('Location: https://educamais.santahelena.pr.gov.br');
    exit;
}

?>

<!DOCTYPE html>
<html>
<head>

  <title>EducaMais</title>
  <link rel="stylesheet" href="style.css"> 

</head>

<body>

<nav>
  <ul>
    <li><a href="index.php">Início Menu</a></li>
    <li><a href="listaEscola.php">Escola</a></li>
  </ul>
</nav>

<h2>Bem-vindo ao Sistema Educacional</h2>
<p>Use o menu acima para acessar os cadastros disponíveis.</p>

</body>
</html>
