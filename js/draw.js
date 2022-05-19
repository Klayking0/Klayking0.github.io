//Brightness slider
document.getElementById("slider").oninput = function() {
	document.body.style.backgroundColor =  'hsl(0, 0%, '+this.value+'%)';
	document.documentElement.style.setProperty('--brightness', this.value/100);
	document.documentElement.style.setProperty('--lume', 1-(this.value/100));
	document.getElementById('dropdown').style.backgroundColor = 'hsl(0, 0%, '+this.value+'%)';
};

//Fullscreen toggle
function fullscreen() {
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    var docElm = document.documentElement;
    if (!isInFullScreen) {
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

//Calls the watchSelect function on page load to populate the image sources
document.getElementById("dropdown").onload = watchSelect();

//Calls the watchSelect function when the user selects an option from the selector
document.getElementById("dropdown").oninput = function() {
	watchSelect();
};

//Function to get the watch selected from the dropdown and call appropriate functions
function watchSelect() {
	//Clean up container before spawning a new watch
	clearContainer();
	clearInterval(interval);
	
	//Find the watch selected in the dropdown
	var watch = document.getElementById("dropdown").value;
	
	//Spawn the components required to make the selected watch
	if (watch == "submariner") {
		date(watch);
		face(watch);
		faceLume(watch);
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		second(watch);
		secondLume(watch);
		bezel(watch, 120);//Number of clicks per rotation
		bezelLume(watch);
		analogueTime(100);
		//3Hz = 21600vph:  1000ms (1 sec) / 6 (degrees each tick (21600/60)/60=6) = analogueTime(166.66667)
		//4Hz = 28800vph:  1000ms (1 sec) / 8 (degrees each tick (28800/60)/60=8) = analogueTime(125)
		//5Hz = 36000vph:  1000ms (1 sec) / 10 (degrees each tick (28800/60)/60=8) = analogueTime(100)
		//vph from Hz: (Hz * 2) * 3600 (seconds in an hour) = vph
		//analogueTime() from vph: 1000 (ms in 1 sec) / ((vph / 60) / 60) = analogueTime()
	}
	else if (watch == "fliegerb") {
		face(watch);
		faceLume(watch);
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		second(watch);
		secondLume(watch);
		analogueTime(125);
	}
	else if (watch == "cocktail") {
		date(watch);
		face(watch);
		hour(watch);
		minute(watch);
		second(watch);
		analogueTime(166.66667);//Beat rate goes in here
	}
	else if (watch == "fairfield") {
		face(watch);
		faceLume(watch);
		hour(watch);
		minute(watch);
		second(watch);
		analogueTime(1000);//Beat rate goes in here
	}
	else if (watch == "grandseiko") {
		face(watch);
		hour(watch);
		minute(watch);
		second(watch);//marginTop, marginRight, marginBottom, marginLeft: Offsets the hand. Must include all 4 numbers or none.
		analogueTime(10);//Beat rate goes in here
	}
	else if (watch == "khaki") {
		face(watch);
		faceLume(watch);
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		second(watch);
		secondLume(watch);
		analogueTime(166.66667);//Beat rate goes in here
	}
	else if (watch == "seagull") {
		face(watch);
		hour(watch);
		minute(watch);
		second(watch, 0, 16, 0, 0); //This offset is very experimental and not working consistently
		analogueTime(166.66667);//Beat rate goes in here
	}
};

//Function to clear the watch container
function clearContainer() {
	document.getElementById("container").innerHTML = "";
}

//Functions to create each component of the watch
function date(watch) {
	var container = document.getElementById("container");
	var div = document.createElement("div");
	div.id = "date";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/date.png' id='dateImg' class='imgDisplay'>";
    container.appendChild(div);
};

function face(watch) {
	var container = document.getElementById("container");
	var div = document.createElement("div");
	div.id = "face";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/face.png' id='faceImg' class='imgDisplay'>";
    container.appendChild(div);
};

function faceLume(watch) {
	var container = document.getElementById("container");
	var div = document.createElement("div");
	div.id = "facelume";
	div.className = "watch lume";
	div.innerHTML = "<img src='img/"+watch+"/facelume.png' id='facelumeImg' class='imgDisplay'>";
    container.appendChild(div);
};

function hour(watch) {
	var container = document.getElementById("container");
	var div = document.createElement("div");
	div.id = "hour";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/hour.png' id='hourImg' class='imgDisplay'>";
    container.appendChild(div);
};

function hourLume(watch) {
	var container = document.getElementById("container");
	var div = document.createElement("div");
	div.id = "hourlume";
	div.className = "watch lume";
	div.innerHTML = "<img src='img/"+watch+"/hourlume.png' id='hourlumeImg' class='imgDisplay'>";
    container.appendChild(div);
};

function minute(watch) {
	var container = document.getElementById("container");
	var div = document.createElement("div");
	div.id = "minute";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/minute.png' id='minuteImg' class='imgDisplay'>";
    container.appendChild(div);
};

function minuteLume(watch) {
	var container = document.getElementById("container");
	var div = document.createElement("div");
	div.id = "minutelume";
	div.className = "watch lume";
	div.innerHTML = "<img src='img/"+watch+"/minutelume.png' id='minutelumeImg' class='imgDisplay'>";
    container.appendChild(div);
};

function second(watch, marginTop, marginRight, marginBottom, marginLeft) {
	var container = document.getElementById("container");
	var div = document.createElement("div");
	div.id = "second";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/second.png' id='secondImg' class='imgDisplay'>";
    if (marginTop || marginRight || marginBottom || marginLeft) {
		//This offset is very experimental and not working consistently
		div.setAttribute("style", "margin: "+marginTop+"vh "+marginRight+"vw "+marginBottom+"vh "+marginLeft+"vw");
		//div.setAttribute("style", "left: 45vw");
	
	}
	container.appendChild(div);
};

function secondLume(watch, marginTop, marginRight, marginBottom, marginLeft) {
	var container = document.getElementById("container");
	var div = document.createElement("div");
	div.id = "secondlume";
	div.className = "watch lume";
	div.innerHTML = "<img src='img/"+watch+"/secondlume.png' id='secondlumeImg' class='imgDisplay'>";
    if (marginTop || marginRight || marginBottom || marginLeft) {
		//This offset is very experimental and not working consistently
		div.setAttribute("style", "margin: "+marginTop+"vh "+marginRight+"vw "+marginBottom+"vh "+marginLeft+"vw");
	}
	container.appendChild(div);
};

function bezel(watch, clicks) {
	var container = document.getElementById("container");
	var div = document.createElement("div");
	div.id = "bezel";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/bezel.png' id='bezelImg' class='imgDisplay'>";
    container.appendChild(div);
	//Bezel rotation
	var bezelRotation = 0;
	document.onmousewheel = function() {
		if (bezelRotation < 360) {
			bezelRotation-=(360/clicks);
		}
		else if (bezelRotation > 360) {
			bezelRotation = 0;
		}
		if(document.body.contains(document.getElementById('bezel'))) {
			document.getElementById("bezel").style.transform = `rotate(${bezelRotation}deg)`;
		}
		if(document.body.contains(document.getElementById('bezellume'))) {
			document.getElementById("bezellume").style.transform = `rotate(${bezelRotation}deg)`;
		}
	};
};

function bezelLume(watch) {
	var container = document.getElementById("container");
	var div = document.createElement("div");
	div.id = "bezellume";
	div.className = "watch lume";
	div.innerHTML = "<img src='img/"+watch+"/bezellume.png' id='bezellumeImg' class='imgDisplay'>";
    container.appendChild(div);
};

//Global variable so I can stop the interval outside of the analogueTime function
var interval;

//Function to display the time & date
function analogueTime(beat) {
	interval = setInterval(() => {
		//Finds any divs that can be rotated
		var date = document.getElementById("date");
		var hour = document.getElementById("hour");
		var hourlume = document.getElementById("hourlume");
		var minute = document.getElementById("minute");
		var minutelume = document.getElementById("minutelume");
		var second = document.getElementById("second");
		var secondlume = document.getElementById("secondlume");
		
		//Gets the date
		d = new Date(); //object of date()
		hr = d.getHours();
		min = d.getMinutes();
		sec = d.getSeconds();
		ms = d.getMilliseconds();
		dat = d.getDate();
		hr_rotation = 30 * hr; //converting current time
		min_rotation = 6 * min;
		sec_rotation = 6 * sec;
		ms_rotation = ms / 166.666667;
		dat_rotation = 11.61290322580645 * (dat-1);
		
		//If div is present on the page, rotate it to show the time
		if (date) {
			date.style.transform = `rotate(${(dat_rotation)}deg)`;
		}
		
		if (hour) {
			hour.style.transform = `rotate(${(hr_rotation)+(min_rotation/12)+(sec_rotation/720)}deg)`;
		}
		
		if (hourlume) {
			hourlume.style.transform = `rotate(${(hr_rotation)+(min_rotation/12)+(sec_rotation/720)}deg)`;
		}
		
		if (minute) {
			minute.style.transform = `rotate(${(min_rotation)+(sec_rotation/60)+(ms_rotation/166.666667)}deg)`;
		}
		
		if (minutelume) {
			minutelume.style.transform = `rotate(${(min_rotation)+(sec_rotation/60)+(ms_rotation/166.666667)}deg)`;
		}
		
		if (second) {
			second.style.transform = `rotate(${(sec_rotation)+(ms_rotation)}deg)`;
		}
		
		if (secondlume) {
			secondlume.style.transform = `rotate(${(sec_rotation)+(ms_rotation)}deg)`;
		}

		//Audio - Currently adds additional noise every time watch is swapped, and cannot autoplay on page load in Chrome
		//let tick = new Audio('tick.mp3');
		//tick.loop = true;
		//tick.play();	
	
	}, beat);//Watch beat rate passed into the function
};

//https://www.freecodecamp.org/news/svg-javascript-tutorial/?msclkid=1949c10dd06e11ec9ebeb9f4e5aea11c
