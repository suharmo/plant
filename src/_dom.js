let piantaImg = document.getElementsByTagName('img')[0];
let seasonHeading = document.getElementById('season');
let actualTemp = document.getElementById('actualTemp');
let idealTemp = document.getElementById('idealTemp');
let actualWater = document.getElementById('waterPlant');
let idealWater = document.getElementById('idealWater');
let increaseTemp = document.getElementById('increaseTemp');
let decreaseTemp = document.getElementById('decreaseTemp')
let body = document.getElementsByTagName('body')[0];
let infosDiv = document.getElementsByClassName('infos')[0];
let addWaterBtn = document.getElementById('addWater');
let tempDiv = document.getElementById('temp');
let waterHeading = document.getElementById('water');
let startBtn = document.getElementById('startGame');
let moneyAvailable = document.getElementById('moneyAvailable');
let dropQuestion = document.getElementById('dropQuestion');
let pianta = document.getElementsByClassName('pianta')[0]
let questionDiv = document.getElementsByClassName('questionDiv')[0];
let inputQuestion = document.getElementById('inputQuestion');
let questHead = document.getElementById('quest');
let answersHead1 = document.getElementById('answers12');
let answersHead2 = document.getElementById('answers34');
let nextQ = document.getElementById('next');
let confirm = document.getElementById('confirm');
let verified = document.getElementById('verified');
let wrong = document.getElementById('wrong');
let okv =document.getElementsByClassName('ok')[0];
let okw =document.getElementsByClassName('ok')[1];
let dead = document.getElementById('dead');
let okd = document.getElementsByClassName('ok')[2];
let pauseGame = document.getElementById('pauseGame');
let pauseDiv = document.getElementById('pauseDiv');
let counterDiv = document.getElementById('counterDiv');
let counterQuest = document.getElementById('counterQuest');
let time = document.getElementById('timeUp');
let okTime = document.getElementsByClassName('okTime')[0]
export {
    piantaImg,
    seasonHeading,
    actualTemp,
    idealTemp,
    actualWater,
    idealWater,
    increaseTemp,
    decreaseTemp,
    body,
    infosDiv,
    addWaterBtn,
    tempDiv,
    waterHeading,
    startBtn,
    moneyAvailable,
    dropQuestion,
    pianta,
    questionDiv,
    inputQuestion,
    questHead,
    answersHead1,
    answersHead2,
    nextQ,
    confirm,
    verified,
    wrong,
    okv,
    okw,
    dead, 
    okd,
    pauseGame,
    pauseDiv,
    counterDiv,
    counterQuest,
    time,
    okTime

}

//everything works fine