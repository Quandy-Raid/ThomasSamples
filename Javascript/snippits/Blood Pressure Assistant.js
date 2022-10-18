let SystolicBP = 130;
let DiastolicBP = 80;
var PatName = PatInput;
var PatInput = "Bob";
let BadBPMessage = PatName + " may have hypertension. Call Dr. Quack at 555-555-5555! Thank You!";
let GoodBPMessage = "Great BP! You're Healthy! Then again, you're not a Doctor! Call Dr. Quack at 555-555-5555! Thank You!";
var z=140;
var w=70;

if (z >= SystolicBP || w >= DiastolicBP) {console.log(BadBPMessage)} //&& would give a Good BP message because at least one is true
else {GoodBPMessage}