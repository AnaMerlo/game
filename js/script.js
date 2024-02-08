
const buttonElem = document.getElementById("check");
const changedTitle = document.getElementById("title");
const mjs = document.querySelector(".message");
const again = document.querySelector(".again");
const max = document.querySelector(".highscore");
const puntaje = document.querySelector(".score");
const num = document.querySelector(".number");
const heartContainer = document.getElementById("heartContainer");



changedTitle.textContent = "JUEGO DE ADIVINAR";

const random = () =>{
    return Math.floor(Math.random() * 20) + 1;
}

var randomNumber = random(); 
var maxIntentos = 5; 
max.textContent = maxIntentos;
var numIntentos = 0;

again.addEventListener("click", () => {
    document.querySelector(".guess").value = ""; 
    mjs.textContent = "Adivina ...";
    if(again.textContent === "volver a jugar"){
        window.location.reload();
    }
})

buttonElem.addEventListener("click", () => {
    var ingreso = parseInt(document.querySelector(".guess").value);
    
    if(ingreso === randomNumber){
        mjs.textContent = "🎉 Es el número!";
        buttonElem.textContent = "OFF";
        again.textContent = "volver a jugar";
        num.textContent = randomNumber;
    }else if(ingreso < randomNumber || ingreso > randomNumber){
        numIntentos++;
        let intentosRestantes = maxIntentos - numIntentos;
        
        if(intentosRestantes > 0){
            mjs.textContent = ingreso < randomNumber ? "📉 Muy bajo!" : "📈 Muy Alto!";
            max.textContent = intentosRestantes;
            puntaje.textContent = Math.max(0, 10 - numIntentos * 2);
        }else {
            mjs.textContent = "❌ Has excedido el número máximo de intentos!";
            buttonElem.textContent = "OFF";
            
        }
        
    }else if(ingreso <= 0){
        mjs.textContent = "⛔️ ¡Ingrese un número válido!";
        numIntentos++;
    }
    
})
//animacion de fonde con corazones en movimiento

let heartCount = 30;

for (let index = 1; index < heartCount; index++) {
    const img = document.createElement("img");

    img.src = "./img/heart.png";
    img.classList.add("heart-img");
    img.style.left = `${Math.random() * 100}vw`; 
    img.style.animationDuration = `${Math.random() * 5 + 5}s`;
    heartContainer.appendChild(img);
    
}






