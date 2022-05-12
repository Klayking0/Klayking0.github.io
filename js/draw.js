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
	date.style.transform = `rotate(${(dat_rotation)}deg)`;
	
}, 166.66667);

//Day-night mode toggle
	const nightbtn = document.getElementById('cocktail1');
	nightbtn.addEventListener('click', function onClick(event) {
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

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

//const watchContainer = document.getElementById('watchContainer');
//watchContainer.innerHTML = str;

//document.getElementById('watchContainer').innerHTML += str;

//https://www.freecodecamp.org/news/svg-javascript-tutorial/?msclkid=1949c10dd06e11ec9ebeb9f4e5aea11c