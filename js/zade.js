var i = 1, k = 0, n = 0,q;



function Build() {

	var redf = document.getElementById('firstLi').value;
	var redf2 = document.getElementById('nextLi').value;
	var rowX1 = document.getElementById('rowX1');
	var rowX2 = document.getElementById('rowX2');
	var rowX3 = document.getElementById('rowX3');
	var rowX4 = document.getElementById('rowX4');
	var rowX5 = document.getElementById('rowX5');
	var rowX6 = document.getElementById('rowX6');
	var rowX7 = document.getElementById('rowX7');
	var rowX8 = document.getElementById('rowX8');

	var rowX9 = document.getElementById('rowX9');
	var rowX10 = document.getElementById('rowX10');
	var rowX11 = document.getElementById('rowX11');
	var rowX12 = document.getElementById('rowX12');

	$("#btn_calc").css({
		'display':'none'
	});


	var target = document.getElementById('target').value;
	var limitation = document.getElementById('limitation').value;


	var red = document.getElementsByClassName('red').length;
	red +=2;

	for (var i = 1; i <= target; i++){
		// $("#tftable").append("<tr><td>G <sub>"+ i + "</sub> (x)</td><td><input type='text' id='x"+i+"1'></td><td><input type='text' id='x"+i+"2'></td><td><input type='text' id='x"+i+"3'></td><td><input type='text' id='x"+i+"4'></td><td><input type='text' id='x"+i+"5'></td><td><input type='text' id='x"+i+"6'></td><td><input type='text' id='x"+i+"7'></td><td><input type='text' id='x"+i+"8'></td><td><input type='text' id='x"+i+"9'></td><td><input type='text' id='x"+i+"10'></td></tr>");
			$("#tftable").append("<tr id = trG" + i + "><td>μG <sub>"+ i + "</sub> (x)</td></tr>");	
	}

		for (var q = 1; q <= red; q++){
			$("#trG1").append("<td><input type='text' class=SelInpt id= g1" + q + "></td>");	
			$("#trG2").append("<td><input type='text' class=SelInpt id= g2" + q + "></td>");	
			$("#trG3").append("<td><input type='text' class=SelInpt id= g3" + q + "></td>");		
			$("#trG4").append("<td><input type='text' class=SelInpt id= g4" + q + "></td>");	
			$("#trG5").append("<td><input type='text' class=SelInpt id= g5" + q + "></td>");	
			$("#trG6").append("<td><input type='text' class=SelInpt id= g6" + q + "></td>");	
			$("#trG7").append("<td><input type='text' class=SelInpt id= g7" + q + "></td>");	
			$("#trG8").append("<td><input type='text' class=SelInpt id= g8" + q + "></td>");	
			$("#trG9").append("<td><input type='text' class=SelInpt id= g9" + q + "></td>");	
			$("#trG10").append("<td><input type='text' class=SelInpt id= g10" + q + "></td>");
	}

	for (var q = 1; q <= red+1; q++){
		$("#header_table").append("<th id= th" + q + "></th>");
	}

	document.getElementById('th1').innerHTML = 'x';
	document.getElementById('th2').innerHTML = redf;
	document.getElementById('th3').innerHTML = redf2;


	for (var j = 1; j <= limitation; j++){
		// $("#tftable").append("<tr><td>С <sub>"+ j + "</sub> (x)</td><td><input type='text' id='x11'></td><td><input type='text' id='x12'></td><td><input type='text' id='x13'></td><td><input type='text' id='x14'></td><td><input type='text' id='x15'></td><td><input type='text' id='x16'></td><td><input type='text' id='x17'></td><td><input type='text' id='x18'></td><td><input type='text' id='x19'></td><td><input type='text' id='x110'></td></tr>");	
		$("#tftable").append("<tr id = tr" + j + "><td>μС <sub>"+ j + "</sub> (x)</td></tr>");	
	}


	for (var t = 1; t <= red; t++){
			$("#tr1").append("<td><input type='text' class=SelInpt id=c1" + t + "></td>");	
			$("#tr2").append("<td><input type='text' class=SelInpt id=c2" + t + "></td>");	
			$("#tr3").append("<td><input type='text' class=SelInpt id=c3" + t + "></td>");	
			$("#tr4").append("<td><input type='text' class=SelInpt id=c4" + t + "></td>");	
			$("#tr5").append("<td><input type='text' class=SelInpt id=c5" + t + "></td>");	
			$("#tr6").append("<td><input type='text' class=SelInpt id=c6" + t + "></td>");	
			$("#tr7").append("<td><input type='text' class=SelInpt id=c7" + t + "></td>");	
			$("#tr8").append("<td><input type='text' class=SelInpt id=c8" + t + "></td>");	
			$("#tr9").append("<td><input type='text' class=SelInpt id=c9" + t + "></td>");	
			$("#tr10").append("<td><input type='text' class=SelInpt id=c10" + t + "></td>");	
		
	}


	if (rowX1) {
		var rowX1 = document.getElementById('rowX1').value;
		document.getElementById('th4').innerHTML = rowX1;
	}
	if (rowX2) {
		var rowX2 = document.getElementById('rowX2').value;
		document.getElementById('th5').innerHTML = rowX2;
	}
	if (rowX3) {
		var rowX3 = document.getElementById('rowX3').value;
		document.getElementById('th6').innerHTML = rowX3;
	}
	if (rowX4) {
		var rowX4 = document.getElementById('rowX4').value;
		document.getElementById('th7').innerHTML = rowX4;
	}
	if (rowX5) {
		var rowX5 = document.getElementById('rowX5').value;
		document.getElementById('th8').innerHTML = rowX5;
	}
	if (rowX6) {
		var rowX6 = document.getElementById('rowX6').value;
		document.getElementById('th9').innerHTML = rowX6;
	}
	if (rowX7) {
		var rowX7 = document.getElementById('rowX7').value;
		document.getElementById('th10').innerHTML = rowX7;
	}
	if (rowX8) {
		var rowX8 = document.getElementById('rowX8').value;
		document.getElementById('th11').innerHTML = rowX8;
	}



	if (rowX9) {
		var rowX9 = document.getElementById('rowX9').value;
		document.getElementById('th12').innerHTML = rowX9;
	}

	if (rowX10) {
		var rowX10 = document.getElementById('rowX10').value;
		document.getElementById('th13').innerHTML = rowX10;
	}

	if (rowX11) {
		var rowX11 = document.getElementById('rowX11').value;
		document.getElementById('th14').innerHTML = rowX11;
	}

	if (rowX12) {
		var rowX12 = document.getElementById('rowX12').value;
		document.getElementById('th15').innerHTML = rowX12;
	}


};



