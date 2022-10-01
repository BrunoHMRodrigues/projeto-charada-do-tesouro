const notificationResult = document.getElementById("notification-result");


function hideNotification () {
    notificationResult.style.visibility = "hidden";
}
hideNotification();

const description = document.getElementById("description");
const textDescription =  "\"Você se encontra de frente ao tesouro da grande esfinge. Para abrir a passagem e obter todo o seu ouro e riqueza tudo o que você precisa fazer é acertar a uma charada.\"";

description.innerText = textDescription;

const charade = document.getElementById("charade");
const arrayCharades = ["Eu falo, mas não tenho boca. Eu ouço, mas não tenho ouvidos. Não tenho corpo, mas vivo com o vento. Quem sou eu?", "Tenho apenas uma cor, mas posso ter vários tamanhos. Estou presente quando faz sol. Na chuva, jamais! Passo todo o tempo no chão, mas nunca fico sujo. Não faço mal algum e não posso sentir dor. Quem sou eu?", "Tenho quatro vezes a idade do meu filho. Dentro de 20 anos, terei exatamente o dobro da idade dele. Quantos anos eu tenho?", "Quanto mais houver de mim, menos você verá. Quem sou eu?", "Quando precisa de mim, você me atira para longe, até um lugar onde ninguém pode me ver. Mas quando já não precisa mais, você me traz de volta. Quem sou eu?", "Nós podemos machucar sem fazer um único movimento. Podemos envenenar sem tocar. Carregamos a verdade e a mentira. E não devemos ser julgadas pelo nosso tamanho Quem somos nós?", "O que é que morre ao ser chamado?"];
const arrayAnswers = ["eco", "sombra", "40", "escuridão", "âncora", "palavras", "silêncio"];
let saveRandom = null;
function getRandomCharade () {
    let random = Math.trunc((Math.random() * arrayCharades.length)); // pega um index aleatório
console.log(random);
    saveRandom = random;

charade.innerText = arrayCharades[random];
}
getRandomCharade();

const button = document.getElementById("button");
const inputAnswerBox = document.getElementById("input-container");

function inputAnswerInBox () {
    let answer = inputAnswerBox.value;
    let result = answer.toLowerCase();

    return result
}
inputAnswerBox.addEventListener("input", inputAnswerInBox);

function verifyAnswer(event) {
    let answer = inputAnswerInBox();
    let correctAnswer = arrayAnswers[saveRandom];
    let getNotificationText = document.getElementById("#notification");

    if (getNotificationText !== null) {
        getNotificationText.innerText = "";
    } else {

    }

    

    console.log("correct answer =" + correctAnswer);
    if (answer === correctAnswer) {               
        const container = document.getElementById("container");
        const notification = document.getElementById("notification")

        
        notification.innerText = "Parabéns!!!! Você acertou!!!";
        notificationResult.appendChild(notification);
        notificationResult.style.visibility = "";
        
    } else {
        const container = document.getElementById("container");
        const notification = document.getElementById("notification")

        notification.innerText = "Que pena, sua resposta está errada.";
        notificationResult.appendChild(notification);
        notificationResult.style.visibility = "";
    }
    

}
button.addEventListener("click", verifyAnswer);

const buttonNew = document.getElementById("button-new");

function newCharade() {
    const notification = document.getElementById("notification")

    notification.innerText = "";
    hideNotification();
    getRandomCharade();
}
buttonNew.addEventListener("click", newCharade)