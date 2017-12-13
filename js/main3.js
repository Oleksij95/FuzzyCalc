
	function showTooltip(x, y, contents) {
    $('<div id="tooltip">' + contents + '</div>').css({
        top: y - 16,
        left: x + 20
    }).appendTo('body').fadeIn();
};


	function summC() {
	var a = parseFloat(document.getElementById('ср1_1').value),
		e = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			f = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				g = parseFloat(document.getElementById('ср2_3').value);
					d = parseFloat(document.getElementById('ср1_4').value);
					h = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('AddCh1');
	var checkbox2=document.getElementById('AddCh2');
	var checkbox3=document.getElementById('AddCh3');
	
		if (a < 0 || b < 0 || c < 0 || g < 0 ){
		alert('Невірно введено число');
	}else {
		
		if ((a > b || b > c || c > d) || (e > f || f > g || g > h)){
			alert('Неправильний порядок ведення. Вимога: a < b < c < d');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}

	var sumaA= a + e;
	var sumaB= b + f;
	var sumaAl= c + g;
	var sumaBt= d + h;

		document.getElementById('vivod_ch1').innerHTML = 'C = < ' + sumaA + ', ' + sumaB + ', ' + sumaAl + ', ' + sumaBt + ' >' ;		
		
		
		var hide = [];
		var all_data = [];

	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + 5, 0], ], 
	color: '#556B2F'
},]
			
}

	if(checkbox2.checked){
			all_data = [{label: "μB(x)",
	data: [ [-2+e, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [h + 5, 0], ], 
	color: '#9400D3'
},]		
}
		
	if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+sumaA, 0],   [sumaA, 0],   [sumaB, 1], [sumaAl, 1],  [sumaBt, 0], [sumaBt + 5, 0],],
	color: '#B22222'
},]
			
}
	if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+a + e, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + h + 5, 0], ], 
	color: '#556B2F'
},

{label: "μB(x)",
	data: [ [-5+a + e, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [d + h + 5, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-10 + a + sumaA, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [sumaBt + d + 5, 0], ], 
	color: '#556B2F'
},
{label: "μC(x)",
	data: [ [-10 + a + sumaA, 0],   [sumaA, 0],   [sumaB, 1], [sumaAl, 1],  [sumaBt, 0], [sumaBt + d + 5, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{label: "μB(x)",
	data: [ [-10 + e + sumaA, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [sumaBt + h + 5, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-10 + e + sumaA, 0],   [sumaA, 0],   [sumaB, 1], [sumaAl, 1],  [sumaBt, 0], [sumaBt + h + 5, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-10 + a + e + sumaA, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + h + sumaBt + 5, 0], ], 
	color: '#556B2F'
},
			
			{label: "μB(x)",
	data: [ [-10 + a + e + sumaA, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [d + h + sumaBt + 5, 0], ], 
	color: '#9400D3'
},


{label: "μC(x)",
	data: [ [-10 + a + e + sumaA, 0],   [sumaA, 0],   [sumaB, 1], [sumaAl, 1],  [sumaBt, 0], [d + h + sumaBt + 5, 0],],
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
	var a = parseFloat(document.getElementById('ср1_1').value),
		e = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			f = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				g = parseFloat(document.getElementById('ср2_3').value);
					d = parseFloat(document.getElementById('ср1_4').value);
					h = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('VidCh1');
	var checkbox2=document.getElementById('VidCh2');
	var checkbox3=document.getElementById('VidCh3');
				
				
				if (a < 0 || b < 0 || c < 0 || g < 0 ){
		alert('Невірно введено число');
	}else {
		
		if ((a > b || b > c || c > d) || (e > f || f > g || g > h)){
			alert('Неправильний порядок ведення. Вимога: a < b < c < d');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}

		var VidA = a - h;
		var VidB = b - g;
		var VidAl = c - f;
		var VidBt = d - e;
		var d,d2,d3;
		document.getElementById('Vidvivod_ch1').innerHTML = 'C = < ' + VidA + ', ' + VidB + ', ' + VidAl + ', ' + VidBt + ' >' ;


		var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + 5, 0], ], 
	color: '#556B2F'
},]
			
}


	if(checkbox2.checked){
			all_data = [{label: "μB(x)",
	data: [ [-2+e, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [h + 5, 0], ], 
	color: '#9400D3'
},]		
}
		
		
	if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+VidA, 0],   [VidA, 0],   [VidB, 1], [VidAl, 1],  [VidBt, 0], [VidBt + 5, 0],],
	color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+a + e, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + h + 5, 0], ], 
	color: '#556B2F'
},

