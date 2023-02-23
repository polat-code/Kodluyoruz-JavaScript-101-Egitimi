// ********** Template Literals Kullanimi ********** 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let userName = "ozgurhan";
const DOMAIN = "kodluyoruz.org";


let email = userName + "@" + DOMAIN;

let info = `Merhaba ${userName} sitemize hoşgeldin..
mail addresin ${email}

kisa isminiz : ${userName[5]}

Mail adresinin uzunluğu ${email.length}
borcunuz: ${ (2 + 3) * 10} TL
günün saat bilgisi ${new Date().getHours()}:${new Date().getMinutes()}
`
console.log(info);

