import {cart,removeFun,incFun,deccFun ,savetolocals} from "./cart.js";

//2
let dataCart=[
    {
        id:1,
        name: 'tea',
        price: 750
    },
    {
        id:2,
        name:'Cappucino',
        price:4000
    },
    {
        id:3,
        name: 'Caramel Latte',
        price:4000
    },
    {
        id:4,
        name: 'Espresso Single',
        price:2500
    },
    {
        id:5,
        name: 'Espresso Double',
        price:3000
    },
    {
        id:6,
        name: 'Vanilla Latte',
        price:4000
    },
    {
        id:7,
        name: 'Spanish Latte',
        price:4000
    },
    {
        id:8,
        name: 'Ginger Lemon Tea',
        price:3000
    },
    {
        id:9,
        name: 'Hot Chocolate',
        price:3500
    },
    {
        id:10,
        name: 'Kazwan Coffee',
        price:2500
    },
    {
        id:11,
        name: 'Green Tea',
        price:2000
        
    },
    {
        id:12,
        name: 'Latte',
        price:4000
    },
    {
        id:13,
        name: 'Milk Nescafe',
        price: 3000
    },
    {
        id:14,
        name:'Mocha',
        price:4000
    },
    {
        id:15,
        name: 'Nescafe Black',
        price:2500
    },
    {
        id:16,
        name: 'Turkish Coffe',
        price:3000
    },
    {
        id:17,
        name: 'Sahleb',
        price:3000
    },
    {
        id:18,
        name: 'Americano',
        price:3000
    },
    {
        id:19,
        name: 'Nutella Crepe',
        price:5000
    },
    {
        id:20,
        name: 'Lotus Crepe',
        price:5000
    },
    {
        id:21,
        name: 'Kinder Crepe',
        price:5000
    },
    {
        id:22,
        name: 'Pistachio Crepe',
        price:5000
    },
    {
        id:23,
        name: 'Mini Pancake',
        price:4000
    },
    {
        id:24,
        name: 'Pancake',
        price:5000
    },
    {
        id:25,
        name: 'Caramel Frappe',
        price:4500
    },
    {
        id:26,
        name: 'Ice Americano',
        price:3000
    },
    {
        id:27,
        name: 'Ice Mocha',
        price: 4000
    },
    {
        id:28,
        name: 'Ice Caramel Latte',
        price:4000
    },
    {
        id:29,
        name: 'Ice Vanilla Latte',
        price:4000
    },
    {
        id:30,
        name: 'Ice Latte',
        price:4000
    },
    {
        id:31,
        name: 'Ice Spanish Latte',
        price:4000
    },
    {
        id:32,
        name: 'Cherry Mohito',
        price:4000
    },
    {
        id:33,
        name: 'Pineapple Mohito',
        price:4000
    },
    {
        id:34,
        name: 'Strawberry Mohito',
        price:4000
    },
    {
        id:35,
        name: 'BlueBerry Mohito',
        price:4000
    },
    {
        id:36,
        name: 'Pomegrante Mohito',
        price:4000
    },
    {
        id:37,
        name:'Mexican Blueberry Energy',
        price:4000
    },
    {
        id:38,
        name:'Strawberry Energy',
        price:4000
    },
    {
        id:39,
        name:'Pomegranate Energy',
        price:4000
    },
    {
        id:40,
        name:'Blue  Hawaii',
        price:4000
    },
    {
        id:41,
        name:'PineApple Energy',
        price:4000
    },
    {
        id:42,
        name:'Mango Energy',
        price:4000
    },
    {
        id:43,
        name:'Mexican Energy',
        price:4000
    },
    {
        id:44,
        name:'Blueberry Smoothie',
        price:4000
    },
    {
        id:45,
        name:'Mango Cocktail Smoothie',
        price:4000
    },
    {
        id:46,
        name:'Passion Fruit Smoothie',
        price:4000
    },
    {
        id:47,
        name:'PineApple Smoothie',
        price:4000
    },
    {
        id:48,
        name:'Strawberry Smoothie',
        price:4000
    },
    {
        id:49,
        name:'Oreo Milkshake',
        price:5000
    },
    {
        id:50,
        name:'Lotus Milkshake',
        price:5000
    },
    {
        id:51,
        name:'Nutella Milkshake',
        price:5000
    },
    {
        id:52,
        name:'Kinder Milkshake',
        price:5000
    },
    {
        id:53,
        name:'Pistachio Milkshake',
        price:5000
    },
    {
        id:54,
        name:'Strawberry Milkshake',
        price:5000
    },
    {
        id:55,
        name:'Caramella Milkshake',
        price:5000
    },
    {
        id:56,
        name:'Pomogranate Fresh Juice',
        price:5000
    },
    {
        id:57,
        name:'Avocado Fresh Juice',
        price:5000
    },
    {
        id:58,
        name:'Banana Milk Fresh Juice',
        price:4000
    },
    {
        id:59,
        name:'Fruit Cocktail Fresh Juice',
        price:4000
    },
    {
        id:60,
        name:'Lemon Mint Fresh Juice',
        price:4000
    },
    {
        id:61,
        name:'Lemon Fresh Juice',
        price:4000
    },
    {
        id:62,
        name:'Orange Fresh Juice',
        price:4000
    },
    {
        id:63,
        name:'Pineapple Fresh Juice',
        price:5000
    },
    {
        id:64,
        name:'Fresh Hookah',
        price:15000
    },
    {
        id:65,
        name:'Gum Mint Hookah',
        price:8000
    },
    {
        id:66,
        name:'Lemon Mint Hookah',
        price:8000
    },
    {
        id:67,
        name:'English Hookah',
        price:8000
    },
    {
        id:68,
        name:'Two Apples Hookah',
        price:8000
    },
    {
        id:69,
        name:'Meta Hookah',
        price:8000
    },
    {
        id:70,
        name:'1 Hour Billiard',
        price:10000
    },
    {
        id:71,
        name:'1 Hour Playstation',
        price:8000
    }
  ];
  //
  
  let htmlsum=``; // Initialize htmlsum as an empty string
  let totp=0;
  cart.forEach((cartitem) => {
      let matching;
  
      dataCart.forEach((product) => {
          if (product.id == cartitem.productid)
              matching = product;
      });
  
      if (matching) {
          htmlsum +=
          `
              <div class="l${matching.id}" id="xsmdiv"><div class="xsmdiv1"><div class="js-khalaf"><button class="js-max" data-es-id=${matching.id}><img src="img/plusicon.png" class="xsmm3"></button><button class="js-min" ><img src="img/minusicon.png" class="xsmm3"></button></div><p class="xmm1">${cartitem.quantity}</p> <p class="xmm2">${matching.name}</p> </div> <div class="pricet">${(matching.price*cartitem.quantity).toLocaleString()} IQD</div> </div>
          `;
          totp+=matching.price*cartitem.quantity;
          if (!isNaN(totp)) { // Check if 'totp' is a valid number
            document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
        } else {
            console.error('Error: Invalid total price value.');
        }
      }
  });