{label: "μB(x)",
	data: [ [-5+e + a, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [h + d + 5, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5 + a + VidA, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [VidBt + d + 5, 0], ], 
	color: '#556B2F'
},
{label: "μC(x)",
	data: [ [-5 + a + VidA, 0],   [VidA, 0],   [VidB, 1], [VidAl, 1],  [VidBt, 0], [VidBt + d + 5, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{label: "μB(x)",
	data: [ [-5+e+VidA, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [VidBt + h + 5, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-5+e+VidA, 0],   [VidA, 0],   [VidB, 1], [VidAl, 1],  [VidBt, 0], [VidBt + h + 5, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-8 + a + e + VidA, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + h + VidBt + 5, 0], ], 
	color: '#556B2F'
},
			
{label: "μB(x)",
	data: [ [-8 + a + e + VidA, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [d + h + VidBt + 5, 0], ], 
	color: '#9400D3'
},


{label: "μC(x)",
	data: [ [-8 + a + e + VidA, 0],   [VidA, 0],   [VidB, 1], [VidAl, 1],  [VidBt, 0], [d + h + VidBt + 5, 0],],
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
var a = parseFloat(document.getElementById('ср1_1').value),
		e = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			f = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				g = parseFloat(document.getElementById('ср2_3').value);
					d = parseFloat(document.getElementById('ср1_4').value);
					h = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('MnoCh1');
	var checkbox2=document.getElementById('MnoCh2');
	var checkbox3=document.getElementById('MnoCh3');
				if (a < 0 || b < 0 || c < 0 || g < 0 ){
		alert('Невірно введено число');
	}else {
		
		if ((a > b || b > c || c > d) || (e > f || f > g || g > h)){
			alert('Неправильний порядок ведення. Вимога: a < b < c < d');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
		

	var mnoA= a * e;
	var mnoB= b * f;
	var mnoAl= c * g;
	var mnoBt= d * h;
	var d1,d2,d3;
	document.getElementById('mno_vivod').innerHTML = 'C = < ' + mnoA + ', ' + mnoB + ', ' + mnoAl + ', ' + mnoBt + ' >' ;	
	
		
		
	
	var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + 5, 0], ], 
	color: '#556B2F'
},]
			
}


	if(checkbox2.checked){
			all_data = [{label: "μB(x)",
	data: [ [-2+e, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [h + 5, 0], ], 
	color: '#9400D3'
},]		
}
		
		
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+mnoA, 0],   [mnoA, 0],   [mnoB, 1], [mnoAl, 1],  [mnoBt, 0], [mnoBt + 5, 0],],
	color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5 + a + e, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + h + 5, 0], ], 
	color: '#556B2F'
},

{label: "μB(x)",
	data: [ [-5 + e + a, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [h + d + 5, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-10 + a + mnoA, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + mnoBt + 5, 0], ], 
	color: '#556B2F'
},
{label: "μC(x)",
	data: [ [-10 + a + mnoA, 0],   [mnoA, 0],   [mnoB, 1], [mnoAl, 1],  [mnoBt, 0], [d + mnoBt + 5, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{label: "μB(x)",
	data: [ [-10 + e + mnoA, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [h + mnoBt + 5, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-10 + e + mnoA, 0],   [mnoA, 0],   [mnoB, 1], [mnoAl, 1],  [mnoBt, 0], [mnoBt + h + 5, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-10 + a + e + mnoA, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + h + mnoBt + 5, 0], ], 
	color: '#556B2F'
},
			
			{label: "μB(x)",
	data: [ [-10 + a + e + mnoA, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [d + h + mnoBt + 5, 0], ], 
	color: '#9400D3'
},


{label: "μC(x)",
	data: [ [-10 + a + e + mnoA, 0],   [mnoA, 0],   [mnoB, 1], [mnoAl, 1],  [mnoBt, 0], [d + h + mnoBt + 5, 0],],
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
var a = parseFloat(document.getElementById('ср1_1').value),
		e = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			f = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				g = parseFloat(document.getElementById('ср2_3').value);
					d = parseFloat(document.getElementById('ср1_4').value);
					h = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('DilCh1');
	var checkbox2=document.getElementById('DilCh2');
	var checkbox3=document.getElementById('DilCh3');
	var d,d2,d3;			
				if (a < 0 || b < 0 || c < 0 || g < 0 ){
		alert('Невірно введено число');
	}else {
		
		if ((a > b || b > c || c > d) || (e > f || f > g || g > h)){
			alert('Неправильний порядок ведення. Вимога: a < b < c < d');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
		
		if (e === 0 || f === 0){
			alert('Ділення на 0!');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0
		}
		
		var dilA = a / e;
		var dilB = b / f;
		var dilAl = ((a * h + f * c)/Math.pow(f,2)); 
		var dilBt = ((b * g + e * d)/Math.pow(e,2)); 
		document.getElementById('Dilvivod_ch1').innerHTML = 'C = < ' + dilA.toFixed(3)  + ', ' + dilB.toFixed(3)+ ', ' + dilAl.toFixed(3) + ', ' + dilBt.toFixed(3) + ' >' ;

		
		var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + 5, 0], ], 
	color: '#556B2F'
},]
			
}


	if(checkbox2.checked){
			all_data = [{label: "μB(x)",
	data: [ [-2+e, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [h + 5, 0], ], 
	color: '#9400D3'
},]		
}
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+dilA, 0],   [dilA, 0],   [dilB, 1], [dilAl, 1],  [dilBt, 0], [dilBt + 5, 0],],
	color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5 + a + e, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + h + 5, 0], ], 
	color: '#556B2F'
},

{label: "μB(x)",
	data: [ [-5 + a + e, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [h + d + 5, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5 + a + dilA,, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + dilBt + 5, 0], ], 
	color: '#556B2F'
},
{label: "μC(x)",
	data: [ [-5 + a + dilA, 0],   [dilA, 0],   [dilB, 1], [dilAl, 1],  [dilBt, 0], [dilBt + d +5, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{label: "μB(x)",
	data: [ [-8 + e + dilA, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [h + dilBt + 5, 0], ], 
	color: '#9400D3'
},
{label: "μC(x)",
	data: [ [-8 + e + dilA, 0],   [dilA, 0],   [dilB, 1], [dilAl, 1],  [dilBt, 0], [dilBt + h + 5, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-10 + a + e + dilA, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [h + dilBt + d + 5, 0], ], 
	color: '#556B2F'
},
			
			{label: "μB(x)",
	data: [ [-10 + a + e + dilA, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [h + dilBt + d + 5, 0], ], 
	color: '#9400D3'
},


{label: "μC(x)",
	data: [ [-10 + a + e + dilA, 0],   [dilA, 0],   [dilB, 1], [dilAl, 1],  [dilBt, 0], [h + dilBt + d + 5, 0],],
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
	var a = parseFloat(document.getElementById('ср1_1').value),
		e = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			f = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				g = parseFloat(document.getElementById('ср2_3').value);
					d = parseFloat(document.getElementById('ср1_4').value);
					h = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('ObrCh1');
	var checkbox2=document.getElementById('test2');
	var checkbox3=document.getElementById('ObrCh3');
								if (a < 0 || b < 0 || c < 0 || g < 0 ){
		alert('Невірно введено число');
	}else {
		
		if (a > b || b > c || c > d){
			alert('Неправильний порядок ведення. Вимога: a < b < c < d');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
		
		if ( d === 0 || c === 0 || b === 0 || a === 0 ){
			alert('Ділення на 0');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
		
		var ObrA = 1 / d;
		var ObrB = 1 / c;
		var ObrAl = 1 / b; 
		var ObrBt = 1 / a; 
		var d,d2,d3;
		document.getElementById('Obervivod_ch1').innerHTML = 'C = < ' + ObrA.toFixed(3) + ', ' + ObrB.toFixed(3) + ', ' + ObrAl.toFixed(3) + ', ' + ObrBt.toFixed(3) + ' >' ;
		
	var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + 5, 0], ], 
	color: '#556B2F'
},]
			
}

			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+ObrA, 0],   [ObrA, 0],   [ObrB, 1], [ObrAl, 1],  [ObrBt, 0], [ObrBt + 5, 0],],
	color: '#B22222'
},]
			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5 + a + ObrA, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + ObrBt +5, 0], ], 
	color: '#556B2F'
},

