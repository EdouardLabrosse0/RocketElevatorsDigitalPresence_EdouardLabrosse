//the line below is so the "alert" stays hidden initialy until its shown by the if statement in any of the functions bellow.
$("#alertnegativenum").hide();
//



//function to call when manipulating with the residential section of the form.
$(".formelementsRE").change(ResultResidentialElevators);
function ResultResidentialElevators() {
	   
		
	var x = document.getElementById("Resnbrappartement").value;
    var y = document.getElementById("Resnbrfloors").value;
    var z = document.getElementById("Resnbrbasements").value;

    var nbr = Math.ceil( x / y );
    var nbrelev = Math.ceil(nbr / 6)
    var colonne =  Math.ceil(y /20);
    var  nbrelevators = nbrelev*colonne;
    console.log(nbrelevators)

    document.getElementById("nbrelevators").value = nbrelevators;

    if ( x < 0 || y < 0 || z < 0) { 
        $("#alertnegativenum").show();
        document.getElementById("nbrelevators").value = "error"
         } else {
            $("#alertnegativenum").hide();
         };

};
//



//function to call when manipulating with the commercial section of the form.
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
//



//function to call when manipulating with the corporate section of the form.
$(".formelementsC").change(ResultCorpElevators);

function ResultCorpElevators() {
	   
	var a = document.getElementById("Cnbrbuisnesses").value;
    var b = parseInt(document.getElementById("Cnbrfloors").value);
    var x = parseInt(document.getElementById("Cnbrbasements").value);
    var y = document.getElementById("Cnbrparking").value;
    var z = document.getElementById("Cmaxnbrpeople").value;

    var allfloor = parseInt(b + x);
    var allpeople = allfloor * z;
    var nbrelevatorrequired = Math.ceil(allpeople / 1000);
    var nbrcolumns = Math.ceil(allfloor / 20);
    var elevatorpercolumn = Math.ceil(nbrelevatorrequired / nbrcolumns);

    var nbrelevators = Math.ceil(elevatorpercolumn * nbrcolumns);

    document.getElementById("nbrelevators").value = nbrelevators;

    if ( b < 0 || a < 0 || x < 0 || y < 0 || z < 0 ) { 
        $("#alertnegativenum").show();
        document.getElementById("nbrelevators").value = "error"  
    } else {
        $("#alertnegativenum").hide();
     };
}
//



//function to call when manipulating with the hybrid section of the form.
$(".formelementsCH").change(ResultHybridElevators);
function ResultHybridElevators() {
	   
	var a = document.getElementById("CHnbrbuisnesses").value;
    var b = parseInt(document.getElementById("CHnbrfloors").value);
    var x = parseInt(document.getElementById("CHnbrbasements").value);
    var y = document.getElementById("CHnbrparking").value;
    var z = document.getElementById("CHmaxnbrpeople").value;

    var allfloor = parseInt(b + x);
    var allpeople = allfloor * z;
    var nbrelevatorrequired = Math.ceil(allpeople / 1000); 5
    var nbrcolumns = Math.ceil(allfloor / 20); 3
    var elevatorpercolumn = Math.ceil(nbrelevatorrequired / nbrcolumns);

    var nbrelevators = Math.ceil(elevatorpercolumn * nbrcolumns);

    document.getElementById("nbrelevators").value = nbrelevators;

    if ( b < 0 || a < 0 || x < 0 || y < 0 || z < 0 ) { 
        $("#alertnegativenum").show();
        document.getElementById("nbrelevators").value = "error"  
    } else {
        $("#alertnegativenum").hide();
     };
}

