//Disable right click (or tap+hold) menu
document.addEventListener('contextmenu', event => event.preventDefault());

//Detect touch devices
var isTouchDevice = 'ontouchstart' in document.documentElement;

//Brightness function
function brightness() {
	var brightnessSlider = document.getElementById("slider");
	var lumeSlider = document.getElementById("slider2");
	document.body.style.backgroundColor =  'hsl(0, 0%, '+brightnessSlider.value+'%)';
	document.documentElement.style.setProperty('--brightness', brightnessSlider.value/100);
	document.documentElement.style.setProperty('--lume', (1-(brightnessSlider.value/100))*lumeSlider.value/100);
	document.documentElement.style.setProperty('--trit', 1-(brightnessSlider.value/100));
	document.getElementById('dropdown').style.backgroundColor = 'hsl(0, 0%, '+brightnessSlider.value+'%)';
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
	if (watch == "sinn103") {
		watchcontainer(watch);
		date(watch);
		day(watch);
		face(watch);
		faceLume(watch);
		chronoPusherStart(watch, 0, 0, 50, 85); //Offset percentage: top, right, bottom, left
		chronoPusherReset(watch, 45, 0, 0, 85); //Offset percentage: top, right, bottom, left
		second(watch, 0, 34, 0, 0); //Offset percentage: top, right, bottom, left
		chronoMinute(watch, 0, 0, 32.5, 0);//Offset percentage: top, right, bottom, left
		chronoHour(watch, 0, 0, -32.5, 0);//Offset percentage: top, right, bottom, left
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		chronoSecond(watch);
		chronoSecondLume(watch);
		bezel(watch, 1, 60, 80);//Bidirectional, Clicks per rotation, Interaction zone scale(%)
		bezelLume(watch);
		analogueTime(125, 22, 3);//Beat rate, hour date starts changing, hour day ends changing
		//3Hz = 21600vph:  1000ms (1 sec) / 6 (degrees each tick (21600/60)/60=6) = analogueTime(166.66667)
		//4Hz = 28800vph:  1000ms (1 sec) / 8 (degrees each tick (28800/60)/60=8) = analogueTime(125)
		//5Hz = 36000vph:  1000ms (1 sec) / 10 (degrees each tick (28800/60)/60=8) = analogueTime(100)
		//vph from Hz: (Hz * 2) * 3600 (seconds in an hour) = vph
		//analogueTime() from vph: 1000 (ms in 1 sec) / ((vph / 60) / 60) = analogueTime()
	}
	else if (watch == "marathon") {
		watchcontainer(watch);
		date(watch);
		face(watch);
		faceTrit(watch);
		hour(watch);
		hourTrit(watch);
		minute(watch);
		minuteTrit(watch);
		second(watch);
		secondTrit(watch);
		bezel(watch, 0, 120,80);//Bidirectional, Clicks per rotation, Interaction zone scale(%)
		bezelLume(watch);
		analogueTime(125, 22, 3);//Beat rate, hour date starts changing, hour day ends changing
	}
	else if (watch == "marathon2") {
		watchcontainer(watch);
		date(watch);
		face(watch);
		faceTrit(watch);
		hour(watch);
		hourTrit(watch);
		minute(watch);
		minuteTrit(watch);
		second(watch);
		analogueTime(1000, 22);//Beat rate, hour date starts changing, hour day ends changing
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
		bezel(watch, 0, 120, 75);//Bidirectional, Clicks per rotation, Interaction zone scale(%)
		bezelLume(watch);
		analogueTime(100);//Beat rate goes in here
	}
	else if (watch == "submariner2") {
		watchcontainer(watch);
		face(watch);
		faceLume(watch);
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		second(watch);
		secondLume(watch);
		bezel(watch, 0, 120, 75);//Bidirectional, Clicks per rotation, Interaction zone scale(%)
		bezelLume(watch);
		analogueTime(100);//Beat rate goes in here
	}
	else if (watch == "submariner3") {
		watchcontainer(watch);
		face(watch);
		faceLume(watch);
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		second(watch);
		secondLume(watch);
		bezel(watch, 0, 120, 75);//Bidirectional, Clicks per rotation, Interaction zone scale(%)
		bezelLume(watch);
		analogueTime(100);//Beat rate goes in here
	}
	else if (watch == "submariner4") {
		watchcontainer(watch);
		face(watch);
		faceLume(watch);
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		second(watch);
		secondLume(watch);
		bezel(watch, 0, 120, 75);//Bidirectional, Clicks per rotation, Interaction zone scale(%)
		bezelLume(watch);
		analogueTime(100);//Beat rate goes in here
	}
	else if (watch == "oyster") {
		watchcontainer(watch);
		face(watch);
		faceLume(watch);
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		second(watch);
		analogueTime(100);//Beat rate goes in here
	}
	else if (watch == "oyster2") {
		watchcontainer(watch);
		face(watch);
		faceLume(watch);
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		second(watch);
		analogueTime(100);//Beat rate goes in here
	}
	else if (watch == "oyster3") {
		watchcontainer(watch);
		face(watch);
		faceLume(watch);
		hour(watch);
		hourLume(watch);
		minute(watch);
		minuteLume(watch);
		second(watch);
		analogueTime(100);//Beat rate goes in here
	}
	else if (watch == "daydate") {
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
		analogueTime(100, 24, 0, 0, 1);//Beat rate, hour date starts changing, hour day ends changing, date reversal, day reversal
	}
	else if (watch == "daydate2") {
		watchcontainer(watch);
		date(watch);
		day(watch);
		face(watch);
		hour(watch);
		minute(watch);
		second(watch);
		analogueTime(100, 24, 0, 0, 1);//Beat rate, hour date starts changing, hour day ends changing, date reversal, day reversal
	}
	else if (watch == "daydate3") {
		watchcontainer(watch);
		date(watch);
		day(watch);
		face(watch);
		hour(watch);
		minute(watch);
		second(watch);
		analogueTime(100, 24, 0, 0, 1);//Beat rate, hour date starts changing, hour day ends changing, date reversal, day reversal
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
		bezel(watch, 0, 120, 80);//Bidirectional, Clicks per rotation, Interaction zone scale(%)
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
	else if (watch == "seagull") {
		watchcontainer(watch);
		chronoPusherStart(watch, 0, 0, 50, 90); //Offset percentage: top, right, bottom, left
		chronoPusherReset(watch, 45, 0, 0, 90); //Offset percentage: top, right, bottom, left
		face(watch);
		hour(watch);
		minute(watch);
		second(watch, 0, 38, 1, 0); //Offset percentage: top, right, bottom, left
		chronoMinute(watch, 0, -38, 1, 0);//Offset percentage: top, right, bottom, left
		chronoSecond(watch);
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
		analogueTime(166.66667, 22);//Beat rate, hour date starts changing, hour day ends changing
	}
	else if (watch == "cocktail2") {
		watchcontainer(watch);
		date(watch);
		face(watch);
		hour(watch);
		minute(watch);
		second(watch);
		analogueTime(166.66667, 22);//Beat rate, hour date starts changing, hour day ends changing
	}
	else if (watch == "cocktail3") {
		watchcontainer(watch);
		date(watch);
		face(watch);
		hour(watch);
		minute(watch);
		second(watch);
		analogueTime(166.66667, 22);//Beat rate, hour date starts changing, hour day ends changing
	}
	else if (watch == "cocktail4") {
		watchcontainer(watch);
		date(watch);
		face(watch);
		hour(watch);
		minute(watch);
		second(watch);
		analogueTime(166.66667, 22);//Beat rate, hour date starts changing, hour day ends changing
	}
	else if (watch == "grandseiko") {
		watchcontainer(watch);
		face(watch);
		hour(watch);
		minute(watch);
		second(watch);//marginTop, marginRight, marginBottom, marginLeft: Offsets the hand. Must include all 4 numbers or none.
		analogueTime(10);//Beat rate goes in here
	}
	else if (watch == "grandseiko2") {
		watchcontainer(watch);
		date(watch);
		face(watch);
		hour(watch);
		minute(watch);
		second(watch);//marginTop, marginRight, marginBottom, marginLeft: Offsets the hand. Must include all 4 numbers or none.
		analogueTime(10);//Beat rate goes in here
	}
	else if (watch == "fairfield") {
		watchcontainer(watch);
		lightPusher(watch, 0, 0, 0, 90); //Offset percentage: top, right, bottom, left
		face(watch);
		faceLight(watch);
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
	}else if (watch == "skagen2") {
		watchcontainer(watch);
		date(watch);
		face(watch);
		hour(watch);
		minute(watch);
		second(watch);
		analogueTime(1000, 22);//Beat rate, hour date starts changing, hour day ends changing
	}
	else if (watch == "hruodland") {
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
		faceTrit(watch);
		hour(watch);
		hourTrit(watch);
		minute(watch);
		minuteTrit(watch);
		second(watch);
		secondTrit(watch);
		bezel(watch, 0, 120, 80);//Bidirectional, Clicks per rotation, Interaction zone scale(%)
		bezelLume(watch);
		analogueTime(125, 22, 3);//Beat rate, hour date starts changing, hour day ends changing
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

function faceTrit(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "facetrit";
	div.className = "watch trit";
	div.innerHTML = "<img src='img/"+watch+"/facetrit.png' id='facetritImg' class='imgDisplay'>";
    container.appendChild(div);
};

function faceLight(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "facelight";
	div.className = "watch light";
	div.innerHTML = "<img src='img/"+watch+"/facelight.png' id='facelightImg' class='imgDisplay'>";
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

function hourTrit(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "hourtrit";
	div.className = "watch trit";
	div.innerHTML = "<img src='img/"+watch+"/hourtrit.png' id='hourtritImg' class='imgDisplay'>";
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

function minuteTrit(watch) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "minutetrit";
	div.className = "watch trit";
	div.innerHTML = "<img src='img/"+watch+"/minutetrit.png' id='minutetritImg' class='imgDisplay'>";
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

function secondTrit(watch, marginTop, marginRight, marginBottom, marginLeft) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "secondtrit";
	div.className = "watch trit";
	div.innerHTML = "<img src='img/"+watch+"/secondtrit.png' id='secondtritImg' class='imgDisplay'>";
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
	div.innerHTML = "<img src='img/"+watch+"/chronominute.png' id='chronominuteImg' class='imgDisplay'>";
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

function chronoHour(watch, marginTop, marginRight, marginBottom, marginLeft) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "chronohour";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/chronohour.png' id='chronohourImg' class='imgDisplay'>";
	if (marginTop || marginRight || marginBottom || marginLeft) {//Offsets the hand if arguments were provided
		div.setAttribute("style", "margin: "+marginTop+"% "+marginRight+"% "+marginBottom+"% "+marginLeft+"%");
	}
    container.appendChild(div);
};

function chronoHourLume(watch, marginTop, marginRight, marginBottom, marginLeft) {
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "chronohourlume";
	div.className = "watch lume";
	div.innerHTML = "<img src='img/"+watch+"/chronohourlume.png' id='chronohourlumeImg' class='imgDisplay'>";
	if (marginTop || marginRight || marginBottom || marginLeft) {//Offsets the hand if arguments were provided
		div.setAttribute("style", "margin: "+marginTop+"% "+marginRight+"% "+marginBottom+"% "+marginLeft+"%");
	}
    container.appendChild(div);
};

var chronoPlay = 0;//Global variables to be passed into the timekeeping function
var chronoReset = 0;

function chronoPusherStart(watch, marginTop, marginRight, marginBottom, marginLeft) {
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
	if (isTouchDevice) {
		div2.addEventListener("touchstart", ButtonDown);
		div2.addEventListener("touchend", ButtonUp);
		div2.addEventListener("touchcancel", ButtonUp);
	}
	else {
		div2.addEventListener("mousedown", ButtonDown);
		div2.addEventListener("mouseup", ButtonUp);
		div2.addEventListener("mouseleave", ButtonUp);
	}
	
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
	if (isTouchDevice) {
		div2.addEventListener("touchstart", ButtonDown);
		div2.addEventListener("touchend", ButtonUp);
		div2.addEventListener("touchcancel", ButtonUp);
	}
	else {
		div2.addEventListener("mousedown", ButtonDown);
		div2.addEventListener("mouseup", ButtonUp);
		div2.addEventListener("mouseleave", ButtonUp);
	}
	
	function ButtonDown() {
		div.style.margin = "0 3% 2% 0";//top, right, bottom, left
		chronoReset = 1;
	};
	function ButtonUp() {
		div.style.margin = "0 0 0 0";
		//chronoReset =  0 is set in the time code at the bottom, to prevent a quick button release missing the interval
	};
};

function lightPusher(watch, marginTop, marginRight, marginBottom, marginLeft) {
	//Creates the visual element
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "lightpusher";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/lightpusher.png' id='lightpusherImg' class='imgDisplay'>";
	//Creates the clickable element
	var div2 = document.createElement("div");
	div2.id = "lightpusherclickzone";
	div2.className = "clickzone";
	if (marginTop || marginRight || marginBottom || marginLeft) {//Offsets the hand if arguments were provided
		div2.setAttribute("style", "margin: "+marginTop+"% "+marginRight+"% "+marginBottom+"% "+marginLeft+"%");
	}
	container.appendChild(div);
    container.appendChild(div2);
	
	//Animating the pusher on click
	if (isTouchDevice) {
		div2.addEventListener("touchstart", ButtonDown);
		div2.addEventListener("touchend", ButtonUp);
		div2.addEventListener("touchcancel", ButtonUp);
	}
	else {
		div2.addEventListener("mousedown", ButtonDown);
		div2.addEventListener("mouseup", ButtonUp);
		div2.addEventListener("mouseleave", ButtonUp);
	}
	
	function ButtonDown() {
		div.style.margin = "0 2% 0 0";//top, right, bottom, left
		lightButton = 1;
		var lightLevel = document.getElementById('slider').value;
		document.documentElement.style.setProperty('--light', lightButton-(lightLevel/100));
	};
	function ButtonUp() {
		div.style.margin = "0 0 0 0";
		lightButton = 0;
		document.documentElement.style.setProperty('--light', 0);
	};
};

function bezel(watch, bidirectional, clicks, size) {
	//Creates the visual element
	var container = document.getElementById("watchcontainer");
	var div = document.createElement("div");
	div.id = "bezel";
	div.className = "watch brightness";
	div.innerHTML = "<img src='img/"+watch+"/bezel.png' id='bezelImg' class='imgDisplay'>";
	//Creates the interactive element
	var div2 = document.createElement("div");
	div2.id = "bezelclickzone";
	div2.className = "clickzone";
	div2.style.zIndex="99";
	if (size) {//Scales the scroll zone
		div2.style.width=""+size+"%";
		div2.style.paddingTop=""+size+"%";
	}
	container.appendChild(div);//Adds the divs into the container
    container.appendChild(div2);
	
	
	//I have shoved mousemove/mouseup functions inside mousedown but wasn't able to focus on doing more
	//So might be better to restore the backup in the git folder from just before I started this
	
	
	//Bezel rotation mk 3.0
	//To fix:
	//Bezel rotation gets messed up when rotating one watch, rotating another watch, then rotating the first again
	//Moving brightness slider causes bezel rotation to jump around
	//Need to add bidirectional/unidirectional support
	var isDragging = false;
	var degreesFloored = 0;//Current clickzone angle value while dragging
	var bezelAng = 0;//Angle of visual bezel at beginning of each drag event
	var initialDegrees = 0;//Initial value that the clickzone angle snaps to on mousedown
	var angDifference = 0;//Calculates degreesFloored - initialDegrees to get difference in angle
	var bezelAngModifier = 0;//Calculates bezelAng + angDifference to add rotation to visual bezel
	
	bezelBox = div2.getBoundingClientRect(),
	centerPoint = window.getComputedStyle(div).transformOrigin,
	centers = centerPoint.split(" ");

	function mousedown() {
		isDragging = true;
		initialDegrees = degreesFloored;//Save the initial angle that degreesFloored snaps to on mousedown
		/*if (!isDragging) {
			return;
		}*/
		//console.log(isDragging); //Below isDragging False is getting triggered loads of times for some reason
		if (isTouchDevice) {
			//div2.addEventListener("touchstart", mousedown);
			document.addEventListener("touchmove", mousemove);
			//document.addEventListener("touchend", mouseup);
			}
		else {
			//div2.addEventListener("mousedown", mousedown);
			document.addEventListener("mousemove", mousemove);
			//document.addEventListener("mouseup", mouseup);
		}
		function mousemove(e) {
			if (isTouchDevice) {
				//div2.addEventListener("touchstart", mousedown);
				//document.addEventListener("touchmove", mousemove);
				document.addEventListener("touchend", mouseup);
				}
			else {
				//div2.addEventListener("mousedown", mousedown);
				//document.addEventListener("mousemove", mousemove);
				document.addEventListener("mouseup", mouseup);
			}
			function mouseup() {
				isDragging = false;
				//console.log(isDragging); //isDragging False is getting triggered loads of times for some reason
				bezelAng = bezelAngModifier;//Saves the new initial bezelAng of the visual element for next time
			}
			//if (!isDragging) return;
			var bezelEvent = e;
			if (e.targetTouches && e.targetTouches[0]) {
				e.preventDefault(); 
				bezelEvent = e.targetTouches[0];
				mouseX = bezelEvent.pageX;
				mouseY = bezelEvent.pageY;
			}
			else {
				mouseX = e.clientX,
				mouseY = e.clientY;
			}

			var centerY = bezelBox.top + parseInt(centers[1]) - window.pageYOffset,
			centerX = bezelBox.left + parseInt(centers[0]) - window.pageXOffset,
			radians = Math.atan2(mouseX - centerX, mouseY - centerY),
			degrees = (radians * (180 / Math.PI) * -1) + 180;
			degreesFloored = (360/clicks)*Math.floor(degrees/(360/clicks));
			if (bidirectional) {
				
			}
			angDifference = degreesFloored - initialDegrees;//calculates a +/- degrees difference
			bezelAngModifier = bezelAng + angDifference;//bezelAngModifier will be the visual element rotation angle
			//backwards version: bezelAngModifier = bezelAng + -Math.abs(angDifference);//bezelAngModifier will be the visual element rotation angle
				
			if (isDragging) {
				div.style.transform = 'rotate('+bezelAngModifier+'deg)';
				//console.log(bezelAngModifier);
				if (document.getElementById("bezellume")) {
					document.getElementById("bezellume").style.transform = 'rotate('+bezelAngModifier+'deg)';
				}
			}
		};
	};
	
	

	
	
	if (isTouchDevice) {
		div2.addEventListener("touchstart", mousedown);
		//document.addEventListener("touchmove", mousemove);
		//document.addEventListener("touchend", mouseup);
		}
	else {
		div2.addEventListener("mousedown", mousedown);
		//document.addEventListener("mousemove", mousemove);
		//document.addEventListener("mouseup", mouseup);
	}
	
	//Function on mousedown
	//document.getElementById("div2").onmousedown = function() {
	//	
	//};
	
	//Function on mouseup
	//document.onmouseup = function() {
	//	This isn't valid I need to use eventlistener
	//};
	
	//div2 mousedown gets ang, then calls mousemove function
	//doc mouseup returns mousemove (mousemove nestled within mousedown?)
	
	//if istouchdevice, create mousedown func
	//	get angles
	//	mousedown func(if istouchdevice, create mousemove func)
	//		mousemove func(if istouchdevice, create mouseup func)
	//			mouseup func(if istouchdevice, return funcs)
	
	
	
	
	
	/* const rotate = (div2) => {//Code to make the bezel turn when dragged
		let ang = 0; // All angles are expressed in radians
		let angStart = 0;
		let isStart = false;
		const angXY = (ev) => {
			const bcr = div2.getBoundingClientRect();
			const radius = bcr.width / 2;
			const { clientX, clientY } = ev.touches ? ev.touches[0] : ev;
			const y = clientY - bcr.top - radius;  // y from center
			const x = clientX - bcr.left - radius; // x from center
			return Math.atan2(y, x);
		};
		const mousedown = (ev) => {
			isStart = true;
			angStart = angXY(ev) - ang;
		};
		const mousemove = (ev) => {
			if (!isStart) return;
			ev.preventDefault();
			ang = angXY(ev) - angStart;
			//div.style.transform = `rotateZ(${ang}rad)`;
			div.style.transform = `rotateZ(${ang}rad)`;
			//console.log(div.style.transform = `rotateZ(${ang}rad)`);
			//radians = Math.atan2(mouseX - centerX, mouseY - centerY),
    		//degrees = (radians * (180 / Math.PI) * -1) + 180; 
			//console.log((ang * (180 / Math.PI) * -1) + 180);
			//console.log(ang*57.2957795);//Converts radians to degrees
			if (document.getElementById("bezellume")) {
				document.getElementById("bezellume").style.transform = `rotateZ(${ang}rad)`;
			}
		};
		const mouseup = () => {
			isStart = false; 
		};
		if (isTouchDevice) {
			div2.addEventListener("touchstart", mousedown);
			document.addEventListener("touchmove", mousemove);
			document.addEventListener("touchend", mouseup);
		}
		else {
			div2.addEventListener("mousedown", mousedown);
			document.addEventListener("mousemove", mousemove);
			document.addEventListener("mouseup", mouseup);
		}
	};
	document.querySelectorAll("#bezelclickzone").forEach(rotate);//I cannot for the life of me convert this to a single element selector... */
	//https://stackoverflow.com/questions/13863974/rotate-element-based-on-touch-event
	
	
	
	//Old mousewheel bezel rotation 
	//Bezel rotation
	var bezelRotation = 0;
	var touchmoveDelay = 0;
	
	//Function to detect mouse wheel direction
	function detectMouseWheelDirection( e )
	{
		var delta = null,
			direction = false
		;
		if ( !e ) { // if the event is not provided, we get it from the window object
			e = window.event;
		}
		if ( e.wheelDelta ) { // will work in most cases
			delta = e.wheelDelta / 60;
		} else if ( e.detail ) { // fallback for Firefox
			delta = -e.detail / 2;
		}
		if ( delta !== null ) {
			direction = delta > 0 ? 'up' : 'down';
		}

		return direction;
	}
	function handleMouseWheelDirection( direction )
	{
		if ( direction == 'down' ) {
			//Turn the bezel backwards
			bezelRotation-=(360/clicks);
		} else if ( direction == 'up') {
			//Turn the bezel forwards if bidirectional
			if (bidirectional) {
				bezelRotation+=(360/clicks);
			}
		} else {
			//Turn the bezel backwards if the direction of the mouse wheel could not be determined
			bezelRotation-=(360/clicks);
		}
		//The bit that actually turns the bezel
		if(document.body.contains(document.getElementById('bezel'))) {
			document.getElementById("bezel").style.transform = `rotate(${bezelRotation}deg)`;
		}
		if(document.body.contains(document.getElementById('bezellume'))) {
			document.getElementById("bezellume").style.transform = `rotate(${bezelRotation}deg)`;
		}
	}
	document.onmousewheel = function( e ) {
		handleMouseWheelDirection( detectMouseWheelDirection( e ) );
	};
	if ( window.addEventListener ) {
		document.addEventListener( 'DOMMouseScroll', function( e ) {
			handleMouseWheelDirection( detectMouseWheelDirection( e ) );
		});
	}
	//How to detect mouse wheel direction:
	//https://deepmikoto.com/coding/1--javascript-detect-mouse-wheel-direction
	
	/*Old mousewheel accompanying mobile bezel rotation	
	//Mobile event listeners
	div2.addEventListener("touchmove", rotateBezelTouch);//For mobile devices
	div2.addEventListener("touchend", rotateBezelTouchStop);
	
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
	}; */
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
function analogueTime(beat, dateStart, dayEnd, dateReverse, dayReverse) {
	
	var chronoAng = 0;
	//Finds any divs that can be rotated
	var date = document.getElementById("date");
	var day = document.getElementById("day");
	var hour = document.getElementById("hour");
	var hourlume = document.getElementById("hourlume");
	var hourtrit = document.getElementById("hourtrit");
	var minute = document.getElementById("minute");
	var minutelume = document.getElementById("minutelume");
	var minutetrit = document.getElementById("minutetrit");
	var second = document.getElementById("second");
	var secondlume = document.getElementById("secondlume");
	var secondtrit = document.getElementById("secondtrit");
	var chronohour = document.getElementById("chronohour");
	var chronohourlume = document.getElementById("chronohourllume");
	var chronominute = document.getElementById("chronominute");
	var chronominutelume = document.getElementById("chronominutelume");
	var chronosecond = document.getElementById("chronosecond");
	var chronosecondlume = document.getElementById("chronosecondlume");
	
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
			if (dateReverse) {
				date.style.transform = `rotate(${(dat_rotation*-1) - dat_turn}deg)`;
			}
			else {
				date.style.transform = `rotate(${dat_rotation + dat_turn}deg)`;
			}
		}
		
		if (day) {
			if (hr < dayEnd) {//Enables smooth day turnover after midnight
				da_turn = -51.42857142857143 * (((dayEnd * 30) - hr_rotation) / (dayEnd * 30));
			}
			else {
				da_turn = 0;
			}
			if (dayReverse) {
				day.style.transform = `rotate(${(da_rotation*-1) + da_turn}deg)`;
			}
			else {
				day.style.transform = `rotate(${da_rotation - da_turn}deg)`;
			}
		}
		
		if (hour) {
			hour.style.transform = `rotate(${hr_rotation}deg)`;
			if (hourlume) {
			hourlume.style.transform = `rotate(${hr_rotation}deg)`;
			}
			if (hourtrit) {
			hourtrit.style.transform = `rotate(${hr_rotation}deg)`;
			}
		}
		
		if (minute) {
			minute.style.transform = `rotate(${min_rotation}deg)`;
			if (minutelume) {
			minutelume.style.transform = `rotate(${min_rotation}deg)`;
			}
			if (minutetrit) {
			minutetrit.style.transform = `rotate(${min_rotation}deg)`;
			}
		}
		
		if (second) {
			second.style.transform = `rotate(${sec_rotation}deg)`;
			if (secondlume) {
			secondlume.style.transform = `rotate(${sec_rotation}deg)`;
			}
			if (secondtrit) {
			secondtrit.style.transform = `rotate(${sec_rotation}deg)`;
			}
		}
		
		if (chronoPlay) {
			chronoAng+=(beat/166.6667);
			if (chronosecond) {
				chronosecond.style.transform = `rotate(${chronoAng}deg)`;
				if (chronosecondlume) {
				chronosecondlume.style.transform = `rotate(${chronoAng}deg)`;
				}
			}
			if (chronominute) {
				chronominute.style.transform = `rotate(${12*Math.floor(chronoAng/360)}deg)`;
				if (chronominutelume) {
				chronominutelume.style.transform = `rotate(${12*Math.floor(chronoAng/360)}deg)`;
				}
			}
			if (chronohour) {
				chronohour.style.transform = `rotate(${15*Math.floor(chronoAng/10800)}deg)`;
				if (chronohourlume) {
				chronohourlume.style.transform = `rotate(${15*Math.floor(chronoAng/10800)}deg)`;
				}
			}
		}
		
		if (chronoReset) {
			chronoAng = 0;
			chronoReset = 0;
			if (chronosecond) {
				chronosecond.style.transform = `rotate(${0}deg)`;
				if (chronosecondlume) {
					chronosecondlume.style.transform = `rotate(${0}deg)`;
				}
			}
			if (chronominute) {
				chronominute.style.transform = `rotate(${0}deg)`;
				if (chronominutelume) {
					chronominutelume.style.transform = `rotate(${0}deg)`;
				}
			}
			if (chronohour) {
				chronohour.style.transform = `rotate(${0}deg)`;
				if (chronohourlume) {
					chronohourlume.style.transform = `rotate(${0}deg)`;
				}
			}
		}

		//Audio - Currently adds additional noise every time watch is swapped, and cannot autoplay on page load in Chrome
		//let tick = new Audio('tick.mp3');
		//tick.loop = true;
		//tick.play();	
	
	}, beat);//Watch beat rate passed into the function
};

//https://www.freecodecamp.org/news/svg-javascript-tutorial/?msclkid=1949c10dd06e11ec9ebeb9f4e5aea11c