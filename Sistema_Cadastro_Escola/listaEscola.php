<?php

require_once 'conexao.php';
$db = conexao();


if (!$db) {
    die("Erro ao conectar ao banco de dados.");
}

$stmt = $db->query("SELECT * FROM escola ORDER BY cd_escola DESC"); // Executa a consulta SQL para buscar todas as escolas, ordenadas pela mais recente
$escolas = $stmt ? $stmt->fetchAll(PDO::FETCH_ASSOC) : [];  // Se a consulta funcionar, transforma os resultados em array

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>

    <meta charset="UTF-8">
    <title>Lista de Escolas</title>
    <link rel="stylesheet" href="style.css">   <!-- Importa o arquivo de estilos CSS -->
</head>

<body>



<!-- Criando dois link no menu -->

<nav>
  <ul style="list-style: none; display: flex; gap: 15px;">
    <li><a href="index.php">Início Menu</a></li>
    <li><a href="listaEscola.php">Escola</a></li>
  </ul>
</nav>

<h2>Escolas Cadastradas</h2>



<table class='tabela_escolas_cadastradas'>
    <tr>
        <!-- Defini os titulos da tabela --> 
        <th>ID</th>
        <th>Nome Escola</th>
        <th>Nome Fantasia</th>
        <th>Data Cadastro</th>
        <th>Ações</th>
    </tr>

    <?php if (count($escolas)) : ?> <!-- Se houver escolas cadastradas...-->
        <?php foreach ($escolas as $e) : ?>
            <tr>
                <td><?= htmlspecialchars($e["cd_escola"]) ?></td>
                <td><?= htmlspecialchars($e["nm_escola"]) ?></td>
                <td><?= htmlspecialchars($e["nm_fantasia"]) ?></td>
                <td><?= htmlspecialchars($e["dt_cadastro"]) ?></td>
                <td>
                    <a href="cadEscola.php?cd_escola=<?= $e["cd_escola"] ?>">Editar</a>
                </td>
            </tr>

        <?php endforeach; ?>

    <?php else : ?>
        <tr><td colspan="5">Nenhuma escola cadastrada.</td></tr>
    <?php endif; ?>

</table>


<!-- div para dois botoes de cadastrar escola  e voltar -->

<div class="botoes-acao">
  <a href="cadEscola.php" class="botao">Adicionar Escola</a>
  <a href="index.php" class="botao">Voltar</a>
</div>
<

</body>

</html>
