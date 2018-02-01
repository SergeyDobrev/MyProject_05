$('body').css({	'margin': '0 auto',
				'background-color': 'rgb(100,100,100)',
				'overflow': 'hidden',
				'text-align': 'center'
			});

var oScene = document.createElement('div');
$('body').append(oScene);
$(oScene).addClass('preserve3d');
oScene.style.transform = 'rotateX(30deg) rotateY(0deg) rotateZ(50deg)';
$(oScene).css({	'height': '30vh',
					'width': '30vh',
					'margin': '0 auto',
					'margin-top': '30vh' 
				});

var oCube = new Array();
var sideArray = [['', 'rotateY(180deg)', 'rotateY(-90deg)', 'rotateY(90deg)', 'rotateX(90deg)', 'rotateX(-90deg)'],
				['blue', 'green', 'orange', 'red', 'yellow' ,'white']];
/*var visibleSideArray = [[[[,1,1,,1,,],[,,,,,,],[,,,,,,]],
						 [[,,,,,,],[,,,,,,],[,,,,,,]],
						 [[,,,,,,],[,,,,,,],[,,,,,,]]],
						[[[,,,,,,],[,,,,,,],[,,,,,,]],
						 [[,,,,,,],[,,,,,,],[,,,,,,]],
						 [[,,,,,,],[,,,,,,],[,,,,,,]]],
						[[[,,,,,,],[,,,,,,],[,,,,,,]],
						 [[,,,,,,],[,,,,,,],[,,,,,,]],
						 [[,,,,,,],[,,,,,,],[,,,,,,]]]];*/

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
			oCube[x][y][z].style.transition = 'transform 0.25s';
//			oCube[x][y][z].style.display = 'none';

			for (var n = 0; n < sideArray[0].length; n++) {
//				if(visibleSideArray[0][0][0][n] === 1) {
					var oSide = document.createElement('div');
					$(oCube[x][y][z]).append(oSide);
					$(oSide).addClass('preserve3d');
					$(oSide).css({	'height': '10vh',
									'width': '10vh',
									'margin': '0 auto',
									'position': 'absolute',
									'background-color': 'black',
									'transform': sideArray[0][n] + 'translateZ(5vh)',
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
					if (x === 2 && n === 3) $(oLable).css('background-color', 'red');
					if (y === 2 && n === 5) $(oLable).css('background-color', 'white');
					if (z === 2 && n === 0) $(oLable).css('background-color', 'blue');
					if (x === 1 && n === 4) $(oLable).css('background-color', 'yellow');
					if (y === 0 && n === 2) $(oLable).css('background-color', 'orange');
					if (z === 0 && n === 1) $(oLable).css('background-color', 'green');

						//				$(oLable).css('background-color', sideArray[1][n]);
//				}
			}
		}
	}
}

var x2 = 45;
var y2 = 0;
var oldx2 = 0;
var oldy2 = 0;

window.onmousemove = function(e) {

			if (oldx2 > e.pageX) x2 += 5;
	else 	if (oldx2 < e.pageX) x2 -= 5;
	oldx2 = e.pageX;

			if (oldy2 > e.pageY) y2 += 5;
	else 	if (oldy2 < e.pageY) y2 -= 5;
	oldy = e.pageY;

	oScene.style.transform = 'rotateX(' + x2 + 'deg) rotateY(' + y2 + 'deg) rotateZ(' + 45 + 'deg)';
//	oScene.style.transition = 'transform 0.1s';
}

//oCube[2][1][0].style.display = 'none';
oCube[2][1][1].style.display = 'none';
oCube[2][1][2].style.display = 'none';
/*
oCube[2][0][0].style.display = 'none';
oCube[2][0][1].style.display = 'none';
oCube[2][0][2].style.display = 'none';

oCube[2][2][0].style.display = 'none';
oCube[2][2][1].style.display = 'none';
oCube[2][2][2].style.display = 'none';*/

var intervalID = setInterval(myIntervalFun, 2000);

