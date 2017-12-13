
	function showTooltip(x, y, contents) {
    $('<div id="tooltip">' + contents + '</div>').css({
        top: y - 16,
        left: x + 20
    }).appendTo('body').fadeIn();
};


	function summC() {
	var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			b1 = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				Al1 = parseFloat(document.getElementById('ср1_3').value),
				Al2 = parseFloat(document.getElementById('ср2_3').value);
					Bt1 = parseFloat(document.getElementById('ср1_4').value);
					Bt2 = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('AddCh1');
	var checkbox2=document.getElementById('AddCh2');
	var checkbox3=document.getElementById('AddCh3');
	
				if (Al1 < 0 || Al2 < 0 || Bt1 < 0 || Bt2 < 0 ){
		alert('Невірно введено число');
	}else {
		if(a1 > b1 || a2 > b2){
			alert('Неправильний порядок ведення. Вимога: a < b');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}

	var sumaA= a1 + a2;
	var sumaB= b1 + b2;
	var sumaAl= Al1 + Al2;
	var sumaBt= Bt1 + Bt2;
		document.getElementById('vivod_ch1').innerHTML = 'C = < ' + sumaA + ', ' + sumaB + ', ' + sumaAl + ', ' + sumaBt + ' >' ;		
		
		var hide = [];
		var all_data = [];

	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-Al1, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [a1 + Bt1 + 5, 0], ], 
	color: '#556B2F'
},]
			
}

	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-Al2, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [a2 + Bt2 +5, 0], ], 
	color: '#9400D3'
},]		
}
		
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+sumaA-sumaAl, 0],   [sumaA-sumaAl, 0],   [sumaA, 1], [sumaB, 1],  [sumaB+sumaBt, 0], [sumaB + sumaBt + 5, 0],],
	color: '#B22222'
},]
			
}
	if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+a1-Al1 +a2-Al2, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [b2 + Bt2 +b1 + Bt1 + 2, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-5+a2-Al2 +a1-Al1, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [b2 + Bt2 +b1 + Bt1 + 2, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+sumaA-sumaAl+a1-Al1, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [a1 + b1 +sumaA + sumaBt + 5, 0], ], 
	color: '#556B2F'
},
{label: "μC(x)",
	data: [ [-5+sumaA-sumaAl+a1-Al1, 0],   [sumaA-sumaAl, 0],   [sumaA, 1], [sumaB, 1],  [sumaB+sumaBt, 0], [a1 + b1 +sumaA + sumaBt + 5, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-5+a2-Al2 + sumaA-sumaAl, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [b2 + Bt2 + sumaB + sumaBt + 5, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-5+a2-Al2 + sumaA-sumaAl, 0],   [sumaA-sumaAl, 0],   [sumaA, 1], [sumaB, 1],  [sumaB+sumaBt, 0], [b2 + Bt2 + sumaB + sumaBt + 5 , 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-8+a2-Al2 + a1-Al1+sumaA-sumaAl, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [b1 + Bt1 + b2 + Bt2 + sumaA + sumaB + 5, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-8+a2-Al2 +a1-Al1+sumaA-sumaAl, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [b1 + Bt1 + b2 + Bt2 + sumaA + sumaB + 5, 0], ], 
	color: '#9400D3'
},


{label: "μC(x)",
	data: [ [-8+a2-Al2 +a1-Al1+sumaA-sumaAl, 0],   [sumaA-sumaAl, 0],   [sumaA, 1], [sumaB, 1],  [sumaB+sumaBt, 0], [b1 + Bt1 + b2 + Bt2 + sumaA + sumaB + 5, 0],],
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
			b1 = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				Al1 = parseFloat(document.getElementById('ср1_3').value),
				Al2 = parseFloat(document.getElementById('ср2_3').value);
					Bt1 = parseFloat(document.getElementById('ср1_4').value);
					Bt2 = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('VidCh1');
	var checkbox2=document.getElementById('VidCh2');
	var checkbox3=document.getElementById('VidCh3');
				
				
				if (Al1 < 0 || Al2 < 0 || Bt1 < 0 || Bt2 < 0 ){
		alert('Невірно введено число');
	}else {

		if(a1 > b1 || a2 > b2){
			alert('Неправильний порядок ведення. Вимога: a < b');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
	
		var VidA = a1 - a2;
		var VidB = b1 - b2;
		var VidAl = Al1 + Al2;
		var VidBt = Bt1 + Bt2;
		var d,d2,d3;
		document.getElementById('Vidvivod_ch1').innerHTML = 'C = < ' + VidA + ', ' + VidB + ', ' + VidAl + ', ' + VidBt + ' >' ;
		if (VidA > VidB){
			d = VidA;
		VidA = VidB;
		VidB = d;
		}
		
		
		var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-Al1, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [a1 + b1 + 5, 0], ], 
	color: '#556B2F'
},]
			
}


	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-Al2, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [a2 + b2 +5, 0], ], 
	color: '#9400D3'
},]		
}
		
		
	if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+VidA-VidAl, 0],   [VidA-VidAl, 0],   [VidA, 1], [VidB, 1],  [VidB+VidBt, 0], [VidB + VidBt + 5, 0],],
	color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+a1-Al1 +a2-Al2, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [a1 + b1 +a2 + b2 + 2, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-5+a2-Al2 +a1-Al1, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [a2 + b2 + a1 + b1 + 2, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+VidA-VidAl+a1-Al1, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [VidB+VidBt +b1 + Bt1 +5, 0], ], 
	color: '#556B2F'
},
{label: "μC(x)",
	data: [ [-5+VidA-VidAl+a1-Al1, 0],   [VidA-VidAl, 0],   [VidA, 1], [VidB, 1],  [VidB+VidBt, 0], [VidB+VidBt +b1 + Bt1 +5, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-5+a2-Al2 +VidA-VidAl, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [VidB+VidBt +b2 + Bt2+5, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-5+a2-Al2 +VidA-VidAl, 0],   [VidA-VidAl, 0],   [VidA, 1], [VidB, 1],  [VidB+VidBt, 0], [VidB+VidBt +b2 + Bt2+5, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-5+a1-Al1 + a2-Al2 + VidA-VidAl, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [a1+Al1 + a2+Al2 + VidB+VidBt, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-5+a1-Al1 + a2-Al2 + VidA-VidAl, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [a1+Al1 + a2+Al2 + VidB+VidBt, 0], ], 
	color: '#9400D3'
},


{label: "μC(x)",
	data: [ [-5+a1-Al1 + a2-Al2 + VidA-VidAl, 0],   [VidA-VidAl, 0],   [VidA, 1], [VidB, 1],  [VidB+VidBt, 0], [a1+Al1 + a2+Al2 + VidB+VidBt, 0],],
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
			b1 = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				Al1 = parseFloat(document.getElementById('ср1_3').value),
				Al2 = parseFloat(document.getElementById('ср2_3').value);
					Bt1 = parseFloat(document.getElementById('ср1_4').value);
					Bt2 = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('MnoCh1');
	var checkbox2=document.getElementById('MnoCh2');
	var checkbox3=document.getElementById('MnoCh3');
				if (Al1 < 0 || Al2 < 0 || Bt1 < 0 || Bt2 < 0 ){
		alert('Невірно введено число');
	}else {
		
		if(a1 > b1 || a2 > b2){
			alert('Неправильний порядок ведення. Вимога: a < b');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
		
	var mnoA = a1 * a2;
	var mnoB = b1 * b2;
	var mnoAl = Math.abs(a1)*Al1 + Math.abs(a1)*Al2;
	var mnoBt = Math.abs(b1)*Bt1 + Math.abs(b1)*Bt2;
	document.getElementById('mno_vivod').innerHTML = 'C = < ' + mnoA + ', ' + mnoB + ', ' + mnoAl + ', ' + mnoBt + ' >' ;	
	
	var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-Al1, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [b1 + Bt1 + 5, 0], ], 
	color: '#556B2F'
},]
			
}


	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-Al2, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [b2 + Bt2 +5, 0], ], 
	color: '#9400D3'
},]		
}
		
		
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+mnoA-mnoAl, 0],   [mnoA-mnoAl, 0],   [mnoA, 1], [mnoB, 1],  [mnoB+mnoBt, 0], [mnoB+mnoBt + 5, 0],],
	color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+a1-Al1 +a2-Al2, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [b1 + Bt1 +b2 + Bt2 + 2, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-5+a2-Al2 +a1-Al1, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [b1 + Bt1 +b2 + Bt2  + 2, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-2+mnoA-mnoAl + a1-Al1, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [mnoB+mnoBt + b1 + Bt1 +5, 0], ],
	color: '#556B2F'
},
{label: "μC(x)",
	data: [ [-2+mnoA-mnoAl + a1-Al1, 0],   [mnoA-mnoAl, 0],   [mnoA, 1], [mnoB, 1],  [mnoB+mnoBt, 0], [mnoB+mnoBt + b1 + Bt1 + 5, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-5+a2-Al2 + mnoA-mnoAl, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [mnoB+mnoBt + b2 + Bt2 +5, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-5+a2-Al2 + mnoA-mnoAl, 0],   [mnoA-mnoAl, 0],   [mnoA, 1], [mnoB, 1],  [mnoB+mnoBt, 0], [mnoB+mnoBt + b2 + Bt2 + 5, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-5+a1-Al1 + a2-Al2 +mnoA-mnoAl, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [mnoB+mnoBt + b2 + Bt2 + b1 + Bt1 + 5, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-5+a1-Al1 + a2-Al2 +mnoA-mnoAl, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [mnoB+mnoBt + b2 + Bt2 + b1 + Bt1 + 5, 0], ], 
	color: '#9400D3'
},


{label: "μC(x)",
	data: [ [-5+a1-Al1 + a2-Al2 +mnoA-mnoAl, 0],   [mnoA-mnoAl, 0],   [mnoA, 1], [mnoB, 1],  [mnoB+mnoBt, 0], [mnoB+mnoBt + b2 + Bt2 + b1 + Bt1 + 5, 0],],
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
			b1 = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				Al1 = parseFloat(document.getElementById('ср1_3').value),
				Al2 = parseFloat(document.getElementById('ср2_3').value);
					Bt1 = parseFloat(document.getElementById('ср1_4').value);
					Bt2 = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('DilCh1');
	var checkbox2=document.getElementById('DilCh2');
	var checkbox3=document.getElementById('DilCh3');
				
				if (Al1 < 0 || Al2 < 0 || Bt1 < 0 || Bt2 < 0 ){
		alert('Невірно введено число');
	}else {
		
		if(a1 > b1 || a2 > b2){
			alert('Неправильний порядок ведення. Вимога: a < b');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
		
		if (a2 === 0 || b2 ===0){
			alert('Ділення на 0!');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
		
		var dilA = a1 / a2;
		var dilB = b1 / b2;
		var dilAl = ((a1*Bt2+b2*Al1)/Math.pow(b2,2)); 
		var dilBt = ((b1*Al2+a2*Bt1)/Math.pow(a2,2)); 
		var d;
		if (dilA > dilB){
			d = dilA;
			dilA = dilB;
			dilB = d;
		}
		document.getElementById('Dilvivod_ch1').innerHTML = 'C = < ' + dilA.toFixed(3)  + ', ' + dilB.toFixed(3)+ ', ' + dilAl.toFixed(3) + ', ' + dilBt.toFixed(3) + ' >' ;
		

		
		var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-Al1, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [b1 + Bt1 + 5, 0], ], 
	color: '#556B2F'
},]
			
}


	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-Al2, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [b2 + Bt2 +5, 0], ], 
	color: '#9400D3'
},]		
}
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+dilA-dilAl, 0],   [dilA-dilAl, 0],   [dilA, 1], [dilB, 1],  [dilB+dilBt, 0], [dilB+dilBt + 5, 0],],
	color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+a1-Al1 +a2-Al2, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [b1 + Bt1 +b2 + Bt2 + 2, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-5+a2-Al2 +a1-Al1, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [b2 + Bt2 + b1 + Bt1 + 2, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+a1 - Al1+dilA-dilAl, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [dilB+dilBt +b1 + Bt1 +5, 0], ], 
	color: '#556B2F'
},
{label: "μC(x)",
	data: [ [-5+a1 - Al1+dilA-dilAl, 0],   [dilA-dilAl, 0],   [dilA, 1], [dilB, 1],  [dilB+dilBt, 0], [dilB+dilBt +b1 + Bt1 +5, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-2+dilA-dilAl+a2-Al2, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [dilB+dilBt + b2 + Bt2 +5, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-2+dilA-dilAl+a2-Al2, 0],   [dilA-dilAl, 0],   [dilA, 1], [dilB, 1],  [dilB+dilBt, 0], [dilB+dilBt + b2 + Bt2 +5, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-8+a1-Al1 + a2-Al2 +dilA-dilAl, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [dilB+dilBt + b1 + Bt1 + b2 + Bt2  + 5, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-8+a1-Al1 + a2-Al2 +dilA-dilAl, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [dilB+dilBt + b1 + Bt1 + b2 + Bt2  + 5, 0], ], 
	color: '#9400D3'
},


{label: "μC(x)",
	data: [ [-8+a1-Al1 + a2-Al2 +dilA-dilAl, 0],   [dilA-dilAl, 0],   [dilA, 1], [dilB, 1],  [dilB+dilBt, 0], [dilB+dilBt + b1 + Bt1 + b2 + Bt2  + 5, 0],],
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
			b1 = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				Al1 = parseFloat(document.getElementById('ср1_3').value),
				Al2 = parseFloat(document.getElementById('ср2_3').value);
					Bt1 = parseFloat(document.getElementById('ср1_4').value);
					Bt2 = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('ObrCh1');
	var checkbox2=document.getElementById('test2');
	var checkbox3=document.getElementById('ObrCh3');
				if (Al1 < 0 || Al2 < 0 || Bt1 < 0 || Bt2 < 0 ){
		alert('Невірно введено число');
	}else {
		
		if(a1 > b1){
			alert('Неправильний порядок ведення. Вимога: a < b');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
		
		if (a1 === 0 || b1 ===0){
			alert('Ділення на 0!');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
		
		var ObrA = 1 / a1;
		var ObrB = 1 / b1;
		var ObrAl = Bt1/Math.pow(b1,2); 
		var ObrBt = (Al1/Math.pow(a1,2)); 
			var d;
		
		if (ObrA>ObrB){
			
			
			d = ObrA;
			ObrA = ObrB;
			ObrB = d;
		}

	
		document.getElementById('Obervivod_ch1').innerHTML = 'C = < ' + ObrA.toFixed(3) + ', ' + ObrB.toFixed(3) + ', ' + ObrAl.toFixed(3) + ', ' + ObrBt.toFixed(3) + ' >' ;
			
	var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-Al1, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1+Bt1, 0], [b1+Bt1 + 3, 0], ], 
	color: '#556B2F'
},]
			
}

			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+ObrA-ObrAl, 0],   [ObrA-ObrAl, 0],   [ObrA, 1], [ObrB, 1],   [ObrB+ObrBt, 0], [ObrB+ObrBt + 3, 0],],
	color: '#B22222'
},]
			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+ObrA-ObrAl+a1-Al1, 0],   [a1-ObrAl, 0],   [a1, 1], [b1, 1],  [b1+Bt1, 0], [b1+Bt1 +ObrB+ObrBt+ 3, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-5+ObrA-ObrAl+a1-Al1, 0],   [ObrA-ObrAl, 0],   [ObrA, 1], [ObrB, 1],   [ObrA+ObrBt, 0], [b1+Bt1 +ObrB+ObrBt+ 3, 0],],
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
			tickDecimals: 2,
			tickSize: 2
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
			b1 = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				Al1 = parseFloat(document.getElementById('ср1_3').value),
				Al2 = parseFloat(document.getElementById('ср2_3').value);
					Bt1 = parseFloat(document.getElementById('ср1_4').value);
					Bt2 = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('RmxCh1');
	var checkbox2=document.getElementById('RmxCh2');
	var checkbox3=document.getElementById('RmxCh3');
	
			if (Al1 < 0 || Al2 < 0 || Bt1 < 0 || Bt2 < 0){
		alert('Невірно введено число');
	}else {	
		
		if(a1 > b1 || a2 > b2){
			alert('Неправильний порядок ведення. Вимога: a < b');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
	
		var RmaxA = Math.max(a1, a2);
		var RmaxB = Math.max(b1, b2);
		var RmaxAl = RmaxA - Math.max(a1 - Al1,a2 - Al2); 
		var RmaxBt = Math.max(b1 + Bt1, b2 + Bt2) - RmaxB;
		var d,d2,d3;
		document.getElementById('rmax_ch1').innerHTML = 'C = < ' + RmaxA + ', ' + RmaxB + ', '  + RmaxAl + ', ' + RmaxBt + ' >' ;
		
			
		var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-Al1, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [b1 + Bt1 + 5, 0], ],
	color: '#556B2F'
},]
			
}

	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-Al2, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [b2 + Bt2 +5, 0], ], 
	color: '#9400D3'
},]		
}
		
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+RmaxA-RmaxAl, 0],   [RmaxA-RmaxAl, 0],   [RmaxA, 1], [RmaxB, 1],  [RmaxB+RmaxBt, 0], [RmaxB+RmaxBt + 5, 0],],
	color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+a1-Al1 +a2-Al2, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [b1 + Bt1 +b2 + Bt2 + 2, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-5+a2-Al2 +a1-Al1, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [b1 + Bt1 +b2 + Bt2 + 2, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+a1 - Al1+RmaxA-RmaxAl, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [RmaxB+RmaxBt + b1 + Bt1 +5, 0], ], 
	color: '#556B2F'
},
{label: "μC(x)",
	data: [ [-5+a1 - Al1+RmaxA-RmaxAl, 0],   [RmaxA-RmaxAl, 0],   [RmaxA, 1], [RmaxB, 1],  [RmaxB+RmaxBt, 0], [RmaxB+RmaxBt + b1 + Bt1 +5, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-5+a2-Al2+RmaxA-RmaxAl, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [RmaxB+RmaxBt + b2 + Bt2 +5, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-5+a2-Al2+RmaxA-RmaxAl, 0],   [RmaxA-RmaxAl, 0],   [RmaxA, 1], [RmaxB, 1],  [RmaxB+RmaxBt, 0], [RmaxB+RmaxBt + b2 + Bt2 +5, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-8+RmaxA-RmaxAl+a1-Al1 + a2-Al2, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [b1 + Bt1 + b2 + Bt2 + RmaxB+RmaxBt, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-8+RmaxA-RmaxAl+a1-Al1 + a2-Al2, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [b1 + Bt1 + b2 + Bt2 + RmaxB+RmaxBt, 0], ], 
	color: '#9400D3'
},


{label: "μC(x)",
	data: [ [-8+RmaxA-RmaxAl+a1-Al1 + a2-Al2, 0],   [RmaxA-RmaxAl, 0],   [RmaxA, 1], [RmaxB, 1],  [RmaxB+RmaxBt, 0], [b1 + Bt1 + b2 + Bt2 + RmaxB+RmaxBt, 0],],
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
			b1 = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				Al1 = parseFloat(document.getElementById('ср1_3').value),
				Al2 = parseFloat(document.getElementById('ср2_3').value);
					Bt1 = parseFloat(document.getElementById('ср1_4').value);
					Bt2 = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('RmiCh1');
	var checkbox2=document.getElementById('RmiCh2');
	var checkbox3=document.getElementById('RmiCh3');
	var d,d2,d3;	
				if (Al1 < 0 || Al2 < 0 || Bt1 < 0 || Bt2 < 0 ){
		alert('Невірно введено число');
	}else {
		
		if(a1 > b1 || a2 > b2){
			alert('Неправильний порядок ведення. Вимога: a < b');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
		
		var RmiA = Math.min(a1, a2);
		var RmiB = Math.min(b1, b2);
		var RmiAl = RmiA - Math.min(a1 - Al1, a2 - Al2);
		var RmiBt = Math.min(a1 + Bt1, b2 + Bt2) - RmiB; //уточнить за формулу
		
		document.getElementById('rmin_ch1').innerHTML = 'C = < ' + RmiA + ', '+ RmiB+ ', ' + RmiAl + ', ' + RmiBt + ' >' ;

		
	var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-Al1, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [b1 + Bt1 + 5, 0], ], 
	color: '#556B2F'
},]
			
}

	if(checkbox2.checked){
			all_data = [{ label: "μB(x)",
	data: [ [-2+a2-Al2, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [b2 + Bt2 +5, 0], ], 
	color: '#9400D3'
},]		
}
	
	if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+RmiA-RmiAl, 0],   [RmiA-RmiAl, 0],   [RmiA, 1], [RmiB, 1],  [RmiB+RmiBt, 0], [RmiB+RmiBt + 5, 0],],
	color: '#B22222'
},]
			
}
	if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+a1-Al1 +a2-Al2, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [b1 + Bt1 +b2 + Bt2+ 2, 0], ], 
	color: '#556B2F'
},

