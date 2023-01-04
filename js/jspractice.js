var title = document.querySelector('h1');
title.textContent = 'Hello World';

document.querySelector('h1').style.color = 'red';

// document.querySelector("#myBtn").stytle.toggle();
document.querySelector("h1").classList.add("headone");


document.querySelector("#mybtn").addEventListener('click', function () {
    // alert('Hello World');
    if (document.querySelector('h1').style.color == 'green') {
        document.querySelector('h1').style.color = 'red';
        title.textContent = "Red";
    }
    else {
        document.querySelector('h1').style.color = 'green';
        title.textContent = "Green";
    }
    let name = document.querySelector('#name');
    let password = document.querySelector('#password');
    console.log("name:" + name.value, "password:" + password.value);
});
