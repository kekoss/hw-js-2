/* 
    1. String, Number, Boolean, Object, Array, null, undefined, Symbol;
    2. == - оператор нестрогого порівняння, виконується з приведення типів даних, 
       === - оператор строгого порівняння, виконується без приведення типів даних;
    3. оператор - це функція javascript
*/


"use strict"
let userName = '';
let userAge = '';

for (let i = 0; i < 100; i++) {
    userName = prompt('What is ur name?', `${userName}`);
    userAge = +prompt("How old r u?", `${userAge}`);
    if(userName && userAge){
        break
    }
}

if (userAge < 18) {
    alert('You are not allowed to visit this website');
} else if (userAge >= 18 && userAge <=22) {
     let userAge = confirm('Are you sure you want to continue?');
    if (userAge) {
        alert(`Welcome, ${userName}`);
    } else if (userAge != true) {
        alert('You are not allowed to visit this website');
    }
} else if (userAge > 22) {
    alert(`Welcome, ${userName}`);
}