function AddRowX() {

	n++;
	if( n >= 12 ){
		$("#fontawesome").addClass('blocked');
	} 
	$("#tree").append("<li><input class='red'" + "id = rowX" + n + "></li>");


};


function Count(){

	var red = document.getElementsByClassName('red').length;
	var lng = document.getElementsByClassName('SelInpt');

	var g11 = document.getElementById('g11');
	var g12 = document.getElementById('g12');
	var g13 = document.getElementById('g13');
	var g14 = document.getElementById('g14');
	var g15 = document.getElementById('g15');
	var g16 = document.getElementById('g16');
	var g17 = document.getElementById('g17');
	var g18 = document.getElementById('g18');
	var g19 = document.getElementById('g19');
	var g110 = document.getElementById('g110');

	var g111 = document.getElementById('g111');
	var g112 = document.getElementById('g112');
	var g113 = document.getElementById('g113');
	var g114 = document.getElementById('g114');

	var g21 = document.getElementById('g21');
	var g22 = document.getElementById('g22');
	var g23 = document.getElementById('g23');
	var g24 = document.getElementById('g24');
	var g25 = document.getElementById('g25');
	var g26 = document.getElementById('g26');
	var g27 = document.getElementById('g27');
	var g28 = document.getElementById('g28');
	var g29 = document.getElementById('g29');
	var g210 = document.getElementById('g210');

	var g211 = document.getElementById('g211');
	var g212 = document.getElementById('g212');
	var g213 = document.getElementById('g213');
	var g214 = document.getElementById('g214');

	var g31 = document.getElementById('g31');
	var g32 = document.getElementById('g32');
	var g33 = document.getElementById('g33');
	var g34 = document.getElementById('g34');
	var g35 = document.getElementById('g35');
	var g36 = document.getElementById('g36');
	var g37 = document.getElementById('g37');
	var g38 = document.getElementById('g38');
	var g39 = document.getElementById('g39');
	var g310 = document.getElementById('g310');

	var g311 = document.getElementById('g311');
	var g312 = document.getElementById('g312');
	var g313 = document.getElementById('g313');
	var g314 = document.getElementById('g314');


	var c11 = document.getElementById('c11');
	var c12 = document.getElementById('c12');
	var c13 = document.getElementById('c13');
	var c14 = document.getElementById('c14');
	var c15 = document.getElementById('c15');
	var c16 = document.getElementById('c16');
	var c17 = document.getElementById('c17');
	var c18 = document.getElementById('c18');
	var c19 = document.getElementById('c19');
	var c110 = document.getElementById('c110');

	var c111 = document.getElementById('c111');
	var c112 = document.getElementById('c112');
	var c113 = document.getElementById('c113');
	var c114 = document.getElementById('c114');

	var c21 = document.getElementById('c21');
	var c22 = document.getElementById('c22');
	var c23 = document.getElementById('c23');
	var c24 = document.getElementById('c24');
	var c25 = document.getElementById('c25');
	var c26 = document.getElementById('c26');
	var c27 = document.getElementById('c27');
	var c28 = document.getElementById('c28');
	var c29 = document.getElementById('c29');
	var c210 = document.getElementById('c210');

	var c211 = document.getElementById('c211');
	var c212 = document.getElementById('c212');
	var c213 = document.getElementById('c213');
	var c214 = document.getElementById('c214');


	var c31 = document.getElementById('c31');
	var c32 = document.getElementById('c32');
	var c33 = document.getElementById('c33');
	var c34 = document.getElementById('c34');
	var c35 = document.getElementById('c35');
	var c36 = document.getElementById('c36');
	var c37 = document.getElementById('c37');
	var c38 = document.getElementById('c38');
	var c39 = document.getElementById('c39');
	var c310 = document.getElementById('c310');

	var c311 = document.getElementById('c311');
	var c312 = document.getElementById('c312');
	var c313 = document.getElementById('c313');
	var c314 = document.getElementById('c314');

	var c41 = document.getElementById('c41');
	var c42 = document.getElementById('c42');
	var c43 = document.getElementById('c43');
	var c44 = document.getElementById('c44');
	var c45 = document.getElementById('c45');
	var c46 = document.getElementById('c46');
	var c47 = document.getElementById('c47');
	var c48 = document.getElementById('c48');
	var c49 = document.getElementById('c49');
	var c410 = document.getElementById('c410');

	var c411 = document.getElementById('c411');
	var c412 = document.getElementById('c412');
	var c413 = document.getElementById('c413');
	var c414 = document.getElementById('c414');

	var c51 = document.getElementById('c51');
	var c52 = document.getElementById('c52');
	var c53 = document.getElementById('c53');
	var c54 = document.getElementById('c54');
	var c55 = document.getElementById('c55');
	var c56 = document.getElementById('c56');
	var c57 = document.getElementById('c57');
	var c58 = document.getElementById('c58');
	var c59 = document.getElementById('c59');
	var c510 = document.getElementById('c510');

	var c511 = document.getElementById('c511');
	var c512 = document.getElementById('c512');
	var c513 = document.getElementById('c513');
	var c514 = document.getElementById('c514');



	
	$("#btn_count").css({
		'display':'none'
	});
	


	red +=2;
	$("#tftable").append("<tr id = rezultTR><td>μD <sub></sub> (x)</td></tr>");	
	for (var q = 1; q <= red; q++){
		$("#rezultTR").append("<td><input type='text' id= rez1" + q + "></td>");	
	}

// var input1 = $("#trG1 > td > input");

	var rez11 = document.getElementById('rez11');
	var rez12 = document.getElementById('rez12');
	var rez13 = document.getElementById('rez13');
	var rez14 = document.getElementById('rez14');
	var rez15 = document.getElementById('rez15');
	var rez16 = document.getElementById('rez16');
	var rez17 = document.getElementById('rez17');
	var rez18 = document.getElementById('rez18');
	var rez19 = document.getElementById('rez19');
	var rez110 = document.getElementById('rez110');

	var rez111 = document.getElementById('rez111');
	var rez112 = document.getElementById('rez112');
	var rez113 = document.getElementById('rez113');
	var rez114 = document.getElementById('rez114');

	
	// if(rez12){var rez12 =  document.getElementById('rez12').value;}
	// if(rez13){var rez13 =  document.getElementById('rez13').value;}
	// if(rez4){var rez4 =  document.getElementById('rez14').value;}
	// if(rez5){var rez5 =  document.getElementById('rez15').value;}
	// if(rez6){var rez6 =  document.getElementById('rez16').value;}
	// if(rez7){var rez7 =  document.getElementById('rez17').value;}
	// if(rez8){var rez8 =  document.getElementById('rez18').value;}
	// if(rez9){var rez9 =  document.getElementById('rez19').value;}
	// if(rez10){var rez10 =  document.getElementById('rez110').value;}

	


	if(g11){var g11 = document.getElementById('g11').value;}
	if(g12){var g12 = document.getElementById('g12').value;}
	if(g13){var g13 = document.getElementById('g13').value;}
	if(g14){var g14 = document.getElementById('g14').value;}
	if(g15){var g15 = document.getElementById('g15').value;}
	if(g16){var g16 = document.getElementById('g16').value;}
	if(g17){var g17 = document.getElementById('g17').value;}
	if(g18){var g18 = document.getElementById('g18').value;}
	if(g19){var g19 = document.getElementById('g19').value;}
	if(g110){var g110 = document.getElementById('g110').value;}
	if(g111){var g111 = document.getElementById('g111').value;}
	if(g112){var g112 = document.getElementById('g112').value;}
	if(g113){var g113 = document.getElementById('g113').value;}
	if(g114){var g114 = document.getElementById('g114').value;}
	




	if($("#trG2")){
		if(g21){var g21 = document.getElementById('g21').value;}
		if(g22){var g22 = document.getElementById('g22').value;}
		if(g23){var g23 = document.getElementById('g23').value;}
		if(g24){var g24 = document.getElementById('g24').value;}
		if(g25){var g25 = document.getElementById('g25').value;}
		if(g26){var g26 = document.getElementById('g26').value;}
		if(g27){var g27 = document.getElementById('g27').value;}
		if(g28){var g28 = document.getElementById('g28').value;}
		if(g29){var g29 = document.getElementById('g29').value;}
		if(g210){var g210 = document.getElementById('g210').value;}

		if(g211){var g211 = document.getElementById('g211').value;}
		if(g212){var g212 = document.getElementById('g212').value;}
		if(g213){var g213 = document.getElementById('g213').value;}
		if(g214){var g214 = document.getElementById('g214').value;}
	}

	if($("#trG3")){
		if(g31){var g31 = document.getElementById('g31').value;}
		if(g32){var g32 = document.getElementById('g32').value;}
		if(g33){var g33 = document.getElementById('g33').value;}
		if(g34){var g34 = document.getElementById('g34').value;}
		if(g35){var g35 = document.getElementById('g35').value;}
		if(g36){var g36 = document.getElementById('g36').value;}
		if(g37){var g37 = document.getElementById('g37').value;}
		if(g38){var g38 = document.getElementById('g38').value;}
		if(g39){var g39 = document.getElementById('g39').value;}
		if(g310){var g310 = document.getElementById('g310').value;}

		if(g311){var g311 = document.getElementById('g311').value;}
		if(g312){var g312 = document.getElementById('g312').value;}
		if(g313){var g313 = document.getElementById('g313').value;}
		if(g314){var g314 = document.getElementById('g314').value;}
	}

		if(c11){var c11 = document.getElementById('c11').value;}
		if(c12){var c12 = document.getElementById('c12').value;}
		if(c13){var c13 = document.getElementById('c13').value;}
		if(c14){var c14 = document.getElementById('c14').value;}
		if(c15){var c15 = document.getElementById('c15').value;}
		if(c16){var c16 = document.getElementById('c16').value;}
		if(c17){var c17 = document.getElementById('c17').value;}
		if(c18){var c18 = document.getElementById('c18').value;}
		if(c19){var c19 = document.getElementById('c19').value;}
		if(c110){var c110 = document.getElementById('c110').value;}

		if(c111){var c111 = document.getElementById('c111').value;}
		if(c112){var c112 = document.getElementById('c112').value;}
		if(c113){var c113 = document.getElementById('c113').value;}
		if(c114){var c114 = document.getElementById('c114').value;}



	if($("#tr2")){
		if(c21){var c21 = document.getElementById('c21').value;}
		if(c22){var c22 = document.getElementById('c22').value;}
		if(c23){var c23 = document.getElementById('c23').value;}
		if(c24){var c24 = document.getElementById('c24').value;}
		if(c25){var c25 = document.getElementById('c25').value;}
		if(c26){var c26 = document.getElementById('c26').value;}
		if(c27){var c27 = document.getElementById('c27').value;}
		if(c28){var c28 = document.getElementById('c28').value;}
		if(c29){var c29 = document.getElementById('c29').value;}
		if(c210){var c210 = document.getElementById('c210').value;}

		if(c211){var c211 = document.getElementById('c211').value;}
		if(c212){var c212 = document.getElementById('c212').value;}
		if(c213){var c213 = document.getElementById('c213').value;}
		if(c214){var c214 = document.getElementById('c214').value;}
	}

	if($("#tr3")){
		if(c31){var c31 = document.getElementById('c31').value;}
		if(c32){var c32 = document.getElementById('c32').value;}
		if(c33){var c33 = document.getElementById('c33').value;}
		if(c34){var c34 = document.getElementById('c34').value;}
		if(c35){var c35 = document.getElementById('c35').value;}
		if(c36){var c36 = document.getElementById('c36').value;}
		if(c37){var c37 = document.getElementById('c37').value;}
		if(c38){var c38 = document.getElementById('c38').value;}
		if(c39){var c39 = document.getElementById('c39').value;}
		if(c310){var c310 = document.getElementById('c310').value;}

		if(c311){var c311 = document.getElementById('c311').value;}
		if(c312){var c312 = document.getElementById('c312').value;}
		if(c313){var c313 = document.getElementById('c313').value;}
		if(c314){var c314 = document.getElementById('c314').value;}


	}

	if($("#tr4")){
		if(c41){var c41 = document.getElementById('c41').value;}
		if(c42){var c42 = document.getElementById('c42').value;}
		if(c43){var c43 = document.getElementById('c43').value;}
		if(c44){var c44 = document.getElementById('c44').value;}
		if(c45){var c45 = document.getElementById('c45').value;}
		if(c46){var c46 = document.getElementById('c46').value;}
		if(c47){var c47 = document.getElementById('c47').value;}
		if(c48){var c48 = document.getElementById('c48').value;}
		if(c49){var c49 = document.getElementById('c49').value;}
		if(c410){var c410 = document.getElementById('c410').value;}

		if(c411){var c411 = document.getElementById('c411').value;}
		if(c412){var c412 = document.getElementById('c412').value;}
		if(c413){var c413 = document.getElementById('c413').value;}
		if(c414){var c414 = document.getElementById('c414').value;}
	}

	if($("#tr5")){
		if(c51){var c51 = document.getElementById('c51').value;}
		if(c52){var c52 = document.getElementById('c52').value;}
		if(c53){var c53 = document.getElementById('c53').value;}
		if(c54){var c54 = document.getElementById('c54').value;}
		if(c55){var c55 = document.getElementById('c55').value;}
		if(c56){var c56 = document.getElementById('c56').value;}
		if(c57){var c57 = document.getElementById('c57').value;}
		if(c58){var c58 = document.getElementById('c58').value;}
		if(c59){var c59 = document.getElementById('c59').value;}
		if(c510){var c410 = document.getElementById('c510').value;}

		if(c511){var c511 = document.getElementById('c511').value;}
		if(c512){var c512 = document.getElementById('c512').value;}
		if(c513){var c513 = document.getElementById('c513').value;}
		if(c514){var c514 = document.getElementById('c514').value;}
	}



var t = null;

var rez1 = [parseFloat(g11), parseFloat(g21), parseFloat(g31), parseFloat(c11), parseFloat(c21), parseFloat(c31), parseFloat(c41), parseFloat(c51)];

var rez2 = [parseFloat(g12), parseFloat(g22), parseFloat(g32), parseFloat(c12), parseFloat(c22), parseFloat(c32), parseFloat(c42), parseFloat(c52)];

var rez3 = [parseFloat(g13), parseFloat(g23), parseFloat(g33), parseFloat(c13), parseFloat(c23), parseFloat(c33), parseFloat(c43), parseFloat(c53)];

var rez4 = [parseFloat(g14), parseFloat(g24), parseFloat(g34), parseFloat(c14), parseFloat(c24), parseFloat(c34), parseFloat(c44), parseFloat(c54)];

var rez5 = [parseFloat(g15), parseFloat(g25), parseFloat(g35), parseFloat(c15), parseFloat(c25), parseFloat(c35), parseFloat(c51), parseFloat(c55)];

var rez6 = [parseFloat(g16), parseFloat(g26), parseFloat(g36), parseFloat(c16), parseFloat(c26), parseFloat(c36), parseFloat(c46), parseFloat(c56)];

var rez7 = [parseFloat(g17), parseFloat(g27), parseFloat(g37), parseFloat(c17), parseFloat(c27), parseFloat(c37), parseFloat(c47), parseFloat(c57)];

var rez8 = [parseFloat(g18), parseFloat(g28), parseFloat(g38), parseFloat(c18), parseFloat(c28), parseFloat(c38), parseFloat(c48), parseFloat(c58)];

var rez9 = [parseFloat(g19), parseFloat(g29), parseFloat(g39), parseFloat(c19), parseFloat(c29), parseFloat(c39), parseFloat(c49), parseFloat(c59)];

var rez10 = [parseFloat(g110), parseFloat(g210), parseFloat(g310), parseFloat(c110), parseFloat(c210), parseFloat(c310), parseFloat(c410), parseFloat(c510)];

var rezs11 = [parseFloat(g111), parseFloat(g211), parseFloat(g311), parseFloat(c111), parseFloat(c211), parseFloat(c311), parseFloat(c411), parseFloat(c511)];

var rezs12 = [parseFloat(g112), parseFloat(g212), parseFloat(g312), parseFloat(c112), parseFloat(c212), parseFloat(c312), parseFloat(c412), parseFloat(c512)];

var rezs13 = [parseFloat(g113), parseFloat(g213), parseFloat(g313), parseFloat(c113), parseFloat(c213), parseFloat(c313), parseFloat(c413), parseFloat(c513)];

var rezs14 = [parseFloat(g114), parseFloat(g214), parseFloat(g314), parseFloat(c114), parseFloat(c214), parseFloat(c314), parseFloat(c414), parseFloat(c514)];



var min1 = 9999,
	min2 = 9999,
	min3 = 9999,
	min4 = 9999,
	min5 = 9999,
	min6 = 9999,
	min7 = 9999,
	min8 = 9999,
	min9 = 9999,
	min10 = 9999,

	min11 = 9999,
	min12 = 9999,
	min13 = 9999,
	min14 = 9999;


rez1 = rez1.filter(function(x) {
    return x !== undefined && x !== null; 
});

rez2 = rez2.filter(function(x) {
    return x !== undefined && x !== null; 
});

rez3 = rez3.filter(function(x) {
    return x !== undefined && x !== null; 
});

rez4 = rez4.filter(function(x) {
    return x !== undefined && x !== null; 
});

rez5 = rez5.filter(function(x) {
    return x !== undefined && x !== null; 
});

rez6 = rez6.filter(function(x) {
    return x !== undefined && x !== null; 
});

rez7 = rez7.filter(function(x) {
    return x !== undefined && x !== null; 
});

rez8 = rez8.filter(function(x) {
    return x !== undefined && x !== null; 
});

rez9 = rez9.filter(function(x) {
    return x !== undefined && x !== null; 
});

rez10 = rez10.filter(function(x) {
    return x !== undefined && x !== null; 
});

rezs11 = rezs11.filter(function(x) {
    return x !== undefined && x !== null; 
});

rezs12 = rezs12.filter(function(x) {
    return x !== undefined && x !== null; 
});

rezs13 = rezs13.filter(function(x) {
    return x !== undefined && x !== null; 
});

rezs14 = rezs14.filter(function(x) {
    return x !== undefined && x !== null; 
});

console.log(rezs11);
console.log(rez1);

for (var i = 0; i < rez1.length; i++) {
	if(rez1[i] < min1){
		min1 = rez1[i];
	}
}

for (var i = 0; i < rez2.length; i++) {
	if(rez2[i] < min2){
		min2 = rez2[i];
	}
}

for (var i = 0; i < rez3.length; i++) {
	if(rez3[i] < min3){
		min3 = rez3[i];
	}
}

for (var i = 0; i < rez4.length; i++) {
	if(rez4[i] < min4){
		min4 = rez4[i];
	}
}

for (var i = 0; i < rez5.length; i++) {
	if(rez5[i] < min5){
		min5 = rez5[i];
	}
}

for (var i = 0; i < rez6.length; i++) {
	if(rez6[i] < min6){
		min6 = rez6[i];
	}
}

for (var i = 0; i < rez7.length; i++) {
	if(rez7[i] < min7){
		min7 = rez7[i];
	}
}

for (var i = 0; i < rez8.length; i++) {
	if(rez8[i] < min8){
		min8 = rez8[i];
	}
}

for (var i = 0; i < rez9.length; i++) {
	if(rez9[i] < min9){
		min9 = rez9[i];
	}
}

for (var i = 0; i < rez10.length; i++) {
	if(rez10[i] < min10){
		min10 = rez10[i];
	}
}

for (var i = 0; i < rezs11.length; i++) {
	if(rezs11[i] < min11){
		min11 = rezs11[i];
	}
}

for (var i = 0; i < rezs12.length; i++) {
	if(rezs12[i] < min12){
		min12 = rezs12[i];
	}
}

for (var i = 0; i < rezs13.length; i++) {
	if(rezs13[i] < min13){
		min13 = rezs13[i];
	}
}

for (var i = 0; i < rezs14.length; i++) {
	if(rezs14[i] < min14){
		min14 = rezs14[i];
	}
}


if(rez11){rez11.value = min1}
if(rez12){rez12.value = min2}
if(rez13){rez13.value = min3}
if(rez14){rez14.value = min4}
if(rez15){rez15.value = min5}
if(rez16){rez16.value = min6}
if(rez17){rez17.value = min7}
if(rez18){rez18.value = min8}
if(rez19){rez19.value = min9}
if(rez110){rez110.value = min10}

if(rez111){rez111.value = min11}
if(rez112){rez112.value = min12}
if(rez113){rez113.value = min13}
if(rez114){rez114.value = min14}


var rezultMin = [min1, min2, min3, min4, min5, min6, min7, min8, min9, min10, min11, min12, min13, min14];

rezultMin = rezultMin.filter(function(x) {
    return x !== undefined && x !== null && x !== 9999; 
});

var minREZ = -9999;
	for (var i = 0; i < rezultMin.length; i++) {
		if(rezultMin[i] > minREZ){
			minREZ = rezultMin[i];
		}
	}


var conclusion_x = document.getElementById('conclusion_x');
var conclusion_x2 = document.getElementById('conclusion_x2');
var conclusion_FN = document.getElementById('conclusion_FN');
// var conclusion_FN = document.getElementById('conclusion_FN');

// conclusion_x.value = minREZ;

	conclusion_FN.value = minREZ;



$('#conclusion').css({
	'display':'inherit',
})

if (rez11.value == minREZ) {
	$(rez11).css({
		'background-color': '#9cff66',
	});
	conclusion_x.value = document.getElementById('th2').innerHTML;
	conclusion_x2.value = document.getElementById('th2').innerHTML;
}

if (rez12.value == minREZ) {
	$(rez12).css({
		'background-color': '#9cff66',
	});
	conclusion_x.value = document.getElementById('th3').innerHTML;
	conclusion_x2.value = document.getElementById('th3').innerHTML;
}

// 	var rrr = document.getElementById('th2').innerHTML;
// console.log(rrr);


if (rez13.value == minREZ) {
	$(rez13).css({
		'background-color': '#9cff66',
	});
	conclusion_x.value = document.getElementById('th4').innerHTML;
	conclusion_x2.value = document.getElementById('th4').innerHTML;
}


if (rez14.value == minREZ) {
	$(rez14).css({
		'background-color': '#9cff66',
	});
	conclusion_x.value = document.getElementById('th5').innerHTML;
	conclusion_x2.value = document.getElementById('th4').innerHTML;

}

if (rez15.value == minREZ) {
	$(rez15).css({
		'background-color': '#9cff66',
	});
	conclusion_x.value = document.getElementById('th6').innerHTML;
	conclusion_x2.value = document.getElementById('th6').innerHTML;
}

if (rez16.value == minREZ) {
	$(rez16).css({
		'background-color': '#9cff66',
	});
	conclusion_x.value = document.getElementById('th7').innerHTML;
	conclusion_x2.value = document.getElementById('th7').innerHTML;
}

if (rez17.value == minREZ) {
	$(rez17).css({
		'background-color': '#9cff66',
	});
	conclusion_x.value = document.getElementById('th8').innerHTML;
	conclusion_x2.value = document.getElementById('th8').innerHTML;
}

if (rez18.value == minREZ) {
	$(rez18).css({
		'background-color': '#9cff66',
	});
	conclusion_x.value = document.getElementById('th9').innerHTML;
	conclusion_x2.value = document.getElementById('th9').innerHTML;
}

if (rez19.value == minREZ) {
	$(rez19).css({
		'background-color': '#9cff66',
	});
	conclusion_x.value = document.getElementById('th10').innerHTML;
	conclusion_x2.value = document.getElementById('th10').innerHTML;
}

if (rez110.value == minREZ) {
	$(rez110).css({
		'background-color': '#9cff66',
	});
	conclusion_x.value = document.getElementById('th11').innerHTML;
	conclusion_x2.value = document.getElementById('th11').innerHTML;
}

if (rez111.value == minREZ) {
	$(rez111).css({
		'background-color': '#9cff66',
	});
	conclusion_x.value = document.getElementById('th12').innerHTML;
	conclusion_x2.value = document.getElementById('th12').innerHTML;
}


if (rez112.value == minREZ) {
	$(rez112).css({
		'background-color': '#9cff66',
	});
	conclusion_x.value = document.getElementById('th13').innerHTML;
	conclusion_x2.value = document.getElementById('th13').innerHTML;
}


if (rez113.value == minREZ) {
	$(rez113).css({
		'background-color': '#9cff66',
	});
	conclusion_x.value = document.getElementById('th14').innerHTML;
	conclusion_x2.value = document.getElementById('th14').innerHTML;
}


if (rez114.value == minREZ) {
	$(rez114).css({
		'background-color': '#9cff66',
	});
	conclusion_x.value = document.getElementById('th15').innerHTML;
	conclusion_x2.value = document.getElementById('th15').innerHTML;
}




};

function relo () {
	location.reload();
}