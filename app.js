'use strict';


function MyWishList(title, date) {
    this.title = title;
    this.date = date;

    MyWishList.all.push(this);
}

MyWishList.all = [];




var form = document.getElementById('form');
form.addEventListener('submit', addWish);

function addWish() {

    event.preventDefault();

    var wish = event.target.wishInput.value;
    var date = event.target.inputDate.value;


    new MyWishList(wish, date);

    render();

}


function render() {
    var table = document.getElementById('table');

    var index = MyWishList.all.length - 1;

    var trr = document.createElement('tr');
    table.appendChild(trr);

    var tdd = document.createElement('td');
    trr.appendChild(tdd);
    tdd.textContent = MyWishList.all[index].title;


    tdd = document.createElement('td');
    trr.appendChild(tdd);
    tdd.textContent = MyWishList.all[index].date;

    tdd = document.createElement('td');
    trr.appendChild(tdd);

    tdd.textContent = randomNumber() + ' years';

    tdd = document.createElement('td');
    trr.appendChild(tdd);
    tdd.textContent = 'X';

    saveToLocal();
}



function saveToLocal() {

    var a = MyWishList.all;

    var MyWishList = JSON.stringify(a);
    localStorage.setItem('MyWishList', MyWishList);
}


retrieve();



function retrieve() {
    var MyWishList = localStorage.getItem(MyWishList);

    var MyWishListParsed = JSON.parse(MyWishList);

}

function randomNumber() {
    var number = Math.floor(Math.random() * 100);
    return number;
}