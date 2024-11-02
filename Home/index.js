let randomNum = Math.floor(Math.random() * 100);
let nameElem = document.querySelector('#inputname');
let flavorElem = document.querySelector('#option');
let sizeElem = document.querySelector('#sizes');
let extraElem = document.querySelector('#extra');
let ThankyouElem = document.querySelector('Thankyou');


var div = document.getElementById('res');
var display = 0;

const DisplayNumber = () => {
    num1.textContent = (randomNum) ;
    names.textContent = ('Name: ' + nameElem.value);
    Flavors.textContent = ('FLavor: ' + flavorElem.value);
    Ads.textContent = ('Ads on:  ' + extraElem.value);
    size.textContent = ('Prize & Size:');
    sizess.textContent = (' ' + sizeElem.value);
    Thankyou.textContent = ("Thankyou!");

    if (display == 1)
    {
        div.style.display ='block';
        display = 0;
    }
    else
    {
        div.style.display = 'none';
        display = '1';
    }
    



}

