let escolhas = document.querySelectorAll('.escolha');
let escolhasAdversario = document.querySelectorAll('.escolha-adversario');

let boxEscolha = document.querySelector('.escolhas')
let boxAdversario = document.querySelector('.adversario')
let placar = document.querySelector('.placar')

let escolha;
let escolhaAleatoria;
let escolhaAdversario;

let pontuacao = 0;
let pontuacaoAdversario = 0;
let click = 'click'


async function jogo(escolha) {
    escolhaAleatoria = Math.floor(Math.random() * 3);

    for (let i = 0; i < 3; i++) {
        escolhas[i].classList.remove('fade')
        escolhas[i].classList.add('pointer-removido')

        escolhasAdversario[i].classList.remove('fade')
        escolhasAdversario[i].classList.add('pointer-removido')
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    boxEscolha.classList.add('elemento-escolha-encostado')
    boxAdversario.classList.add('elemento-adversario-encostado')

    for (let i = 0; i < 3; i++) {
        if (escolhas[i].textContent !== escolha) {
            escolhas[i].classList.add('elemento-removido')
        }

        if (i !== escolhaAleatoria) {
            escolhasAdversario[i].classList.add('elemento-removido')
        }
    }

    await new Promise(resolve => setTimeout(resolve, 500));

    for (let i = 0; i < 3; i++) {
        if (escolhas[i].textContent === escolha) {
            escolhas[i].classList.add('fade')
        }

        if (i === escolhaAleatoria) {
            escolhasAdversario[i].classList.add('fade')
            escolhaAdversario = escolhasAdversario[i].textContent
        }
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    if ((escolha === '✊' && escolhaAdversario === '✌️') || (escolha === '🤚' && escolhaAdversario === '✊') || (escolha === '✌️' && escolhaAdversario === '🤚')) {
        pontuacao++
        
    } else if ((escolhaAdversario === '✊' && escolha === '✌️') || (escolhaAdversario === '🤚' && escolha === '✊') || (escolhaAdversario === '✌️' && escolha === '🤚')) {
        pontuacaoAdversario++
    }

    placar.textContent = `${pontuacao} - ${pontuacaoAdversario}`;

    await new Promise(resolve => setTimeout(resolve, 1500));
    resetPositions();
}


async function resetPositions() {
    for (let i = 0; i < 3; i++) {
        escolhas[i].classList.remove('fade')
        escolhasAdversario[i].classList.remove('fade')
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    boxEscolha.classList.remove('elemento-escolha-encostado')
    boxAdversario.classList.remove('elemento-adversario-encostado')

    for (let i = 0; i < 3; i++) {
        if (escolhas[i].textContent !== escolha) {
            escolhas[i].classList.remove('elemento-removido')
        }

        if (i !== escolhaAleatoria) {
            escolhasAdversario[i].classList.remove('elemento-removido')
        }
    }

    await new Promise(resolve => setTimeout(resolve, 500));
    for (let i = 0; i < 3; i++) {
        escolhas[i].classList.add('fade')
        escolhas[i].classList.remove('pointer-removido')

        escolhasAdversario[i].classList.add('fade')
        escolhasAdversario[i].classList.remove('pointer-removido')
    }
    click = 'click'
}


for (let i = 0; i < 3; i++) {
    escolhas[i].addEventListener('click', () => {
        if (click === 'click') {
            if (escolhas[i].textContent === '✊') {
                escolha = '✊';

            } else if (escolhas[i].textContent === '🤚') {
                escolha = '🤚';

            } else {
                escolha = '✌️';
            }
            click = '!click';
            jogo(escolha);
        }
    });
}