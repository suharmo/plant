import {
    spanDanger, counterTemp
} from "./_functionalities.js";
import {
    plant
} from "./startgame.js";
import {
    actualTemp
} from "./_dom.js";


//---------------------------------------------------------------------
export function changeTemp(propertyMin, propertyMax, actualTemperature) {
    actualTemperature = Math.floor(Math.random() * (propertyMax - propertyMin + 1) + propertyMin);
    actualTemp.innerHTML = actualTemperature;
    return actualTemperature;
}

//--------------------------------------------------------------------------
export function increaseTempFun(actualTemperature) {
    actualTemperature += 1;
    actualTemp.innerHTML = actualTemperature;
    counterTemp.value = spanDanger(temp, actualTemperature, plant.idealMaxTemp, plant.idealMinTemp, counterTemp.value);
    console.log('la temperature actuelle est : ' + actualTemperature)


    return actualTemperature

}
export function decreaseTempFun(actualTemperature) {
    actualTemperature -= 1;
    actualTemp.innerHTML = actualTemperature;
    counterTemp.value = spanDanger(temp, actualTemperature, plant.idealMaxTemp, plant.idealMinTemp, counterTemp.value)
    console.log('la temperature actuelle est : ' + actualTemperature)

    return actualTemperature

}

//----------------------------------------------------------------
export function changeSeasonTemp(actualTemperature, propertyMin, propertyMax) {
    console.error ('actualTemperature = ' + actualTemperature);
    actualTemperature = changeTemp(propertyMin, propertyMax, actualTemperature)
    console.error ('actualTemperature = ' + actualTemperature);
    actualTemperature = increaseTempFun(actualTemperature);
    console.error ('actualTemperature = ' + actualTemperature);
    actualTemperature = decreaseTempFun(actualTemperature);
    console.error ('actualTemperature = ' + actualTemperature);
    return actualTemperature
}

// actualTemp cant be passed as parametre
//actualTemperature cant be passed as parametre