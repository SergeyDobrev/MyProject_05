$(function() {
	$('body').css({	'margin': '0 auto',
					'background-color': 'rgb(100,100,100)',
					'overflow': 'hidden',
					'text-align': 'center'
				});

	var x2 = 40;
	var y2 = 0;
	var z2 = 50;
	var oScene = document.createElement('div');
	$('body').append(oScene);
	$(oScene).addClass('preserve3d');
	oScene.style.transform = 'rotateX(' + x2 + 'deg) rotateY(' + y2 + 'deg) rotateZ(' + z2 + 'deg)';
	oScene.style.transition = 'transform 0.5s';
	$(oScene).css({	'height': '30vh',
					'width': '30vh',
					'margin': '0 auto',
					'margin-top': '30vh' 
					});

	var oCube = [];
	var old = [];
	var sideArray = ['', 'rotateY(180deg)', 'rotateY(-90deg)', 'rotateY(90deg)', 'rotateX(90deg)', 'rotateX(-90deg)'];

	for (var x = 0; x < 3; x++) {
		oCube[x] = [];
		old[x] = [];
		for (var y = 0; y < 3; y++) {
			oCube[x][y] = [];
			old[x][y] = [];
			for (var z = 0; z < 3; z++) {
				old[x][y][z] = [x,y,z,0,0,0];
				oCube[x][y][z] = document.createElement('div');
				$(oCube[x][y][z]).addClass('preserve3d');
				$(oScene).append(oCube[x][y][z]);
				$(oCube[x][y][z]).css({	'height': '10vh',
										'width': '10vh',
										'position': 'absolute'
									});
				oCube[x][y][z].style.transform = 'translateX(' + x * 10 + 'vh) translateY(' + y * 10 + 'vh) translateZ(' + z * 10 + 'vh)';
				oCube[x][y][z].style.transition = 'transform 0.5s';

				for (var n = 0; n < sideArray.length; n++) {
					var oSide = document.createElement('div');
					$(oCube[x][y][z]).append(oSide);
					$(oSide).addClass('preserve3d');
					$(oSide).css({	'height': '10vh',
									'width': '10vh',
									'margin': '0 auto',
									'position': 'absolute',
									'background-color': 'black',
									'transform': sideArray[n] + 'translateZ(5vh)',
									'backfaceVisibility': 'hidden'
									});

					if (z === 2 && n === 0) sideLabelFun('blue'); 
					if (z === 0 && n === 1) sideLabelFun('green');
					if (x === 0 && n === 2) sideLabelFun('orange');
					if (x === 2 && n === 3) sideLabelFun('red');
					if (y === 0 && n === 4) sideLabelFun('yellow');
					if (y === 2 && n === 5) sideLabelFun('white'); 
				}

				function sideLabelFun(colorLable) {

					var oLable = document.createElement('div');
					$(oSide).append(oLable);
					$(oLable).css({	'height': '9vh',
									'width': '9vh',
									'border-radius': '2vh',
									'margin': '0.5vh auto',
									'background-color': 'black',
									'backfaceVisibility': 'hidden',
									'background-color': colorLable
									});

				}
			}
		}
	}



	function rotateFun(a,b,c) {
		var myArray = [[[2,2],[0,2],[0,0],[2,0]],
						[[1,2],[0,1],[1,0],[2,1]]];

		var newArray = [];
		for (var x = 0; x < 3; x++) {
			newArray[x] = [];
			for (var y = 0; y < 3; y++) {
				newArray[x][y] = [];
				for (var z = 0; z < 3; z++) {
					newArray[x][y][z] = [];				
					for (var i = 0; i < 6; i++) {
						newArray[x][y][z][i] = old[x][y][z][i];		
					}

					if (x === a) changFun(y,z,1,2,3,1)
					if (y === b) changFun(x,z,0,2,4,-1)
					if (z === c) changFun(x,y,0,1,5,1)

					oCube[x][y][z].style.transform = 	
						'translateX(' + newArray[x][y][z][0] * 10 + 'vh) ' +
						'translateY(' + newArray[x][y][z][1] * 10 + 'vh) ' +
						'translateZ(' + newArray[x][y][z][2] * 10 + 'vh) ' + 
						'rotateX(' + newArray[x][y][z][3] * 90 + 'deg) ' +
						'rotateY(' + newArray[x][y][z][4] * 90 + 'deg) ' +
						'rotateZ(' + newArray[x][y][z][5] * 90 + 'deg)';

					old[x][y][z][i] = newArray[x][y][z][i];
				}
			}
		}

		function changFun(m,n,t,s,o,p) {
			newArray[x][y][z][o] = p;
			for (var j = 0; j < myArray.length; j++) {
					for (var i = 0; i < myArray[0].length; i++) {
						if (m === myArray[j][i][0] && n === myArray[j][i][1]) {
							newArray[x][y][z][t] = myArray[j][(i + 1) % 4][0];
							newArray[x][y][z][s] = myArray[j][(i + 1) % 4][1];
					}
				}
			}	
		}

/*		for (var x = 0; x < 3; x++) {
			for (var y = 0; y < 3; y++) {
				for (var z = 0; z < 3; z++) {
					for (var i = 0; i < 6; i++) {
						old[x][y][z][i] = newArray[x][y][z][i];	
					}
				}
			}
		}*/	

	}

	function rotateFunBack() {
		for (var x = 0; x < 3; x++) {
			for (var y = 0; y < 3; y++) {
				for (var z = 0; z < 3; z++) {

				oCube[x][y][z].style.transform = 	'translateX(' + old[x][y][z][0] * 10 + 'vh) ' +
													'translateY(' + old[x][y][z][1] * 10 + 'vh) ' +
													'translateZ(' + old[x][y][z][2] * 10 + 'vh) ' + 
													'rotateX(' + old[x][y][z][3] * 90 + 'deg) ' +
													'rotateY(' + old[x][y][z][4] * 90 + 'deg) ' +
													'rotateZ(' + old[x][y][z][5] * 90 + 'deg)';
				}
			}
		}

	}


	var timerId = setTimeout(function() {rotateFun(2,null,null)}, 1000);
	var timerId = setTimeout(rotateFunBack, 2000);
	var timerId = setTimeout(function() {rotateFun(1,null,null)}, 3000);
	var timerId = setTimeout(rotateFunBack, 4000);
	var timerId = setTimeout(function() {rotateFun(0,null,null)}, 5000);
	var timerId = setTimeout(rotateFunBack, 6000);

	var timerId = setTimeout(function() {rotateFun(null,2,null)}, 7000);
	var timerId = setTimeout(rotateFunBack, 8000);
	var timerId = setTimeout(function() {rotateFun(null,1,null)}, 9000);
	var timerId = setTimeout(rotateFunBack, 10000);
	var timerId = setTimeout(function() {rotateFun(null,0,null)}, 11000);
	var timerId = setTimeout(rotateFunBack, 12000);

	var timerId = setTimeout(function() {rotateFun(null,null,2)}, 13000);
	var timerId = setTimeout(rotateFunBack, 14000);
	var timerId = setTimeout(function() {rotateFun(null,null,1)}, 15000);
	var timerId = setTimeout(rotateFunBack, 16000);
	var timerId = setTimeout(function() {rotateFun(null,null,0)}, 17000);
	var timerId = setTimeout(rotateFunBack, 18000);


});