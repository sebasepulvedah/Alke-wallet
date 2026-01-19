// js/ui.js
//Me gusto mucho esta idea, para poder reutilizar el codigo */

$(document).ready(function () {

    // Animación de entrada suave
    $(".balance-card, .card-glass").hide().fadeIn(1000);

    // Hover suave en botones (micro-interacción)
    $(".btn").hover(
        function () { $(this).addClass("shadow"); },
        function () { $(this).removeClass("shadow"); }
    );

});
