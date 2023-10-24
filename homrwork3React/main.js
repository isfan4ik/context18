const title =document.getElementById('title');
const price = document.getElementById('price');
const btn = document.getElementById('btn');
const list = document.querySelector('.list');

let products = getLocalStorage();


let id = new Date().getTime().toString().slice(-5, -1);

let img = 'https://picsum.photos/id/1/200/300'



btn.addEventListener('click', (e) =>{
  e.preventDefault();
  addToLocalStorage(id, title.value, price.value, img)
  title.value=''
  price.value=''
})



function getLocalStorage() {
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}


function addToLocalStorage(id,name,price,img) {
  let product = {id,name,price,img}
  let products = getLocalStorage();
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));
}



window.addEventListener('DOMContentLoaded', () => {
   let display = products.map((item) => {
     return `
     <li class="item" data-id=${item.id}>
     <img src="${item.img}" alt=""
     <h2>${item.name}</h2>
     <h2>${item.price}</h2>
     <button id="basket">basket</button>
     </li>
     `
   })
   display = display.join('')
   list.innerHTML = display;




   const basket = document.querySelectorAll('#basket')
   

   for (let i = 0; i < basket.length; i++) {
      basket[i].addEventListener('click' , (e) => {
        let el = e.target.parentElement;
        let uid = el.getAttributeNode("data-id").value 
        let res = products.find((item) => item.id === uid)
        // addTobasket(res.id, res.price, res.name, res.img)
        console.log(res);
      })
   }
   
//    basket.addEventListener('click', (e) => {
//       let el = e.target.parentElement;
//       console.log(el);
//    } )

}) 


function getbasket() {
  return localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
}


function addTobasket(id,name, price, img) {
  let product = {id,name,price,img};
  let products = getbasket();
  product.push(product);
  localStorage.setItem('basket', JSON.stringify(products));
}