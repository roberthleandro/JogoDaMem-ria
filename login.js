let button = document.querySelector("button");
let testando = document.querySelector("p")
button.addEventListener('click', function(){
    let nome = document.querySelector("input").value;
    if(nome !=''){
    localStorage.setItem('username', nome);
    const username = localStorage.getItem('username');
    window.location.href='jogo.html'}
})
 