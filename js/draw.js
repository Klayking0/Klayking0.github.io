//Disable right click
document.addEventListener('contextmenu', event => event.preventDefault());

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
	if (watch == "marathon") {
		watchcontainer(watch);
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
		analogueTime(125, 22, 3);//Beat rate, hour date starts changing, hour day ends changing
		//3Hz = 21600vph:  1000ms (1 sec) / 6 (degrees each tick (21600/60)/60=6) = analogueTime(166.66667)
		//4Hz = 28800vph:  1000ms (1 sec) / 8 (degrees each tick (28800/60)/60=8) = analogueTime(125)
		//5Hz = 36000vph:  1000ms (1 sec) / 10 (degrees each tick (28800/60)/60=8) = analogueTime(100)
		//vph from Hz: (Hz * 2) * 3600 (seconds in an hour) = vph
		//analogueTime() from vph: 1000 (ms in 1 sec) / ((vph / 60) / 60) = analogueTime()
	}
	else if (watch == "submariner") {
		watchcontainer(watch);
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
		analogueTime(100);//Beat rate goes in here
	}
	else if (watch == "nttd") {
		watchcontainer(watch);
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
		analogueTime(142.8571428571429);//25,200vph (3.5Hz)
	}
	else if (watch == "westerland") {
		watchcontainer(watch);
		face(watch);
		faceLume(watch);
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		second(watch);
		secondLume(watch);
		analogueTime(125);//Beat rate goes in here
	}
	else if (watch == "dortmund") {
		watchcontainer(watch);
		face(watch);
		faceLume(watch);
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		second(watch);
		secondLume(watch);
		analogueTime(125);//Beat rate goes in here
	}
	else if (watch == "khaki") {
		watchcontainer(watch);
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
	else if (watch == "seiko5") {
		watchcontainer(watch);
		date(watch);
		day(watch);
		face(watch);
		faceLume(watch);
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		second(watch);
		secondLume(watch);
		analogueTime(166.66667, 22, 3);//Beat rate, hour date starts changing, hour day ends changing
		//Do not define the dateStart / dayEnd values if you wish for instant day and/or date wheel changes
	}
	else if (watch == "cocktail") {
		watchcontainer(watch);
		date(watch);
		face(watch);
		hour(watch);
		minute(watch);
		second(watch);
		analogueTime(166.66667, 22, 3);//Beat rate, hour date starts changing, hour day ends changing
	}
	else if (watch == "grandseiko") {
		watchcontainer(watch);
		face(watch);
		hour(watch);
		minute(watch);
		second(watch);//marginTop, marginRight, marginBottom, marginLeft: Offsets the hand. Must include all 4 numbers or none.
		analogueTime(10);//Beat rate goes in here
	}
	else if (watch == "fairfield") {
		watchcontainer(watch);
		face(watch);
		faceLume(watch);
		hour(watch);
		minute(watch);
		second(watch);
		analogueTime(1000);//Beat rate goes in here
	}
	else if (watch == "skagen") {
		watchcontainer(watch);
		face(watch);
		hour(watch);
		minute(watch);
		second(watch);
		analogueTime(1000);//Beat rate goes in here
	}
	else if (watch == "mig") {
		watchcontainer(watch);
		face(watch);
		faceLume(watch);
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		second(watch);
		secondLume(watch);
		analogueTime(250);
	}
	else if (watch == "fliegerb") {
		watchcontainer(watch);
		face(watch);
		faceLume(watch);
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		second(watch);
		secondLume(watch);
		analogueTime(125);//Beat rate goes in here
	}
	else if (watch == "marathonmod") {
		watchcontainer(watch);
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
		analogueTime(125, 22, 3);//Beat rate, hour date starts changing, hour day ends changing
	}
	else if (watch == "marathonmod2") {
		watchcontainer(watch);
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
		analogueTime(125, 22, 3);//Beat rate, hour date starts changing, hour day ends changing
	}
	else if (watch == "seagull") {
		watchcontainer(watch);
		chronoPusherStart(watch, 0, 0, 50, 90); //Offset percentage: top, right, bottom, left
		chronoPusherReset(watch, 45, 0, 0, 90); //Offset percentage: top, right, bottom, left
		face(watch);
		hour(watch);
		minute(watch);
		second(watch, 0, 38, 1, 0); //Offset percentage: top, right, bottom, left
		chronoMinute(watch, 0, -38, 1, 0);
		chronoSecond(watch);
		analogueTime(166.66667);//Beat rate goes in here
	}
};

