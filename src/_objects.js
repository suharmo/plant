import { spanDanger, counterWater } from "./_functionalities.js";
import { waterHeading, questionDiv, inputQuestion, moneyAvailable } from "./_dom.js";
import { plant } from "./startgame.js";

export let seasons = {
    seasonName : ['Autumn', 'Winter', 'Spring', 'Summer'],
    minTemperature : [10, -10, 10, 25],
    maxTemperature : [25, 10, 30, 50],
    actualTemperature: 0,
    colorText : [' rgb(241, 43, 43)','lightblue','green', 'yellow'],
    font : [ "'Lobster Two', cursive","'Righteous', cursive","'Merienda', cursive","'Permanent Marker', cursive"],
    bgImage : ['/image/autumnGif.gif','/image/winterGif.gif','/image/springGif.gif', '/image/summerGif.gif'],
    changeFont(font, color, bgImg, headTag, bodyTag, infoDiv) {
        headTag.setAttribute('style', `font-family: ${font}; color: ${color};`);
        bodyTag.setAttribute('style', `background: url(${bgImg}); background-size: cover; height: 100vh`);
        infoDiv.setAttribute('style', `color: ${color}; font-family: ${font}`)
    }
}
// class to creates plants
export class Plant {
    constructor(name, actualHeigth, maxHeight, minWater, maxWater, idealMinTemp, idealMaxTemp, water) {
        this.name = name;
        this.actualHeigth = actualHeigth;
        this.maxHeight = maxHeight;
        this.minWater = minWater;
        this.maxWater = maxWater;
        this.idealMinTemp = idealMinTemp;
        this.idealMaxTemp = idealMaxTemp;
        this.water = water;
    }
    waterDecrease(spanWater, pause) {
        spanWater.innerHTML = this.water;
        setInterval(() => {
            if (pause)
                return;
            if (this.water > 0) {
                this.water -= 2;
            }
            spanWater.innerHTML = this.water;

        }, 7000)
        setInterval(() => {
            if (pause)
                return;
            counterWater.container = spanDanger(waterHeading, plant.water, plant.maxWater, plant.minWater, counterWater.container)
        }, 200)
    };
     
}

export let questionsObj  = {
     questions : [['Quelles valeurs puis-je attribué aux propriétés d\'un objet?', 'd'], ['Quelle est la meilleur façon d\'écrire une class?', 'a']],
     answers : [['a)Array             b) Function ', 'c) Object           d) Tout les reponse'],['a)class Personnage {constructor(x){this.x = x;}}     b) class personnage {constructor(x){ this.x = x;}}', 'c) Class Personnage {constructor(x){ x : x; } } d) Class Personnage {constructor(x){ x = x;}}']],
     score : 0,
     addMoney(){
        this.score+=5
        moneyAvailable.innerHTML = this.score
        return this.score
     }
}

//everything works fine