{label: "μC(x)",
	data: [ [-5 + a + ObrA, 0],   [ObrA, 0],   [ObrB, 1], [ObrAl, 1],  [ObrBt, 0], [ObrBt + d + 5, 0],],
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
		var a = parseFloat(document.getElementById('ср1_1').value),
		e = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			f = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				g = parseFloat(document.getElementById('ср2_3').value);
					d = parseFloat(document.getElementById('ср1_4').value);
					h = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('RmxCh1');
	var checkbox2=document.getElementById('RmxCh2');
	var checkbox3=document.getElementById('RmxCh3');
	var d,d2,d3;
			if (a < 0 || b < 0 || c < 0 || g < 0 ){
		alert('Невірно введено число');
	}else {
		
		if ((a > b || b > c || c > d) || (e > f || f > g || g > h)){
			alert('Неправильний порядок ведення. Вимога: a < b < c < d');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
		
		var RmaxA = Math.max(b, f);
		var RmaxB = Math.max(c, g);
		var RmaxAl = RmaxA - Math.max(b - a,f - e); 
		var RmaxBt = Math.max(c + d, g + h) - RmaxB;
		var d,d2,d3, min = 999;
		document.getElementById('rmax_ch1').innerHTML = 'C = < ' + RmaxA + ', ' + RmaxB + ', '  + RmaxAl + ', ' + RmaxBt + ' >' ;
		
		
		var hide = [];
		var all_data = [];


		if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + 5, 0], ], 
	color: '#556B2F'
},]
			
}

	if(checkbox2.checked){
			all_data = [{label: "μB(x)",
	data: [ [-2+e, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [h + 5, 0], ], 
	color: '#9400D3'
},]		
}
		
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+RmaxA, 0],   [RmaxA, 0],   [RmaxB, 1], [RmaxAl, 1],  [RmaxBt, 0], [RmaxBt + 5, 0],],
	color: '#B22222'
},]
			
}

		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5+a + e, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + h + 5, 0], ], 
	color: '#556B2F'
},

