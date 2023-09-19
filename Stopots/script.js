document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Verifique as credenciais aqui (por simplicidade, não farei a verificação real nesta demonstração).
        // Você pode adicionar sua própria lógica de autenticação aqui.

        // Exemplo simples para exibir uma mensagem de sucesso:
        if (username === "seu_nome_de_usuario" && password === "sua_senha") {
            alert("Login bem-sucedido!");
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    });
});
