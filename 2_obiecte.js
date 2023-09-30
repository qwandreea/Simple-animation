
$(document).ready(function () {

    var bila = $("#bila");
	var bila2 = $("#bila2");
    var stare = "pauza";
	var stare2 = "pauza";
    var pozitieInBila = { top: 0, left: 0 };
	 var pozitieInBila2 = { top: 0, left: 0 };

    var pozitiiSalvate = [];
    var contorPozitii = 0;
	
	 var pozitiiSalvate2 = [];
    var contorPozitii2 = 0;
	
	var bile=[{stare:"pauza",pozitieInBila:{top:0 , left: 0} , pozitiiSalvate:0,contorPozitii:0}];

	
    $(document).mousemove(function (e) {
        window.mouseXPos = e.pageX;
        window.mouseYPos = e.pageY;
    });

    $(document)[0].oncontextmenu = function () { return false; } 


	
    function animatie() {
        if (stare === "miscare") {
            bila.offset({
                top: window.mouseYPos - pozitieInBila.top,
                left: window.mouseXPos - pozitieInBila.left
            });
            pozitiiSalvate.push(bila.offset());
        }
        else if (stare === "redare") {
            if (contorPozitii < pozitiiSalvate.length) {
                bila.offset(pozitiiSalvate[contorPozitii]);
                contorPozitii++;
            }
            else {
                stare = "pauza";
            }
        }
    }

    bila.mousedown(function (e) {
        if (e.button == 0) {
            stare = "miscare";
            pozitieInBila = {
                "top": window.mouseYPos - this.offsetTop,
                "left": window.mouseXPos - this.offsetLeft
            };
        }
        else if (e.button == 2) {
            stare = "redare";
            contorPozitii = 0;
        }

        e.preventDefault();
    })
    

    bila.mouseup(function () {
        stare = "pauza";
    });
	
	function animatie2() {
        if (stare2 === "miscare") {
            bila2.offset({
                top: window.mouseYPos - pozitieInBila2.top,
                left: window.mouseXPos - pozitieInBila2.left
            });
            pozitiiSalvate2.push(bila2.offset());
        }
        else if (stare2 === "redare") {
            if (contorPozitii2 < pozitiiSalvate2.length) {
                bila2.offset(pozitiiSalvate2[contorPozitii2]);
                contorPozitii2++;
            }
            else {
                stare2 = "pauza";
            }
        }
    }

    bila2.mousedown(function (e) {
        if (e.button == 0) {
            stare2 = "miscare";
            pozitieInBila2 = {
                "top": window.mouseYPos - this.offsetTop,
                "left": window.mouseXPos - this.offsetLeft
            };
        }
        else if (e.button == 2) {
            stare2 = "redare";
            contorPozitii2 = 0;
        }

        e.preventDefault();
    })
    

    bila2.mouseup(function () {
        stare2 = "pauza";
    });

    setInterval(animatie, 15);
	setInterval(animatie2, 15);
});