{label: "μB(x)",
	data: [ [-5+a + e, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [d + h + 5, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5 + a + RmaxA, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + RmaxBt + 5, 0], ], 
	color: '#556B2F'
},
{label: "μC(x)",
	data: [ [-5 + a + RmaxA, 0],   [RmaxA, 0],   [RmaxB, 1], [RmaxAl, 1],  [RmaxBt, 0], [RmaxBt + d + 5, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{label: "μB(x)",
	data: [ [-5 + e + RmaxA, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [h + RmaxBt + 5, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-5 + e + RmaxA, 0],   [RmaxA, 0],   [RmaxB, 1], [RmaxAl, 1],  [RmaxBt, 0], [RmaxBt + h + 5, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-10 + a + RmaxA + e, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [RmaxBt + h + d + 5, 0], ], 
	color: '#556B2F'
},
			
		{label: "μB(x)",
	data: [ [-10 + a + RmaxA + e, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [RmaxBt + h + d + 5, 0], ], 
	color: '#9400D3'
},


{label: "μC(x)",
	data: [ [-10 + a + RmaxA + e, 0],   [RmaxA, 0],   [RmaxB, 1], [RmaxAl, 1],  [RmaxBt, 0], [RmaxBt + h + d + 5, 0],],
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
	var a = parseFloat(document.getElementById('ср1_1').value),
		e = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			f = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				g = parseFloat(document.getElementById('ср2_3').value);
					d = parseFloat(document.getElementById('ср1_4').value);
					h = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('RmiCh1');
	var checkbox2=document.getElementById('RmiCh2');
	var checkbox3=document.getElementById('RmiCh3');
	var d,d2,d3;	
				if (a < 0 || b < 0 || c < 0 || g < 0 ){
		alert('Невірно введено число');
	}else {
		
		if ((a > b || b > c || c > d) || (e > f || f > g || g > h)){
			alert('Неправильний порядок ведення. Вимога: a < b < c < d');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
		
		var RmiA = Math.min(b, f);
		var RmiB = Math.min(c, g);
		var RmiAl = RmiA - Math.min(b - a, f - e);
		var RmiBt = Math.min(c + d, g + h) - RmiB; //уточнить за формулу
		var d,d2,d3;
		document.getElementById('rmin_ch1').innerHTML = 'C = < ' + RmiA + ', '+ RmiB+ ', ' + RmiAl + ', ' + RmiBt + ' >' ;
		

		
	var hide = [];
		var all_data = [];


		if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + 5, 0], ], 
	color: '#556B2F'
},]
			
}

	if(checkbox2.checked){
			all_data = [{label: "μB(x)",
	data: [ [-2+e, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [h + 5, 0], ], 
	color: '#9400D3'
},]		
}
		
			if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-2+RmiA, 0],   [RmiA, 0],   [RmiB, 1], [RmiAl, 1],  [RmiBt, 0], [RmiBt + 5, 0],],
	color: '#B22222'
},]
			
}
		if(checkbox.checked && checkbox2.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5 + a + e, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + h + 5, 0], ], 
	color: '#556B2F'
},

