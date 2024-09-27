let divs = document.querySelectorAll('.frente')
let id = null;
let p = document.getElementById("record")
p.innerText = Number(localStorage.getItem('record'))
p.style.fontSize = 'clamp(15px, 4vw, 35px)'
divs.forEach(div =>{
    div.addEventListener('click', function(){
        this.style.background = 'rgba(0, 0, 0, 0)'
        this.style.boxShadow = '0px 0px 0px black'
            if(id === null){
                id = div.id;
                salvar = this
                if (!interval) {
                    interval = setInterval(atualizarCronometro, 1000);
                }
            }
            else {
                if(id !== div.id) {
                    setTimeout(() => {
                        divs.forEach(d => {
                            this.style.background = 'grey';
                            salvar.style.background = 'grey';
                            this.style.boxShadow = '5px 5px 5px rgb(48, 48, 48)';
                            salvar.style.boxShadow = '5px 5px 5px rgb(48, 48, 48)';

                        });
                    }, 250);     
                }
                id = null
                const allTransparent = Array.from(divs).every(div => {
                    return window.getComputedStyle(div).backgroundColor === 'rgba(0, 0, 0, 0)';
                });
                if (allTransparent) {
                    let recorde = segundos
                    var record = Number(localStorage.getItem('record'))
                    
                    if(record == 0){
                        recorde = segundos
                        localStorage.setItem('record', recorde)
                        record = Number(localStorage.getItem('record'))
                    }
                    else if(record >= recorde){
                        recorde = segundos
                        localStorage.setItem('record', recorde)
                        record = Number(localStorage.getItem('record'))
                    }
                    const username = localStorage.getItem('username');
                    setTimeout(() => {
                        alert(`Parabéns ${username}, você ganhou!, Seu Tempo Foi ${cronometro.textContent}`);
                        
                    }, 10 );
                    setTimeout(function() {
                        window.location.reload();
                    }, 15);
                }
            } 
    })
});

function embaralhar() {
    const container = document.querySelector('section');
    const itens = Array.from(container.children);
    for (let i = itens.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        container.appendChild(itens[j]);
    }
}
document.addEventListener('DOMContentLoaded', embaralhar);

let horas = 0;
let minutos = 0;
let segundos = 0;
let interval;

const cronometro = document.getElementById('cronometro');

function atualizarCronometro() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }

    cronometro.textContent = 
        (horas < 10 ? '0' + horas : horas) + ':' +
        (minutos < 10 ? '0' + minutos : minutos) + ':' +
        (segundos < 10 ? '0' + segundos : segundos);
}
