// js/user.js
$(document).ready(function () {


    // Obtener usuario logueado
    const currentUser = localStorage.getItem("currentUser");

    // Si no hay sesión, volver al login
    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    // Buscar datos del usuario

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const me = users.find(u => u.user === currentUser);

    // Mostrar nombre del usuario
    if ($("#userTxt").length) {
        $("#userTxt").text("Hola, " + currentUser);
    }

    // Mostrar icono del usuario (si existe)
    if ($("#userIcon").length && me?.icon) {
        $("#userIcon")
        .addClass("bi " + me.icon)
        .css("font-size", "1.2rem");
    }

    // Logout real
    if ($("#logoutBtn").length) {
        $("#logoutBtn").click(function () {
        localStorage.removeItem("currentUser");
        });
    }

});



