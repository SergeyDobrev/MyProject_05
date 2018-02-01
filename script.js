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

	var oCube = new Array();
	var sideArray = ['', 'rotateY(180deg)', 'rotateY(-90deg)', 'rotateY(90deg)', 'rotateX(90deg)', 'rotateX(-90deg)'];

	for (var x = 0; x < 3; x++) {
		oCube[x] = new Array();
		for (var y = 0; y < 3; y++) {
			oCube[x][y] = new Array();
			for (var z = 0; z < 3; z++) {

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

					var oLable = document.createElement('div');
					$(oSide).append(oLable);
					$(oLable).css({	'height': '9vh',
									'width': '9vh',
									'border-radius': '2vh',
									'margin': '0.5vh auto',
									'background-color': 'black',
									'backfaceVisibility': 'hidden'
									});

					if (z === 2 && n === 0) $(oLable).css('background-color', 'blue'); 
					if (z === 0 && n === 1) $(oLable).css('background-color', 'green');
					if (x === 0 && n === 2) $(oLable).css('background-color', 'orange');
					if (x === 2 && n === 3) $(oLable).css('background-color', 'red');
					if (y === 0 && n === 4) $(oLable).css('background-color', 'yellow');
					if (y === 2 && n === 5) $(oLable).css('background-color', 'white'); 
				}
			}
		}
	}

	var intervalID2 = setInterval(myIntervalFun2, 3000);
	function myIntervalFun2() {
	//	x2 += 180;
	//	y2 =+ 90;
		z2 += 90;
		oScene.style.transform = 'rotateX(' + x2 + 'deg) rotateY(' + y2 + 'deg) rotateZ(' + z2 + 'deg)';
	}

	var j = 0;
	var j2 = 0;
	var intervalID1 = setInterval(myIntervalFun1, 750);

	function myIntervalFun1() {
		for (var x = 0; x < 3; x++) {
			for (var y = 0; y < 3; y++) {
				for (var z = 0; z < 3; z++) {

					if(myArray[j][x][y][z][0] === undefined) myArray[j][x][y][z][0] = x;
					if(myArray[j][x][y][z][1] === undefined) myArray[j][x][y][z][1] = y;
					if(myArray[j][x][y][z][2] === undefined) myArray[j][x][y][z][2] = z;
					if(myArray[j][x][y][z][3] === undefined) myArray[j][x][y][z][3] = 0;
					if(myArray[j][x][y][z][4] === undefined) myArray[j][x][y][z][4] = 0;
					if(myArray[j][x][y][z][5] === undefined) myArray[j][x][y][z][4] = 0;

					oCube[x][y][z].style.transform = 	'translateX(' + myArray[j][x][y][z][0] * 10 + 'vh) ' +
														'translateY(' + myArray[j][x][y][z][1] * 10 + 'vh) ' +
														'translateZ(' + myArray[j][x][y][z][2] * 10 + 'vh) ' + 
														'rotateX(' + myArray[j][x][y][z][3] * 90 + 'deg)';
				}
			}
		}

		j++;
		j2++;

		if (j2 === 4) j = 3;
		if (j2 === 5) j = 2;
		if (j2 === 6) j = 1;
		if (j2 === 7) j = 0;
		if (j2 === 8) {
			j = 0;
			j2 = 0;
		}
	}

	var myArray = [[[[[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]]],
					[[[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]]],
					[[[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]]]],

				   [[[[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]]],
					[[[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]]],
					[[[2.5,-0.5,-0.5,,,],[2.5,-0.5,1,,,],[2.5,-0.5,2.5,,,]],
					 [[2.5,1,-0.5,,,],[2.5,1,1,,,],[2.5,1,2.5,,,]],
					 [[2.5,2.5,-0.5,,,],[2.5,2.5,1,,,],[2.5,2.5,2.5,,,]]]],
					 
				   [[[[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]]],
					[[[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]]],
					[[[2.5,2.5,-0.5,1,,],[2.5,1,-0.5,1,,],[2.5,-0.5,-0.5,1,,]],
					 [[2.5,2.5,1,1,,],[2.5,1,1,1,,],[2.5,-0.5,1,1,,]],
					 [[2.5,2.5,2.5,1,,],[2.5,1,2.5,1,,],[2.5,-0.5,2.5,1,,]]]],

				   [[[[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]]],
					[[[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]],
					 [[,,,,,],[,,,,,],[,,,,,]]],
					[[[2,2,0,1,,],[2,1,0,1,,],[2,0,0,1,,]],
					 [[2,2,1,1,,],[2,1,1,1,,],[2,0,1,1,,]],
					 [[2,2,2,1,,],[2,1,2,1,,],[2,0,2,1,,]]]]];
});