function myIntervalFun() {

	var TimerId1 = setTimeout(myTimeoutFun1, 250);
	var TimerId2 = setTimeout(myTimeoutFun2, 500);
	var TimerId3 = setTimeout(myTimeoutFun3, 750);
	var TimerId4 = setTimeout(myTimeoutFun2, 1250);
	var TimerId5 = setTimeout(myTimeoutFun1, 1500);
	var TimerId6 = setTimeout(myTimeoutFun4, 1750);


	function myTimeoutFun1() {
		oCube[2][2][2].style.transform = 'translateX(' + 2.5 * 10 + 'vh) translateY(' + 2.5 * 10 + 'vh) translateZ(' + 2.5 * 10 + 'vh)' + 
									'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][2][1].style.transform = 'translateX(' + 2.5 * 10 + 'vh) translateY(' + 2.5 * 10 + 'vh) translateZ(' + 1 * 10 + 'vh)' + 
									'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][2][0].style.transform = 'translateX(' + 2.5 * 10 + 'vh) translateY(' + 2.5 * 10 + 'vh) translateZ(' + -0.5 * 10 + 'vh)' + 
									'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][0][2].style.transform = 'translateX(' + 2.5 * 10 + 'vh) translateY(' + -0.5 * 10 + 'vh) translateZ(' + 2.5 * 10 + 'vh)' + 
									'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][0][1].style.transform = 'translateX(' + 2.5 * 10 + 'vh) translateY(' + -0.5 * 10 + 'vh) translateZ(' + 1 * 10 + 'vh)' + 
									'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][0][0].style.transform = 'translateX(' + 2.5 * 10 + 'vh) translateY(' + -0.5 * 10 + 'vh) translateZ(' + -0.5 * 10 + 'vh)' + 
									'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][1][0].style.transform = 'translateX(' + 2.5 * 10 + 'vh) translateY(' + 1 * 10 + 'vh) translateZ(' + -0.5 * 10 + 'vh)' + 
									'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';


	}

	function myTimeoutFun2() {
		oCube[2][2][2].style.transform = 'translateX(' + 2.5 * 10 + 'vh) translateY(' + -0.5 * 10 + 'vh) translateZ(' + 2.5 * 10 + 'vh)' + 
									'rotateX(' + 90 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][2][1].style.transform = 'translateX(' + 2.5 * 10 + 'vh) translateY(' + 1 * 10 + 'vh) translateZ(' + 2.5 * 10 + 'vh)' + 
									'rotateX(' + 90 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][2][0].style.transform = 'translateX(' + 2.5 * 10 + 'vh) translateY(' + 2.5 * 10 + 'vh) translateZ(' + 2.5 * 10 + 'vh)' + 
									'rotateX(' + 90 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][0][2].style.transform = 'translateX(' + 2.5 * 10 + 'vh) translateY(' + -0.5 * 10 + 'vh) translateZ(' + -0.5 * 10 + 'vh)' + 
									'rotateX(' + 90 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][0][1].style.transform = 'translateX(' + 2.5 * 10 + 'vh) translateY(' + 1 * 10 + 'vh) translateZ(' + -0.5 * 10 + 'vh)' + 
									'rotateX(' + 90 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][0][0].style.transform = 'translateX(' + 2.5 * 10 + 'vh) translateY(' + 2.5 * 10 + 'vh) translateZ(' + -0.5 * 10 + 'vh)' + 
									'rotateX(' + 90 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][1][0].style.transform = 'translateX(' + 2.5 * 10 + 'vh) translateY(' + 2.5 * 10 + 'vh) translateZ(' + 1 * 10 + 'vh)' + 
									'rotateX(' + 90 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';

	}

	function myTimeoutFun3() {
		oCube[2][2][2].style.transform = 'translateX(' + 2 * 10 + 'vh) translateY(' + 0 * 10 + 'vh) translateZ(' + 2 * 10 + 'vh)' + 
									'rotateX(' + 90 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][2][1].style.transform = 'translateX(' + 2 * 10 + 'vh) translateY(' + 1 * 10 + 'vh) translateZ(' + 2 * 10 + 'vh)' + 
									'rotateX(' + 90 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][2][0].style.transform = 'translateX(' + 2 * 10 + 'vh) translateY(' + 2 * 10 + 'vh) translateZ(' + 2 * 10 + 'vh)' + 
									'rotateX(' + 90 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][0][2].style.transform = 'translateX(' + 2 * 10 + 'vh) translateY(' + 0 * 10 + 'vh) translateZ(' + 0 * 10 + 'vh)' + 
									'rotateX(' + 90 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][0][1].style.transform = 'translateX(' + 2 * 10 + 'vh) translateY(' + 1 * 10 + 'vh) translateZ(' + 0 * 10 + 'vh)' + 
									'rotateX(' + 90 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][0][0].style.transform = 'translateX(' + 2 * 10 + 'vh) translateY(' + 2 * 10 + 'vh) translateZ(' + 0 * 10 + 'vh)' + 
									'rotateX(' + 90 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][1][0].style.transform = 'translateX(' + 2 * 10 + 'vh) translateY(' + 2 * 10 + 'vh) translateZ(' + 1 * 10 + 'vh)' + 
									'rotateX(' + 90 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';

	}

	function myTimeoutFun4() {
		oCube[2][2][2].style.transform = 'translateX(' + 2 * 10 + 'vh) translateY(' + 2 * 10 + 'vh) translateZ(' + 2 * 10 + 'vh)' + 
									'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][2][1].style.transform = 'translateX(' + 2 * 10 + 'vh) translateY(' + 2 * 10 + 'vh) translateZ(' + 1 * 10 + 'vh)' + 
									'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][2][0].style.transform = 'translateX(' + 2 * 10 + 'vh) translateY(' + 2 * 10 + 'vh) translateZ(' + 0 * 10 + 'vh)' + 
									'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][0][2].style.transform = 'translateX(' + 2 * 10 + 'vh) translateY(' + 0 * 10 + 'vh) translateZ(' + 2 * 10 + 'vh)' + 
									'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][0][1].style.transform = 'translateX(' + 2 * 10 + 'vh) translateY(' + 0 * 10 + 'vh) translateZ(' + 1 * 10 + 'vh)' + 
									'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][0][0].style.transform = 'translateX(' + 2 * 10 + 'vh) translateY(' + 0 * 10 + 'vh) translateZ(' + 0 * 10 + 'vh)' + 
									'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';
		oCube[2][1][0].style.transform = 'translateX(' + 2 * 10 + 'vh) translateY(' + 1 * 10 + 'vh) translateZ(' + 1 * 10 + 'vh)' + 
									'rotateX(' + 0 + 'deg) rotateY(' + 0 + 'deg) rotateZ(' + 0 + 'deg)';

	}

}
