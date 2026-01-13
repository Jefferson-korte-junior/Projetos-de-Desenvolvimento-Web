<?php
// Configurações do banco de dados
define('HOST', 'localhost');
define('DBNAME', 'bdteste');
define('CHARSET', 'utf8');
define('USER', 'root');
define('PASSWORD', '');

// Função de conexão usando PDO
function conexao() {
    try {
        $opcoes = array(
            PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES ' . CHARSET,
            PDO::ATTR_PERSISTENT => true, //  Aqui estamos usando uma onexao persistente (melhora o desempenho)
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION // // Ativa exceções para erros
        );

        $pdo = new PDO(
            "mysql:host=" . HOST . ";dbname=" . DBNAME . ";charset=" . CHARSET,
            USER,
            PASSWORD,
            $opcoes
        );

        return $pdo;

    } catch (PDOException $e) {
        die("Erro na conexão: " . $e->getMessage());
    }
}
?>
