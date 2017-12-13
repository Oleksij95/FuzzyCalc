
	function showTooltip(x, y, contents) {
    $('<div id="tooltip">' + contents + '</div>').css({
        top: y - 16,
        left: x + 20
    }).appendTo('body').fadeIn();
};


	function summC() {
	var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			al1 = parseFloat(document.getElementById('ср1_2').value),
			al2 = parseFloat(document.getElementById('ср2_2').value),
				b1 = parseFloat(document.getElementById('ср1_3').value),
				b2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('AddCh1');
	var checkbox2=document.getElementById('AddCh2');
	var checkbox3=document.getElementById('AddCh3');
	
				if (al1 < 0 || al2 < 0 || b1 < 0 || b2 < 0 ){
		alert('Невірно введено число');
	}
	
	else {
		
	

	var sumaA= a1 + a2;
	var sumaAl= al1 + al2;
	var sumaB= b1 + b2;
		document.getElementById('vivod_ch1').innerHTML = 'C = < ' + sumaA + ', ' + sumaAl + ', ' + sumaB + ' >' ;		

		var hide = [];
		var all_data = [];

	if(checkbox.checked){
			all_data = [{label: "μA(x)", 
	data: [ [-2+a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1+b1 + 3, 0], ], 
	color: '#556B2F'
},
]
			
}


	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-al2, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2+b2+sumaA+sumaB +3, 0], ], 
	color: '#9400D3'
},]		
}
		
		
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+sumaA-sumaAl, 0],   [sumaA-sumaAl, 0],   [sumaA, 1],   [sumaA+sumaB, 0], [sumaA+sumaB + 3, 0],],
		color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+a2-al2 + a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1+b1 + a2+b2 + 3, 0], ], 
		color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-5+a2-al2 + a1-al1, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a1+b1 + a2+b2 +3, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-8+a1-al1+sumaA-sumaAl, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1+b1 + sumaA+sumaB + 3, 0], ], 
		color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-8+a1-al1+sumaA-sumaAl, 0],   [sumaA-sumaAl, 0],   [sumaA, 1],   [sumaA+sumaB, 0], [a1+b1 + sumaA+sumaB + 3, 0],],
		color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-8+sumaA-sumaAl+a2-al2, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2+b2 + sumaA+sumaB +3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-8+sumaA-sumaAl+a2-al2, 0],   [sumaA-sumaAl, 0],   [sumaA, 1],   [sumaA+sumaB, 0], [a2+b2 + sumaA+sumaB + 3, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-10+sumaA-sumaAl+a2-al2+a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1+b1 + a2+b2 + sumaA+sumaB + 3, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-10+sumaA-sumaAl+a2-al2+a1-al1, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a1+b1 + a2+b2 + sumaA+sumaB + 3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-10+sumaA-sumaAl+a2-al2+a1-al1, 0],   [sumaA-sumaAl, 0],   [sumaA, 1],   [sumaA+sumaB, 0], [a1+b1 + a2+b2 + sumaA+sumaB + 3, 0],],
	color: '#B22222'
},]		
}
	

	$.plot($('#summD'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 5
		},
		yaxis: {
			tickSize: 0.1
		}
	});;


redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);

};
		


var previousPoint = null;

$('#summD').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});

	}
	};
		
		
