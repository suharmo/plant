import {
    changeSeasonStyle
} from "./_weather.js";
import {
    changeSeasonTemp,
    increaseTempFun,
    decreaseTempFun,
} from "./_temperature.js";
import {
    seasons,
    Plant,
    questionsObj,
    pause
} from "./_objects.js";
import {
    checkLifePlant, enterKey
} from "./_functionalities.js";
import {
    actualWater,
    addWaterBtn,
    piantaImg,
    infosDiv,
    body,
    increaseTemp,
    decreaseTemp,
    seasonHeading,
    actualTemp,
    startBtn,
    pianta,
    dropQuestion,
    questionDiv,
    questHead,
    answersHead1,
    answersHead2,
    confirm,
    inputQuestion,
    moneyAvailable,
    okv,
    okw,
    dead,
    okd,
    pauseGame,
    pauseDiv,
    okTime,
    nextQ,
} from "./_dom.js";
import {
    addMoneyFun,
    confirmAnswer,
    okVery,
    okWrong,
    countQ,
    timeUp,
    okTimeup,
    clearUp,
    next,
} from "./_questions.js";

//----------------------------------------------------------------------------------------------------------
export const plant = new Plant('armoniosa', 0, 45, 10, 40, 10, 25, 0)

let addWaterl = () => {
    if (questionsObj.score > 0) {
        plant.water += 2
        actualWater.innerHTML = plant.water;
        moneyAvailable.innerHTML = questionsObj.score -= 1
    }
}
increaseTemp.addEventListener('click', () => {
    seasons.actualTemperature = increaseTempFun(seasons.actualTemperature)
});
decreaseTemp.addEventListener('click', () => {
    seasons.actualTemperature = decreaseTempFun(seasons.actualTemperature)
})
addWaterBtn.addEventListener('click', addWaterl);
let y = 0

changeSeasonStyle(seasons.seasonName[0], seasons.font[0], seasons.colorText[0], seasons.bgImage[0], seasonHeading, body, infosDiv)

const startGame = (seasonsTab, pathsImg) => {
    // initGame 
    pianta.setAttribute('style', 'display : block!important')
    let parent = startBtn.parentElement
    parent.setAttribute('style', 'display : none!important')

    seasons.actualTemperature = changeSeasonTemp(seasons.actualTemperature, seasons.minTemperature[y], seasons.maxTemperature[y])

    console.log(seasons.actualTemperature);
    console.log(seasons.actualTemperature);
    
    //  (init plante)
    setInterval(() => {
        
        y += 1
        if (y == seasonsTab.length) {
            y = 0;
        }
        changeSeasonStyle(seasons.seasonName[y], seasons.font[y], seasons.colorText[y], seasons.bgImage[y], seasonHeading, body, infosDiv)
        if (pause.value == true)
            return;
    }, 60000);
    setInterval(() => {
        if (pause.value == true)
            return;
        seasons.actualTemperature = changeSeasonTemp(seasons.actualTemperature, seasons.minTemperature[y], seasons.maxTemperature[y])
        console.log(y)
        
    }, 15000)

    setInterval(() => {
        if (pause.value == true)
            return;
        checkLifePlant();
    }, 1000)

    for (let i in pathsImg) {
        addP1(pathsImg[i], 20000 * (i - 0 + 1), piantaImg);
        if (pause.value == true)
            return;
    }
    plant.waterDecrease(actualWater, pause);
}
//-------------------------------------------------------------------------------------------------------------------

function addP1(pathImage, timeout, pianta) {
    console.log(timeout);
    setTimeout(() => {
        pianta.setAttribute('src', pathImage)
    }, timeout)
}
const paths = ['/image/pianta1.png', '/image/pianta2.png', '/image/pianta3.png', '/image/pianta4.png', '/image/pianta5.png', '/image/pianta6.png', '/image/pianta7.png', '/image/pianta8.png', '/image/pianta9.png', '/image/fiore1.png', '/image/fiore2.png', '/image/fiore3.png', '/image/fiore4.png', '/image/fiore5.png', '/image/fiore6.png', '/image/fiore7.png', '/image/fiore8.png']
//----------------------------------------------------------------------------------------------------------------
startBtn.addEventListener('click', () => {
    startGame(seasons.seasonName, paths)
    
})
dropQuestion.addEventListener('click', () => {
    questionDiv.setAttribute('style', 'display : block!important');
    pause.value = addMoneyFun(questHead, answersHead1, answersHead2, questionsObj.questions, questionsObj.answers, questionsObj.answers, pause.value);
    clearUp =  timeUp()
})
idealTemp.innerHTML = '\n' + plant.idealMinTemp + '° and ' + plant.idealMaxTemp + '°'
confirm.addEventListener('click', () => {
   confirmAnswer(inputQuestion,  questionsObj.questions)
})
okv.addEventListener('click', () => {
    okVery()
    pause.value = false;
})
okw.addEventListener('click', () => {
    okWrong()
    pause.value = false;
})
okTime.addEventListener('click', () => {
    okTimeup()
    pause.value = false;
})

document.addEventListener('keypress', enterKey)
pauseGame.addEventListener('click', () => {
    if (pause.value == false){
        pause.value = true;
        pauseGame.innerHTML = '<i class="fas fa-play"></i>'
        pauseDiv.setAttribute('style', 'display : block!important')
    }else{
        pause.value = false;
        pauseGame.innerHTML = '<i class="fas fa-pause"></i>'
        pauseDiv.setAttribute('style', 'display : none!important')
    }
    console.log(pause.value);
})
nextQ.addEventListener('click', ()=>{
   next(questionsObj.questions)
   pause.value = addMoneyFun(questHead, answersHead1, answersHead2, questionsObj.questions, questionsObj.answers, questionsObj.answers, pause.value);
})
//-----------------------------------------------------------
//parametre for actualTemp and seasons.actualTemperaturex does not work if passed in function as parametre
// check again the checklife fun from, _dyingplant that has been moved to _functionalities.
//counter for tempererture is not working as it should