//end of 2

  
  document.querySelector('.checkitems').innerHTML = htmlsum;
  console.log(cart);
  console.log(htmlsum);
//3
  document.querySelector('.checkitems').addEventListener('click', (event) => {
    // Check if the clicked element is a button with the class 'js-del-it'
    if (event.target && event.target.closest('.js-del-it')) {
        let button = event.target.closest('.js-del-it');
        let but = button.dataset.esId;
        let but2 = button.dataset.priSub;
        let but3 = Number(button.dataset.priDell);

        console.log(but);
        removeFun(but); // Assuming this function removes the item from cart array or whatever your data model is.
        document.querySelector(`.l${but}`).remove(); // Remove the item from the display

        totp -= Number(but2); // Subtract the item's price from the total
        document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: ${totp.toLocaleString()} IQD</div>`;

        // Update the cart count in localStorage
        let myVariable = localStorage.getItem('countcart');
        myVariable = parseInt(myVariable) - but3;
        localStorage.setItem('countcart', myVariable);
    }
});



  //end of 3
  

  //
  // Attach event listener for 'click' on the parent element
document.querySelector('.checkitems').addEventListener('click', (event) => {
    // Check if the clicked element is a button with the class 'js-max'
    if (event.target && event.target.closest('.js-max')) {
        let elcon = event.target.closest('.js-max').dataset.esId;
        let htmsummax = '';
        totp = 0; // Reset total price each time to calculate it properly

        // Loop through cart items
        cart.forEach((cartitem) => {
            let matching;
            
            // Find the matching product from the dataCart
            dataCart.forEach((product) => {
                if (product.id == cartitem.productid) {
                    matching = product;
                }
            });

            // If product found, increment quantity and rebuild the HTML for cart item
            if (matching) {
                if (matching.id == elcon) {
                 // Increment the quantity of the clicked item
                    incFun(elcon);
                }

                htmsummax += `
                    <div class="l${matching.id}" id="xsmdiv">
                        <div class="xsmdiv1">
                            <div class="js-khalaf">
                            <button class="js-max" data-es-id=${matching.id}>
                                <img src="img/plusicon.png" class="xsmm3">
                            </button>
                            <button class="js-min">
                                <img src="img/minusicon.png" class="xsmm3">
                            </button>
                            </div>
                            <p class="xmm1">${cartitem.quantity}</p> 
                            <p class="xmm2">${matching.name}</p>
                           
                        </div> 
                        <div class="pricet">${(matching.price * cartitem.quantity).toLocaleString()} IQD</div>
                    </div>
                `;

                // Update total price
                totp += matching.price * cartitem.quantity;
            }
        });

        // Update the cart display with the new content
        document.querySelector('.checkitems').innerHTML = htmsummax;

        // Update the total price display
        if (!isNaN(totp)) {
            document.querySelector('.hiawi').innerHTML = `<div class"hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
        } else {
            console.error('Error: Invalid total price value.');
        }
    }
});

  



