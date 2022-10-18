let SystolicBP = 130;
let DiastolicBP = 80;
let SystolicHepertensiveMessage = "${name} possesses systolic hypertension.";
let DiastolicHypertensionMessage = "${name} possesses diastolic hypertension.";
let GoodBPMessage = "Great BP!";
var name = 'Bob';
var z=120;
var w=70;

if (z > SystolicBP && w > DiastolicBP) {console.log($SystolicHypertensiveMessage)}
else {GoodBPMessage}