function vidC() {
	var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			al1 = parseFloat(document.getElementById('ср1_2').value),
			al2 = parseFloat(document.getElementById('ср2_2').value),
				b1 = parseFloat(document.getElementById('ср1_3').value),
				b2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('VidCh1');
	var checkbox2=document.getElementById('VidCh2');
	var checkbox3=document.getElementById('VidCh3');
				
				
				if (al1 < 0 || al2 < 0 || b1 < 0 || b2 < 0 ){
		alert('Невірно введено число');
	}else {

		var VidA= a1 - a2;
		var VidAl= al1 + b2;
		var VidB= b1 + al2;
		document.getElementById('Vidvivod_ch1').innerHTML = 'C = < ' + VidA + ', ' + VidAl + ', ' + VidB + ' >' ;

		var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + 3, 0], ], 
	color: '#556B2F'
},]
			
}


	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-al2, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2 + b2 +3, 0], ], 
	color: '#9400D3'
},]		
}
		
		
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+VidA-VidAl, 0],   [VidA-VidAl, 0],   [VidA, 1],   [VidA+VidB, 0], [VidA+VidB + 3, 0],],
	color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-10+a2-al2+a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + a2+b2 + 3, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-10+a2-al2+a1-al1, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a1 + b1 + a2+b2 + 3, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-10+VidA-VidAl+a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [VidA+VidB + a1 + b1 + 3, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-10+VidA-VidAl+a1-al1, 0],   [VidA-VidAl, 0],   [VidA, 1],   [VidA+VidB, 0], [VidA+VidB + a1 + b1 + 3, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-10+a2-al2+VidA-VidAl, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2 + b2 + VidA + VidB + 3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-10+a2-al2+VidA-VidAl, 0],   [VidA-VidAl, 0],   [VidA, 1],   [VidA+VidB, 0], [a2 + b2 + VidA + VidB + 3, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-10+a1-al1+a2-al2+VidA-VidAl, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 +a2 + b2 + VidA+VidB  + 3, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-10+a1-al1+a2-al2+VidA-VidAl, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a1 + b1 +a2 + b2 + VidA+VidB  + 3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-10+a1-al1+a2-al2+VidA-VidAl, 0],   [VidA-VidAl, 0],   [VidA, 1],   [VidA+VidB, 0], [a1 + b1 +a2 + b2 + VidA+VidB  + 3, 0],],
	color: '#B22222'
},]		
}

	$.plot($('#VidD'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 5
		},
		yaxis: {
			tickSize: 0.1
		}
	});;
redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);

};

var previousPoint = null;

$('#VidD').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});

	}
};

function mnoC(){
	var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			al1 = parseFloat(document.getElementById('ср1_2').value),
			al2 = parseFloat(document.getElementById('ср2_2').value),
				b1 = parseFloat(document.getElementById('ср1_3').value),
				b2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('MnoCh1');
	var checkbox2=document.getElementById('MnoCh2');
	var checkbox3=document.getElementById('MnoCh3');
				if (al1 < 0 || al2 < 0 || b1 < 0 || b2 < 0 ){
		alert('Невірно введено число');
	}
if (a1 ===0 || a2===0) {
	alert('a = 0!');
	checkbox.checked=false;
	checkbox2.checked=false;
	checkbox3.checked=false;
}
	else {
		
	var MnoA, MnoAl, MnoB;
		
	if(a1 > 0 && a2 > 0 ){
		MnoA = a1*a2;
		MnoAl = a1*al2+ a2*al1;
		MnoB = a1*b2 + a2 * b1;
		document.getElementById('Mnovivod_ch1').innerHTML = 'C = < ' + MnoA + ', ' + MnoAl + ', ' + MnoB + ' >' ;
	}
	if (a1 < 0 && a2 > 0) {
		MnoA = a1*a2;
		MnoAl = -a1*al2+ a2*al1;
		MnoB = -a1*b2 + a2 * b1;
		document.getElementById('Mnovivod_ch1').innerHTML = 'C = < ' + MnoA + ', ' + MnoAl + ', ' + MnoB + ' >' ;
	}
		if (a1 > 0 && a2 < 0) {
		MnoA = a1*a2;
		MnoAl = a1*al2 - a2*al1;
		MnoB = a1*b2 - a2 * b1;
		document.getElementById('Mnovivod_ch1').innerHTML = 'C = < ' + MnoA + ', ' + MnoAl + ', ' + MnoB + ' >' ;
	}
	
		if (a1 < 0 && a2 < 0) {
		MnoA = a1*a2;
		MnoAl = -a1*al2 - a2*al1;
		MnoB = -a1*b2 - a2 * b1;
		document.getElementById('Mnovivod_ch1').innerHTML = 'C = < ' + MnoA + ', ' + MnoAl + ', ' + MnoB + ' >' ;
	}
	var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + 3, 0], ], 
	color: '#556B2F'
},]
			
}

	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-al2, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2 + b2 +3, 0], ], 
	color: '#9400D3'
},]		
}
		
		
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+MnoA-MnoAl, 0],   [MnoA-MnoAl, 0],   [MnoA, 1],   [MnoA+MnoB, 0], [MnoA+MnoB + 3, 0],],
	color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-al1 - a2-al2, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + a2 + b2 + 3, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-2+a1-al1 - a2-al2, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a1 + b1 + a2 + b2 + 3, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-2+MnoA-MnoAl - a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + MnoA+MnoB + 3, 0], ],
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-2+MnoA-MnoAl - a1-al1, 0],   [MnoA-MnoAl, 0],   [MnoA, 1],   [MnoA+MnoB, 0], [a1 + b1 + MnoA+MnoB + 3, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-al2 - MnoA-MnoAl, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2 + b2 + MnoA+MnoB +3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-2+a2-al2 - MnoA-MnoAl, 0],   [MnoA-MnoAl, 0],   [MnoA, 1],   [MnoA+MnoB, 0], [a2 + b2 + MnoA+MnoB +3, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-al1-a2-al2-MnoA-MnoAl, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1+b1 + a2 + b2 + MnoA+MnoB + 3, 0], ],
	color: '#556B2F'	
},
			
			{ label: "μB(x)",
	data: [ [-2+a1-al1-a2-al2-MnoA-MnoAl, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a1+b1 + a2 + b2 + MnoA+MnoB + 3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-2+a1-al1-a2-al2-MnoA-MnoAl, 0],   [MnoA-MnoAl, 0],   [MnoA, 1],   [MnoA+MnoB, 0], [a1+b1 + a2 + b2 + MnoA+MnoB + 3, 0],],
	color: '#B22222'
},]		
}

	$.plot($('#MnoC'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 10
		},
		yaxis: {
			tickSize: 0.1
		}
	});;

redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);

};


var previousPoint = null;

$('#MnoC').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});
	}
};

function dilC() {
		var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			al1 = parseFloat(document.getElementById('ср1_2').value),
			al2 = parseFloat(document.getElementById('ср2_2').value),
				b1 = parseFloat(document.getElementById('ср1_3').value),
				b2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('DilCh1');
	var checkbox2=document.getElementById('DilCh2');
	var checkbox3=document.getElementById('DilCh3');
				
				if (al1 < 0 || al2 < 0 || b1 < 0 || b2 < 0){
		alert('Невірно введено число');
	}
if (a2===0) {
	alert('Ділення на 0!');
	checkbox.checked=false;
	checkbox2.checked=false;
	checkbox3.checked=false;
}
	else {
		var dilA = a1 / a2;
		var dilAl = ((a1*b2+a2*al1)/Math.pow(a2,2)); 
		var dilB = ((a1*al2+a2+b1)/Math.pow(a2,2)); 
		
		document.getElementById('Dilvivod_ch1').innerHTML = 'C = < ' + dilA.toFixed(3) + ', ' + dilAl.toFixed(3) + ', ' + dilB.toFixed(3) + ' >' ;
		
		var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + 3, 0], ], 
	color: '#556B2F'
},]
			
}

	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-al2, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2 + b2 +3, 0], ],
	color: '#9400D3'	
},]		
}
		
		
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+dilA-dilAl, 0],   [dilA-dilAl, 0],   [dilA, 1],   [dilA+dilB, 0], [dilA+dilB + 3, 0],],
	color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-al1 - a2-al2, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + a2 + b2 + 3, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-2+a1-al1 - a2-al2, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a1 + b1 + a2 + b2 + 3, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-2+dilA-dilAl - a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + dilA+dilB + 3, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-2+dilA-dilAl - a1-al1, 0],   [dilA-dilAl, 0],   [dilA, 1],   [dilA+dilB, 0], [a1 + b1 + dilA+dilB + 3, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-al2 - dilA-dilAl, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2 + b2 + dilA+dilB +3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-2+a2-al2 - dilA-dilAl, 0],   [dilA-dilAl, 0],   [dilA, 1],   [dilA+dilB, 0], [a2 + b2 + dilA+dilB +3, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a2-al2 - dilA-dilAl - a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a2 + b2 + dilA+dilB + a1 + b1 + 3, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-2+a2-al2 - dilA-dilAl - a1-al1, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2 + b2 + dilA+dilB + a1 + b1 + 3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-2+a2-al2 - dilA-dilAl - a1-al1, 0],   [dilA-dilAl, 0],   [dilA, 1],   [dilA+dilB, 0], [a2 + b2 + dilA+dilB + a1 + b1 + 3, 0],],
	color: '#B22222'
},]		
}

	$.plot($('#dilD'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 5
		},
		yaxis: {
			tickSize: 0.1
		}
	});;

redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);
};


var previousPoint = null;

$('#dilD').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});
	}
};


