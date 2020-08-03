const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');



const answersArr = ['Tak!', 'Nie!', 'Może.', 'Ciężko powiedzieć...', 'Nie chcesz znać odpowiedzi na to pytanie... :/'];

const shakeBall = () => {
    ball.classList.add('shake-animaton');
    setTimeout(chceckInput, 1000);
}


const chceckInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = '';
        ball.classList.remove('shake-animaton');
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Pytanie musi być zakończone znakiem "?".';
        answer.textContent = '';
        ball.classList.remove('shake-animaton');
    } else {
        error.textContent = 'Musisz zadać jakies pytanie.';
        answer.textContent = '';
        ball.classList.remove('shake-animaton');
    }
}




const generateAnswer = () => {
    const number = Math.floor(Math.random() * 5);
    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
}

ball.addEventListener('click', shakeBall);