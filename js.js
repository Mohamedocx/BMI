// x = 10;
// y = 20;

// a= x+y;
// b= x-y;
// c=x*y;
// d= x/y;
// e= x%y;

// p="x+y="+a+"\nx-y="+b+"\nx*y="+c+"\nx/y="+d+"\nx%y="+e;

// // var c=document.getElementById("p").innerHTML=p;
//  document.write(p);

//  L="heloo"

//  console.log(L.replace("o","a"));

//  function reverseString(str) {
//   return str.split("").reverse().join("");
// }

//  console.log(reverseString(L));

 //handle value and reverse it from user
// let userInput = prompt("Enter a string");

//  var c=reverseString(userInput);

 //take input from user using input field


// document.getElementById("clc").addEventListener("click",function(){
// // console.log("ddddddddddd");
// let str = document.getElementById("inp").value;
// // console.log(str);

// document.getElementById("c").innerHTML=str.split("").reverse().join("");
// });

// console.log(rev.value);

// console.log(rev);
// document.getElementById("c").innerHTML=c;

// let age = 2;

// switch (true) {
//   case age < 18:
//     console.log("you are minor");
//     break;
//   case age >= 18:
//     console.log("lega");
//     break;
//   default:
//     console.log("godd");
// }


// let weight = document.getElementById("weight").value;
// let height = document.getElementById("height").value;
// let bmi;

// document.querySelector("#clc").addEventListener("click", function () {
//   weight = document.getElementById("weight").value;
//   height = document.getElementById("height").value;
//   bmi = weight / (height * height);
//   document.getElementById("bmi").innerHTML = bmi;
//     let state = "";
//   if (bmi < 18.5) {
//     state = "thin";
//     } else if (bmi >= 18.5 && bmi < 25) {
//         state = "normal";
//     } else if (bmi >= 25 && bmi < 30) {
//         state = "overweight";
//     } else {
//         state = "obese";
//     }
//     document.getElementById("bmistate").innerHTML = state;

//   console.log(`your BMI is ${bmi}`);
// });

    
  
   var arr = [];
    

document.getElementById("add").addEventListener("click", function () {
    var names = document.getElementById("name").value;
    arr.push(names);
    document.getElementById("list").innerHTML = arr;
    var names = document.getElementById("name").value = ""; // Clear the input field

});

document.getElementById("del").addEventListener("click", function () {
    var names = document.getElementById("name").value;
    arr.pop(names);
    document.getElementById("list").innerHTML = arr;
});


//   });

// document.getElementById("add").addEventListener("click", function () {
//     var newName = document.getElementById("name").value.trim();
//     if (newName !== "") {
//       var existingNames = document.getElementById("list").textContent.trim();
//       var arr = existingNames ? existingNames.split(", ") : [];
//       arr.push(newName);
//       document.getElementById("list").textContent = arr.join(", ");
//       document.getElementById("name").value = ""; // Clear the input field
//     }
//   });
  
//   document.getElementById("del").addEventListener("click", function () {
//     var existingNames = document.getElementById("list").textContent.trim();
//     if (existingNames !== "") {
//       var arr = existingNames.split(", ");
//       arr.pop(); // Remove the last item
//       document.getElementById("list").textContent = arr.join(", ");
//     } else {
//       document.getElementById("list").textContent = ""; // Clear the list if it's empty
//     }
//   });
  
  
  
  