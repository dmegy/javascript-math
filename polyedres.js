var sommetsTetraedre=new Array();
var aretesTetraedre=new Array();
var sommetsCube=new Array();
var aretesCube=new Array();
var sommetsOctaedre=new Array();
var aretesOctaedre=new Array();
var phi = (1+Math.sqrt(5))/2; // nombre d'or
var sommetsIcosaedre=new Array();
var aretesIcosaedre=new Array();
var sommetsDodecaedre=new Array();
var aretesDodecaedre=new Array();

// - - - - - - - - - - - - - - - - - - -
// - - - - - T E T R A E D R E - - - - -
// - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - -
// - - - - - - - C U B E - - - - - - - 
// - - - - - - - - - - - - - - - - - -


for(var i=0 ; i<2 ; i++)
    for(var j=0 ; j<2 ; j++)
        for(var k=0 ; k<2 ; k++)
            sommetsCube.push([Math.pow((-1),i),Math.pow((-1),j),Math.pow((-1),k)]);
//note : le sommet i est opposé au sommet 7-i

for(var i=0 ; i<sommetsCube.length ; i++)
    for(var j=i+1 ; j<sommetsCube.length ; j++)
        if(distance(sommetsCube[i], sommetsCube[j])==2)
            aretesCube.push([i,j]);
//note : l'arete i est opposée à l'arete 11-i


// - - - - - - - - - - - - - - - - - -
// - - - - - O C T A E D R E - - - - -
// - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - -
// - - - - I C O S A E D R E - - - - -
// - - - - - - - - - - - - - - - - - -


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
for(var i=0 ; i<sommetsIcosaedre.length ; i++)
    for(var j=i+1 ; j<sommetsIcosaedre.length ; j++)
        if(distance(sommetsIcosaedre[i], sommetsIcosaedre[j])==2) // snif
            aretesIcosaedre.push([i,j]);
 

// - - - - - - - - - - - - - - - - - -
// - - - - D O D E C A E D R E - - - -
// - - - - - - - - - - - - - - - - - -


// sommets du premier cube
for(var i=0 ; i<2 ; i++)
    for(var j=0 ; j<2 ; j++)
        for(var k=0 ; k<2 ; k++)
            sommetsDodecaedre.push([Math.pow((-1),i),Math.pow((-1),j),Math.pow((-1),k)]);
//autres sommets, un peu moche mais flemme
for(var i=0 ; i<2 ; i++)
    for(var j=0 ; j<2 ; j++)
        sommetsDodecaedre.push([phi*Math.pow((-1),i),0,(phi-1)*Math.pow((-1),j)]);
for(var i=0 ; i<2 ; i++)
    for(var j=0 ; j<2 ; j++)
        sommetsDodecaedre.push([(phi-1)*Math.pow((-1),j),phi*Math.pow((-1),i),0]);
for(var i=0 ; i<2 ; i++)
    for(var j=0 ; j<2 ; j++)
        sommetsDodecaedre.push([0,(phi-1)*Math.pow((-1),j),phi*Math.pow((-1),i)]);



// les arêtes du dodécaèdre sont celles de longueur sqrt(5)-1
for(var i=0 ; i<sommetsDodecaedre.length ; i++)
    for(var j=i+1 ; j<sommetsDodecaedre.length ; j++)
    	//if(distance(sommetsDodecaedre[i], sommetsDodecaedre[j])==(Math.sqrt(5)-1))
        if(distance(sommetsDodecaedre[i], sommetsDodecaedre[j])<(Math.sqrt(5)-1)+0.1&&distance(sommetsDodecaedre[i], sommetsDodecaedre[j])>(Math.sqrt(5)-1)-0.1) // snif
            aretesDodecaedre.push([i,j]);