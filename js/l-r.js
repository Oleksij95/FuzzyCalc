

function FnSummLR () {
	
	var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			al1 = parseFloat(document.getElementById('ср1_2').value),
			al2 = parseFloat(document.getElementById('ср2_2').value),
				b1 = parseFloat(document.getElementById('ср1_3').value),
				b2 = parseFloat(document.getElementById('ср2_3').value);
	var entP = document.getElementById("enterP").value;
	var x;
	var L = [];
	var R = [];
	var fn1 = [], fnAx = [], fnBx = [], fn2 = [], fn3 = [], fn4 = [], p = 2, w, t;

	var massa = [];

	var checkbox1=document.getElementById('t1');
	var checkbox2=document.getElementById('t2');
	var checkbox3=document.getElementById('t3');
	var checkbox4=document.getElementById('t4');

	var Ax=document.getElementById('AddCh1');
	var Bx=document.getElementById('AddCh2');
	var Cx=document.getElementById('AddCh3');

	

	if (al1 < 0 || al2 < 0 || b1 < 0 || b2 < 0 ){
		alert('Невірно введено число');
	}
	
	else {
		
		var m = a1 + a2;
		var a = al1 + al2;
		var b = b1 + b2;
		var y;
		y  = m * 2;
		document.getElementById('vivod_ch1').innerHTML = 'C = < ' + m + ', ' + a + ', ' + b + ' >' ;			

	}	
		

	if(checkbox1.checked){
			
			
			if(Ax.checked){


					for (var q = 0; q <= a1*2; q++){      
						massa[q] = q;
					}



					for (x = 0; x <= a1*2; x++){

					if (x <= a1) {
						fnAx[x] = Math.exp(-Math.pow(Math.abs((a1 - x) / al1), entP));
					}

					if (x >= a1) {				
						fnAx[x] = Math.exp(-Math.pow(Math.abs((x - a1) / b1), entP));
					}
				}

			
				var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
			}   
			
			if(Bx.checked){

				for (var q = 0; q <= a2*2; q++){      
					massa[q] = q;
				}


				for (x = 1; x <= a2*2; x++){

				if (x <= a2) {
					fnBx[x] = Math.exp(-Math.pow(Math.abs((a2 - x) / al2), entP));
				}

				if (x >= a2) {				
					fnBx[x] = Math.exp(-Math.pow(Math.abs((x - a2) / b2), entP));

				}
			}

				var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;

			}

			if(Cx.checked){

				for (var q = -5; q <= y; q++){      
					massa[q] = q;
				}

				for (x = 1; x <= y; x++){

				if (x <= m) {
					fn1[x] = Math.exp(-Math.pow(Math.abs((m - x) / a), entP));
				}

				if (x >= m) {				
					fn1[x] = Math.exp(-Math.pow(Math.abs((x - m) / b), entP));
					console.log(fn1[x]);

				}
			}

				
				var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
				config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
			}

		if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}

		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
	        	config.data.datasets[2].data = fn1;
		}





	         var ctx = document.getElementById("myChart").getContext("2d");
	   		 window.myLine = new Chart(ctx, config);


		}

		if(checkbox2.checked){

			if(Ax.checked){
				for (var q = 0; q <= a1*2; q++){      
					massa[q] = q;
				}

				for (x = 0; x <= a1*2; x++){

					if (x <= a1) {
						fnAx[x] = 1 / (1 + Math.pow(Math.abs((a1 - x) / al1), entP));
					}

					if (x >= a1) {				
						fnAx[x] = 1 / (1 + Math.pow(Math.abs((x - a1) / b1), entP));
					}
			}

			
				var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
			}

			if(Bx.checked){
				for (var q = 0; q <= a2*2; q++){      
					massa[q] = q;
				}

				for (x = 0; x <= a2*2; x++){

					if (x <= a2) {
						fnBx[x] = 1 / (1 + Math.pow(Math.abs((a2 - x) / al2), entP));
						console.log(fnBx[x]);
					}

					if (x >= a2) {				
						fnBx[x] = 1 / (1 + Math.pow(Math.abs((x - a2) / b2), entP));
						console.log(fnBx[x]);
					}
			}

			
					var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;
			}

			if(Cx.checked){
				for (var q = 0; q <= y; q++){      
					massa[q] = q;
				}

				for (x = 0; x <= y; x++){

					if (x <= m) {
						fn1[x] = 1 / (1 + Math.pow(Math.abs((m - x) / a), entP));
					}

					if (x >= m) {				
						fn1[x] = 1 / (1 + Math.pow(Math.abs((x - m) / b), entP));
					}
			}
				var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
			}

			if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}
		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
	        	config.data.datasets[2].data = fn1;
		}

	        var ctx = document.getElementById("myChart").getContext("2d");             
	    	window.myLine = new Chart(ctx, config);
		}

		if(checkbox3.checked){

			if(Ax.checked){
				for (var q = 0; q <= a1*2; q++){      
					massa[q] = q;
				}

				for (x = 0; x <= a1*2; x++){

					if (x <= a1) {
						fnAx[x] = Math.max(0, 1 - Math.pow(Math.abs((a1 - x) / al1), entP));
					}

					if (x >= a1) {				
						fnAx[x] = Math.max(0, 1 - Math.pow(Math.abs((x - a1) / b1), entP));
					}
			}

			
				var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
			}

			if(Bx.checked){
				for (var q = 0; q <= a2*2; q++){      
					massa[q] = q;
				}

				for (x = 0; x <= a2*2; x++){

					if (x <= a2) {
						fnBx[x] = Math.max(0, 1 - Math.pow(Math.abs((a2 - x) / al2), entP));
					}

					if (x >= a2) {		
						fnBx[x] = Math.max(0, 1 - Math.pow(Math.abs((x - a2) / b2), entP));
					}
			}

			
				var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;
			}

			if(Cx.checked){
				for (var q = 0; q <= y; q++){      
					massa[q] = q;
				}

				for (x = 0; x <= y; x++){

					if (x <= m) {
						fn1[x] = Math.max(0, 1 - Math.pow(Math.abs((m - x) / a), entP));
					}

					if (x >= m) {
						fn1[x] = Math.max(0, 1 - Math.pow(Math.abs((x - m) / b), entP));
					}
			}

				var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
				config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
			}
			if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}

		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
	        	config.data.datasets[2].data = fn1;
		}

	        var ctx = document.getElementById("myChart").getContext("2d");             
	    	window.myLine = new Chart(ctx, config);
		}   
};

