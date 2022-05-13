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
	
	//Brightness logic
	if (hr == 5) {
		var brightness = min/60;
		var lume = 1-brightness;
	}
	else if (hr == 21) {
		var brightness = 1-(min/60);
		var lume = 1-brightness;
	}
	else if (hr > 21 || hr < 5) {
		var brightness = 0;
		var lume = 1;
	}
	else {
		var brightness = 1;
		var lume = 0;
	}
	document.documentElement.style.setProperty('--brightness', brightness);
	document.body.style.backgroundColor = 'hsl(200, 30%, '+brightness*80+'%)';
	document.documentElement.style.setProperty('--lume', lume);
	
}, 166.66667);



//Select an element to be full screen button
const fsButton = document.getElementById('cocktail1');
fsButton.addEventListener('click', function onClick(event) {
	openFullscreen()
});
/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;
/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}


//const watchContainer = document.getElementById('watchContainer');
//watchContainer.innerHTML = str;

//document.getElementById('watchContainer').innerHTML += str;

//https://www.freecodecamp.org/news/svg-javascript-tutorial/?msclkid=1949c10dd06e11ec9ebeb9f4e5aea11c