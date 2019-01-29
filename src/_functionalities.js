import { dyingPlant } from "./_dyingPlant.js";
import { plant } from "./startgame.js";
import { seasons } from "./_objects.js";

export let counterTemp = {value: 0};
export let counterWater = {container: 0};
export let pause = false;

export function checkLifePlant() {
    counterWater.container = dyingPlant(plant.water, plant.minWater, plant.maxWater, counterWater.container, pause);
    counterTemp.value = dyingPlant(seasons.actualTemperature, plant.idealMinTemp, plant.idealMaxTemp, counterTemp.value, pause);
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

//function and variables of counters have to move back to _dyingPlant.js