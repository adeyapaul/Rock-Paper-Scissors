document.addEventListener('DOMContentLoaded', () => {
    const player1Choices = document.querySelectorAll('#player1Choices .choice');
    const player2Choices = document.querySelectorAll('#player2Choices .choice');
    const submit1 = document.getElementById('submit1');
    const submit2 = document.getElementById('submit2');
    const resultText = document.getElementById('resultText');
    let player1Choice = '';
    let player2Choice = '';

    player1Choices.forEach(choice => {
        choice.addEventListener('click', () => {
            player1Choice = choice.id.replace('1', '');
            highlightChoice(choice, player1Choices);
        });
    });

    player2Choices.forEach(choice => {
        choice.addEventListener('click', () => {
            player2Choice = choice.id.replace('2', '');
            highlightChoice(choice, player2Choices);
        });
    });

    submit1.addEventListener('click', () => {
        if (player1Choice) {
            submit1.disabled = true;
            if (submit2.disabled) {
                displayResult();
            }
        }
    });

    submit2.addEventListener('click', () => {
        if (player2Choice) {
            submit2.disabled = true;
            if (submit1.disabled) {
                displayResult();
            }
        }
    });

    function highlightChoice(selectedChoice, choices) {
        choices.forEach(choice => {
            choice.classList.remove('selected');
        });
        selectedChoice.classList.add('selected');
    }

    function displayResult() {
        const result = determineWinner(player1Choice, player2Choice);
        resultText.textContent = `Player 1 chose ${player1Choice}, Player 2 chose ${player2Choice}. ${result}`;
        resetGame();
    }

    function determineWinner(player1, player2) {
        if (player1 === player2) {
            return "It's a tie!";
        } else if (
            (player1 === 'rock' && player2 === 'scissors') ||
            (player1 === 'paper' && player2 === 'rock') ||
            (player1 === 'scissors' && player2 === 'paper')
        ) {
            return 'Player 1 wins!';
        } else {
            return 'Player 2 wins!';
        }
    }

    function resetGame() {
        player1Choice = '';
        player2Choice = '';
        submit1.disabled = false;
        submit2.disabled = false;
        player1Choices.forEach(choice => choice.classList.remove('selected'));
        player2Choices.forEach(choice => choice.classList.remove('selected'));
    }
});
