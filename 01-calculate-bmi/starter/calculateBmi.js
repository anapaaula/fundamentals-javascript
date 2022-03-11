let markMass = 78;
let markHeight = 1.69;

let johnMass = 95;
let johnHeight = 1.88;

let markBmi = markMass / (markHeight ** 2);
let johnBmi = johnMass / (johnHeight ** 2);

let markHigherBMI = markBmi > johnBmi;

console.log(markHigherBMI);