const colorBalls = document.querySelectorAll('.ball');
const colorGuess = document.querySelector('#rgb-color');
const answer = document.getElementById('answer');
const balls = document.querySelectorAll('.ball');

// Criando uma função para gerar uma cor Hexadecimal:

function gerarCorHexadecimal() {
  return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')}`;
}

// Criando uma função para alterar as cores das bolas e também mensagens de acerto ou erro, incrementando o placar em caso de acerto.

function resetGame() {
  colorBalls.forEach((item, index, colorBall) => {
    colorBall[index].style.backgroundColor = gerarCorHexadecimal();
  });
  colorGuess.innerHTML = colorBalls[Math.floor(Math.random() / 0.19)].style.backgroundColor;

  answer.innerHTML = 'Escolha uma cor';
  balls.forEach((item, index, bolas) => {
    const score = document.getElementById('score');
    const placar = parseInt(score.innerHTML);
    bolas[index].addEventListener('click', () => {
      if (bolas[index].style.backgroundColor === colorGuess.innerHTML) {
        answer.innerHTML = 'Acertou!';
        score.innerHTML = placar + 3;
      } else {
        answer.innerHTML = 'Errou! Tente novamente!';
      }
    });
  });
}

window.onload = () => {
  resetGame();
};

// Criando um botão para resetar o jogo/cores:

const buttonReset = document.getElementById('reset-game');
buttonReset.innerHTML = 'Resetar o jogo/cores';
buttonReset.addEventListener('click', resetGame);


/* function gerarCorHexadecimal criada com base em uma resposta do stackoverflow, conforme link abaixo:

https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript

Em uma linha, dá para fazer assim:

'#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');

Breve explicação da expressão acima:

A função Math.floor arredonda o número para baixo, de modo a remover a parte decimal do número gerado pela função Math.random.

O método Number.prototype.toString(16) converte o número em string em sua representação hexadecimal.

O método String.prototype.padStart(6, '0') garante que a string hexadecimal tenha sempre seis dígitos.
*/