//Function to clear the watch container
function clearContainer() {
	document.getElementById("container").innerHTML = "";
}

//Functions to create each component of the watch
function watchcontainer(watch) {
	var container = document.getElementById("container");
	var div = document.createElement("div");
	div.id = "watchcontainer";
	div.className = "watchcontainer";
    container.appendChild(div);
};
function date(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "date";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/date.png' id='dateImg' class='imgDisplay'>";
    container.appendChild(div);
};

function day(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "day";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/day.png' id='dayImg' class='imgDisplay'>";
    container.appendChild(div);
};

function face(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "face";
	div.className = "watchface brightness";
	div.innerHTML = "<img src='img/"+watch+"/face.png' id='faceImg' class='imgDisplay'>";
    container.appendChild(div);
};

function faceLume(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "facelume";
	div.className = "watch lume";
	div.innerHTML = "<img src='img/"+watch+"/facelume.png' id='facelumeImg' class='imgDisplay'>";
    container.appendChild(div);
};

function hour(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "hour";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/hour.png' id='hourImg' class='imgDisplay'>";
    container.appendChild(div);
};

function hourLume(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "hourlume";
	div.className = "watch lume";
	div.innerHTML = "<img src='img/"+watch+"/hourlume.png' id='hourlumeImg' class='imgDisplay'>";
    container.appendChild(div);
};

function minute(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "minute";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/minute.png' id='minuteImg' class='imgDisplay'>";
    container.appendChild(div);
};

function minuteLume(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "minutelume";
	div.className = "watch lume";
	div.innerHTML = "<img src='img/"+watch+"/minutelume.png' id='minutelumeImg' class='imgDisplay'>";
    container.appendChild(div);
};

function second(watch, marginTop, marginRight, marginBottom, marginLeft) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "second";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/second.png' id='secondImg' class='imgDisplay'>";
    if (marginTop || marginRight || marginBottom || marginLeft) {//Offsets the hand if arguments were provided
		div.setAttribute("style", "margin: "+marginTop+"% "+marginRight+"% "+marginBottom+"% "+marginLeft+"%");
	}
	container.appendChild(div);
};

function secondLume(watch, marginTop, marginRight, marginBottom, marginLeft) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "secondlume";
	div.className = "watch lume";
	div.innerHTML = "<img src='img/"+watch+"/secondlume.png' id='secondlumeImg' class='imgDisplay'>";
    if (marginTop || marginRight || marginBottom || marginLeft) {//Offsets the hand if arguments were provided
		div.setAttribute("style", "margin: "+marginTop+"% "+marginRight+"% "+marginBottom+"% "+marginLeft+"%");
	}
	container.appendChild(div);
};

function chronoSecond(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "chronosecond";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/chronosecond.png' id='chronosecondImg' class='imgDisplay'>";
    container.appendChild(div);
};

function chronoSecondLume(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "chronosecondlume";
	div.className = "watch lume";
	div.innerHTML = "<img src='img/"+watch+"/chronosecondlume.png' id='chronosecondlumeImg' class='imgDisplay'>";
    container.appendChild(div);
};

function chronoMinute(watch, marginTop, marginRight, marginBottom, marginLeft) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "chronominute";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/chronominute.png' id='minuteImg' class='imgDisplay'>";
	if (marginTop || marginRight || marginBottom || marginLeft) {//Offsets the hand if arguments were provided
		div.setAttribute("style", "margin: "+marginTop+"% "+marginRight+"% "+marginBottom+"% "+marginLeft+"%");
	}
    container.appendChild(div);
};

function chronoMinuteLume(watch, marginTop, marginRight, marginBottom, marginLeft) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "chronominutelume";
	div.className = "watch lume";
	div.innerHTML = "<img src='img/"+watch+"/chronominutelume.png' id='chronominutelumeImg' class='imgDisplay'>";
	if (marginTop || marginRight || marginBottom || marginLeft) {//Offsets the hand if arguments were provided
		div.setAttribute("style", "margin: "+marginTop+"% "+marginRight+"% "+marginBottom+"% "+marginLeft+"%");
	}
    container.appendChild(div);
};

