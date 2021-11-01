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
        return "input correct text"
    }
}

console.log(getCurrencySymbolFromCode("EUR"))