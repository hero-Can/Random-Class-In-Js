let classNames = ["class-one","class-two","class-three"];
 
let d = document.getElementById("section");
// Math.floor(Math.random() * (max - min + 1)) + min
// let value = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
let value = Math.floor(Math.random() * classNames.length); 
d.classList.add(classNames[value]);


// let value = Math.random() * classNames.length; classNames.length= 3 => [1.-2.] => 0.152 ou 1.265 ou 2.623
// so we need the use the floor for have an integer value
// let value = Math.floor(Math.random() * classNames.length); 

// Or
//document.body.setAttribute("class",classNames[value]);