function OBRC() {
var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			al1 = parseFloat(document.getElementById('ср1_2').value),
			al2 = parseFloat(document.getElementById('ср2_2').value),
				b1 = parseFloat(document.getElementById('ср1_3').value),
				b2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('ObrCh1');
	var checkbox2=document.getElementById('test2');
	var checkbox3=document.getElementById('ObrCh3');
				if (al1 < 0 || b1 < 0 ){
		alert('Невірно введено число');
	}else {
		
		if(a1 === 0){
			alert('Ділення на 0!');
			checkbox.checked=false;
			checkbox2.checked=false;
			checkbox3.checked=false;
			return 0;
		}
		
			
		var ObrA = 1 / a1;
		var ObrAl = b1/Math.pow(a1,2); 
		var ObrB = (al1/Math.pow(a1,2)); 
		
		document.getElementById('Obervivod_ch1').innerHTML = 'C = < ' + ObrA.toFixed(3) + ', ' + ObrAl.toFixed(3) + ', ' + ObrB.toFixed(3) + ' >' ;

	var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + 3, 0], ], 
	color: '#556B2F'
},]
			
}

			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+ObrA-ObrAl, 0],   [ObrA-ObrAl, 0],   [ObrA, 1],   [ObrA+ObrB, 0], [ObrA+ObrB + 3, 0],],
	color: '#B22222'
},]
			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-10+a1-al1+ObrA-ObrAl, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 +ObrA+ObrB+ 3, 0], ],
	color: '#556B2F'	
},

{label: "μC(x)",
	data: [ [-10+a1-al1+ObrA-ObrAl, 0],   [ObrA-ObrAl, 0],   [ObrA, 1],   [ObrA+ObrB, 0], [a1 + b1 + ObrA+ObrB + 3, 0],],
	color: '#B22222'
},]		
}

	$.plot($('#Obern'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 1
		},
		yaxis: {
			tickSize: 0.1
		}
	});;

redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);
};

var previousPoint = null;

$('#Obern').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});

	}
};


function RmaxF() {
var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			al1 = parseFloat(document.getElementById('ср1_2').value),
			al2 = parseFloat(document.getElementById('ср2_2').value),
				b1 = parseFloat(document.getElementById('ср1_3').value),
				b2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('RmxCh1');
	var checkbox2=document.getElementById('RmxCh2');
	var checkbox3=document.getElementById('RmxCh3');
			if (al1 < 0 || b1 < 0 ){
		alert('Невірно введено число');
	}else {	
		var RmaxA = Math.max(a1, a2);
		var RmaxAl = RmaxA - Math.max(a1 - al1,a2 - al2); 
		var RmaxB = Math.max(a1 + b1, a2 + b2) - RmaxA; //уточнить за формулу
		
		document.getElementById('rmax_ch1').innerHTML = 'C = < ' + RmaxA + ', ' + RmaxAl + ', ' + RmaxB + ' >' ;
	var hide = [];
		var all_data = [];

	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + 3, 0], ], 
	color: '#556B2F'
},]
			
}

	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-al2, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2 + b2 +3, 0], ],
	color: '#9400D3'	
},]		
}
		
		
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+RmaxA-RmaxAl, 0],   [RmaxA-RmaxAl, 0],   [RmaxA, 1],   [RmaxA+RmaxB, 0], [RmaxA+RmaxB + 3, 0],],
	color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-al1 - a2-al2, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + a2 + b2 + 3, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-2+a1-al1 - a2-al2, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a1 + b1 + a2 + b2 + 3, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-al1 - RmaxA-RmaxAl, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + RmaxA+RmaxB + 3, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-2+a1-al1 - RmaxA-RmaxAl, 0],   [RmaxA-RmaxAl, 0],   [RmaxA, 1],   [RmaxA+RmaxB, 0], [a1 + b1 + RmaxA+RmaxB + 3, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-al2 - RmaxA-RmaxAl, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2 + b2 + RmaxA+RmaxB +3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-2+a2-al2 - RmaxA-RmaxAl, 0],   [RmaxA-RmaxAl, 0],   [RmaxA, 1],   [RmaxA+RmaxB, 0], [a2 + b2 + RmaxA+RmaxB +3, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+RmaxA-RmaxAl - a2-al2 - a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a2 + b2 + a1 + b1 + RmaxA+RmaxB + 5, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-2+RmaxA-RmaxAl - a2-al2 - a1-al1, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2 + b2 + a1 + b1 + RmaxA+RmaxB + 5, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-2+RmaxA-RmaxAl - a2-al2 - a1-al1, 0],   [RmaxA-RmaxAl, 0],   [RmaxA, 1],   [RmaxA+RmaxB, 0], [a2 + b2 + a1 + b1 + RmaxA+RmaxB + 5, 0],],
	color: '#B22222'
},]		
}

	$.plot($('#MaxD'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 5
		},
		yaxis: {
			tickSize: 0.1
		}
	});;

redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);
};

var previousPoint = null;

$('#MaxD').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});
	}
};

function RminF() {
var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			al1 = parseFloat(document.getElementById('ср1_2').value),
			al2 = parseFloat(document.getElementById('ср2_2').value),
				b1 = parseFloat(document.getElementById('ср1_3').value),
				b2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('RmiCh1');
	var checkbox2=document.getElementById('RmiCh2');
	var checkbox3=document.getElementById('RmiCh3');
		
				if (al1 < 0 || b1 < 0 ){
		alert('Невірно введено число');
	}else {
		
		var RmiA = Math.min(a1, a2);
		var RmiAl = RmiA - Math.min(a1 - al1, a2 - al2);
		var RmiB = Math.min(a1 + b1, a2 + b2) - RmiA; //уточнить за формулу
		
		document.getElementById('rmin_ch1').innerHTML = 'C = < ' + RmiA + ', ' + RmiAl + ', ' + RmiB + ' >' ;
	var hide = [];
		var all_data = [];

	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + 3, 0], ], 
	color: '#556B2F'
},]
			
}

	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-al2, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2 + b2 +3, 0], ], 
	color: '#9400D3'
},]		
}

			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+RmiA-RmiAl, 0],   [RmiA-RmiAl, 0],   [RmiA, 1],   [RmiA+RmiB, 0], [RmiA+RmiB + 3, 0],],
	color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-2+a2-al2 - a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a2 + b2 + a1 + b1 + 3, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-2+a2-al2 - a1-al1, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2 + b2 + a1 + b1 + 3, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-2+RmiA-RmiAl - a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + RmiA+RmiB + 3, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-2+RmiA-RmiAl - a1-al1, 0],   [RmiA-RmiAl, 0],   [RmiA, 1],   [RmiA+RmiB, 0], [a1 + b1 + RmiA+RmiB + 3, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-2+RmiA-RmiAl - a2-al2, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a2 + b2 + RmiA+RmiB +3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-2+RmiA-RmiAl - a2-al2, 0],   [RmiA-RmiAl, 0],   [RmiA, 1],   [RmiA+RmiB, 0], [a2 + b2 + RmiA+RmiB +3, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-al1 - a2-al2 - RmiA-RmiAl, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1+b1 + a2 + b2 + RmiA+RmiB + 3, 0], ],
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-2+a1-al1 - a2-al2 - RmiA-RmiAl, 0],   [a2-al2, 0],   [a2, 1],   [a2+b2, 0], [a1+b1 + a2 + b2 + RmiA+RmiB + 3, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-2+a1-al1 - a2-al2 - RmiA-RmiAl, 0],   [RmiA-RmiAl, 0],   [RmiA, 1],   [RmiA+RmiB, 0], [a1+b1 + a2 + b2 + RmiA+RmiB + 3, 0],],
	color: '#B22222'
},]		
}

$.plot($('#MinD'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 5
		},
		yaxis: {
			tickSize: 0.1
		}
	});;

redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);
};
var previousPoint = null;

$('#MinD').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});

	}
};

