import {
    questionsObj
} from "./_objects.js";
import {
    questionDiv,
    verified,
    okv,
    wrong,
    okw,
} from "./_dom.js";
export let countQ = 0;
export function addMoneyFun(headingQ, headingA1, headingA2, question, answers1, answers2, pause) {
    console.log(question[countQ][0])
    console.log(question.length)
    headingQ.innerHTML = question[countQ][0];
    headingA1.innerHTML = answers1[countQ][0];
    headingA2.innerHTML = answers2[countQ][1];
    pause = true;
    return pause;
}

export function confirmAnswer(input, question) {
    let valueInput = input.value
    if (valueInput == questionsObj.questions[countQ][1]) {
        questionDiv.setAttribute('style', 'display : none!important')
        questionDiv.setAttribute('style', 'display: none!important')
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

}
export function okWrong() {
    let parent = okw.parentElement;
    parent.setAttribute('style', 'display: none!important');
}