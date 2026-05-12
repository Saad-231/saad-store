// Loader

window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "none";
});

// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Theme Toggle

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Product Data

const products = [
  {
    id:1,
    name:"Gaming Headset",
    category:"Gaming",
    price:120,
    oldPrice:180,
    image:"https://images.unsplash.com/photo-1585298723682-7115561c51b7?q=80&w=800",
  },

  {
    id:2,
    name:"Smart Watch",
    category:"Watches",
    price:220,
    oldPrice:300,
    image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
  },

  {
    id:3,
    name:"Nike Shoes",
    category:"Shoes",
    price:150,
    oldPrice:200,
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
  },

  {
    id:4,
    name:"Wireless Headphones",
    category:"Headphones",
    price:199,
    oldPrice:250,
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
  },

  {
    id:5,
    name:"Laptop",
    category:"Electronics",
    price:999,
    oldPrice:1200,
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800",
  },

  {
    id:6,
    name:"Fashion Jacket",
    category:"Fashion",
    price:89,
    oldPrice:120,
    image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800",
  },

  {
    id:7,
    name:"Gaming Keyboard",
    category:"Gaming",
    price:140,
    oldPrice:180,
    image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800",
  },

  {
    id:8,
    name:"iPhone",
    category:"Electronics",
    price:1400,
    oldPrice:1600,
    image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800",
  },

  {
    id:9,
    name:"Bluetooth Speaker",
    category:"Electronics",
    price:120,
    oldPrice:160,
    image:"https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=800",
  },

  {
    id:10,
    name:"Men Sneakers",
    category:"Shoes",
    price:100,
    oldPrice:140,
    image:"https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=800",
  },
  {
  id:11,
  name:"DSLR Camera",
  category:"Electronics",
  price:850,
  oldPrice:1000,
  image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
},

{
  id:12,
  name:"Gaming Mouse",
  category:"Gaming",
  price:70,
  oldPrice:100,
  image:"https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=800",
},

{
  id:13,
  name:"Luxury Watch",
  category:"Watches",
  price:350,
  oldPrice:450,
  image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800",
},

{
  id:14,
  name:"AirPods Pro",
  category:"Headphones",
  price:250,
  oldPrice:320,
  image:"https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=800",
},

{
  id:15,
  name:"Leather Jacket",
  category:"Fashion",
  price:140,
  oldPrice:200,
  image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800",
},

{
  id:16,
  name:"RGB Gaming Chair",
  category:"Gaming",
  price:420,
  oldPrice:500,
  image:"https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=800",
},

{
  id:17,
  name:"Smartphone Stand",
  category:"Mobile Accessories",
  price:35,
  oldPrice:50,
  image:"https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=800",
},

{
  id:18,
  name:"MacBook Pro",
  category:"Electronics",
  price:2100,
  oldPrice:2400,
  image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800"
},
{
  id:19,
  name:"Running Shoes",
  category:"Shoes",
  price:130,
  oldPrice:180,
  image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800"
},

{
  id:20,
  name:"Wireless Charger",
  category:"Mobile Accessories",
  price:60,
  oldPrice:90,
  image:"https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800"
}

];


const productsGrid = document.getElementById("productsGrid");

// Render Products

function renderProducts(items){

  productsGrid.innerHTML = "";

  items.forEach(product => {

    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <span class="sale-badge">SALE</span>

      <img loading="lazy" src="${product.image}" alt="">

      <div class="product-content">

        <h3>${product.name}</h3>

        <p>⭐⭐⭐⭐⭐</p>

        <p>Premium quality ${product.category} product.</p>

        <div class="price">
          <h4>$${product.price}</h4>
          <span class="old-price">$${product.oldPrice}</span>
        </div>

        <p>PKR ${(product.price * 280).toLocaleString()}</p>

        <div class="product-buttons">

          <button class="add-cart"
            onclick="addToCart(${product.id})">
            Add to Cart
          </button>

          <button class="wishlist">
            <i class="fa fa-heart"></i>
          </button>

        </div>

      </div>
    `;

    productsGrid.appendChild(card);

  });

}

renderProducts(products);

// Filter Products

document.getElementById("filterCategory")
.addEventListener("change", e => {

  const value = e.target.value;

  if(value === "all"){
    renderProducts(products);
  }else{
    const filtered = products.filter(
      p => p.category === value
    );

    renderProducts(filtered);
  }

});

// Search

document.getElementById("searchInput")
.addEventListener("input", e => {

  const value = e.target.value.toLowerCase();

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(value)
  );

  renderProducts(filtered);

});

// Cart System

let cart = [];

function addToCart(id){

  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);

  if(existing){
    existing.quantity++;
  }else{
    cart.push({...product, quantity:1});
  }

  updateCart();

  showToast(`${product.name} added to cart`);
}

function updateCart(){

  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  cartItems.innerHTML = "";

  let total = 0;
  let count = 0;

  cart.forEach(item => {

    total += item.price * item.quantity;
    count += item.quantity;

    cartItems.innerHTML += `
      <div class="cart-item">

        <div>
          <h4>${item.name}</h4>
          <p>$${item.price} x ${item.quantity}</p>
        </div>

        <div>
          <button onclick="changeQty(${item.id},1)">+</button>
          <button onclick="changeQty(${item.id},-1)">-</button>
        </div>

      </div>
    `;

  });

  cartCount.innerText = count;
  cartTotal.innerText = `$${total}`;

}

function changeQty(id, change){

  const item = cart.find(i => i.id === id);

  item.quantity += change;

  if(item.quantity <= 0){
    cart = cart.filter(i => i.id !== id);
  }

  updateCart();

}

// Cart Sidebar

const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");

cartBtn.addEventListener("click", () => {
  cartSidebar.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
});

// WhatsApp Order

document.getElementById("orderBtn")
.addEventListener("click", () => {

  if(cart.length === 0){
    showToast("Cart is empty");
    return;
  }

  let message = "🛒 *Saad Store Order* %0A%0A";

  let total = 0;

  cart.forEach(item => {

    total += item.price * item.quantity;

    message += `📦 ${item.name} x ${item.quantity} - $${item.price * item.quantity}%0A`;

  });

  message += `%0A💰 Total: $${total}`;

  const url = `https://wa.me/923476719429?text=${message}`;

  window.open(url, "_blank");

});

// Toast

function showToast(text){

  const toast = document.getElementById("toast");

  toast.innerText = text;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);

}
const subscribeBtn = document.querySelector(".newsletter-box button");
const subscribeInput = document.querySelector(".newsletter-box input");

subscribeBtn.addEventListener("click", () => {

  if(subscribeInput.value === ""){
    showToast("Please enter your email");
    return;
  }

  showToast("🎉 Successfully Subscribed!");

  subscribeInput.value = "";

});
const message = document.getElementById("subscribeMessage");

subscribeBtn.addEventListener("click", () => {

  if(subscribeInput.value === ""){
    message.innerHTML = "❌ Enter your email";
    message.style.color = "red";
    return;
  }

  message.innerHTML = "✅ Thanks for subscribing!";
  message.style.color = "lime";

  subscribeInput.value = "";

});