{ label: "μB(x)",
	data: [ [-5+a2-Al2 +a1-Al1, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [b1 + Bt1 +b2 + Bt2+ 2,, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+RmiA-RmiAl+a1 - Al1, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [RmiB+RmiBt +b1 + Bt1 +5, 0], ], 
	color: '#556B2F'
},
{label: "μC(x)",
	data: [ [-5+RmiA-RmiAl+a1 - Al1, 0],   [RmiA-RmiAl, 0],   [RmiA, 1], [RmiB, 1],  [RmiB+RmiBt, 0], [RmiB+RmiBt +b1 + Bt1 +5, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{ label: "μB(x)",
	data: [ [-5+a2-Al2+RmiA-RmiAl, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [RmiB+RmiBt + b2 + Bt2 +5, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-5+a2-Al2+RmiA-RmiAl, 0],   [RmiA-RmiAl, 0],   [RmiA, 1], [RmiB, 1],  [RmiB+RmiBt, 0], [RmiB+RmiBt + b2 + Bt2 +5, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-5+RmiA-RmiAl+a1-Al1 + a2-Al2, 0],   [a1-Al1, 0],   [a1, 1], [b1, 1],  [b1 + Bt1, 0], [b1 + Bt1 + b2 + Bt2 + RmiB+RmiBt + 5, 0], ], 
	color: '#556B2F'
},
			
			{ label: "μB(x)",
	data: [ [-5+RmiA-RmiAl+a1-Al1 + a2-Al2, 0],   [a2-Al2, 0],   [a2, 1],   [b2, 1], [b2 + Bt2, 0], [b1 + Bt1 + b2 + Bt2 + RmiB+RmiBt + 5, 0], ], 
	color: '#9400D3'
},


{label: "μC(x)",
	data: [ [-5+RmiA-RmiAl+a1-Al1 + a2-Al2, 0],   [RmiA-RmiAl, 0],   [RmiA, 1], [RmiB, 1],  [RmiB+RmiBt, 0], [b1 + Bt1 + b2 + Bt2 + RmiB+RmiBt + 5, 0],],
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
			b1 = parseFloat(document.getElementById('ср1_2').value),
			b2 = parseFloat(document.getElementById('ср2_2').value),
				Al1 = parseFloat(document.getElementById('ср1_3').value),
				Al2 = parseFloat(document.getElementById('ср2_3').value);
					Bt1 = parseFloat(document.getElementById('ср1_4').value);
					Bt2 = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('PrtCh1');
	var checkbox2=document.getElementById('test2');
	var checkbox3=document.getElementById('PrtCh3');
	var d,d2,d3;
				if ( Al1 < 0 || Bt1 < 0 ){
		alert('Невірно введено число');
	}else {
		
		if(a1 > b1){
			alert('Неправильний порядок ведення. Вимога: a < b');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
		
		var proA = -a1;
		var proB = -b1;
		var proAl = Al1;
		var proBt = Bt1;
		var d;
		
		if (proA>proB){
			
			
			d = proA;
			proA = proB;
			proB = d;
		}

		document.getElementById('protvivod_ch1').innerHTML = 'C = < ' + proA + ', ' + proB + ', ' + proAl + ', ' + proBt + ' >' ;

	
	var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a1-Al1, 0],   [a1-Al1, 0],   [a1, 1],  [b1, 1], [a1+Bt1, 0], [a1 + Bt1 + 3, 0], ], 
	color: '#556B2F'
},]
			
}
	if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+proA-proAl, 0],   [proA-proAl, 0],   [proA, 1], [proB, 1],  [proB+proBt, 0], [proB+proBt + 3, 0],],
	color: '#B22222'
},]
			
}

if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+a1-Al1 +proA-proAl, 0],   [a1-Al1, 0],   [a1, 1],  [b1, 1], [a1+Bt1, 0], [proB+proBt + a1 + Bt1 + 3, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-5+a1-Al1 +proA-proAl, 0],   [proA-proAl, 0],   [proA, 1], [proB, 1],  [proA+proBt, 0], [proB+proBt + a1 + Bt1 + 3, 0],],
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
			tickDecimals: 2,
			tickSize: 2
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
		$('#ср2_4').css({
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
		$('#ср2_4').css({
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


