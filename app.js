// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და დააბრუნებს 
// true -ს თუ რიცხვი არის კენტი ან false -ს თუ რიცხვი არის ლუწი.

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(getRandomInt(100)));

// 2. დაწერეთ ფუნქცია, getCurrencySymbolFromCode რომელიც პარამეტრად
//  მიიღებს ვალუტის კოდს (USD ან EUR ან GEL) სტრინგის სახით და 
//  დააბრუნებს ამ კოდის შესაბამის სიმბოლოს ($, €, ლ) 
// თუ ისეთი კოდს გადავცემ რომლის სიმბოლოც არ მაქვს დააბრუნოს კოდი

function getCurrencySymbolFromCode(currency) {
    if (currency == "USD") {
        return "$";
    }
    else if (currency == "EUR") {
        return "€";
    } else if (currency == "GEL") {
        return "ლ";
    } else {
        return "input correct text";
    }
}
console.log(getCurrencySymbolFromCode("EUR"));

// დაწერეთ ფუნქცია, რომელიც მიიღებს UpperCase სტრინგს მაგ(MY NAME IS JOHN) 
// და დააბრუნებს LowerCase(my name is john) სტრინგს

function lowerCase(string) {
    return string.toLowerCase();
}
console.log(lowerCase("LOREM IPSUM"));

// 4. დაწერეთ ფუნქცია, რომელიც მიიღებს რიცხვების მასივს 
// და დააბრუნებს გაფილტრულ მასივს.filter სადაც მხოლოდ ლუწი რიცხვები იქნება

let inputs = [1, 2, 3, 4, 5, 6, 11, 50, 1001, 2000];
let result = inputs.filter(x => x % 2 == 0);
console.log(result);

// 5. დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს(ობიექტს უნდა ქონდეს ველი name) 
// და მეორე პარამეტრად მიიღებს სტრინგს დაამ მასივში.find ით მოვძებნოთ ობიექტის 
//  name === ფუნქციის მეორე პარამეტრს და დავაბრუნოთ ნაპოვნი ობიექტი

