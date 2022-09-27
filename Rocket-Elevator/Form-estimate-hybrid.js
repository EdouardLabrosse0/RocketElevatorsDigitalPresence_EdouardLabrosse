$("#alertnegativenum").hide();
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
