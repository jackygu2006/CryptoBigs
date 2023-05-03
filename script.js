const speed = 30;
const text = [
	'To the computer pioneers and cypherpunks who have made great contributions to human freedom and development:',
	'',
	'Thank you for your groundbreaking work in the field of computer and encryption technology. Your contributions have provided a solid foundation for the development and progress of our modern society. Your work not only enabled the exponential growth of computer technology, but also provided more freedom and opportunities for humanity.',
	'',
	'Your foresight and courage have enabled us to have decentralized technologies and monetary systems, allowing us to have control over our own property and identity. Your innovative thinking and creative spirit have enabled us to better utilize technology to build a more open and free society.',
	'',
	'We hereby express our highest respect and gratitude to you for all the contributions you have made to human freedom, openness, and technological progress. Your spirit will always be worthy of our learning and following, and continue to promote the progress of technology and society.',
	'',
	'- CryptoBigs Team'
];

let i = 0;
let j = 0;
let k = 0;
let direction = 1;
function type() {
	if (i < text.length) {
		if (j < text[i].length) {
			document.getElementById('content').innerHTML += text[i].charAt(j);
			j++;
		} else {
			document.getElementById('content').innerHTML += '<br>';
			i++;
			j = 0;
		}
	} else {
		if (k >= text.length) {
			k = 0;
		}
		document.getElementById('content').innerHTML = '';
		i = 0;
		j = 0;
		direction = 1;
	}
	if (direction === 1) {
		setTimeout(type, speed);
	} else {
		setTimeout(backspace, speed);
	}
	// if (i == text.length && direction == 1) {
	// 	setTimeout(() => {
	// 		direction = 0;
	// 	}, 5000);
	// }
}

function backspace() {
	if (i >= 0) {
		if (j >= 0) {
			let str = document.getElementById('content').innerHTML;
			str = str.substring(0, str.length - 1);
			document.getElementById('content').innerHTML = str;
			j--;
		} else {
			document.getElementById('content').innerHTML += '<br>';
			i--;
			j = text[i].length;
		}
	} else {
		direction = 1;
		k++;
	}
	if (direction === 1) {
		setTimeout(type, speed);
	} else {
		setTimeout(backspace, speed);
	}
}

type();

function brighten(img) {
	img.style.filter = 'brightness(150%)';
}

function normalize(img) {
	img.style.filter = 'brightness(100%)';
}