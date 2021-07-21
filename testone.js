//task 1
let day = 16;
if (day >=1 && day < 11) {
    console.log("Первая декада");
}
else if (day >= 11 && day < 21){
    console.log("Вторая декада");
}
else if (day >= 21 && day <= 31){
    console.log("Третья декада");
}
//task 2
let month = 4;
if (month >= 3 && month < 6){
    console.log("Весна");
}
else if (month >= 6 && month < 9){
    console.log("Лето");
}
else if (month >= 9 && month < 12) {
    console.log("Весна");
}
else if (month === 1 || month === 2 || month === 12){
console.log("Зима");
}
//task 3
let min = 37;
if (min >= 0 && min <= 14){
    console.log("Первая");
}
else if (min >= 15 && min <= 30){
    console.log("Вторая");
}
else if (min >= 31 && min <= 45){
    console.log("Третья");
}
else if (min >= 46 && min <= 59){
    console.log("Четвертая");
}
//task 4
let age = 40;
if (age < 18){
    console.log("Несовершеннолетие");
}
else if (age >= 18){
    console.log("Совершеннолетие");
}