var chronoPlay = 0;//Global variables to be passed into the timekeeping function
var chronoReset = 0;

function chronoPusherStart(watch, marginTop, marginRight, marginBottom, marginLeft) {
	var container = document.getElementById("watchcontainer");
	//Creates the visual element
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "chronopusherstart";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/chronopusherstart.png' id='chronopusherstartImg' class='imgDisplay'>";
	//Creates the clickable element
	var div2 = document.createElement("div");
	div2.id = "chronopusherstartclickzone";
	div2.className = "clickzone";
	if (marginTop || marginRight || marginBottom || marginLeft) {//Offsets the hand if arguments were provided
		div2.setAttribute("style", "margin: "+marginTop+"% "+marginRight+"% "+marginBottom+"% "+marginLeft+"%");
	}
	container.appendChild(div);
    container.appendChild(div2);
	
	//Animating the pusher on click
	div2.addEventListener("mousedown", ButtonDown);
	div2.addEventListener("touchstart", ButtonDown);
	div2.addEventListener("mouseup", ButtonUp);
	div2.addEventListener("mouseleave", ButtonUp);
	div2.addEventListener("touchend", ButtonUp);
	div2.addEventListener("touchcancel", ButtonUp);
	function ButtonDown() {
		div.style.margin = "2% 3% 0 0";//top, right, bottom, left
		chronoPlay = !chronoPlay;
		//console.log(chronoPlay);
	};
	function ButtonUp() {
		div.style.margin = "0 0 0 0";
	};
};

function chronoPusherReset(watch, marginTop, marginRight, marginBottom, marginLeft) {
	var container = document.getElementById("watchcontainer");
	//Creates the visual element
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "chronopushereset";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/chronopusherreset.png' id='chronopusherresetImg' class='imgDisplay'>";
	//Creates the clickable element
	var div2 = document.createElement("div");
	div2.id = "chronopusherresetclickzone";
	div2.className = "clickzone";
	if (marginTop || marginRight || marginBottom || marginLeft) {//Offsets the hand if arguments were provided
		div2.setAttribute("style", "margin: "+marginTop+"% "+marginRight+"% "+marginBottom+"% "+marginLeft+"%");
	}
	container.appendChild(div);
    container.appendChild(div2);
	
	//Animating the pusher on click
	div2.addEventListener("mousedown", ButtonDown);
	div2.addEventListener("touchstart", ButtonDown);
	div2.addEventListener("mouseup", ButtonUp);
	div2.addEventListener("mouseleave", ButtonUp);
	div2.addEventListener("touchend", ButtonUp);
	div2.addEventListener("touchcancel", ButtonUp);
	function ButtonDown() {
		div.style.margin = "0 3% 2% 0";//top, right, bottom, left
		chronoReset = 1;
	};
	function ButtonUp() {
		div.style.margin = "0 0 0 0";
		chronoReset = 0;
	};
};

function bezel(watch, clicks) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "bezel";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/bezel.png' id='bezelImg' class='imgDisplay'>";
    container.appendChild(div);
	//Bezel rotation
	var bezelRotation = 0;
	var touchmoveDelay = 0;
	
	document.getElementById("container").addEventListener("mousewheel", rotateBezel);
	document.getElementById("container").addEventListener("touchmove", rotateBezelTouch);//For mobile devices
	document.getElementById("container").addEventListener("touchend", rotateBezelTouchStop);
	
	//How to detect mouse wheel direction:
	//https://deepmikoto.com/coding/1--javascript-detect-mouse-wheel-direction
	
	function rotateBezel() {
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
	function rotateBezelTouch() {//The mobile version
		touchmoveDelay++;
		if (touchmoveDelay >= 5) {
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
			touchmoveDelay = 0;
		};
	};
	function rotateBezelTouchStop() {
		touchmoveDelay = 0;
	};
};

function bezelLume(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "bezellume";
	div.className = "watch lume";
	div.innerHTML = "<img src='img/"+watch+"/bezellume.png' id='bezellumeImg' class='imgDisplay'>";
    container.appendChild(div);
};

//Global variable so I can stop the interval outside of the analogueTime function
var interval;

