window.onload = () => {
  for (let i = 0; i < 6; i += 1) {
    const body = document.querySelector('#body');
    const balls = document.createElement('div');
    body.appendChild(balls);
    balls.className = 'ball';
  }

  function gerarCorHexadecimal() {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0')}`;
  }

  const bolas = document.querySelectorAll('.ball');
  bolas[0].style.backgroundColor = gerarCorHexadecimal();
  bolas[1].style.backgroundColor = gerarCorHexadecimal();
  bolas[2].style.backgroundColor = gerarCorHexadecimal();
  bolas[3].style.backgroundColor = gerarCorHexadecimal();
  bolas[4].style.backgroundColor = gerarCorHexadecimal();
  bolas[5].style.backgroundColor = gerarCorHexadecimal();
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