function protF() {
var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			al1 = parseFloat(document.getElementById('ср1_2').value),
			al2 = parseFloat(document.getElementById('ср2_2').value),
				b1 = parseFloat(document.getElementById('ср1_3').value),
				b2 = parseFloat(document.getElementById('ср2_3').value);
	var checkbox=document.getElementById('PrtCh1');
	var checkbox2=document.getElementById('test2');
	var checkbox3=document.getElementById('PrtCh3');
				if (al1 < 0 || b1 < 0 ){
		alert('Невірно введено число');
	}else {
		var proA = -a1;
		var proAl = al1;
		var proB = b1
		
		document.getElementById('protvivod_ch1').innerHTML = 'C = < ' + proA + ', ' + proAl + ', ' + proB + ' >' ;

	var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-al1, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + 3, 0], ], 
	color: '#556B2F'
},]
			
}

			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+proA-proAl, 0],   [proA-proAl, 0],   [proA, 1],   [proA+proB, 0], [proA+proB + 3, 0],],
	color: '#B22222'
},]
			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-20+a1-al1 - proA-proAl, 0],   [a1-al1, 0],   [a1, 1],   [a1+b1, 0], [a1 + b1 + 3+proA+proB + 3, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-20+a1-al1 - proA-proAl, 0],   [proA-proAl, 0],   [proA, 1],   [proA+proB, 0], [a1 + b1 + 3+proA+proB + 3, 0],],
	color: '#B22222'
},]		
}

	$.plot($('#Protil'), all_data, {
		series: {
			points: {
				show: true,
				radius: 3
			},
			lines: {
				show: true,
				  lineWidth: 2
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true
		},
		xaxis: {
			tickColor: 'transparent',
			tickDecimals: 0,
			tickSize: 5
		},
		yaxis: {
			tickSize: 0.1
		}
	});;
redraw();

function redraw() {
  var data = [];
  for(var j = 0; j < all_data.length; ++j)
    if(!hide[j]) // что скрываем, а что нет
      data.push(all_data[j]);
};

var previousPoint = null;

$('#Protil').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, 'x:' + x);
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});
	}
};

function operation(){
	var checkbox1 = document.getElementById('UnOber');
	var checkbox2 = document.getElementById('UnProt');
	var checkbox3 = document.getElementById('BinarOper');
	var UnOp = document.getElementById('UnarOper');

	$('#add').css({
		'display':'none',
	});
	$('#vid').css({
		'display':'none',
	});
	$('#mnoch').css({
		'display':'none',
	});
	$('#dil').css({
		'display':'none',
	});
	$('#rmax').css({
		'display':'none',
	});
	$('#rmin').css({
		'display':'none',
	});

		if(UnOp.checked){
			
				if(checkbox1.checked){
				$('#ober').css({
						'display':'inline-block',
					});
			}

			if(!checkbox1.checked){
				$('#ober').css({
						'display':'none',
					});
			}

			if (checkbox2.checked){
				$('#prot').css({
						'display':'inline-block',
					});
			}
			
			if(!checkbox2.checked){
				$('#prot').css({
						'display':'none',
					});
			}
		}

	else {
			
				if(checkbox1.checked){
				$('#ober').css({
						'display':'none',
					});
			}

			if(!checkbox1.checked){
				$('#ober').css({
						'display':'none',
					});
			}

			if (checkbox2.checked){
				$('#prot').css({
						'display':'none',
					});
			}
			
			if(!checkbox2.checked){
				$('#prot').css({
						'display':'none',
					});
			}
		}
	
};

function operationB(){
	var checkbox1 = document.getElementById('BinAdd');
	var checkbox2 = document.getElementById('BinVid');
	var checkbox3 = document.getElementById('BinMno');
	var checkbox4 = document.getElementById('BinDil');
	var checkbox5 = document.getElementById('BinMax');
	var checkbox6 = document.getElementById('BinMin');

	var checkbox7 = document.getElementById('UnOber');
	var checkbox8 = document.getElementById('UnProt');

	$('#ober').css({
		'display':'none',
	});
	$('#prot').css({
		'display':'none',
	});

	if(checkbox1.checked){
		$('#add').css({
			'display':'inline-block',
		});
	}
	if(!checkbox1.checked){
		$('#add').css({
			'display':'none',
		});
	}

	if(checkbox2.checked){
		$('#vid').css({
			'display':'inline-block',
		});
	}
	if(!checkbox2.checked){
		$('#vid').css({
			'display':'none',
		});
	}

	if(checkbox3.checked){
		$('#mnoch').css({
			'display':'inline-block',
		});
	}
	if(!checkbox3.checked){
		$('#mnoch').css({
			'display':'none',
		});
	}

	if(checkbox4.checked){
		$('#dil').css({
			'display':'inline-block',
		});
	}
	if(!checkbox4.checked){
		$('#dil').css({
			'display':'none',
		});
	}
	if(checkbox5.checked){
		$('#rmax').css({
			'display':'inline-block',
		});
	}
	if(!checkbox5.checked){
		$('#rmax').css({
			'display':'none',
		});
	}
	if(checkbox6.checked){
		$('#rmin').css({
			'display':'inline-block',
		});
	}
	if(!checkbox6.checked){
		$('#rmin').css({
			'display':'none',
		});
	}
};




