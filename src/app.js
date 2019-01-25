let pianta = document.getElementsByTagName('img')[0];
let seasonHead = document.getElementById('season');
let actualTemp = document.getElementById('actualTemp');
let idealTemp = document.getElementById('idealTemp');
let actualWater = document.getElementById('waterPlant');
let idealWater = document.getElementById('idealWater');
let increaseTemp = document.getElementById('increaseTemp');
let decreaseTemp = document.getElementById('decreaseTemp')


function addP1(pathImage, timeout) {
    console.log(timeout);
    setTimeout(() => {
        pianta.setAttribute('src', pathImage)
    }, timeout)
}
const paths = ['/image/pianta1.png', '/image/pianta2.png', '/image/pianta3.png', '/image/pianta4.png', '/image/pianta5.png', '/image/pianta6.png', '/image/pianta7.png', '/image/pianta8.png', '/image/pianta9.png', '/image/fiore1.png', '/image/fiore2.png', '/image/fiore3.png', '/image/fiore4.png', '/image/fiore5.png', '/image/fiore6.png', '/image/fiore7.png', '/image/fiore8.png']
for (i in paths) {
    addP1(paths[i], 4000 * (i - 0 + 1))
}
class Plant {
    constructor(name, maxHeight, minWater, maxWater, idealTemp, water) {
        this.name = name;
        this.maxHeight = maxHeight;
        this.minWater = minWater;
        this.maxWater = maxWater;
        this.idealTemp = idealTemp;
        this.water = water;
    }
    waterDecrease() {
        actualWater.innerHTML = this.water;
        setInterval(() => {
            this.water -= 4;
            actualWater.innerHTML = this.water;
        }, 10000)


    }
}
const water = {
    container: 0,
    addWater() {
        this.container += 2
    }
}

class Season {
    constructor(name, minTemperature, maxTemperature, font, color) {
        this.name = name;
        this.minTemperature = minTemperature;
        this.maxTemperature = maxTemperature;
        this.font = font;
        this.color = color

    };
    changeFont(font, color) {
        seasonHead.setAttribute('style', `font-family: ${font}, color: ${color}`)
    }
}
const autumn = new Season('Autumn', 10, 25, "'Lobster Two', cursive", 'brown');
const winter = new Season('Winter', -10, 10, "'Righteous', cursive", 'lightblue')
const spring = new Season('Spring', 10, 25, "'Merienda', cursive", 'green')
const summer = new Season('Summer', 25, 50, "'Permanent Marker', cursive", 'yellow')
const seasons = [autumn, winter, spring, summer]
const plant = new Plant('armoniosa', 45, 10, 25, 17, 60)
plant.waterDecrease()

let actualTemperature;

function changeTemp(season, actualTemp) {
    actualTemperaturex = Math.floor(Math.random() * (season.maxTemperature - season.minTemperature + 1) + season.minTemperature);
    actualTemp.innerHTML = actualTemperaturex
   
}


let y = 0;

let temperature;

function changeSeason(seasons) {
    setInterval(() => {
            changeTemp(seasons[y], actualTemp)
            increaseTempFun();
            decreaseTempFun();
    }, 4000)
}

function changeNme(seasons) {
    seasonHead.innerHTML = seasons[y].name;
    setInterval(() => {
        y += 1
        if (y >= seasons.length) {
            y = 0
        };
        seasonHead.innerHTML = seasons[y].name;
    }, 16000);
}
function increaseTempFun() {
    actualTemp.innerHTML = actualTemperaturex  += 4
}

function decreaseTempFun() {
    actualTemp.innerHTML = actualTemperaturex -= 4
}
changeNme(seasons)
changeSeason(seasons)