function FnVidLR () {
		
	
	var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			al1 = parseFloat(document.getElementById('ср1_2').value),
			al2 = parseFloat(document.getElementById('ср2_2').value),
				b1 = parseFloat(document.getElementById('ср1_3').value),
				b2 = parseFloat(document.getElementById('ср2_3').value);
				var entP = document.getElementById("enterP").value;
	var x;
	var L = [];
	var R = [];
	var fn1 = [], fnAx = [], fnBx = [], fn2 = [], fn3 = [], fn4 = [], p = 2, w, t;

	var massa = [];

	var checkbox1=document.getElementById('t1');
	var checkbox2=document.getElementById('t2');
	var checkbox3=document.getElementById('t3');
	var checkbox4=document.getElementById('t4');

	var Ax=document.getElementById('VidCh1');
	var Bx=document.getElementById('VidCh2');
	var Cx=document.getElementById('VidCh3');

	

	if (al1 < 0 || al2 < 0 || b1 < 0 || b2 < 0 ){
		alert('Невірно введено число');
	}
	
	else {
		
		var m = a1 - a2;
		var a = al1 + al2;
		var b = b1 + b2;
		var y;
		y  = Math.abs(m * 2); 
		var min = 9999;
		document.getElementById('Vidvivod_ch1').innerHTML = 'C = < ' + m + ', ' + a + ', ' + b + ' >' ;			

	}	
		

	if(checkbox1.checked){
		
		
		if(Ax.checked){


				for (var q = -20; q <= a1*2; q++){      
					massa[q] = q;
					
				}



			for (x = 0; x <= a1*2; x++){

			if (x <= a1) {
				fnAx[x] = Math.exp(-Math.pow(Math.abs((a1 - x) / al1), entP));
			}

			if (x >= a1) {				
				fnAx[x] = Math.exp(-Math.pow(Math.abs((x - a1) / b1), entP));
			}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
		}   
		
		if(Bx.checked){

			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}


			for (x = 1; x <= a2*2; x++){

			if (x <= a2) {
				fnBx[x] = Math.exp(-Math.pow(Math.abs((a2 - x) / al2), entP));
			}

			if (x >= a2) {				
				fnBx[x] = Math.exp(-Math.pow(Math.abs((x - a2) / b2), entP));

			}
		}

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;

		}

		if(Cx.checked){

			for (var q = -10; q <= y; q++){      
				massa[q] = q;
					console.log(massa[q]);
			}


			for (x = -50; x <= y; x++){

			if (x <= m) {
				fn1[x] = Math.exp(-Math.pow(Math.abs((m - x) / a), entP));
			}

			if (x >= m) {				
				fn1[x] = Math.exp(-Math.pow(Math.abs((x - m) / b), entP));

			}
		}

			
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
				config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
		}

	if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}

		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
	        	config.data.datasets[2].data = fn1;
		}





	    



         var ctx = document.getElementById("myChart_Vid").getContext("2d");
   		 window.myLine = new Chart(ctx, config);
	}

	if(checkbox2.checked){

		if(Ax.checked){
			for (var q = 0; q <= a1*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a1*2; x++){

				if (x <= a1) {
					fnAx[x] = 1 / (1 + Math.pow(Math.abs((a1 - x) / al1), entP));
				}

				if (x >= a1) {				
					fnAx[x] = 1 / (1 + Math.pow(Math.abs((x - a1) / b1), entP));
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
		}

		if(Bx.checked){
			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a2*2; x++){

				if (x <= a2) {
					fnBx[x] = 1 / (1 + Math.pow(Math.abs((a2 - x) / al2), entP));
					console.log(fnBx[x]);
				}

				if (x >= a2) {				
					fnBx[x] = 1 / (1 + Math.pow(Math.abs((x - a2) / b2), entP));
					console.log(fnBx[x]);
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;
		}

		if(Cx.checked){
			for (var q = 0; q <= y; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= y; x++){

				if (x <= m) {
					fn1[x] = 1 / (1 + Math.pow(Math.abs((m - x) / a), entP));
				}

				if (x >= m) {				
					fn1[x] = 1 / (1 + Math.pow(Math.abs((x - m) / b), entP));
				}
		}

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
		}
		if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}
		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
	        	config.data.datasets[2].data = fn1;
		}




        var ctx = document.getElementById("myChart_Vid").getContext("2d");             
    	window.myLine = new Chart(ctx, config);
	}
	if(checkbox3.checked){

		if(Ax.checked){
			for (var q = 0; q <= a1*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a1*2; x++){

				if (x <= a1) {
					fnAx[x] = Math.max(0, 1 - Math.pow(Math.abs((a1 - x) / al1), entP));
				}

				if (x >= a1) {				
					fnAx[x] = Math.max(0, 1 - Math.pow(Math.abs((x - a1) / b1), entP));
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
		}

		if(Bx.checked){
			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a2*2; x++){

				if (x <= a2) {
					fnBx[x] = Math.max(0, 1 - Math.pow(Math.abs((a2 - x) / al2), entP));
				}

				if (x >= a2) {		
					fnBx[x] = Math.max(0, 1 - Math.pow(Math.abs((x - a2) / b2), entP));
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;
		}

		if(Cx.checked){
			for (var q = 0; q <= y; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= y; x++){

				if (x <= m) {
					fn1[x] = Math.max(0, 1 - Math.pow(Math.abs((m - x) / a), entP));
				}

				if (x >= m) {
					fn1[x] = Math.max(0, 1 - Math.pow(Math.abs((x - m) / b), entP));
				}
		}

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
				config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
		}
		if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}

		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
	        	config.data.datasets[2].data = fn1;
		}

        var ctx = document.getElementById("myChart_Vid").getContext("2d");             
    	window.myLine = new Chart(ctx, config);
	}  
};

function FnMnoLR () {
		
	
	var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			al1 = parseFloat(document.getElementById('ср1_2').value),
			al2 = parseFloat(document.getElementById('ср2_2').value),
				b1 = parseFloat(document.getElementById('ср1_3').value),
				b2 = parseFloat(document.getElementById('ср2_3').value);
	var entP = document.getElementById("enterP").value;
	var x;
	var L = [];
	var R = [];
	var fn1 = [], fnAx = [], fnBx = [], fn2 = [], fn3 = [], fn4 = [], p = 2, w, t;

	var massa = [];

	var checkbox1=document.getElementById('t1');
	var checkbox2=document.getElementById('t2');
	var checkbox3=document.getElementById('t3');
	var checkbox4=document.getElementById('t4');

	var Ax=document.getElementById('MnoCh1');
	var Bx=document.getElementById('MnoCh2');
	var Cx=document.getElementById('MnoCh3');

	

	if (al1 < 0 || al2 < 0 || b1 < 0 || b2 < 0 ){
		alert('Невірно введено число');
	}
	
	else {


		var MnoA, MnoAl, MnoB;
		
		if(a1 > 0 && a2 > 0 ){
			m = a1*a2;
			a = a1*al2+ a2*al1;
			b = a1*b2 + a2 * b1;
			document.getElementById('Mnovivod_ch1').innerHTML = 'C = < ' + m + ', ' + a + ', ' + b + ' >' ;
		}
		if (a1 < 0 && a2 > 0) {
			m = a1*a2;
			a = -a1*al2+ a2*al1;
			b = -a1*b2 + a2 * b1;
			document.getElementById('Mnovivod_ch1').innerHTML = 'C = < ' + m + ', ' + a + ', ' + b + ' >' ;
		}
			if (a1 > 0 && a2 < 0) {
			m = a1*a2;
			a = a1*al2 - a2*al1;
			b = a1*b2 - a2 * b1;
			document.getElementById('Mnovivod_ch1').innerHTML = 'C = < ' + m + ', ' + a + ', ' + b + ' >' ;
		}
		
			if (a1 < 0 && a2 < 0) {
			m = a1*a2;
			a = -a1*al2 - a2*al1;
			b = -a1*b2 - a2 * b1;
			document.getElementById('Mnovivod_ch1').innerHTML = 'C = < ' + m + ', ' + a + ', ' + b + ' >' ;
		}
		
	
		var y;
		y  = m * 2;

	}	
		

	if(checkbox1.checked){
		
		
		if(Ax.checked){


				for (var q = 0; q <= a1*2; q++){      
					massa[q] = q;
				}



			for (x = 0; x <= a1*2; x++){

			if (x <= a1) {
				fnAx[x] = Math.exp(-Math.pow(Math.abs((a1 - x) / al1), entP));
			}

			if (x >= a1) {				
				fnAx[x] = Math.exp(-Math.pow(Math.abs((x - a1) / b1), entP));
			}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
		}   
		
		if(Bx.checked){

			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}


			for (x = 1; x <= a2*2; x++){

			if (x <= a2) {
				fnBx[x] = Math.exp(-Math.pow(Math.abs((a2 - x) / al2), entP));
			}

			if (x >= a2) {				
				fnBx[x] = Math.exp(-Math.pow(Math.abs((x - a2) / b2), entP));

			}
		}

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;

		}

		if(Cx.checked){

			for (var q = 0; q <= y; q++){      
				massa[q] = q;
			}

			for (x = 1; x <= y; x++){

			if (x <= m) {
				fn1[x] = Math.exp(-Math.pow(Math.abs((m - x) / a), entP));
			}

			if (x >= m) {				
				fn1[x] = Math.exp(-Math.pow(Math.abs((x - m) / b), entP));

			}
		}

			
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
				config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
		}
		if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}

		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
	        	config.data.datasets[2].data = fn1;
		}


         var ctx = document.getElementById("myChart_Mno").getContext("2d");
   		 window.myLine = new Chart(ctx, config);
	}

	if(checkbox2.checked){

		if(Ax.checked){
			for (var q = 0; q <= a1*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a1*2; x++){

				if (x <= a1) {
					fnAx[x] = 1 / (1 + Math.pow(Math.abs((a1 - x) / al1), entP));
				}

				if (x >= a1) {				
					fnAx[x] = 1 / (1 + Math.pow(Math.abs((x - a1) / b1), entP));
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
		}

		if(Bx.checked){
			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a2*2; x++){

				if (x <= a2) {
					fnBx[x] = 1 / (1 + Math.pow(Math.abs((a2 - x) / al2), entP));
					console.log(fnBx[x]);
				}

				if (x >= a2) {				
					fnBx[x] = 1 / (1 + Math.pow(Math.abs((x - a2) / b2), entP));
					console.log(fnBx[x]);
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;
		}

		if(Cx.checked){
			for (var q = 0; q <= y; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= y; x++){

				if (x <= m) {
					fn1[x] = 1 / (1 + Math.pow(Math.abs((m - x) / a), entP));
				}

				if (x >= m) {				
					fn1[x] = 1 / (1 + Math.pow(Math.abs((x - m) / b), entP));
				}
		}

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
		}
		if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}
		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
	        	config.data.datasets[2].data = fn1;
		}

        var ctx = document.getElementById("myChart_Mno").getContext("2d");             
    	window.myLine = new Chart(ctx, config);
	}

	if(checkbox3.checked){

		if(Ax.checked){
			for (var q = 0; q <= a1*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a1*2; x++){

				if (x <= a1) {
					fnAx[x] = Math.max(0, 1 - Math.pow(Math.abs((a1 - x) / al1), entP));
				}

				if (x >= a1) {				
					fnAx[x] = Math.max(0, 1 - Math.pow(Math.abs((x - a1) / b1), entP));
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
		}

		if(Bx.checked){
			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a2*2; x++){

				if (x <= a2) {
					fnBx[x] = Math.max(0, 1 - Math.pow(Math.abs((a2 - x) / al2), entP));
				}

				if (x >= a2) {		
					fnBx[x] = Math.max(0, 1 - Math.pow(Math.abs((x - a2) / b2), entP));
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;
		}

		if(Cx.checked){
			for (var q = 0; q <= y; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= y; x++){

				if (x <= m) {
					fn1[x] = Math.max(0, 1 - Math.pow(Math.abs((m - x) / a), entP));
				}

				if (x >= m) {
					fn1[x] = Math.max(0, 1 - Math.pow(Math.abs((x - m) / b), entP));
				}
		}

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
				config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
		}

		if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}

		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
	        	config.data.datasets[2].data = fn1;
		}

        var ctx = document.getElementById("myChart_Mno").getContext("2d");             
    	window.myLine = new Chart(ctx, config);
	} 
	
};

function FnDilLR () {
		
	
	var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			al1 = parseFloat(document.getElementById('ср1_2').value),
			al2 = parseFloat(document.getElementById('ср2_2').value),
				b1 = parseFloat(document.getElementById('ср1_3').value),
				b2 = parseFloat(document.getElementById('ср2_3').value);
				var entP = document.getElementById("enterP").value;
	var x;
	var L = [];
	var R = [];
	var fn1 = [], fnAx = [], fnBx = [], fn2 = [], fn3 = [], fn4 = [], p = 2, w, t;

	var massa = [];

	var checkbox1=document.getElementById('t1');
	var checkbox2=document.getElementById('t2');
	var checkbox3=document.getElementById('t3');
	var checkbox4=document.getElementById('t4');

	var Ax=document.getElementById('DilCh1');
	var Bx=document.getElementById('DilCh2');
	var Cx=document.getElementById('DilCh3');

	

	if (al1 < 0 || al2 < 0 || b1 < 0 || b2 < 0 ){
		alert('Невірно введено число');
	}
	
	else {

		var m = a1 / a2;
		var a = ((a1*b2+a2*al1)/Math.pow(a2,2)); 
		var b = ((a1*al2+a2+b1)/Math.pow(a2,2)); 
		
		document.getElementById('Dilvivod_ch1').innerHTML = 'C = < ' + m.toFixed(3) + ', ' + a.toFixed(3) + ', ' + b.toFixed(3) + ' >' ;
			
		var y;
		y  = m * 2;

	}	
		

	if(checkbox1.checked){
		
		
		if(Ax.checked){


				for (var q = 0; q <= a1*2; q++){      
					massa[q] = q;
				}



			for (x = 0; x <= a1*2; x++){

			if (x <= a1) {
				fnAx[x] = Math.exp(-Math.pow(Math.abs((a1 - x) / al1), entP));
			}

			if (x >= a1) {				
				fnAx[x] = Math.exp(-Math.pow(Math.abs((x - a1) / b1), entP));
			}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
		}   
		
		if(Bx.checked){

			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}


			for (x = 1; x <= a2*2; x++){

			if (x <= a2) {
				fnBx[x] = Math.exp(-Math.pow(Math.abs((a2 - x) / al2), entP));
			}

			if (x >= a2) {				
				fnBx[x] = Math.exp(-Math.pow(Math.abs((x - a2) / b2), entP));

			}
		}

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;

		}

		if(Cx.checked){

			for (var q = 0; q <= y; q++){      
				massa[q] = q;
			}

			for (x = 1; x <= y; x++){

			if (x <= m) {
				fn1[x] = Math.exp(-Math.pow(Math.abs((m - x) / a), entP));
			}

			if (x >= m) {				
				fn1[x] = Math.exp(-Math.pow(Math.abs((x - m) / b), entP));

			}
		}

			
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
				config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
		}

	if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}

		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
	        	config.data.datasets[2].data = fn1;
		}



         var ctx = document.getElementById("myChart_Dil").getContext("2d");
   		 window.myLine = new Chart(ctx, config);
	}

	if(checkbox2.checked){

		if(Ax.checked){
			for (var q = 0; q <= a1*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a1*2; x++){

				if (x <= a1) {
					fnAx[x] = 1 / (1 + Math.pow(Math.abs((a1 - x) / al1), entP));
				}

				if (x >= a1) {				
					fnAx[x] = 1 / (1 + Math.pow(Math.abs((x - a1) / b1), entP));
				}
		}

		
			var config = {
              type: 'line',
              data: {
                  datasets: [{
                      label: "L - R",
                      backgroundColor: 'rgba(252,233,227,.4)',
                      borderColor: '#d74a54',
                      fill: '1'
                  }]
              	},
        	};
        	
        	config.data.labels = massa;
        	config.data.datasets[length].data = fnAx;
		}

		if(Bx.checked){
			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a2*2; x++){

				if (x <= a2) {
					fnBx[x] = 1 / (1 + Math.pow(Math.abs((a2 - x) / al2), entP));
					console.log(fnBx[x]);
				}

				if (x >= a2) {				
					fnBx[x] = 1 / (1 + Math.pow(Math.abs((x - a2) / b2), entP));
					console.log(fnBx[x]);
				}
		}

		
			var config = {
              type: 'line',
              data: {
                  datasets: [{
                      label: "L - R",
                      backgroundColor: 'rgba(252,233,227,.4)',
                      borderColor: '#d74a54',
                      fill: '1'
                  }]
              	},
        	};
        	
        	config.data.labels = massa;
        	config.data.datasets[length].data = fnBx;
		}

		if(Cx.checked){
			for (var q = 0; q <= y; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= y; x++){

				if (x <= m) {
					fn1[x] = 1 / (1 + Math.pow(Math.abs((m - x) / a), entP));
				}

				if (x >= m) {				
					fn1[x] = 1 / (1 + Math.pow(Math.abs((x - m) / b), entP));
				}
		}

			var config = {
              type: 'line',
              data: {
                  datasets: [{
                      label: "L - R",
                      backgroundColor: 'rgba(252,233,227,.4)',
                      borderColor: '#d74a54',
                      fill: '1'
                  }]
              	},
        	};
        	
        	config.data.labels = massa;
        	config.data.datasets[length].data = fn1;
		}

		if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}

		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
	        	config.data.datasets[2].data = fn1;
		}

        var ctx = document.getElementById("myChart_Dil").getContext("2d");             
    	window.myLine = new Chart(ctx, config);
	}

	if(checkbox3.checked){

		if(Ax.checked){
			for (var q = 0; q <= a1*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a1*2; x++){

				if (x <= a1) {
					fnAx[x] = Math.max(0, 1 - Math.pow(Math.abs((a1 - x) / al1), entP));
				}

				if (x >= a1) {				
					fnAx[x] = Math.max(0, 1 - Math.pow(Math.abs((x - a1) / b1), entP));
				}
		}

		
			var config = {
              type: 'line',
              data: {
                  datasets: [{
                      label: "L - R",
                      backgroundColor: 'rgba(252,233,227,.4)',
                      borderColor: '#d74a54',
                      fill: '1'
                  }]
              	},
        	};
        	
        	config.data.labels = massa;
        	config.data.datasets[length].data = fnAx;
		}

		if(Bx.checked){
			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a2*2; x++){

				if (x <= a2) {
					fnBx[x] = Math.max(0, 1 - Math.pow(Math.abs((a2 - x) / al2), entP));
				}

				if (x >= a2) {		
					fnBx[x] = Math.max(0, 1 - Math.pow(Math.abs((x - a2) / b2), entP));
				}
		}

		
			var config = {
              type: 'line',
              data: {
                  datasets: [{
                      label: "L - R",
                      backgroundColor: 'rgba(252,233,227,.4)',
                      borderColor: '#d74a54',
                      fill: '1'
                  }]
              	},
        	};
        	
        	config.data.labels = massa;
        	config.data.datasets[length].data = fnBx;
		}

		if(Cx.checked){
			for (var q = 0; q <= y; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= y; x++){

				if (x <= m) {
					fn1[x] = Math.max(0, 1 - Math.pow(Math.abs((m - x) / a), entP));
				}

				if (x >= m) {
					fn1[x] = Math.max(0, 1 - Math.pow(Math.abs((x - m) / b), entP));
				}
		}

			var config = {
              type: 'line',
              data: {
                  datasets: [{
                      label: "L - R",
                      backgroundColor: 'rgba(252,233,227,.4)',
                      borderColor: '#d74a54',
                      fill: '1'
                  }]
              	},
        	};
        	
        	config.data.labels = massa;
        	config.data.datasets[length].data = fn1;
		}

		if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}

		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
	        	config.data.datasets[2].data = fn1;
		}

        var ctx = document.getElementById("myChart_Dil").getContext("2d");             
    	window.myLine = new Chart(ctx, config);
	}
};

