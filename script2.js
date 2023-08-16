const accounts = localStorage.getItem("data");
const parsedAccounts = JSON.parse(accounts);
console.log(parsedAccounts);
const wel = document.querySelector('.welcome');
wel.textContent = `Welcome back, ${parsedAccounts.owner.split(' ')[0]}`;
const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    slidesPerColumn: 9,
    slidesPerGroup :3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    on: {
      init: function () {},
      orientationchange: function(){},
      beforeResize: function(){
      
        mySwiper.params.slidesPerView = 6
            mySwiper.params.slidesPerColumn = 6
            mySwiper.params.slidesPerGroup = 6;
         
        mySwiper.init();
      },
    },
});
const lol=document.querySelector('.money')
const containerMovements = document.querySelector('.movements');
  const sugar = document.querySelector('.i1');
  const milk=document.querySelector('.i2');
  const biscuit=document.querySelector('.i3');
  const ice=document.querySelector('.i4');
  const tea=document.querySelector('.i5');
  const soft=document.querySelector('.i6');
  const cup=document.querySelector('.i7');
  const lays=document.querySelector('.i8');
  const bread=document.querySelector('.i9');
  const pulses=document.querySelector('.i10');
  const cart=document.querySelector('.add-to-cart')
  const debit=document.querySelector('.balance__value')
  let i=0;
  let sum=0;
  sugar.addEventListener('click', function (e) {
    console.log('click sugar');
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--deposit">${i+1}</div>
    <div class="movements__date">Sugar</div>
    <div class="movements__value">₹55</div>
    <button class="button_two">delete</button>
    </div>
    
    `;
    i++;
    sum=sum+55;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    lol.textContent=`₹${sum}`;
    const newMovementRow = containerMovements.querySelector('.movements__row');
  const deleteButton = newMovementRow.querySelector('.button_two');
  deleteButton.addEventListener('click', function () {
    const rowId = parseInt(newMovementRow.getAttribute('data-rowid'));
    const valueToRemove = 90; // The value to subtract from sum
    sum = sum - valueToRemove;
    newMovementRow.remove();
    lol.textContent = `₹${sum}`;
  });
});
  

  milk.addEventListener('click', function (e) {
    console.log('click milk');
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--deposit">${i+1}</div>
    <div class="movements__date">Milk</div>
    <div class="movements__value">₹62</div>
    <button class="button_two">delete</button>
    </div>
    `;
    i++;sum=sum+62;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    lol.textContent=`₹${sum}`;
    const newMovementRow = containerMovements.querySelector('.movements__row');
  const deleteButton = newMovementRow.querySelector('.button_two');
  deleteButton.addEventListener('click', function () {
    const rowId = parseInt(newMovementRow.getAttribute('data-rowid'));
    const valueToRemove = 90; // The value to subtract from sum
    sum = sum - valueToRemove;
    newMovementRow.remove();
    lol.textContent = `₹${sum}`;
  });
});
  
biscuit.addEventListener('click',function(e){
  console.log('biscuit');
  const html = `
  <div class="movements__row">
  <div class="movements__type movements__type--deposit">${i+1}</div>
    <div class="movements__date">Biscuit</div>
    <div class="movements__value">₹35</div>
    <button class="button_two">delete</button>
    </div>
    `;
    i++;sum=sum+35;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    lol.textContent=`₹${sum}`;
    const newMovementRow = containerMovements.querySelector('.movements__row');
  const deleteButton = newMovementRow.querySelector('.button_two');
  deleteButton.addEventListener('click', function () {
    const rowId = parseInt(newMovementRow.getAttribute('data-rowid'));
    const valueToRemove = 90; // The value to subtract from sum
    sum = sum - valueToRemove;
    newMovementRow.remove();
    lol.textContent = `₹${sum}`;
  });
});

ice.addEventListener('click',function(e){
  console.log('');
  const html = `
  <div class="movements__row">
  <div class="movements__type movements__type--deposit">${i+1}</div>
    <div class="movements__date">Ice-Cream</div>
    <div class="movements__value">₹40</div>
    <button class="button_two">delete</button>
    </div>
    `;
    i++;sum=sum+40;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    lol.textContent=`₹${sum}`;
    const newMovementRow = containerMovements.querySelector('.movements__row');
  const deleteButton = newMovementRow.querySelector('.button_two');
  deleteButton.addEventListener('click', function () {
    const rowId = parseInt(newMovementRow.getAttribute('data-rowid'));
    const valueToRemove = 90; // The value to subtract from sum
    sum = sum - valueToRemove;
    newMovementRow.remove();
    lol.textContent = `₹${sum}`;
  });
});

tea.addEventListener('click',function(e){
  console.log('biscuit');
  const html = `
  <div class="movements__row">
  <div class="movements__type movements__type--deposit">${i+1}</div>
    <div class="movements__date">Tea</div>
    <div class="movements__value">₹469</div>
    <button class="button_two">delete</button>
    </div>
    `;
    i++;sum=sum+469;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    lol.textContent=`₹${sum}`;
    const newMovementRow = containerMovements.querySelector('.movements__row');
  const deleteButton = newMovementRow.querySelector('.button_two');
  deleteButton.addEventListener('click', function () {
    const rowId = parseInt(newMovementRow.getAttribute('data-rowid'));
    const valueToRemove = 90; // The value to subtract from sum
    sum = sum - valueToRemove;
    newMovementRow.remove();
    lol.textContent = `₹${sum}`;
  });
});

