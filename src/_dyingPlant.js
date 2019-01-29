import { dead } from "./_dom.js";

// import { plant } from "./startgame.js";
// import { counterWater, counterTemp } from "./_functionalities.js";

//checkplantlife moved to _functionalities cause the counters used for the timeout are signed as constant variables that i impossible to change their values ; 
//counters are supposed to be here and the checklife fun as well;
//check all parametres of all functions cause most of them dont work if assigned as parametres instead of original name variables

export function dyingPlant(property, propertyMin, propertyMax, count, pause) {
    console.log(`${propertyMin} < ${property} < ${propertyMax}`)

    console.log('in fun');
    if (property < propertyMin || property > propertyMax) {
        count += 1;
        console.log(count);
        if (count == 5 && (property < propertyMin || property > propertyMax)) {
            count = 0
            pause = true
            dead.setAttribute('style', 'display : block!important')
        }
    }
    return count;
}
//-----------------------------------------------------------------------------------------------------------

