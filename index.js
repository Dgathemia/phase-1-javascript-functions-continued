// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}



function mondayWork(activity = 'go to the office') {
    return(`This Monday, I will ${activity}.`)
}
mondayWork("work from home")


function wrapAdjective(wrap = '*'){
    return function(wrap2 = "a hard worker"){
        let emphatic = `You are ${wrap}${wrap2}${wrap}!`
        return emphatic
    }
}
wrapAdjective()()