setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	ms = d.getMilliseconds();
	hr_rotation = 30 * hr; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;
	ms_rotation = ms / 166.666667;

	hour.style.transform = `rotate(${(hr_rotation)+(min_rotation/12)+(sec_rotation/720)}deg)`;
	minute.style.transform = `rotate(${(min_rotation)+(sec_rotation/60)+(ms_rotation/166.666667)}deg)`;
	second.style.transform = `rotate(${(sec_rotation)+(ms_rotation)}deg)`;
	
}, 166.66667);



//const watchContainer = document.getElementById('watchContainer');
//watchContainer.innerHTML = str;

//document.getElementById('watchContainer').innerHTML += str;

//https://www.freecodecamp.org/news/svg-javascript-tutorial/?msclkid=1949c10dd06e11ec9ebeb9f4e5aea11c