function FnRmaxLR () {
		
	
	var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			al1 = parseFloat(document.getElementById('ср1_2').value),
			al2 = parseFloat(document.getElementById('ср2_2').value),
				b1 = parseFloat(document.getElementById('ср1_3').value),
				b2 = parseFloat(document.getElementById('ср2_3').value);
	var entP = document.getElementById("enterP").value;
	var x;
	var L = [];
	var R = [];
	var fn1 = [], fnAx = [], fnBx = [], fn2 = [], fn3 = [], fn4 = [], p = 2, w, t;

	var massa = [];

	var checkbox1=document.getElementById('t1');
	var checkbox2=document.getElementById('t2');
	var checkbox3=document.getElementById('t3');
	var checkbox4=document.getElementById('t4');

	var Ax=document.getElementById('RmxCh1');
	var Bx=document.getElementById('RmxCh2');
	var Cx=document.getElementById('RmxCh3');

	

	if (al1 < 0 || al2 < 0 || b1 < 0 || b2 < 0 ){
		alert('Невірно введено число');
	}
	
	else {

		
		var m = Math.max(a1, a2);
		var a = m - Math.max(a1 - al1,a2 - al2); 
		var b = Math.max(a1 + b1, a2 + b2) - m; //уточнить за формулу
		
		document.getElementById('rmax_vivod').innerHTML = 'C = < ' + m.toFixed(3) + ', ' + a.toFixed(3) + ', ' + b.toFixed(3) + ' >' ;
			
		var y;
		y  = m * 2;

	}	
		

	if(checkbox1.checked){
		
		
		if(Ax.checked){


				for (var q = 0; q <= a1*2; q++){      
					massa[q] = q;
				}



			for (x = 0; x <= a1*2; x++){

			if (x <= a1) {
				fnAx[x] = Math.exp(-Math.pow(Math.abs((a1 - x) / al1), entP));
			}

			if (x >= a1) {				
				fnAx[x] = Math.exp(-Math.pow(Math.abs((x - a1) / b1), entP));
			}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
		}   
		
		if(Bx.checked){

			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}


			for (x = 1; x <= a2*2; x++){

			if (x <= a2) {
				fnBx[x] = Math.exp(-Math.pow(Math.abs((a2 - x) / al2), entP));
			}

			if (x >= a2) {				
				fnBx[x] = Math.exp(-Math.pow(Math.abs((x - a2) / b2), entP));

			}
		}

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;

		}

		if(Cx.checked){

			for (var q = 0; q <= y; q++){      
				massa[q] = q;
			}

			for (x = 1; x <= y; x++){

			if (x <= m) {
				fn1[x] = Math.exp(-Math.pow(Math.abs((m - x) / a), entP));
			}

			if (x >= m) {				
				fn1[x] = Math.exp(-Math.pow(Math.abs((x - m) / b), entP));

			}
		}

			
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
				config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
		}


	if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}

		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                  
	                  },{
	                  	 label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fn1;
	        	config.data.datasets[1].data = fnAx;
	        	config.data.datasets[2].data = fnBx;
	        	
		}


         var ctx = document.getElementById("myChart_rmax").getContext("2d");
   		 window.myLine = new Chart(ctx, config);
	}

	if(checkbox2.checked){

		if(Ax.checked){
			for (var q = 0; q <= a1*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a1*2; x++){

				if (x <= a1) {
					fnAx[x] = 1 / (1 + Math.pow(Math.abs((a1 - x) / al1), entP));
				}

				if (x >= a1) {				
					fnAx[x] = 1 / (1 + Math.pow(Math.abs((x - a1) / b1), entP));
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
		}

		if(Bx.checked){
			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a2*2; x++){

				if (x <= a2) {
					fnBx[x] = 1 / (1 + Math.pow(Math.abs((a2 - x) / al2), entP));
					console.log(fnBx[x]);
				}

				if (x >= a2) {				
					fnBx[x] = 1 / (1 + Math.pow(Math.abs((x - a2) / b2), entP));
					console.log(fnBx[x]);
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;
		}

		if(Cx.checked){
			for (var q = 0; q <= y; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= y; x++){

				if (x <= m) {
					fn1[x] = 1 / (1 + Math.pow(Math.abs((m - x) / a), entP));
				}

				if (x >= m) {				
					fn1[x] = 1 / (1 + Math.pow(Math.abs((x - m) / b), entP));
				}
		}

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
		}
		if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}
		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			


			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                  
	                  },{
	                  	 label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fn1;
	        	config.data.datasets[1].data = fnAx;
	        	config.data.datasets[2].data = fnBx;
	        	
		}

        var ctx = document.getElementById("myChart_rmax").getContext("2d");             
    	window.myLine = new Chart(ctx, config);
	}
	if(checkbox3.checked){

		if(Ax.checked){
			for (var q = 0; q <= a1*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a1*2; x++){

				if (x <= a1) {
					fnAx[x] = Math.max(0, 1 - Math.pow(Math.abs((a1 - x) / al1), entP));
				}

				if (x >= a1) {				
					fnAx[x] = Math.max(0, 1 - Math.pow(Math.abs((x - a1) / b1), entP));
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
		}

		if(Bx.checked){
			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a2*2; x++){

				if (x <= a2) {
					fnBx[x] = Math.max(0, 1 - Math.pow(Math.abs((a2 - x) / al2), entP));
				}

				if (x >= a2) {		
					fnBx[x] = Math.max(0, 1 - Math.pow(Math.abs((x - a2) / b2), entP));
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;
		}

		if(Cx.checked){
			for (var q = 0; q <= y; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= y; x++){

				if (x <= m) {
					fn1[x] = Math.max(0, 1 - Math.pow(Math.abs((m - x) / a), entP));
				}

				if (x >= m) {
					fn1[x] = Math.max(0, 1 - Math.pow(Math.abs((x - m) / b), entP));
				}
		}

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
				config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
		}
		if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}

		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                  
	                  },{
	                  	 label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fn1;
	        	config.data.datasets[1].data = fnAx;
	        	config.data.datasets[2].data = fnBx;
	        	
		}

        var ctx = document.getElementById("myChart_rmax").getContext("2d");             
    	window.myLine = new Chart(ctx, config);
	}
};

function FnRminLR () {
		
	
	var a1 = parseFloat(document.getElementById('ср1_1').value),
		a2 = parseFloat(document.getElementById('ср2_1').value),
			al1 = parseFloat(document.getElementById('ср1_2').value),
			al2 = parseFloat(document.getElementById('ср2_2').value),
				b1 = parseFloat(document.getElementById('ср1_3').value),
				b2 = parseFloat(document.getElementById('ср2_3').value);
	var entP = document.getElementById("enterP").value;
	var x;
	var L = [];
	var R = [];
	var fn1 = [], fnAx = [], fnBx = [], fn2 = [], fn3 = [], fn4 = [], p = 2, w, t;

	var massa = [];

	var checkbox1=document.getElementById('t1');
	var checkbox2=document.getElementById('t2');
	var checkbox3=document.getElementById('t3');
	var checkbox4=document.getElementById('t4');

	var Ax=document.getElementById('RmiCh1');
	var Bx=document.getElementById('RmiCh2');
	var Cx=document.getElementById('RmiCh3');

	

	if (al1 < 0 || al2 < 0 || b1 < 0 || b2 < 0 ){
		alert('Невірно введено число');
	}
	
	else {

		var m = Math.min(a1, a2);
		var a = m - Math.min(a1 - al1, a2 - al2);
		var b = Math.min(a1 + b1, a2 + b2) - m; //уточнить за формулу
		
		
		document.getElementById('rmin_ch1').innerHTML = 'C = < ' + m.toFixed(3) + ', ' + a.toFixed(3) + ', ' + b.toFixed(3) + ' >' ;
			
		var y;
		y  = m * 2;

	}	
		

	if(checkbox1.checked){
		
		
		if(Ax.checked){


				for (var q = 0; q <= a1*2; q++){      
					massa[q] = q;
				}



			for (x = 0; x <= a1*2; x++){

			if (x <= a1) {
				fnAx[x] = Math.exp(-Math.pow(Math.abs((a1 - x) / al1), entP));
			}

			if (x >= a1) {				
				fnAx[x] = Math.exp(-Math.pow(Math.abs((x - a1) / b1), entP));
			}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
		}   
		
		if(Bx.checked){

			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}


			for (x = 1; x <= a2*2; x++){

			if (x <= a2) {
				fnBx[x] = Math.exp(-Math.pow(Math.abs((a2 - x) / al2), entP));
			}

			if (x >= a2) {				
				fnBx[x] = Math.exp(-Math.pow(Math.abs((x - a2) / b2), entP));

			}
		}

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;

		}

		if(Cx.checked){

			for (var q = 0; q <= y; q++){      
				massa[q] = q;
			}

			for (x = 1; x <= y; x++){

			if (x <= m) {
				fn1[x] = Math.exp(-Math.pow(Math.abs((m - x) / a), entP));
			}

			if (x >= m) {				
				fn1[x] = Math.exp(-Math.pow(Math.abs((x - m) / b), entP));

			}
		}

			
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
				config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
		}

		if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}

		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                  
	                  },{
	                  	 label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fn1;
	        	config.data.datasets[1].data = fnAx;
	        	config.data.datasets[2].data = fnBx;
	        	
		}



         var ctx = document.getElementById("myChart_rmin").getContext("2d");
   		 window.myLine = new Chart(ctx, config);
	}

	if(checkbox2.checked){

		if(Ax.checked){
			for (var q = 0; q <= a1*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a1*2; x++){

				if (x <= a1) {
					fnAx[x] = 1 / (1 + Math.pow(Math.abs((a1 - x) / al1), entP));
				}

				if (x >= a1) {				
					fnAx[x] = 1 / (1 + Math.pow(Math.abs((x - a1) / b1), entP));
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
		}

		if(Bx.checked){
			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a2*2; x++){

				if (x <= a2) {
					fnBx[x] = 1 / (1 + Math.pow(Math.abs((a2 - x) / al2), entP));
					console.log(fnBx[x]);
				}

				if (x >= a2) {				
					fnBx[x] = 1 / (1 + Math.pow(Math.abs((x - a2) / b2), entP));
					console.log(fnBx[x]);
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;
		}

		if(Cx.checked){
			for (var q = 0; q <= y; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= y; x++){

				if (x <= m) {
					fn1[x] = 1 / (1 + Math.pow(Math.abs((m - x) / a), entP));
				}

				if (x >= m) {				
					fn1[x] = 1 / (1 + Math.pow(Math.abs((x - m) / b), entP));
				}
		}

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
		}
		if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}
		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			


			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                  
	                  },{
	                  	 label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fn1;
	        	config.data.datasets[1].data = fnAx;
	        	config.data.datasets[2].data = fnBx;
	        	
		}

        var ctx = document.getElementById("myChart_rmin").getContext("2d");             
    	window.myLine = new Chart(ctx, config);
	}
	if(checkbox3.checked){

		if(Ax.checked){
			for (var q = 0; q <= a1*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a1*2; x++){

				if (x <= a1) {
					fnAx[x] = Math.max(0, 1 - Math.pow(Math.abs((a1 - x) / al1), entP));
				}

				if (x >= a1) {				
					fnAx[x] = Math.max(0, 1 - Math.pow(Math.abs((x - a1) / b1), entP));
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μA(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                      r: '3'
	                      // fill: '1'
	                  }]
	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnAx;
		}

		if(Bx.checked){
			for (var q = 0; q <= a2*2; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= a2*2; x++){

				if (x <= a2) {
					fnBx[x] = Math.max(0, 1 - Math.pow(Math.abs((a2 - x) / al2), entP));
				}

				if (x >= a2) {		
					fnBx[x] = Math.max(0, 1 - Math.pow(Math.abs((x - a2) / b2), entP));
				}
		}

		
			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μB(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
	        	config.data.labels = massa;
	        	config.data.datasets[length].data = fnBx;
		}

		if(Cx.checked){
			for (var q = 0; q <= y; q++){      
				massa[q] = q;
			}

			for (x = 0; x <= y; x++){

				if (x <= m) {
					fn1[x] = Math.max(0, 1 - Math.pow(Math.abs((m - x) / a), entP));
				}

				if (x >= m) {
					fn1[x] = Math.max(0, 1 - Math.pow(Math.abs((x - m) / b), entP));
				}
		}

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [{
	                      label: "μC(x)",
	                      backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                      fill: '1'
	                  }]
	              	},
	        	};
				config.data.labels = massa;
	        	config.data.datasets[length].data = fn1;
		}
		if(Ax.checked && Bx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fnBx;
		}

		if(Ax.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnAx;
	        	config.data.datasets[1].data = fn1;
		}
		if(Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	                  
	                  },{
	                  	 label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fnBx;
	        	config.data.datasets[1].data = fn1;
		}

		if(Ax.checked && Bx.checked && Cx.checked){
			

			var config = {
	              type: 'line',
	              data: {
	                  datasets: [
	                      {
	                      label: "μC(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#d74a54',
	                  
	                  },{
	                  	 label: "μA(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#6d146a',
	      
	                  },
	                  {
	                  	 label: "μB(x)",
	                  	  backgroundColor: 'rgba(252,233,227,.4)',
	                      borderColor: '#14901a',
	      
	                  }],


	              	},
	        	};
	        	
	        	config.data.labels = massa;
	        	config.data.datasets[0].data = fn1;
	        	config.data.datasets[1].data = fnAx;
	        	config.data.datasets[2].data = fnBx;
	        	
		}

        var ctx = document.getElementById("myChart_rmin").getContext("2d");             
    	window.myLine = new Chart(ctx, config);
	}
};

