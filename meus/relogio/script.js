const body = document.querySelector("body");
const button = document.querySelector(".mode-switch");

const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");


// Relógio funcionando
function clock(){

    let date = new Date();


    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();


    let secondDeg = seconds * 6;

    let minuteDeg = minutes * 6 + seconds / 10;

    let hourDeg = hours * 30 + minutes / 2;



    secondHand.style.transform = `rotate(${secondDeg}deg)`;


    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;


    hourHand.style.transform = `rotate(${hourDeg}deg)`;

}


setInterval(clock,1000);

clock();



// Mudar tema
button.addEventListener("click",()=>{

    body.classList.toggle("dark");


    if(body.classList.contains("dark")){

        button.textContent = "☀️ Modo Claro";

    }else{

        button.textContent = "🌙 Modo Escuro";
    }
});