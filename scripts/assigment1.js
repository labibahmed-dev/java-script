//  task 1


// var zakat_percen = 0.025
// var user_asset = + prompt ("Asset Value")
// var result = zakat_percen*user_asset
// alert("Your Zakat="+result)



// task 2



var familyMembers = prompt("Enter the total number of family members:");
var method = prompt("Choose a fitrah method:\n1. Rice - Rs. 150 per person\n2. Wheat - Rs. 100 per person\n3. Dates - Rs. 75 per person");

var price;
if(method === "1") {
  price = 150;
} else if(method === "2") {
  price = 100;
} else if(method === "3") {
  price = 75;
} else {
  alert("Invalid input, please try again.");
}

if(price) {
  var fitrahAmount = price * familyMembers;
  alert("The fitrah amount for " + familyMembers + " family member(s) using " + method + " method is Rs. " + fitrahAmount + ".");
}






// task 4

// var name = prompt("Enter your name:");
// var capitalized = name.charAt(0).toUpperCase() + name.slice(1);
// console.log("Your name in capitalized case:", capitalized);



// task 6



// var products = ["apple", "banana", "orange", "grape", "kiwi"];

// var index = prompt("Which product would you like to remove?");

// var removedItem = products.splice(index, 1);

// console.log("Removed item: " + removedItem);
// console.log("Remaining items: " + products);
// console.log("Total number of items remaining: " + products.length);








// task 7

// var nationality = prompt("What is your nationality? ");

// if (nationality === "pakistani" || nationality === "indian") {
//   var gender = prompt("What is your gender? ");
//   var age = prompt("What is your age?");

//   if (gender.toLowerCase() === "male" && age >= 18) {
//     alert("You are eligible to vote!");
//   } else if (gender === "female" && age >= 18) {
//     var maritalStatus = prompt("Are you married? ");
//     if (maritalStatus === "yes") {
//       alert("You are eligible to vote!");
//     } else {
//       alert("Sorry, you are not eligible to vote.");
//     }
//   } else {
//     alert("Sorry, you are not eligible to vote.");
//   }
// } else {
//   alert("Sorry, you are not eligible to vote.");
// }









// task 8


// var WorldCupSquad = ["Babar Azam", "Mohammad Rizwan", "Fakhar Zaman", "Imam-ul-Haq", "Abid Ali", "Haris Sohail", "Mohammad Hafeez", "Shadab Khan", "Imad Wasim", "Faheem Ashraf", "Shaheen Shah Afridi", "Hasan Ali", "Mohammad Hasnain", "Usman Qadir", "Sarfaraz Ahmed"];

// var finalTeam = WorldCupSquad.slice(0, 11);
// console.log("Final team for tomorrow's match against India: " + finalTeam);
