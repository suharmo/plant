import {
    dyingPlant
} from "./_dyingPlant.js";
import {
    plant
} from "./startgame.js";
import {
    seasons,
    questionsObj
} from "./_objects.js";
import {
    okWrong,
    okVery,
    confirmAnswer,
    okTimeup
} from "./_questions.js";
import {
    inputQuestion,
    okw,
    okv,
    okTime
} from "./_dom.js";

export let counterTemp = {
    value: 0
};
export let counterWater = {
    container: 0
};


export function checkLifePlant() {
    counterWater.container = dyingPlant(plant.water, plant.minWater, plant.maxWater, counterWater.container);
    counterTemp.value = dyingPlant(seasons.actualTemperature, plant.idealMinTemp, plant.idealMaxTemp, counterTemp.value);
}
//fucntion to change bg color of span based on the temperature or water level 
export function spanDanger(span, propriety, proprietyMax, proprietyMin, count) {
    if (propriety > proprietyMax || propriety < proprietyMin) {
        span.setAttribute('style', 'background-color: red!important; color: black')
    } else if (propriety < proprietyMax - 3 && propriety > proprietyMin + 3) {
        span.setAttribute('style', 'background-color: green!important; color: black')
        count = 0;
    } else if (propriety < proprietyMax + 3 && propriety > proprietyMin - 3) {
        span.setAttribute('style', 'background-color: yellow!important; color: black')
        count = 0;
    }
    return count;

}

export function enterKey(e) {
    if (e.keyCode === 13) {
        let parentv = okv.parentElement;
        let parentw = okw.parentElement;
        let parentt = okTime.parentElement;
        if (parentv.style.display == 'block') {
            okVery();
        } else if (parentw.style.display == 'block') {
            okWrong();
        } else if(parentt.style.display == 'block'){
           okTimeup()
        }else{
            confirmAnswer(inputQuestion, questionsObj.questions)
        }
    }
}

//function and variables of counters have to move back to _dyingPlant.js