function SOperations(){
	var checkbox1 = document.getElementById('UnarOper');
	var checkbox2 = document.getElementById('BinarOper');
	var checkbox3 = document.getElementById('OllOper');

	var checkbox7 = document.getElementById('UnOber');
	var checkbox8 = document.getElementById('UnProt');

	var checkbox9 = document.getElementById('BinAdd');
	var checkbox10 = document.getElementById('BinVid');
	var checkbox11 = document.getElementById('BinMno');
	var checkbox12 = document.getElementById('BinDil');
	var checkbox13 = document.getElementById('BinMax');
	var checkbox14 = document.getElementById('BinMin');

	if (checkbox1.checked){
		checkbox9.checked = false;
		checkbox10.checked = false;
		checkbox11.checked = false;
		checkbox12.checked = false;
		checkbox13.checked = false;
		checkbox14.checked = false;

		$('#ср2_1').css({
			'display':'none',
		});
		$('#ср2_2').css({
			'display':'none',
		})
		$('#ср2_3').css({
			'display':'none',
		})
		$('#sSelect').css({
			'display':'none',
		})
		
		$('.BinOp').css({
			'display':'none',
		})

		$('#ср1_1').css({
			'display':'inline-block',
		});
		$('#ср1_2').css({
			'display':'inline-block',
		})
		$('#ср1_3').css({
			'display':'inline-block',
		})
		
		$('#SelectOber').css({
			'display':'inline-block',
		})
		$('#SelectProt').css({
			'display':'inline-block',
		})
		
		$('#UnOber').css({
			'display':'inline-block',
		})
		$('#UnProt').css({
			'display':'inline-block',
		})

		$('.unnrOp').css({
			'display':'inline-block',
		})

		$('#add').css({
		'display':'none',
		});
		$('#vid').css({
			'display':'none',
		});
		$('#mnoch').css({
			'display':'none',
		});
		$('#dil').css({
			'display':'none',
		});
		$('#rmax').css({
			'display':'none',
		});
		$('#rmin').css({
			'display':'none',
		});

	}

	if (checkbox2.checked){
		checkbox9.checked = false;
		checkbox10.checked = false;
		checkbox11.checked = false;
		checkbox12.checked = false;
		checkbox13.checked = false;
		checkbox14.checked = false;
		checkbox7.checked = false;
		checkbox8.checked = false;

		
		$('#ср2_1').css({
			'display':'inline-block',
		});
		$('#ср2_2').css({
			'display':'inline-block',
		})
		$('#ср2_3').css({
			'display':'inline-block',
		})
		$('#sSelect').css({
			'display':'inline-block',
		})

		$('#SelectOber').css({
			'display':'none',
		})
		$('#SelectProt').css({
			'display':'none',
		})

		$('.UnarOppr1').css({
			'display':'none',
		})
		$('.BinOp').css({
			'display':'inline-block',
		})

		$('#BinAdd').css({
			'display':'inline-block',
		})
		$('#BinVid').css({
			'display':'inline-block',
		})
		$('#BinMno').css({
			'display':'inline-block',
		})
		$('#BinDil').css({
			'display':'inline-block',
		})
		$('#BinMax').css({
			'display':'inline-block',
		})
		$('#BinMin').css({
			'display':'inline-block',
		})

		$('#ober').css({
		'display':'none',
		});
		$('#prot').css({
			'display':'none',
		});

	}

	if (checkbox3.checked){
		
		checkbox7.checked = false;
		checkbox8.checked = false;

		$('#ср1_1').css({
			'display':'inline-block',
		});
		$('#ср1_2').css({
			'display':'inline-block',
		})
		$('#ср1_3').css({
			'display':'inline-block',
		})
		$('#ср2_1').css({
			'display':'inline-block',
		});
		$('#ср2_2').css({
			'display':'inline-block',
		})
		$('#ср2_3').css({
			'display':'inline-block',
		})
		$('#sSelect').css({
			'display':'inline-block',
		})
		
		$('.unnrOp').css({
			'display':'none',
		})
		$('.BinOp').css({
			'display':'none',
		})
	$('#add').css({
		'display':'inline-block',
	});
	$('#vid').css({
		'display':'inline-block',
	});
	$('#mnoch').css({
		'display':'inline-block',
	});
	$('#dil').css({
		'display':'inline-block',
	});
	$('#rmax').css({
		'display':'inline-block',
	});
	$('#rmin').css({
		'display':'inline-block',
	});
	$('#ober').css({
		'display':'inline-block',
	});
	$('#prot').css({
		'display':'inline-block',
	});
	}

};


