let pianta = document.getElementsByTagName('img')[0];
let seasonHead = document.getElementById('season');
let actualTemp = document.getElementById('actualTemp');
let idealTemp = document.getElementById('idealTemp');
let actualWater = document.getElementById('waterPlant');
let idealWater = document.getElementById('idealWater');
let increaseTemp = document.getElementById('increaseTemp');
let decreaseTemp = document.getElementById('decreaseTemp')
let bodyd = document.getElementsByTagName('body')[0];
let infos = document.getElementsByClassName('infos')[0];
let addWaterBtn = document.getElementById('addWater')

function addP1(pathImage, timeout) {
    console.log(timeout);
    setTimeout(() => {
        pianta.setAttribute('src', pathImage)
    }, timeout)
}

const paths = ['/image/pianta1.png', '/image/pianta2.png', '/image/pianta3.png', '/image/pianta4.png', '/image/pianta5.png', '/image/pianta6.png', '/image/pianta7.png', '/image/pianta8.png', '/image/pianta9.png', '/image/fiore1.png', '/image/fiore2.png', '/image/fiore3.png', '/image/fiore4.png', '/image/fiore5.png', '/image/fiore6.png', '/image/fiore7.png', '/image/fiore8.png']
for (i in paths) {
    addP1(paths[i], 20000 * (i - 0 + 1))
}

class Plant {
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
    waterDecrease() {
        actualWater.innerHTML = this.water;
        setInterval(() => {
            this.water -= 2;
            actualWater.innerHTML = this.water;
            // if(this.water > plant.maxWater || this.water > plant.minWater){
            //     actualWater.setAttribute('style', 'background-color: red!important; color: black')
            // }else if(this.water <= plant.maxWater - 4 && this.water >= plant.minWater + 4){
            //     actualWater.setAttribute('style', 'background-color: green!important; color: black')
            // }else if(this.water <= plant.maxWater + 4 && this.water >= plant.minWater - 4){
            //     actualWater.setAttribute('style', 'background-color: yellow!important; color: black')
            // }
        }, 7000)
    };
    addWater(plant) {
        this.water += 2
        actualWater.innerHTML = this.water;
        plant.waterDecrease()
        if(this.water > plant.maxWater || this.water < plant.minWater){
            actualWater.setAttribute('style', 'background-color: red!important; color: black')
        }else if(this.water < plant.maxWater - 3 && this.water > plant.minWater + 3){
            actualWater.setAttribute('style', 'background-color: green!important; color: black')
        }else if(this.water < plant.maxWater + 3 && this.water > plant.minWater - 3){
            actualWater.setAttribute('style', 'background-color: yellow!important; color: black')
        }
    }
}



class Season {
    constructor(name, minTemperature, maxTemperature, font, color, bgColor) {
        this.name = name;
        this.minTemperature = minTemperature;
        this.maxTemperature = maxTemperature;
        this.font = font;
        this.color = color;
        this.bgColor = bgColor

    };
    changeFont(font, color, bgColor) {
        seasonHead.setAttribute('style', `font-family: ${font}; color: ${color};`);
        bodyd.setAttribute('style', `background: url(${bgColor}); background-size: cover; height: 100vh`);
        infos.setAttribute('style', `color: ${color}; font-family: ${font}`)
    }
}

const autumn = new Season('Autumn', 10, 25, "'Lobster Two', cursive", ' rgb(241, 43, 43)','/image/autumnGif.gif' );
const winter = new Season('Winter', -10, 10, "'Righteous', cursive", 'lightblue', '/image/winterGif.gif')
const spring = new Season('Spring', 10, 30, "'Merienda', cursive", 'green', '/image/springGif.gif')
const summer = new Season('Summer', 25, 50, "'Permanent Marker', cursive", 'yellow','/image/summerGif.gif')
const seasons = [autumn, winter, spring, summer]
const plant = new Plant('armoniosa', 0, 45, 10, 40, 10, 25, 0)

let actualTemperature;

function changeTemp(season, actualTemp) {
    actualTemperaturex = Math.floor(Math.random() * (season.maxTemperature - season.minTemperature + 1) + season.minTemperature);
    actualTemp.innerHTML = actualTemperaturex
}

let y = 0;
let temperature;

function changeSeason(seasons) {
    changeTemp(seasons[y], actualTemp)
    setInterval(() => {
        changeTemp(seasons[y], actualTemp)
        increaseTempFun();
        decreaseTempFun();
        plant.waterDecrease()

        
    }, 15000)

}
const water = {
    container: plant.water,
    
}
function changeNme(seasons) {
    seasonHead.innerHTML = seasons[y].name;
    seasons[y].changeFont(seasons[y].font, seasons[y].color, seasons[y].bgColor )
    setInterval(() => {
        y += 1
        if (y >= seasons.length) {
            y = 0
        };
        seasonHead.innerHTML = seasons[y].name;
        seasons[y].changeFont(seasons[y].font, seasons[y].color, seasons[y].bgColor)
    }, 60000);
}

function increaseTempFun() {
    actualTemp.innerHTML = actualTemperaturex += 1;
    if(actualTemperaturex > plant.idealMaxTemp || actualTemperaturex < plant.idealMinTemp){
        actualTemp.setAttribute('style', 'background-color: red!important; color: black')
    }else if(actualTemperaturex < plant.idealMaxTemp - 3 && actualTemperaturex > plant.idealMinTemp + 3){
        actualTemp.setAttribute('style', 'background-color: green!important; color: black')
    }else if(actualTemperaturex < plant.idealMaxTemp + 3 && actualTemperaturex > plant.idealMinTemp - 3){
        actualTemp.setAttribute('style', 'background-color: yellow!important; color: black')
    }
}

function decreaseTempFun() {
    actualTemp.innerHTML = actualTemperaturex -= 1
    if(actualTemperaturex > plant.idealMaxTemp){
        actualTemp.setAttribute('style', 'background-color: red!important; color: black')
    }else if(actualTemperaturex < plant.idealMaxTemp - 3 && actualTemperaturex > plant.idealMinTemp + 3){
        actualTemp.setAttribute('style', 'background-color: green!important; color: black')
    }else if(actualTemperaturex < plant.idealMaxTemp + 3 && actualTemperaturex > plant.idealMinTemp - 3){
        actualTemp.setAttribute('style', 'background-color: yellow!important; color: black')
    }
}

changeNme(seasons)
changeSeason(seasons)
idealTemp.innerHTML = '\n'+ plant.idealMinTemp + '° and ' + plant.idealMaxTemp + '°'