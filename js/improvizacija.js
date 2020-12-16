if ($( window ).width() > 768){
    $(document).ready(function() {
        $(".mapa").css("height", $(".tekst").height());
    });
}
$( window ).resize(function() {
    if ($( window ).width() >= 800){
        $(document).ready(function() {
            $(".mapa").css("height", $(".tekst").height());
        });
    }
    else{
        $(document).ready(function() {
            $(".mapa").css("height", "auto");
        });
    }
});
