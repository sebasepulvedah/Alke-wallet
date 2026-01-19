// js/sendmoney.js
$(document).ready(function () { //  función principal al cargar la página

    // Muestra un mensaje en el área designada
    function showMsg(text, type) { // type: success | danger | warning | info
        $("#msg")
        .removeClass("d-none alert-success alert-danger alert-warning alert-info")
        .addClass("alert alert-" + type)    // Agrega la clase según el tipo
        .text(text);
    }

    // Guarda el array de usuarios en localStorage
    function saveUsers(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    // Actualiza el saldo mostrado en pantalla
    function updateSaldoUI(saldo) {
        $("#saldoTxt").text("$" + saldo.toLocaleString("es-CL"));
    }

    // Usuario actualmente logueado
    const currentUser = localStorage.getItem("currentUser");

    // Carga los usuarios y obtiene el usuario logueado
    // Devuelve:
    // - users: lista completa de usuarios
    // - me: usuario actual
    function loadMe() {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const me = users.find(u => u.user === currentUser);
        return { users, me };
    }

    // Mostrar el saldo del usuario al cargar la página
    const init = loadMe();
    updateSaldoUI(init.me?.saldo || 0);

    const usersList = JSON.parse(localStorage.getItem("users") || "[]");
    $("#contactosList").empty();
    usersList.forEach(u => {
    if (u.user !== currentUser) {
        $("#contactosList").append(`<option value="${u.user}"></option>`);
    }
    });
    // Evento al hacer click en "Enviar"
    $("#enviar").click(function () {

        // Obtener datos del formulario
        const destino = ($("#destino").val() || "").trim(); // usuario destino: seba / flor
        const monto = Number($("#monto").val());

        // Logs para depuración
        console.log("[SEND] from:", currentUser, "to:", destino, "monto:", monto);

        // Validaciones
        if (!destino)
        return showMsg("Ingresa el usuario destino (ej: flor)", "danger");

        if (destino === currentUser)
        return showMsg("No puedes enviarte a ti mismo", "warning");

        if (isNaN(monto) || monto <= 0)
        return showMsg("Ingresa un monto válido", "danger");


        // Cargar datos actualizados
        const { users, me } = loadMe();

        // Buscar usuario destino
        const to = users.find(u => u.user === destino);

        // Validaciones de sesión y destino
        if (!me)
        return showMsg("Sesión no válida. Vuelve a iniciar sesión.", "danger");

        if (!to)
        return showMsg("El usuario destino no existe (usa: seba o flor)", "danger");

        if (monto > me.saldo)
        return showMsg("Saldo insuficiente", "warning");


        // Realizar la transferencia
        me.saldo -= monto; // Restar saldo al emisor
        to.saldo += monto; // Sumar saldo al receptor

        // Registrar movimientos para ambos usuarios
        const fecha = new Date().toISOString();

        // Transacción para quien envía
     // Transferencia enviada
        me.transacciones.push({
        tipo: "Transferencia enviada",
        monto,
        destino,
        icon: to.icon,
        fecha
        });

        // Transferencia recibida
        to.transacciones.push({
        tipo: "Transferencia recibida",
        monto,
        origen: currentUser,
        icon: me.icon,
        fecha
        });


        // Guardar cambios y actualizar UI
        saveUsers(users);           // Persistir datos
        updateSaldoUI(me.saldo);    // Actualizar saldo en pantalla

        // Mostrar mensaje de éxito
        showMsg("Transferencia realizada con éxito", "success");

        // Limpiar campo monto
        $("#monto").val("");
    });

});
