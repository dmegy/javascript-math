
//- - - - - - - - - - - - - - - - - - 
//- - - - Quaternions
//- - - - - - - - - - - - - - - - - -

// un quaternion sera stocké sous la forme [w,x,y,z]

function conjugueQ(q){
// q: tableau de longueur 4
	var s=[0,0,0,0];
	s[0]=q[0];
	for(var i=1;i<=3;i++)
		s[i]=-q[i];
	return(s);
}

function inverseQ(q){
// entrée : quaternion (non nul sinon erreur)
// sortie : quaternion
	var s=conjugueQ(q);
	var nn=0;
	for(var i=0;i<=3;i++)
		nn+=q[i]*q[i]; // carré de la norme
	for(var i=0;i<=3;i++)
		s[i]/=nn; // inutile de calculer la norme pour ensuite l'élever au carré
	return(s);
}

function produitQ(q,r){
// produit de deux quaternions:
	var s=[1,0,0,0];
	s[0]=q[0]*r[0]-q[1]*r[1]-q[1]*r[1]-q[1]*r[1];
	s[1]=q[0]*r[1]+r[0]*q[1]+(q[2]*r[3]-q[3]*r[2]);
	s[2]=q[0]*r[2]+r[0]*q[2]+(q[3]*r[1]-q[1]*r[3]);
	s[3]=q[0]*r[3]+r[0]*q[3]+(q[1]*r[2]-q[2]*r[1]);
	return(s);
}  

function conjuguerQ(p,q){
// conjuguer p par q non nul
	return produitQ(produitQ(q,p),inverseQ(q)); // qpq^{-1}
}

function axeAngleVersQ(axe,angle){
// entrée : vecteur, réel
// sortie :  quaternion, erreur si axe nul
	var q=[];
	var c=Math.cos(angle/2)/norme(axe);
	q.push(Math.sin(angle/2));
	q.push(c*axe[0],c*axe[1],c*axe[2]);
	return q;
}

function matriceQ(q){
	if (norme(q)!=1) q=normer(q); // sinon la matrice de sortie n'est pas orthogonale
	var M=new Array();
	var xx=q[1]*q[1];
	var xy=q[1]*q[2];
	var xz=q[1]*q[3];
	var xw=q[1]*q[0];
	var yy=q[2]*q[2];
	var yz=q[2]*q[3];
	var yw=q[2]*q[0];
	var zz=q[3]*q[3];
	var zw=q[3]*q[0];
	
	M=[
		[1-2*(yy-zz),2*(xy-zw),2*(xz+yw)],
		[2*(xy+zw),1-2*(xx+zz),2*(yz-xw)],
		[2*(xz-yw),2*(yz+xw),1-2*(xx+yy)]
	];
	return(M);
}