$(document).ready(function(){

    $('#count-sum').click(function(){
        var suma = 0;

        $(".salary").each(function() {
          console.log($(this).text());
          suma += +$(this).text() || 0;
        });
    
        $("#sum").text(suma);
    });

});