{label: "μB(x)",
	data: [ [-5 + a + e, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [d + h + 5, 0], ], 
	color: '#9400D3'
},]			
}


if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5 + a + RmiA, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + RmiBt + 5, 0], ], 
	color: '#556B2F'
},
{label: "μC(x)",
	data: [ [-5 + a + RmiA, 0],   [RmiA, 0],   [RmiB, 1], [RmiAl, 1],  [RmiBt, 0], [RmiBt + d + 5, 0],],
	color: '#B22222'
},]		
}

if(checkbox2.checked && checkbox3.checked ){
			all_data = [{label: "μB(x)",
	data: [ [-5 + e + RmiA, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [h + RmiBt + 5, 0], ], 
	color: '#9400D3'
},

{label: "μC(x)",
	data: [ [-5 + e + RmiA, 0],   [RmiA, 0],   [RmiB, 1], [RmiAl, 1],  [RmiBt, 0], [RmiBt + h + 5, 0],],
	color: '#B22222'
},]		
}
		
		
if(checkbox.checked && checkbox2.checked  && checkbox3.checked){
			all_data = [{label: "μA(x)",
	data: [ [-10 + e + RmiA + a, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [RmiBt + h + d + 5, 0], ], 
	color: '#556B2F'
},

			
			{label: "μB(x)",
	data: [ [-10 + e + RmiA + a, 0],   [e, 0],   [f, 1], [g, 1],  [h, 0], [RmiBt + h + d + 5, 0], ], 
	color: '#9400D3'
},


{label: "μC(x)",
	data: [ [-10 + e + RmiA + a, 0],   [RmiA, 0],   [RmiB, 1], [RmiAl, 1],  [RmiBt, 0], [RmiBt + h + d + 5, 0],],
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
	var a = parseFloat(document.getElementById('ср1_1').value),
		e = parseFloat(document.getElementById('ср2_1').value),
			b = parseFloat(document.getElementById('ср1_2').value),
			f = parseFloat(document.getElementById('ср2_2').value),
				c = parseFloat(document.getElementById('ср1_3').value),
				g = parseFloat(document.getElementById('ср2_3').value);
					d = parseFloat(document.getElementById('ср1_4').value);
					h = parseFloat(document.getElementById('ср2_4').value);
	var checkbox=document.getElementById('PrtCh1');
	var checkbox2=document.getElementById('test2');
	var checkbox3=document.getElementById('PrtCh3');
	var d,d2,d3;
				if (a < 0 || b < 0 || c < 0 || g < 0 ){
		alert('Невірно введено число');
	}else {
		
		if (a > b || b > c || c > d){
			alert('Неправильний порядок ведення. Вимога: a < b < c < d');
			checkbox.checked = false;
			checkbox2.checked = false;
			checkbox3.checked = false;
			return 0;
		}
		
		var proA = -d;
		var proB = -c;
		var proAl = -b;
		var proBt = -a;
		var d,d2,d3;
		document.getElementById('protvivod_ch1').innerHTML = 'C = < ' + proA + ', ' + proB + ', ' + proAl + ', ' + proBt + ' >' ;	
	
	var hide = [];
		var all_data = [];


	if(checkbox.checked){
			all_data = [{label: "μA(x)",
	data: [ [-2+a, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [d + 5, 0], ], 
	color: '#556B2F'
},]
			
}
	if(checkbox3.checked){
			all_data = [{label: "μC(x)",
	data: [ [-5+proA, 0],   [proA, 0],   [proB, 1], [proAl, 1],  [proBt, 0], [proBt + 5, 0],],
	color: '#B22222'
},]
			
}

if(checkbox.checked && checkbox3.checked ){
			all_data = [{label: "μA(x)",
	data: [ [-5 + a + proA, 0],   [a, 0],   [b, 1], [c, 1],  [d, 0], [proBt + d + 5, 0], ], 
	color: '#556B2F'
},
{label: "μC(x)",
	data: [ [-5 + proA + a, 0],   [proA, 0],   [proB, 1], [proAl, 1],  [proBt, 0], [proBt + d + 5, 0],],
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
