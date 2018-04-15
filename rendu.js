
//- - - - - - - - - - - - - - - - - -
//- - - - calculs et affichage
//- - - - - - - - - - - - - - - - - -

function calculerProjections() {
    for ( var i=0 ; i<sommets.length ; i++ ) {
        projections[i] = [produitScalaire(matriceProj[0],sommets[i])*100,
			produitScalaire(matriceProj[1],sommets[i])*100+200,
                       produitScalaire(matriceProj[2],sommets[i])*100+200];
    }
}

//dessine une arete entre le sommet p et le sommet q
function dessinerAreteEntre(p,q, couleur){
    var z;
    ctx.strokeStyle = couleur;
    z=(projections[p][0]+projections[q][0])/2;
    ctx.lineWidth = 0.005*(z+150);
    // opacité en fonction de la profondeur pour mieux voir
    ctx.beginPath();
    ctx.moveTo(projections[p][1], projections[p][2]);
    ctx.lineTo(projections[q][1], projections[q][2]);
    ctx.stroke();
}

//dessine la k-ème arète
function dessinerAreteNumero(k, couleur){
    var p = aretes[k][0];
    var q = aretes[k][1];
    dessinerAreteEntre(p,q,couleur);
}

function dessinerAretes() {// on dessine en noir
    for ( var n=0 ; n<aretes.length ; n++ ) {
        dessinerAreteNumero(n,"rgb(0,0,0)");
    }
}

function effacer() {
    ctx.clearRect(0,0,400,400);
}