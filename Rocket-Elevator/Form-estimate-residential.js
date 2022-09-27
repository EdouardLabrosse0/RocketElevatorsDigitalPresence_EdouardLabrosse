$("#alertnegativenum").hide();
$(".formelementsRE").change(ResultResidentialElevators);

function ResultResidentialElevators() {
	   
		
	var x = document.getElementById("Resnbrappartement").value;
    var y = document.getElementById("Resnbrfloors").value;
    var z = document.getElementById("Resnbrbasements").value;

    var nbr = Math.ceil( x /(y*6) );
    var colonne =  Math.ceil(y /20);
    var  nbrelevators = nbr*colonne;

    document.getElementById("nbrelevators").value = nbrelevators;

    if ( x < 0 || y < 0 || z < 0) { 
        $("#alertnegativenum").show();
        document.getElementById("nbrelevators").value = "error"
         } else {
            $("#alertnegativenum").hide();
         };

}
