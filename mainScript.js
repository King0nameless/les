function changeDiv()
/* exported changeDiv */
{ 'use strict';
	 //code voor margin left
	 var marginLeft = parseInt(document.getElementById('left').value);
	 //de alert werkt alleen als de input begint met een letter
	 console.log (marginLeft);
	 if(isNaN(marginLeft)){
		 alert('in left moet je een getal kiezen');
	 }

	 document.getElementById('hiddenDiv').style.marginLeft = marginLeft +'px';

	 //code margin top
	  var marginTop = parseInt(document.getElementById('top').value);
	  //de alert werkt alleen als de input begint met een letter
	 console.log (marginTop);

	 if(isNaN(marginTop)){
		 alert('in Top moet je een getal kiezen');
	 }

	 document.getElementById('hiddenDiv').style.marginTop = marginTop +'px';


	 //code width
	  var width = parseInt(document.getElementById('width').value);
	  //de alert werkt alleen als de input begint met een letter
	 console.log (width);

	 if(isNaN(width)){
		 alert('in width moet je een getal kiezen');
	 }

	 document.getElementById('hiddenDiv').style.width = width +'px';
 
 	 //code height
	  var height = parseInt(document.getElementById('height').value);
	  //de alert werkt alleen als de input begint met een letter
	 console.log (width);

	 if(isNaN(height)){
		 alert('in height moet je een getal kiezen');
	 }

	 document.getElementById('hiddenDiv').style.height = height +'px';
 
 	//code height
	  var color = document.getElementById('color').value;
	  //de alert werkt alleen als de input begint met een letter
	 console.log (color);

	 document.getElementById('hiddenDiv').style.backgroundColor = color;
 
 	 //code text
	  var text = document.getElementById('text').value;
	  //de alert werkt alleen als de input begint met een letter
	 console.log (text);

	 document.getElementById('hiddenDiv').innerHTML = text;
////////////////////////////////////////////////////////////////////
	 /*var color = document.getElementById("color").value;
	 //de alert werkt alleen als de input begint met een letter
	console.log (color);


	document.getElementById('hiddenDiv').style.backgroundColor =color;
*/

}//eind function
