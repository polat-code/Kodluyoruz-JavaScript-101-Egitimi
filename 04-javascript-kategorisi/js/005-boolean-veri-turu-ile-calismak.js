// ********** Boolean Veri Turu ile Calismak ********** 

// 0 ve 1'i Anlamak ->
let isActive = false // 0
isActive = true // 1
console.log(isActive)


let username;
let isUserName = Boolean(username);
console.log(isUserName);

Boolean("11") // true
Boolean("11") // true
console.log(Boolean("")); // false

username = "user";
console.log(Boolean(username));


// 0 ,-0, null, false, NaN, undefined, ("") ->
Boolean(0); // false
console.log(Boolean(-0)); //false
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(0 == 0));

// Not: Karar Yapilari Kisminda Tekrar Anlatilacak
