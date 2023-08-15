'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const contactUs = document.querySelector(".contactUs");

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);
contactUs.addEventListener("click", (e) =>{
   e.preventDefault();
  document.querySelector(".modalWindow").classList.toggle("hide");
})
const account1 = {
  owner: 'Aryan Raghav ',
  movements: 130000,
  pin: 1111,
};

const account2 = {
  owner: 'Lakshay Chauhan',
  movements: 150090,
  pin: 2222,
};

const account3 = {
  owner: 'Prianshu sharma ',
  movements: 40000,
  pin: 3333,
};

const account4 = {
  owner: 'rakshit rakshit',
  movements: 430738,
  pin: 4444,
};
const arr=["@123"];
const accounts = [account1, account2, account3, account4];
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('')
      .concat(arr)
  });
};
createUsernames(accounts);
const btnLogin = document.querySelector('.Login');
const input=document.querySelector('.username');
const pass=document.querySelector('.passw');
const main=document.querySelector('.app')
const now = document.querySelector('.over');
const login=document.getElementById("login-form");
const align=document.getElementById("header");
const wel=document.querySelector('.welcome');
let acc;
btnLogin.addEventListener('click',function(e)
{
  e.preventDefault()
  acc=accounts.find(
    acc=>acc.username===input.value
  );
  if(acc.pin===Number(pass.value))
  {
    wel.textContent = `Welcome back, ${
      acc.owner.split(' ')[0]
    }`;
    console.log("ff");
  console.log(acc);
  console.log(JSON.stringify(acc));
  localStorage.setItem("data",JSON.stringify(acc) )
  // now.style.display = "none"
  login.style.display = "none"
  // main.style.display = "block"
   location.href = "./index2.html"
}
})