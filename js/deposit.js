// js/deposit.js
$(document).ready(function () {

    function showMsg(text, type) { // evento 
        $("#msg")
        .removeClass("d-none alert-success alert-danger alert-warning alert-info")
        .addClass("alert alert-" + type)
        .text(text);
    }

    function getMe(users, currentUser) {
        return users.find(u => u.user === currentUser);
    }

    function saveUsers(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    function updateSaldoUI(saldo) {
        $("#saldoTxt").text("$" + saldo.toLocaleString("es-CL"));
    }

    const currentUser = localStorage.getItem("currentUser");
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let me = getMe(users, currentUser);

    updateSaldoUI(me?.saldo || 0);

    $("#depositar").click(function () { // eve
        const monto = Number($("#monto").val());

        if (isNaN(monto) || monto <= 0) {
        showMsg("Ingresá un monto válido", "danger");
        return;
        }

        // recargar usuarios por seguridad
        users = JSON.parse(localStorage.getItem("users") || "[]");
        me = getMe(users, currentUser);

        me.saldo += monto;
        me.transacciones.push({ tipo: "Depósito", monto, fecha: new Date().toISOString() });

        saveUsers(users);
        updateSaldoUI(me.saldo);

        showMsg("Depósito realizado con éxito", "success");
        $("#msg").hide().fadeIn(200);
        $("#monto").val("");
    });

});