soft.addEventListener('click', function (e) {
  console.log('biscuit');
  const html = `
    <div class="movements__row" data-rowid="${i}">
      <div class="movements__type movements__type--deposit">${i + 1}</div>
      <div class="movements__date">Soft Drinks</div>
      <div class="movements__value">₹90</div>
      <button class="button_two">delete</button>
    </div>
  `;
  i++;
  sum = sum + 90;
  containerMovements.insertAdjacentHTML('afterbegin', html);
  lol.textContent = `₹${sum}`;

  // Add event listener for the delete button in the newly added row
  const newMovementRow = containerMovements.querySelector('.movements__row');
  const deleteButton = newMovementRow.querySelector('.button_two');
  deleteButton.addEventListener('click', function () {
    const rowId = parseInt(newMovementRow.getAttribute('data-rowid'));
    const valueToRemove = 90; // The value to subtract from sum
    sum = sum - valueToRemove;
    newMovementRow.remove();
    lol.textContent = `₹${sum}`;
  });
});
cup.addEventListener('click', function (e) {
  console.log('biscuit');
  const html = `
    <div class="movements__row" data-row="${i}">
      <div class="movements__type movements__type--deposit">${i + 1}</div>
      <div class="movements__date">Cup Cakes</div>
      <div class="movements__value">₹30</div>
      <button class="button_two" data-delete="${i}">delete</button>
    </div>
  `;
  i++;
  sum = sum + 30;
  containerMovements.insertAdjacentHTML('afterbegin', html);
  lol.textContent = `₹${sum}`;

  const deleteButtons = document.querySelectorAll('[data-delete]');
  deleteButtons.forEach(button => {
    button.addEventListener('click', handleDelete);
  });
});

// Function to handle delete button click
function handleDelete(event) {
  const rowNumber = event.target.getAttribute('data-delete');
  const row = document.querySelector(`[data-row="${rowNumber}"]`);
  
  if (row) {
    const value = parseInt(row.querySelector('.movements__value').textContent.replace('₹', ''), 10);
    sum -= value;
    row.remove();
    lol.textContent = `₹${sum}`;
  }
}
lays.addEventListener('click',function(e){
  console.log('biscuit');
  const html = `
  <div class="movements__row">
  <div class="movements__type movements__type--deposit">${i+1}</div>
    <div class="movements__date">Lays</div>
    <div class="movements__value">₹30</div>
    <button class="button_two">delete</button>
    </div>
    `;
    i++;
    sum=sum+30;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    lol.textContent=`₹${sum}`;
    const newMovementRow = containerMovements.querySelector('.movements__row');
  const deleteButton = newMovementRow.querySelector('.button_two');
  deleteButton.addEventListener('click', function () {
    const rowId = parseInt(newMovementRow.getAttribute('data-rowid'));
    const valueToRemove = 90; // The value to subtract from sum
    sum = sum - valueToRemove;
    newMovementRow.remove();
    lol.textContent = `₹${sum}`;
  });
});

bread.addEventListener('click',function(e){
  console.log('biscuit');
  const html = `
  <div class="movements__row">
  <div class="movements__type movements__type--deposit">${i+1}</div>
    <div class="movements__date">Bread</div>
    <div class="movements__value">₹45</div>
    <button class="button_two">delete</button>
    </div>
    `;
    i++;sum=sum+45;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    lol.textContent=`₹${sum}`;
    const newMovementRow = containerMovements.querySelector('.movements__row');
  const deleteButton = newMovementRow.querySelector('.button_two');
  deleteButton.addEventListener('click', function () {
    const rowId = parseInt(newMovementRow.getAttribute('data-rowid'));
    const valueToRemove = 90; // The value to subtract from sum
    sum = sum - valueToRemove;
    newMovementRow.remove();
    lol.textContent = `₹${sum}`;
  });
});

pulses.addEventListener('click',function(e){
  console.log('biscuit');
  const html = `
  <div class="movements__row">
  <div class="movements__type movements__type--deposit">${i+1}</div>
    <div class="movements__date">Pulses</div>
    <div class="movements__value">₹110</div>
    <button class="button_two">delete</button>
    </div>
    `;
    i++;sum=sum+110;
    containerMovements.insertAdjacentHTML('afterbegin', html);
    lol.textContent=`₹${sum}`;
    const newMovementRow = containerMovements.querySelector('.movements__row');
  const deleteButton = newMovementRow.querySelector('.button_two');
  deleteButton.addEventListener('click', function () {
    const rowId = parseInt(newMovementRow.getAttribute('data-rowid'));
    const valueToRemove = 90; // The value to subtract from sum
    sum = sum - valueToRemove;
    newMovementRow.remove();
    lol.textContent = `₹${sum}`;
  });
});

document.querySelectorAll('.add-to-cart').forEach(button => {

  button.addEventListener('click', e => {

      button.classList.toggle('added');

  });

});
cart.addEventListener('click',function(e){
  console.log('cart');
  debit.textContent=`₹${sum+230}`;
  

})

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
let interval = null;


document.querySelector("#main").onmouseover = event => {  
  
  
  let iteration = 0;
  
  
  clearInterval(interval);
  
  
  interval = setInterval(() => {
    
    
    event.target.innerText = event.target.innerText
      .split("")
    
    	
      .map((letter, index) => {
      
      	 
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      	
        return letters[Math.floor(Math.random() * 26)]
      })
    
    	
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    
    iteration += 1 / 3;
    
  
  }, 20);
}
contactUs.addEventListener("click", (e) =>{
  e.preventDefault();
 document.querySelector(".modalWindow").classList.toggle("hide");
})