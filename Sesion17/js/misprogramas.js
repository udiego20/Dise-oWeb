$(document).ready(function(){
    $("a").click(function(evento){
        alert("Has pulsado el enlace. Ahora saldrás a la pagina de la USAT");
    });
});

//Ocultar o mostrar una caja
$("#c1b").click(function(){
    $("#cont1").toggle(1500);
}, function(){
    $("#cont1").toggle(1500);
}
)