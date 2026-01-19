// js/transactions.js


// Función que renderiza la lista de transacciones

function render(lista, filtro) {

    // Limpiar la lista antes de volver a renderizar
    $("#lista").empty();

    // Aplicar filtro si no es "Todos"
    const filtradas = (filtro === "Todos")
        ? lista
        : lista.filter(t => t.tipo === filtro);

    // Si no hay transacciones para mostrar
    if (filtradas.length === 0) {
        $("#empty").removeClass("d-none").hide().fadeIn(200);
        return;
    }

    // Ocultar mensaje de lista vacía
    $("#empty").addClass("d-none");

    // Recorremos las transacciones (de la más nueva a la más vieja)
    filtradas.slice().reverse().forEach(t => {

        // Entrada si es depósito o transferencia recibida
        const esEntrada =
        (t.tipo === "Depósito" || t.tipo === "Transferencia recibida");

        const claseMonto = esEntrada ? "in" : "out";
        const signo = esEntrada ? "+" : "-";

        // Texto adicional
        let extra = "Alke Wallet";
        if (t.destino) extra = "A: " + t.destino;
        if (t.origen) extra = "De: " + t.origen;

        // Render del item
        $("#lista").append(`
        <li class="tx-item">
            <div class="d-flex align-items-center gap-2">
            ${t.icon ? `<i class="bi ${t.icon}" style="font-size:1.5rem"></i>` : ""}
            <div>
                <div><b>${t.tipo}</b></div>
                <small>${extra}</small>
            </div>
            </div>
            <div class="tx-amount ${claseMonto}">
            ${signo}$${Number(t.monto).toLocaleString("es-CL")}
            </div>
        </li>
        `);
    });
    }

    // Al cargar la página
    $(document).ready(function () {

    const currentUser = localStorage.getItem("currentUser");

    // Si no hay sesión, volver al login
    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const me = users.find(u => u.user === currentUser);

    const transacciones = me?.transacciones || [];

    // Render inicial
    render(transacciones, "Todos");

    // Filtro
    $("#filtro").on("change", function () {
        render(transacciones, $(this).val());
    });

});
