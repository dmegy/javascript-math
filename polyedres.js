// - - - - - - - - - - - - - - - - - -
// - - - - C U B E - - - -  
// - - - - - - - - - - - - - - - - - -

var sommetsCube=new Array();
for(var i=0 ; i<2 ; i++)
    for(var j=0 ; j<2 ; j++)
        for(var k=0 ; k<2 ; k++)
            sommetsCube.push([Math.pow((-1),i),Math.pow((-1),j),Math.pow((-1),k)]);
//note : le sommet i est opposé au sommet 7-i

var aretesCube=new Array();
for(var i=0 ; i<sommetsCube.length ; i++)
    for(var j=i+1 ; j<sommetsCube.length ; j++)
        if(distance(sommetsCube[i], sommetsCube[j])==2)
            aretesCube.push([i,j]);
//note : l'arete i est opposée à l'arete 11-i

// - - - - - - - - - - - - - - - - - -
// - - - - I C O S A E D R E - - - - -
// - - - - - - - - - - - - - - - - - -

var phi = (1+Math.sqrt(5))/2;

var sommetsIcosaedre=new Array();
for(var i=0 ; i<2 ; i++)
    for(var j=0 ; j<2 ; j++)
        sommetsIcosaedre.push([phi*Math.pow((-1),i),Math.pow((-1),j),0]);
for(var i=0 ; i<2 ; i++)
    for(var j=0 ; j<2 ; j++)
        sommetsIcosaedre.push([0,phi*Math.pow((-1),i),Math.pow((-1),j)]);
for(var i=0 ; i<2 ; i++)
    for(var j=0 ; j<2 ; j++)
        sommetsIcosaedre.push([Math.pow((-1),j),0,phi*Math.pow((-1),i),]);

// les arêtes de l'icosaèdre sont celles de longueur 2
var aretesIcosaedre=new Array();
for(var i=0 ; i<sommetsIcosaedre.length ; i++)
    for(var j=i+1 ; j<sommetsIcosaedre.length ; j++)
        if(distance(sommetsIcosaedre[i], sommetsIcosaedre[j])==2) // snif
            aretesIcosaedre.push([i,j]);
 