//Function to display the time & date
function analogueTime(beat, dateStart, dayEnd) {
	
	var chronoAng = 0;
	//Finds any divs that can be rotated
	var date = document.getElementById("date");
	var day = document.getElementById("day");
	var hour = document.getElementById("hour");
	var hourlume = document.getElementById("hourlume");
	var minute = document.getElementById("minute");
	var minutelume = document.getElementById("minutelume");
	var second = document.getElementById("second");
	var secondlume = document.getElementById("secondlume");
	var chronosecond = document.getElementById("chronosecond");
	var chronominute = document.getElementById("chronominute");
	
	interval = setInterval(() => {
		
		//Gets the date
		d = new Date(); //object of date()
		ms = d.getMilliseconds();
		sec = d.getSeconds();
		min = d.getMinutes();
		hr = d.getHours();
		dat = d.getDate();
		da = d.getDay();
		ms_rotation = (ms / 166.666667);//converting current time
		sec_rotation = (sec * 6) + (ms_rotation);
		min_rotation = (min * 6) + (sec_rotation / 60);
		hr_rotation = (hr * 30) + (min_rotation / 12);
		dat_rotation = 11.61290322580645 * (dat-1);
		da_rotation = -51.42857142857143 * (da-1);
		
		//If div is present on the page, rotate it to show the time
		if (date) {
			if (hr >= dateStart) {//Enables smooth date turnover before midnight
				dat_turn = 11.61290322580645 * ((hr_rotation - (dateStart * 30)) / (720 - dateStart * 30));
				//Figures are day wheel angle (360/31), hour hand angle at 21:00 (21*30), 90 degrees from 21:00 to 0:00
			}
			else {
				dat_turn = 0;
			}
			date.style.transform = `rotate(${dat_rotation + dat_turn}deg)`;
		}
		
		if (day) {
			if (hr < dayEnd) {//Enables smooth day turnover after midnight
				da_turn = -51.42857142857143 * (((dayEnd * 30) - hr_rotation) / (dayEnd * 30));
			}
			else {
				da_turn = 0;
			}
			day.style.transform = `rotate(${da_rotation - da_turn}deg)`;
		}
		
		if (hour) {
			//hour.style.transform = `rotate(${(hr_rotation)+(min_rotation/12)+(sec_rotation/720)}deg)`;
			hour.style.transform = `rotate(${hr_rotation}deg)`;
		}
		
		if (hourlume) {
			hourlume.style.transform = `rotate(${hr_rotation}deg)`;
		}
		
		if (minute) {
			//minute.style.transform = `rotate(${(min_rotation)+(sec_rotation/60)+(ms_rotation/166.666667)}deg)`;
			minute.style.transform = `rotate(${min_rotation}deg)`;
		}
		
		if (minutelume) {
			minutelume.style.transform = `rotate(${min_rotation}deg)`;
		}
		
		if (second) {
			//second.style.transform = `rotate(${(sec_rotation)+(ms_rotation)}deg)`;
			second.style.transform = `rotate(${sec_rotation}deg)`;
		}
		
		if (secondlume) {
			secondlume.style.transform = `rotate(${sec_rotation}deg)`;
		}
		
		if (chronoPlay) {
			chronoAng+=(beat/166.6667);
			//console.log(chronoAng);
			if (chronosecond) {
				chronosecond.style.transform = `rotate(${chronoAng * chronoPlay}deg)`;
				chronominute.style.transform = `rotate(${12*Math.floor((chronoAng/30)/12)}deg)`;
			}
		}
		
		if (chronoReset) {
			chronoAng = 0;
			if (chronosecond) {
				chronosecond.style.transform = `rotate(${0}deg)`;
				chronominute.style.transform = `rotate(${0}deg)`;
			}
		}
		
		//Chrono seconds
		//document.getElementById("chronopusherstartclickzone").addEventListener("mousedown", playChrono);
		
		//variable is chronoPlay

		//Audio - Currently adds additional noise every time watch is swapped, and cannot autoplay on page load in Chrome
		//let tick = new Audio('tick.mp3');
		//tick.loop = true;
		//tick.play();	
	
	}, beat);//Watch beat rate passed into the function
};

//https://www.freecodecamp.org/news/svg-javascript-tutorial/?msclkid=1949c10dd06e11ec9ebeb9f4e5aea11c