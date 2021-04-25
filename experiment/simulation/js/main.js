'use strict';

document.addEventListener('DOMContentLoaded', function () {

	const playButton = document.getElementById('play');
	const pauseButton = document.getElementById('pause');
	const restartButton = document.getElementById('restart');
	const floor1Elem = document.getElementById('floor1');
	const floor3Elem = document.getElementById('floor3');

	pauseButton.addEventListener('click', function() { window.clearTimeout(tmHandle); });
	playButton.addEventListener('click', function() {  window.clearTimeout(tmHandle); tmHandle = setTimeout(updateImg, 1000 / fps); });
	restartButton.addEventListener('click', function() {restart();});

	function restart() 
	{ 
		window.clearTimeout(tmHandle); 
		imgNum = 0;
		tmHandle = window.setTimeout(updateImg, 1000 / fps);
	}

	const fps = 5;

	let imgsF1 = [], imgsF3 = [];
	for(let i = 0; i < 75; i += 1)
	{
		imgsF1.push(new Image());
		imgsF3.push(new Image());
		imgsF1[i].src = "./Floor1/" + (i + 1) + ".jpg";
		imgsF3[i].src = "./Floor3/" + (i + 1) + ".jpg";
	}

	let imgNum = 0;
	function updateImg()
	{
		floor1.src = imgsF1[imgNum].src;
		floor3.src = imgsF3[imgNum].src;

		imgNum = imgNum + 1;
		if(imgNum >= imgsF1.length) 
		{
			imgNum = 0;
		}

		tmHandle = window.setTimeout(updateImg, 1000 / fps);
	}

	let floor1 = document.createElement('img');
	let floor3 = document.createElement('img');
	floor1Elem.appendChild(floor1);
	floor3Elem.appendChild(floor3);
	floor1.src = './Floor1/1.jpg';
	floor3.src = './Floor3/1.jpg';

	let tmHandle = window.setTimeout(updateImg, 1000 / fps);
})
