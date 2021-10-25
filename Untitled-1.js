let span = document.querySelectorAll('table tbody tr td span');

for (let elem of span){
    if(elem.innerHTML<50){
    elem.style.backgroundColor = 'rgb(168, 31, 31)'; 
    }
    if(elem.innerHTML<60&&elem.innerHTML>=50){
        elem.style.backgroundColor = '#ff951c';
    }
    if(elem.innerHTML<80&&elem.innerHTML>=60){
        elem.style.backgroundColor = '#ccb806';
    }
    if(elem.innerHTML<90&&elem.innerHTML>=80){
        elem.style.backgroundColor = '#20c906';
    }
}


let ovr = document.querySelector('.ovr-num');
    let dif = 0;
    for(let elem of span){
        dif += +elem.innerHTML;
        ovr.innerHTML = Math.round(dif/span.length);
    }
