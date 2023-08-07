"use strict";

// select HTML element

const btnAddUser = document.getElementById("add-user");
const btnDouble = document.getElementById("double");
const btnFilterMillion = document.getElementById("show-millionaires");
const btnSort = document.getElementById("sort");
const btnTotal = document.getElementById("calculate-wealth");
const mainContainer = document.getElementById("main");

const totalEl = document.getElementById("total");

// global variables

const url = `https://randomuser.me/api/`;

let users = [];

// functions
const init = () => {
  getRandomUser();

  totalEl.style.display = "none";
};

const formatMoney = function (number) {
  return number.toLocaleString("en-IN") + ".00";
};

const addUsersToDom = function (usersArr) {
  // before adding element, first clean the container

  mainContainer.innerHTML = ``;

  users.forEach((user) => {
    // add this user to DOM
    const ele = document.createElement("div");
    ele.classList.add("person");
    ele.innerHTML = `<strong>${user.name}</strong> ₹${formatMoney(user.money)}`;
    mainContainer.appendChild(ele);
  });
};

const getRandomUser = async function () {
  const response = await fetch(url);
  const data = await response.json();
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000) + 5000,
  };

  // add user to users array
  users.push(newUser);

  // add users to DOM
  addUsersToDom(users);
};

// Double Money
const doubleMoney = () => {
  users = users.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  addUsersToDom(users);
};

//Filter Millionaires
const filterMillion = () => {
  users = users.filter((user) => user.money > 500000);

  addUsersToDom(users);
};

// Sort
const sortUsers = () => {
  users = users.sort((userOne, userTwo) => userOne.money - userTwo.money);

  addUsersToDom(users);
};

// show Total
const showTotal = function () {
  const total = users.reduce((prev, curr) => prev + curr.money, 0);

  totalEl.style.display = "flex";

  totalEl.innerHTML = `Total Wealth: <strong>₹${formatMoney(total)}</strong>`;
};

//event listeners

btnAddUser.addEventListener("click", getRandomUser);
btnDouble.addEventListener("click", doubleMoney);
btnFilterMillion.addEventListener("click", filterMillion);
btnSort.addEventListener("click", sortUsers);
btnTotal.addEventListener("click", showTotal);

// initial settings
init();
