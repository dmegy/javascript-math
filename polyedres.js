var sommetsTetraedre=new Array();
var aretesTetraedre=new Array();
var axesTetraedre=new Array();
var sommetsCube=new Array();
var aretesCube=new Array();
var axesCube=new Array();
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

sommetsTetraedre.push([1,1,1]);
sommetsTetraedre.push([-1,-1,1]);
sommetsTetraedre.push([1,-1,-1]);
sommetsTetraedre.push([-1,1,-1]);

for(var i=0 ; i<sommetsTetraedre.length ; i++)
    for(var j=i+1 ; j<sommetsTetraedre.length ; j++)
        aretesTetraedre.push([i,j]);

// trois axes d'ordre deux
axesTetraedre.push([1,0,0]);
axesTetraedre.push([0,1,0]);
axesTetraedre.push([0,0,1]);
// quatre axes d'ordre trois
axesTetraedre.push([1,1,1]);
axesTetraedre.push([-1,-1,1]);
axesTetraedre.push([1,-1,-1]);
axesTetraedre.push([-1,1,-1]);


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

//six axes d'ordre 2
axesCube[0]=[0,1,1];
axesCube[1]=[1,0,1];
axesCube[2]=[1,1,0];
axesCube[3]=[0,-1,1];
axesCube[4]=[-1,0,1];
axesCube[5]=[-1,1,0];
//quatre axes d'ordre 3
axesCube[6]=[1,1,1];
axesCube[7]=[-1,1,1];
axesCube[8]=[1,-1,1];
axesCube[9]=[-1,-1,1];
// trois axes d'ordre 4
axesCube[10]=[1,0,0];
axesCube[11]=[0,1,0];
axesCube[12]=[0,0,1];

// - - - - - - - - - - - - - - - - - -
// - - - - - O C T A E D R E - - - - -
// - - - - - - - - - - - - - - - - - -

// flemme d'écrire ça avec des boucles:
sommetsOctaedre.push([1,0,0]);
sommetsOctaedre.push([0,1,0]);
sommetsOctaedre.push([0,0,1]);
sommetsOctaedre.push([0,0,-1]);
sommetsOctaedre.push([0,-1,0]);
sommetsOctaedre.push([-1,0,0]);
//note : le sommet i est opposé au sommet 5-i

//les arêtes de l'octaèdre sont les 12 qui ne sont *pas* de longueur 2
// tester l'égalité sur sqrt(2) ne marche pas bien
for(var i=0 ; i<sommetsOctaedre.length ; i++)
    for(var j=i+1 ; j<sommetsOctaedre.length ; j++)
        if(distance(sommetsOctaedre[i], sommetsOctaedre[j])!=2)
            aretesOctaedre.push([i,j]);


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
        if(distance(sommetsIcosaedre[i], sommetsIcosaedre[j])==2)
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
