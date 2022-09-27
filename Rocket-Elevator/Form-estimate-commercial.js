$("#alertnegativenum").hide();
$(".formelementsCOM").change(ResultCommercialElevators);

function ResultCommercialElevators() {
	   
	var nbrelevators = document.getElementById("comnbrcage").value;
    var a = document.getElementById("comnbrbuisnesses").value;
    var x = document.getElementById("comnbrfloors").value;
    var y = document.getElementById("comnbrbasements").value;
    var z = document.getElementById("comnbrparking").value;

    document.getElementById("nbrelevators").value = nbrelevators;

    if ( nbrelevators < 0 || a < 0 || x < 0 || y < 0 || z < 0 ) { 
        $("#alertnegativenum").show();
        document.getElementById("nbrelevators").value = "error"  
    } else {
        $("#alertnegativenum").hide();
     };
}
