window.onload = () => {
  for (let i = 0; i < 6; i += 1) {
    const body = document.querySelector('#body');
    const balls = document.createElement('div');
    body.appendChild(balls);
    balls.className = 'ball';
  }

  function colorGuess() {
    function gerarCorHexadecimal() {
      return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')}`;
    }

    function colorir(item, index, colorBalls) {
      colorBalls[index].style.backgroundColor = gerarCorHexadecimal();
    }
    const colorBalls = document.querySelectorAll('.ball');
    colorBalls.forEach(colorir);

    const colorGuess = document.querySelector('#rgb-color');
    colorGuess.innerHTML = colorBalls[Math.floor(Math.random() / 0.19)].style.backgroundColor;

    const body = document.querySelector('#body');
    const answer = document.createElement('div');
    body.appendChild(answer);
    answer.id = 'answer';

    const resposta = document.getElementById('answer');
    resposta.innerHTML = 'Escolha uma cor';

    function selected(item, index, bolas) {
      bolas[index].addEventListener('click', () => {
        if (bolas[index].style.backgroundColor === colorGuess.innerHTML) {
          resposta.innerHTML = 'Acertou!';
        } else {
          resposta.innerHTML = 'Errou! Tente novamente!';
        }
      });
    }

    const bolas = document.querySelectorAll('.ball');
    bolas.forEach(selected);
  }
  colorGuess();

  const buttonReset = document.getElementById('reset-game');
  buttonReset.innerHTML = 'Resetar o jogo/cores';
  buttonReset.addEventListener('click', colorGuess);
};

/* function gerarCorHexadecimal criada com base em uma resposta do stackoverflow, conforme link abaixo:

https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript

Em uma linha, dá para fazer assim:

'#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');

Breve explicação da expressão acima:

A função Math.floor arredonda o número para baixo, de modo a remover a parte decimal do número gerado pela função Math.random.

O método Number.prototype.toString(16) converte o número em string em sua representação hexadecimal.

O método String.prototype.padStart(6, '0') garante que a string hexadecimal tenha sempre seis dígitos.
*/
