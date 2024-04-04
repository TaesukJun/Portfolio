//set initial point
let point = 0;
let tier2 = 0;
let tier3 = 0;
let goal = 100000;


const pointread = document.getElementById('point');
const tier2Value = document.getElementById('tier2');
const tier3Value = document.getElementById('tier3');
const progressBar = document.getElementById('progress');



const tier1Btn = document.getElementById("tier1Btn");

const tier2Btn = document.getElementById('tier2Btn');
const tier3Btn = document.getElementById('tier3Btn');

tier1Btn.addEventListener("click", function(){
    console.log(point);
    point += 1;
    point = Math.round((point*1000))/1000;
    pointread.innerHTML = point;
});

tier2Btn.addEventListener("click", function(){
    if (point < 10) {
        
    } else {
        tier2 += 1;
        point -= 10;
        point = Math.round((point*1000))/1000;
        tier2 = Math.round((tier2*1000))/1000;
        tier2Value.innerHTML = tier2;
    }
});


tier3Btn.addEventListener("click", function(){
    if (point < 100 || tier2 <10) {
        
    } else {
        tier3 += 1;
        tier2 -= 10;
        point -= 100;
        point = Math.round((point*1000))/1000;
        tier2 = Math.round((tier2*1000))/1000;
        tier3 = Math.round((tier3*1000))/1000;
        pointread.innerHTML = point;
        tier2Value.innerHTML = tier2;
        tier3Value.innerHTML = tier3;
    }
});



setInterval(function() {
    point += tier2/37.03;
    tier2 += tier3/37.03;
    point = Math.round((point*1000))/1000;
    tier2 = Math.round((tier2*1000))/1000;
    tier3 = Math.round((tier3*1000))/1000;
    pointread.innerHTML = point;
    tier2Value.innerHTML = tier2;
    if (point < 1) {
        progressBar.style.width = '0%';
        
    } else if (point > goal) {
        progressBar.style.width = '100%';

    } else {
        progressBar.style.width = `${Math.log10(point/goal*100+0.01)*50}%`;
        progressBar.style.filter = `contrast(${point/goal*8})`;
    }

}, 27);