import {
    questionsObj,
    pause,
    done
} from "./_objects.js";
import {
    questionDiv,
    verified,
    okv,
    wrong,
    okw,
    inputQuestion,
    counterDiv,
    counterQuest,
    okTime,
    time,
} from "./_dom.js";
export let countQ = 0;
export function addMoneyFun(headingQ, headingA1, headingA2, question, answers1, answers2, pause) {
    console.log(question[countQ][0])
    console.log(question.length)
    headingQ.innerHTML = question[countQ][0];
    headingA1.innerHTML = answers1[countQ][0];
    headingA2.innerHTML = answers2[countQ][1];
    done.value = false;
    pause = true;
    return pause;
}

export function confirmAnswer(input, question) {
    counterDiv.setAttribute('style', 'display: none!important');
    count = clear(clearUp)
    done.value = true;
    let valueInput = input.value
    if (valueInput == questionsObj.questions[countQ][1]) {
        questionDiv.setAttribute('style', 'display : none!important')
        questionDiv.setAttribute('style', 'display: none!important')
        counterDiv.setAttribute('style', 'display: none!important');
        verified.setAttribute('style', 'display: block!important')
        questionsObj.addMoney(valueInput)
    } else if (valueInput != questionsObj.questions[countQ][1]) {


        questionDiv.setAttribute('style', 'display: none!important')
        wrong.setAttribute('style', 'display: block!important')
    }
    countQ++;
    if (countQ == question.length) {
        countQ = 0;
    }
}

export function okVery() {
   let parent = okv.parentElement;
    parent.setAttribute('style', 'display: none!important');
    counterDiv.setAttribute('style', 'display: none!important');
    inputQuestion.value = ""
    pause.value = false;
    return count;

}
export function okWrong() {
    let parent = okw.parentElement;
    parent.setAttribute('style', 'display: none!important');
    counterDiv.setAttribute('style', 'display: none!important');
    inputQuestion.value = ""
    pause.value = false;
    return count;
}
export let clearUp;
export function okTimeup() {
    let parent = okTime.parentElement;
    parent.setAttribute('style', 'display: none!important');
    inputQuestion.value = ""
    pause.value = false;
    return count;
}
var count = 15;

export function timeUp() {
    counterDiv.setAttribute('style', 'display: block!important');
    clearUp = setInterval(() => {
        counterQuest.innerHTML = count--;
        console.log(count)
        if (count == 0) {
            time.setAttribute('style', 'display: block!important');
            questionDiv.setAttribute('style', 'display: none!important')
            counterDiv.setAttribute('style', 'display: none!important');
            countQ += 1
        }
    }, 1000)
}

export function clear(fun){
    clearInterval(fun);
    counterQuest.innerHTML = "";
    count = 15;
    return count
}
 export function next(question){
    count = clear(clearUp);
    timeUp() 
    countQ++;
    if (countQ == question.length) {
        countQ = 0;
    }
 }