setInterval(() => {
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

	hour.style.transform = `rotate(${(hr_rotation)+(min_rotation/12)+(sec_rotation/720)}deg)`;
	minute.style.transform = `rotate(${(min_rotation)+(sec_rotation/60)+(ms_rotation/166.666667)}deg)`;
	second.style.transform = `rotate(${(sec_rotation)+(ms_rotation)}deg)`;
	hourlume.style.transform = `rotate(${(hr_rotation)+(min_rotation/12)+(sec_rotation/720)}deg)`;
	minutelume.style.transform = `rotate(${(min_rotation)+(sec_rotation/60)+(ms_rotation/166.666667)}deg)`;
	secondlume.style.transform = `rotate(${(sec_rotation)+(ms_rotation)}deg)`;
	date.style.transform = `rotate(${(dat_rotation)}deg)`;
	
}, 166.66667);//Interval defines the watch beat rate. (Interval of 166.66667 to simulate 21,600 BPH


//Watch image selector function
function watchSelect(value) {
	var value = document.getElementById("dropdown").value;
	document.getElementById('dateImg').src = "img/"+value+"/date.png";//Sets correct folder name in path
	//document.getElementById('dateImg').style.display = "flex";//Re-activates the image if previously hidden due to missing element
	document.getElementById('faceImg').src = "img/"+value+"/face.png";
	//document.getElementById('faceImg').style.display = "flex";
	document.getElementById('facelumeImg').src = "img/"+value+"/facelume.png";
	//document.getElementById('facelumeImg').style.display = "flex";
	document.getElementById('hourImg').src = "img/"+value+"/hour.png";
	//document.getElementById('hourImg').style.display = "flex";
	document.getElementById('hourlumeImg').src = "img/"+value+"/hourlume.png";
	//document.getElementById('hourlumeImg').style.display = "flex";
	document.getElementById('minuteImg').src = "img/"+value+"/minute.png";
	document.getElementById('minutelumeImg').src = "img/"+value+"/minutelume.png";
	document.getElementById('secondImg').src = "img/"+value+"/second.png";
	document.getElementById('secondlumeImg').src = "img/"+value+"/secondlume.png";
	
	//Re-activates images if previously hidden due to missing element
	var x = document.getElementsByClassName("imgDisplay");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.visibility = 'visible';
	}
};

//Calls the function on page load to populate the image sources
document.getElementById("dropdown").onload = watchSelect();

//Calls the function when the user selects an option from the selector
document.getElementById("dropdown").oninput = function() {
	watchSelect();
};

//Brightness slider
document.getElementById("slider").oninput = function() {
	document.body.style.backgroundColor =  'hsl(0, 0%, '+this.value+'%)';
	document.documentElement.style.setProperty('--brightness', this.value/100);
	document.documentElement.style.setProperty('--lume', 1-(this.value/100));
	document.getElementById('dropdown').style.backgroundColor = 'hsl(0, 0%, '+this.value+'%)';
};

/*
//Function to Hide the address bar on mobile
hideMobAddress(function(){
	window.scrollTo(0, 1);
}, 0);

//Calls the function on page load to populate the image sources
window.onload = function() {
	hideMobAddress();
};
*/

window.addEventListener('resize', () => {
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});

//Select an element to be full screen button
const fsButton = document.getElementById('fullscreenButton');
fsButton.addEventListener('click', function onClick(event) {
	openFullscreen();
});
//Get the documentElement (<html>) to display the page in fullscreen
var elem = document.documentElement;
//View in fullscreen
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}


//https://www.freecodecamp.org/news/svg-javascript-tutorial/?msclkid=1949c10dd06e11ec9ebeb9f4e5aea11c