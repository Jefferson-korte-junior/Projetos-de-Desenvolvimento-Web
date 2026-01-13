<?php

require_once 'conexao.php';

$db = conexao();

// Inicializa variáveis
$nm_escola = '';
$nm_fantasia = '';
$cd_escola = '';

//verifica se existe o parametro cd_escola 
if (isset($_GET['cd_escola']) && !empty($_GET['cd_escola'])) {

    $cd_escola = $_GET['cd_escola']; // Armazena o valor do ID da escola que veio pela URL.

    $sql = "SELECT nm_escola, nm_fantasia FROM escola WHERE cd_escola = :cd_escola";
    $stmt = $db->prepare($sql);

    $stmt->execute([':cd_escola' => $cd_escola]); // Executa a consulta passando o ID como parâmetro.
    $escola = $stmt->fetch(PDO::FETCH_ASSOC); // Busca os dados da consulta


    // Se encontrou a escola, preenche as variáveis com os dados dela.
    if ($escola) {
        $nm_escola = $escola['nm_escola'];
        $nm_fantasia = $escola['nm_fantasia'];
    }
}


if ($_SERVER['REQUEST_METHOD'] === 'POST') { //Se for o metodo POST siginifica que o formulario foi enviado (form esta embaixo no HTML)

    $nm_escola = strtoupper($_POST['nm_escola']);
    $nm_fantasia = strtoupper($_POST['nm_fantasia']);
    $dt_cadastro = date('Y-m-d H:i:s');

    if (!empty($_POST['cd_escola'])) {
        // Atualiza escola existente
        $cd_escola = $_POST['cd_escola'];

        $sql = "UPDATE escola 
                SET nm_escola = :nm_escola, 
                    nm_fantasia = :nm_fantasia, 
                    dt_alteracao = :dt_cadastro 
                WHERE cd_escola = :cd_escola";

        $stmt = $db->prepare($sql);
        $executado = $stmt->execute([
            ':nm_escola' => $nm_escola,
            ':nm_fantasia' => $nm_fantasia,
            ':dt_cadastro' => $dt_cadastro,
            ':cd_escola' => $cd_escola
        ]);

    } else {
        // Novo cadastro
        $sql = "INSERT INTO escola (nm_escola, nm_fantasia, cd_usuario, dt_cadastro) 
                VALUES (:nm_escola, :nm_fantasia, 1, :dt_cadastro)";

        $stmt = $db->prepare($sql);
        $executado = $stmt->execute([
            ':nm_escola' => $nm_escola,
            ':nm_fantasia' => $nm_fantasia,
            ':dt_cadastro' => $dt_cadastro
        ]);
    }


    // Se a operação no banco for bem-sucedida, redireciona para a lista de escolas.
    // Caso contrário, exibe uma mensagem de erro na tela.
    if ($executado) {
        header("Location: listaEscola.php");
        exit;
    } else {
        echo "<p style='color:red;'>Erro ao salvar dados.</p>";
    }
}

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title><?= $cd_escola ? 'Editar Escola' : 'Nova Escola' ?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<nav>
  <ul style="list-style: none; display: flex; gap: 15px;">
    <li><a href="listaEscola.php">Voltar para Lista</a></li>
  </ul>
</nav>

<h2><?= $cd_escola ? 'Editar Escola' : 'Cadastrar Nova Escola' ?></h2>

<form method="POST" action="" class="form_cadastrar_escola"> <!--define que os dados serão enviados via POST//// significa que o formulário será enviado para o mesmo arquivo onde ele está.-->        
    <input type="hidden" name="cd_escola" value="<?= htmlspecialchars($cd_escola) ?>">

    <label>Nome da Escola:</label><br>
    <input type="text" name="nm_escola" required value="<?= htmlspecialchars($nm_escola) ?>"><br><br>

    <label>Nome Fantasia:</label><br>
    <input type="text" name="nm_fantasia" required value="<?= htmlspecialchars($nm_fantasia) ?>"><br><br>

    <input type="submit" value="Gravar">
</form>

</body>
</html>
