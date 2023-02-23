// ********** String Veri Turu Islemleri ********** 
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "ozgurhan.45@gmail.com";
let firstName = "özgürhan";
let secondName = "Polat";

// string karakter sayisi -> length
console.log(email.length);

// Ilk Karakteri Bulmak -> [0]:
console.log(firstName[0]);
console.log(firstName.charAt(0)); 

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

// String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
console.log(email.search("@")); // 11

console.log(email.search("fadawdwa")); // Returns -1 if it is not exit

// Domain'in noktaya kadar olanı almak
let endStr = email.slice(12);
console.log("endStr" , endStr);
let endStrIndex = endStr.indexOf(".");
console.log(endStr.slice(0,5));

// belli bir yere kadar al -> slice :  (domain bilgisi)
const DOMAIN = email.slice(12);
console.log(DOMAIN);

// bilgiyi degistir -> replace :

email = email.replace("gmail.com", "kodluyoruz.org");
console.log(email);

// istedigim bilgi var mi ? -> includes :
email.includes('dkfhsd') // false
email.includes('@') // true

// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
console.log(
    email.endsWith('kodluyoruz.org')
)

// Ilk Harflerini Buyuk Yapmak
firstName = "FIRST"
lastName = "LAST"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

let fullName2 = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`

console.log(fullName2);

// To split data , use split function

let myName = "Özgürhan Polat";
console.log(myName.split(" "));


//Exercise
let url = "www.kodluyoruz.org";
let language = "java";

//Soru 1: Yukarıdaki language değişkenin değerini JavaScript olarak değiştirin ve konsola yazdırın.

language = language.replace("java","javascript");
console.log(language);

//Soru 2: Yukarıdaki url değişkenini kullanarak "www" olmadan domain (kodluyoruz.org) adında yeni bir değişken oluşturun ve konsola yazdırın.

const DOMAIN01 = url.slice(4);
console.log(DOMAIN01); 