let isClickedOnce = false;
// Attach event listener for 'click' on the parent element
document.querySelector('.checkitems').addEventListener('click', (event) => {
    // Check if the clicked element is a button with the class 'js-min'
    if (event.target && event.target.closest('.js-min')) {
        let elcon2 = event.target.closest('.js-min').dataset.esId;
        let htmsummin = ''; // Renamed variable
        totp = 0; // Reset total price each time to calculate it properly

        // Loop through cart items
        cart.forEach((cartitem) => {
            let matching;
            
            // Find the matching product from the dataCart
            dataCart.forEach((product) => {
                if (product.id == cartitem.productid) {
                    matching = product;
                }
            });

            // If product found, decrement quantity and rebuild the HTML for cart item
            if (matching) {
                if (matching.id == elcon2) {
                    if (cartitem.quantity == 1) {
                        removeFun(elcon2);
                        window.location.reload(true);
                        document.querySelector(`.l${elcon2}`).remove(); // Remove the item from the DOM
                        removeFun(elcon2);
                        if(cart.length === 0) {
                            const button123 = document.querySelector('.butex2');
                            button123.click();
                        }
                        document.querySelector(`.l${elcon2}`).remove();
                        removeFun(elcon2);
                        document.querySelector(`.l${elcon2}`).remove();
                        
                    } else if (cartitem.quantity > 1) {
                        // Decrement the quantity if greater than 1
                        deccFun(elcon2); // Decrement the quantity
                    }
                }
                totp += matching.price * cartitem.quantity;

                htmsummin += `
                    <div class="l${matching.id}" id="xsmdiv">
                        <div class="xsmdiv1">
                            <div class="js-khalaf">
                                <button class="js-max" data-es-id=${matching.id}>
                                    <img src="img/plusicon.png" class="xsmm3">
                                </button>
                                <button class="js-min" data-es-id=${matching.id}>
                                    <img src="img/minusicon.png" class="xsmm3">
                                </button>
                            </div>
                            <p class="xmm1">${cartitem.quantity}</p> 
                            <p class="xmm2">${matching.name}</p>
                        </div> 
                        <div class="pricet">${(matching.price * cartitem.quantity).toLocaleString()} IQD</div>
                    </div>
                `;

                // Update total price
                
                if (!isNaN(totp)) {
                    document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
                }
            }
        });

        // Update the cart display with the new content
        document.querySelector('.checkitems').innerHTML = htmsummin;

        // Update the total price display
        if (!isNaN(totp)) {
            document.querySelector('.hiawi').innerHTML = `<div class="hiawi wtf">Total price: </div><div class="khalaf">${totp.toLocaleString()} IQD</div>`;
        }
    }
});









  document.querySelector('.butex2').addEventListener('click',()=>{
    document.querySelector('.checkitems').innerHTML='';
    cart.length=0;
    document.querySelector('.hiawi').innerHTML='';
    savetolocals();
    let c123=0;
    localStorage.setItem("countcart",c123.toString());
  });

  
  
//

