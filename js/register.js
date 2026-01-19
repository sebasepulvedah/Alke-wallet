// js/register.js
$(document).ready(function () {

    function showMsg(text, type) {
        $("#msg")
        .removeClass("d-none alert-success alert-danger alert-warning")
        .addClass("alert alert-" + type)
        .text(text);
    }
        const icons = [
        "bi-person-circle",
        "bi-person-fill",
        "bi-person-heart",
        "bi-person-badge",
        "bi-emoji-smile"
    ];

const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    $("#registerBtn").click(function () { //funcion btn registrar 

        const user = ($("#user").val() || "").trim().toLowerCase();
        const pass = ($("#pass").val() || "").trim();

        // Validaciones básicas
        if (!user || !pass) {
        showMsg("Completá todos los campos", "danger");
        return;
        }

        if (pass.length < 4) {
        showMsg("La contraseña debe tener al menos 4 caracteres", "warning");
        return;
        }

        // Obtener usuarios existentes
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        // Verificar si el usuario ya existe
        if (users.find(u => u.user === user)) {
        showMsg("El usuario ya existe", "danger");
        return;
        }

        // Crear nuevo usuario
            users.push({
        user: user,
        pass: pass,
        saldo: 0,
        icon: randomIcon,
        transacciones: []
        });


        localStorage.setItem("users", JSON.stringify(users));

        showMsg("Usuario creado correctamente", "success");

        // Limpiar campos
        $("#user").val("");
        $("#pass").val("");

        // Redirigir al login
        setTimeout(() => {
        window.location.href = "login.html";
        }, 2000);
    });

});
