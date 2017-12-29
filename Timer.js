# Webdesigning
let units = ['months', 'days', 'hours', 'minutes', 'seconds'];

let divElements = units.map((key, val, arr) => {
	let content = key;
	key = document.createElement('div');
	key.className = `${content} unit`;
	key.innerHTML = `${content}`;
	document.body.appendChild(key);
	return key;
});

function countdown(divElements) {
	setInterval(() => {
		
 	let timeNow = new Date();
	
  let monthsLeft = 10 - timeNow.getMonth();
  let daysLeft = 15 - timeNow.getDate() + 30;
	let hoursLeft;
	if(timeNow.getHours() <= 14){
			hoursLeft = 14 - timeNow.getHours();
	}else{
		hoursLeft = 14 - timeNow.getHours() + 24;
	}
	let minutesLeft = 59 + -timeNow.getMinutes();
  let secondsLeft = 59 - timeNow.getSeconds();
	divElements[0].dataset.content = monthsLeft;
	divElements[1].dataset.content = daysLeft;
	divElements[2].dataset.content = hoursLeft;
	divElements[3].dataset.content = minutesLeft;
	divElements[4].dataset.content = secondsLeft;
	}, 1000)
}

let timer = countdown(divElements);

clearInterval(timer);
