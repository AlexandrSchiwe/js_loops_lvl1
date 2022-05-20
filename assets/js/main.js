// // console.log("hello");

// let hello = "Hello World ";
// let text ="";

// for (let i = 1; i <= 10; i++) {
//     // text += hello + i;
//     console.log(hello + i);
// }

// // JS Loops 1.2 

// let numbers = [];

// for (let i = 0; i <= 10; i++) {
//     numbers.push(i);
// }

// console.log(numbers);

// // Js Loops 1.4

// let names = ["Eric", "Steffen", "finn", "Simon", "Franzi"];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// // JS Loops 1.6

// let retArray = [];

// for (let i = 1; i <= 100; i++) {
//     retArray.push(`image_${i}.jpg`);
// }

// console.log(retArray); 

// // JS Loops 1.7

// let index2 = 1;

// do{
//     console.log(index2);
//     index2++
// } while (index2 < 6);


// JS Loops 1.8

// let index = 0;

// while (index < 20) {
//     index% 2== 0;
//     console.log(index);
// } //Klappt nicht

// for (i=2; i <=20; i++){
//     if (i%2);
// }
// console.log(i);
// Klappt nicht

//================= Klappt ==================

// let x = 2;
// while (x !== 21) {
//   if (x % 2 == 0)
//     console.log(x);
//   x++;
// }

// ==========================================

// infinite loop

// let y = 2;

// do{
//     x % 2 == 0
//     x++;
//     console.log(y);
// } while (x !== 21);


// JS Loops 1.9 

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

let input = document.getElementById('input');

function wordPrint() {
    for (i = 0; i < words.length; i++) {
        if (input.value == words[i].length) {
            console.log(words[i]);
        }
    }   
}
