const adviceId = document.querySelector('#advice-id');
const adviceText = document.querySelector('#advice-text');
const button = document.querySelector('#btn');

const url = 'https://api.adviceslip.com/advice';
function getFetch() {
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.slip);
			adviceId.textContent = `ADVICE #${data.slip.id}`;
			adviceText.textContent = `“${data.slip.advice}”`;
		})
		.catch((err) => console.log(`Error: ${err}`));
}

getFetch();
button.addEventListener('click', getFetch);
