let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minuts = document.querySelector("#minuts");
let seconds = document.querySelector("#seconds");


let countDown = () => {
    let furtherDate = new Date("1 Jan 2026");
    let currentdate = new Date();
    let mydate = furtherDate - currentdate;


    let day = Math.floor(mydate / 1000 / 60 / 60 / 24);
    let hour = Math.floor(mydate / 1000 / 60 / 60) % 24;
    let minut = Math.floor(mydate / 1000 / 60) % 60;
    let second = Math.floor(mydate / 1000) % 60;

    days.innerHTML=(day<10?"0":"") + day;
    hours.innerHTML=(hour<10?"0":"") + hour;
    minuts.innerHTML=(minut<10?"0":"") + minut;
    seconds.innerHTML=(second<10?"0":"") + second;
}
countDown();
setInterval(countDown, 1000);
