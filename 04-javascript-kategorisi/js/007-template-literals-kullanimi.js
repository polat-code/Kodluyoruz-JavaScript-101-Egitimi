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


// Example 
//Convert this into Template Literals
const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  }
  const bookTable =
        "<table border>"+
    "<tbody>"+
      "<tr>"+
        "<td>"+"Kitap"+"</td>"+
        "<td>"+kitap.ad+"</td>"+
      "</tr>"+
    "<tr>"+
        "<td>"+"Yazar"+"</td>"+
        "<td>"+kitap.yazar+"</td>"+
      "</tr>"+
        "<tr>"+
        "<td>"+"Tarih"+"</td>"+
        "<td>"+kitap.tarih+"</td>"+
      "</tr>"+
   " </tbody>"+
  "</table>"
 // document.body.innerHTML = bookTable

const kitap01  = {
    ad: "Fırtına",
    yazar: "Shakespare",
    tarih : 1610
}

const bookTable01 = `
<table border>
    <tbody>
        <tr>
        <td>Kitap</td>
        <td>${kitap01.ad}</td>
        </tr>
        <tr>
        <td>Yazar</td>
        <td>${kitap01.yazar}</td>
        </tr>
        <tr>
        <td>Tarih</td>
        <td>${kitap01.tarih}</td>
        </tr>

    </tbody>
</table>`
;
document.body.innerHTML = bookTable01;




