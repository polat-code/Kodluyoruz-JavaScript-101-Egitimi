function myTime() {
    
    let myClock = document.querySelector("#myClock");
    
    let today = new Date();
    
    myClock.innerHTML = `${today.getHours() < 10 ? "0" + today.getHours() : today.getHours()}:${today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()}:${today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds()}`

}
let iname = prompt("Lütfen İsminizi Yazınız!");

let myName = document.querySelector("#myName");

myName.innerHTML = iname;

myTime();
setInterval(myTime,1000);
