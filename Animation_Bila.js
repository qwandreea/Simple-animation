
$(document).ready(function () {

    var bila = $("#bila");
	//variabila globala
    var stare = "pauza";
	//prima varianta:coltul stanga sus pt a pozitiona bila pentru a memora pozitia veche si a adauga deplasamentul
	//alta varianta:pt a nu memoria pozitia, se poate tine minte deplasarea pe x si pe y
    var pozitieInBila = { top: 0, left: 0 };

    var pozitiiSalvate = [];
    var contorPozitii = 0;

	//in functia animatie nu vom avea pozitia mouse ului decat daca o salvam in handlerul de mouse
    $(document).mousemove(function (e) {
        window.mouseXPos = e.pageX;
        window.mouseYPos = e.pageY;
    });

	//setarea unui handler pe evenimentul unui meniu contextual. Inchide apelul de handler default
    $(document)[0].oncontextmenu = function () { return false; } 

    function animatie() {
		//repozitionare obiect dupa pozitia mouse
        if (stare === "miscare") {
		//aici bila ia alte valori
            bila.offset({
                top: window.mouseYPos - pozitieInBila.top,
                left: window.mouseXPos - pozitieInBila.left
            });
            pozitiiSalvate.push(bila.offset());
        }
		//
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
		//butonul stanga
        if (e.button == 0) {
            stare = "miscare";
			//salvez locul unde s-a dat click pe bila
            pozitieInBila = {
                "top": window.mouseYPos - this.offsetTop,
                "left": window.mouseXPos - this.offsetLeft
            };
        }
		//butonul dreapta
        else if (e.button == 2) {
            stare = "redare";
            contorPozitii = 0;
        }
		//evenimentele pe obiectul div
        e.preventDefault();
    })
    
	//ramane in pauza daca nu am activat mouse ul
    bila.mouseup(function () {
        stare = "pauza";
    });

	//seteaza o functie care sa ruleze la un anumit interval
    setInterval(animatie, 15);
});