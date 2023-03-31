const adviceID = document.getElementById('AdviceID');
const adviceText = document.getElementById('AdviceText');
const btnAdvice = document.getElementById('BtnAdvice');

async function getAdvice() {
	try {
		const response = await fetch('https://api.adviceslip.com/advice');
		const data = await response.json();

		adviceID.innerHTML = data.slip.id;
		adviceText.innerHTML = data.slip.advice;

		console.log(data);
	} catch (error) {
		console.log(error);
	}
}
getAdvice();

btnAdvice.addEventListener('click', getAdvice);