let days = document.querySelector('#days')
let hours = document.querySelector('#hours')
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')
let year = document.querySelector('#year')
let countdown = document.querySelector('#countdown')
let img= document.querySelector('img')

let currentyear = new Date().getFullYear();
let newyeartime = new Date(`January 01 ${currentyear + 1} 00:00:00 `)

year.textContent=currentyear+1;

function updatecountdown() {
    let currentime = new Date();
    let diff = newyeartime - currentime;
    let d = Math.floor(diff / 1000 / 60 / 60 / 24);
    let h = Math.floor(diff / 1000 / 60 / 60) % 24;
    let m = Math.floor(diff / 1000 / 60) % 60;
    let s = Math.floor(diff / 1000) % 60;
    days.textContent = d;
    if (h < 10) {
        hours.textContent = '0' + h;
    } else {
        hours.textContent = h;
    }
    if (m < 10) {
        minutes.textContent = '0' + m;
    } else {
        minutes.textContent = m;
    }
    if (s < 10) {
        seconds.textContent = '0' + s;
    } else {
    seconds.textContent = s;
    }
}

setTimeout(()=>{
    img.remove();
    countdown.style.display='flex';
},1000)

setInterval(updatecountdown, 1000)