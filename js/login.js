// js/login.js
$(document).ready(function () {

  // Crear usuarios si no existen (1 sola vez)
    if (!localStorage.getItem("users")) {
        const users = [
        { user: "seba", pass: "1234", saldo: 200000, transacciones: [] },
        { user: "flor", pass: "1234", saldo: 150000, transacciones: [] }
        ];
        localStorage.setItem("users", JSON.stringify(users));
    }

    $("#loginBtn").click(function () {
        const user = ($("#user").val() || "").trim();
        const pass = ($("#pass").val() || "").trim();

        if (!user || !pass) {
        alert("Completar usuario y contraseña");
        return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const found = users.find(u => u.user === user && u.pass === pass);

        if (!found) {
        alert("Credenciales incorrectas");
        return;
        }

        // Sesión actual
        localStorage.setItem("currentUser", found.user);
        window.location.href = "menu.html";
    });

});

