//task 1
let day = 16;
if (day >=1 && day < 11) {
    console.log("Первая декада");
}
if (day >= 11 && day < 21){
    console.log("Вторая декада");
}
if (day >= 21 && day <= 31){
    console.log("Третья декада");
}
//task 2
let month = 4;
if (month >= 3 && month < 6){
    console.log("Весна");
}
if (month >= 6 && month < 9){
    console.log("Лето");
}
if (month >= 9 && month < 12) {
    console.log("Весна");
}
if (month === 1 || month === 2 || month === 12){
console.log("Зима");
}
//task 3
let min = 37;
if (min >= 0 && min <= 14){
    console.log("Первая");
}
if (min >= 15 && min <= 30){
    console.log("Вторая");
}
if (min >= 31 && min <= 45){
    console.log("Третья");
}
if (min >= 46 && min <= 59){
    console.log("Четвертая");
}
//task 4
let age = 40;
if (age < 18){
    console.log("Несовершеннолетие");
}
if (age >= 18){
    console.log("Совершеннолетие");
}

