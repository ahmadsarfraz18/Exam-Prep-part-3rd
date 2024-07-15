// Welcome to 3rd part of TypeScript exam's Preparation...
// <<<<<<<<<<=============== Logical Statements ===============>>>>>>>>>>
// <<<<<========== if - else if - else ==========>>>>>
// let pakPlayer: string = ("Shahid Afridi");
// if (pakPlayer === "Shahid Afridi"){
//     console.log(`${pakPlayer} is a good player`)
// } else if (pakPlayer === "Virat Kohli"){
//     console.log(`${pakPlayer} is my fvrt player`)
// } else if (pakPlayer === "Jose Buttler"){
//     console.log(`${pakPlayer} is a great player`)
// } else {
//     console.log("You did not select any player")
// };
// Conditional ternary operators...
// Yh aik short-hand syntax hy, jo if-else statement ko aik line mn likhnay k liye use hota hy...
// Syntax: Variable variableName = (Condition) ? expressionIfTrue : expressionIfFalse; 
// let age: number = 18;
// let canVote = (age >= 18) ? "Yes" : "No";
// console.log(canVote); // The output of this statement is true bcoz the condition is true...
// let myFrnd: string = "Umair";
// let frnd = (myFrnd === "Umar") ? "yes" : "no";
// console.log(frnd); // The output is false bcoz the both the conditions are not the same.
// Switch Case Statement...
// let day: string = "Monday";
// switch (day) {
//     case "Monday":
//         console.log("Time to start the week!");
//         break;
//         case "Wednesday":
//             console.log("Halfway through the week!");
//             break;
//             case "Friday":
//                 console.log("TGIF!");
//                 break;
//                 default:
//                     console.log("It's the weekend!")
// };
// let myFrnd: string = "Umair";
// switch (myFrnd) {
//     case "UMAR":
//         console.log("He is my frnd!");
//         break;
//         case "Shahid":
//             console.log("He is a good boy!");
//             break;
//             case "Umair":
//                 console.log("He's my best frnd !");
//                 break;
//                 case "Hamid":
//                     console.log("He is a nice player");
//                     break;
//                     default:
//                         console.log("You don't have any frnd!")
// };
// let age: number = 37;
// switch (age) {
//     case 34:
//         console.log("I'm 34 years old!");
//         break;
//         case 40:
//             console.log("I'm 40 years old!");
//             break;
//             case 37:
//                 console.log("I'm 37 years old !");
//                 break;
//                 case 20:
//                     console.log("I'm a boy who can play cricket !");
//                     break;
//                     default:
//                         console.log("I'm 15 years old!")
// };
// let myTeam: string = "Australia";
// switch (myTeam) {
//     case "Pakistan":
//         console.log("This is parchi team");
//         break;
//         case "India":
//             console.log("They are the world champions");
//             break;
//             case "South Africa":
//                 console.log("Well ballanced team");
//                 break;
//                 case "Australia":
//                     console.log("This is my favourite team");
//                     break;
//                     default:
//                         console.log("You don't have any team")
// };
// <<<<<<<<<<=============== Functions ===============>>>>>>>>>>
//                        Basic function...
// function fastFoodShop() {
//     console.log("Welcome to my Fast Food Shop!")
// }
// fastFoodShop();  // Called the function / Invoked the function.
// function foodDeliveryService (){
//     console.log("I am here to deliver your food!")
// }
// foodDeliveryService();  // Called the function / Invoked the function.
// // Returning Function Value...
// function pizzaShop () {
//     let pizzaPrice: number = 500;
//     return pizzaPrice;
// }
// let responseOfpizzaPrice = pizzaShop ()
// console.log(responseOfpizzaPrice);
// function byCycle () {
//     let priceOfbycycle: number = 10000;
//     return priceOfbycycle;
// } 
// let responseOfpriceOfbycycle = byCycle ()
// console.log(responseOfpriceOfbycycle)
// function myFrnd () {
//     let teamMem: string = "Umair";
//     return teamMem;
// }
// let teamMem = myFrnd()
// console.log(teamMem);
// Parameters and Arguments...
// function makeChickenBiryani(chicken: string, rice: string, spices: string): void {
//     console.log(`${chicken} + ${rice} + ${spices} = Chicken Biryani`)
// }
// makeChickenBiryani("10 kg chicken", "10 kg rice", "mixed spices")
// // Default Parameters
// function paramentAndArguments (a: number, b: number, c: number): number {
//     return a + b - c ;
// }
// let response = paramentAndArguments (345 , 413 , 432 )
// console.log(response)
// Rest Parameters...
// function fvrtFruits (mango: string = "1 kg mangos", ... otherFuits: string[]) {
//     console.log(mango);
//     console.log(otherFuits);
// }
// fvrtFruits ("1 kg manogs", "4 kg orange", "2 kg falsa");
// function myFrnds (frnd: string = "Umair", ... otherFrnds: string[]){
//     console.log(frnd);
//     console.log(otherFrnds)
// }
// myFrnds("Umair", "Shahid", "Hamid");
// Spread Parameters...
// let myArray = ["Apple", "Banana", "Mango"]; // You can also make function with a variable...
// console.log(...myArray);
// let myFrndsArray = ["Umair", "Shahid", "Hamid"];
// console.log(...myFrndsArray);
// function groceryItems(mustNeeded: string = "flour", ... ohter, GroceryItems: string[]){
//     console.log(mustNeeded);
//     console.log(...ohterGroceryItems)
// }
// groceryItems("flour", "butter", "sugar", "oil");
// Annonymous function...
// let myName = function (firstName: string, lastName: string){
//     return (firstName + " " + lastName)
// }
// let response: string = myName("Mahar Ahmad", "Sarfraz");
// console.log(response)
// Immediately Invoked Function...
// let myAge = (function (age: number){
//     return age * 2
// })(34);
// console.log(myAge);
// (function (){
//     console.log("Immediatly Created");
// }());
// Recrusive Function...
// function countDown (num: number): void{
//     if(num <= 0){
//         console.log("Done !")
//         return;
//     }
//     console.log(num);
//     countDown(num - 1)
// }
// countDown(10);
// function countdown (num: number): void{
//     if (num <= 0){
//         console.log("Done!")
//         return;
//     }
//     console.log(num);
//     countdown (num -1)
// }
// countdown (5);
// Nested Function...
function outerFunction(name) {
    console.log("Hello " + name);
    function innerFunction(message) {
        console.log(message);
    }
    innerFunction("This is an Inner Function");
}
outerFunction("Mahar Ahmad Sarfraz");
export {};
