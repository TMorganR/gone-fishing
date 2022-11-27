const prompt = require('prompt-sync')({sigint: true})


let finalTally = {
    numberOfFish: 0,
    timePast: 0,
    totalWeight: 0,
    valueOfFish: 0
}

let stringer = []
let descriptors1 = ["skinny", "toothy", "fat", "spiny", "lively", "slimy", "scaley"]
let descriptors2 = ["black", "blue", "gray", "shiny", "dull", "vibrant", "colorful"]
let species = ["bass", "trout", "salmon", "cod", "catfish", "perch", "whiting"]
let weightModifier = [2, 5, 1, 10, 7, 9, 2]
let valueModifier = [2, 5, 10, 30, 20, 10, 15]

console.log("\nWelcome ton Gone Fishing\n")
console.log("The goal of the game is to catch the highest valued fish of different variety without going over your weight limit of 10 lbs. GOOD LUCK!")

for (i = 0; i <= 5; i++){

    stringerSummary()
    randomFish()
    console.log(`You caught a ${stringer[i].name} weighting ${stringer[i].weight.toFised(2)}
    lbs and worth ${stringer[i].value.toFixed(2)}.\n`)
    if (stringer[i].weight + finalTally.totalWeight < 10){
        catchOrRelease()
        } else {
        overWeight()
        }
    console.log("Do you want to continue fishing?")
    let cont = prompt ("[Y] or [N]: ")
    if (cont !== "Y"){
        break
    }
}
console.log()
stringerSummary()
finalSummary()
console.log("\nGood Job!")


function randomFish(){

    let fishCaught = {
        name: "",
        weight: 0,
        value: 0
    }
    let d1 = Math.floor(Math.random() * 8)
    let d2 = Math.floor(math.random() * 7)
    let sp = Math.floor(Math.random() * 7)
    fishCaught.name = `${descriptors1[d1]} ${descriptors2[d2]} ${species[sp]}`
    let lbs = Math.random().toPrecision(2)
    fishCaught.weight = lbs * weightModifier[sp]
    let dollars = (Math.random().toPrecision(2) * 10)
    fishCaught.value = dollars * valueModifier[sp]
    stringer.push(fishCaught)
}

function catchOrRelease(){
    console.log("Do you want to keep or release?")
    let keep = prompt ("[C] catch or [R] release?: ")
        if (keep === "C"){
            finalTally.numberOfFish = finalTally.numberOfFish + 1
            finalTally.totalWeight = finalTally.totalWeight + stringer[i].weight
            finalTally.valueOfFish = finalTally.valueOfFish + stringer[i].value
            stringer[i].status = "kept"
        } else {
            console.log("\nYou let the fish go.\n")
            stringer[i].status = "release"
        }
}


function overWeight(){
    console.log("You are over the 10 lbs limit and must release this fish and retry.")
    stringer[i].status = "release"
}

function finalSummary(){
    console.log("You caught the followig fish: \n")
    for(j = 0; j < stringer.length; j++){
        console.log(`${stringer[j].name}: weighing ${stringer[j].weight} lbs and worth ${stringer[j].value} that you ${stringer[j].status}`)
    }
}