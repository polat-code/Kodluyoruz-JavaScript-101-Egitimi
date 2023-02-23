// ********** let ve const ile Degisken Tanimlama ********** 

// var ile degisken tanimlamak:
//var servername = "kodluyoruz.org";
//console.log(servername);

// let ile degiskeni bos tanimlamak:
let servername = "kodluyoruz.org";
console.log(servername);

// let ile degiskene bilgi atamak:
let password = "1234";

// let ile degiskene bilgi atayarak tanimlamak:


// degisken atamasi yapmadan once kullanmaya calismak:
/* HATALI KULLANIM:  
console.log(fullName)
let fullName = "Hakan Yalcinkaya";
*/


// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:
let fullName = "Özgürhan Polat";
console.log(fullName);
fullName = "Ali Durmuş";
console.log(fullName);

// birlestirme veya ekleme islemi


fullName += " How are you ?";
console.log(fullName);

// const ile degiskeni bos tanimlamaya calismak :( :
// const serverPassword; // sadece degisken tanimlandi ama ici bos ??
const SERVER_PASSWORD = "1234asdwadawdaw"; 
console.log(SERVER_PASSWORD);
// const ile degisken tanimlamak:

// SERVER_PASSWORD = "1234"
// console.log(SERVER_PASSWORD)