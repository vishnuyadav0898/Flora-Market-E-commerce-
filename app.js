   const data = [ 
   // deal-of-the -day
    { id: 1, image: "./images/dod-product01.avif", oldPrice: 200, newPrice: 160, isAddedToCart: false, category: "deal-of-the-day",description:"Vibrant red roses to enhance your garden's beauty."},
    { id: 2, image: "./images/dod-product02.avif", oldPrice: 220, newPrice: 180, isAddedToCart: false, category: "deal-of-the-day",description:"Aromatic lavender that adds a soothing fragrance."},
    { id: 3, image: "./images/dod-product03.webp", oldPrice: 240, newPrice: 200, isAddedToCart: false, category: "deal-of-the-day",description:"Ergonomic trowel for digging and planting."},
    { id: 4, image: "./images/dod-product04.avif", oldPrice: 260, newPrice: 220, isAddedToCart: false, category: "deal-of-the-day",description:"Colorful purple blooms for an elegant garden touch."},
    { id: 5, image: "./images/dod-product05.avif", oldPrice: 280, newPrice: 240, isAddedToCart: false, category: "deal-of-the-day",description:"Classic terracotta pot, ideal for root ventilation."},
    { id: 6, image: "./images/dod-product06.avif", oldPrice: 300, newPrice: 260, isAddedToCart: false, category: "deal-of-the-day",description:"Easy-to-grow marigold, perfect for sunny spots."},
    { id: 7, image: "./images/dod-product07.avif", oldPrice: 320, newPrice: 280, isAddedToCart: false, category: "deal-of-the-day",description:"Durable plastic planter, great for small plants."},
    { id: 8, image: "./images/dod-product08.webp", oldPrice: 340, newPrice: 300, isAddedToCart: false, category: "deal-of-the-day",description:"Space-saving hanging pot, perfect for small herbs."},
    { id: 9, image: "./images/dod-product09.avif", oldPrice: 360, newPrice: 320, isAddedToCart: false, category: "deal-of-the-day",description:"Elegant glazed ceramic pot for indoor or outdoor plants."},
    { id: 10, image: "./images/dod-product10.avif", oldPrice: 380, newPrice: 340, isAddedToCart: false, category: "deal-of-the-day",description:"Sharp shears for trimming shrubs and flowers."},
    // best-seller
    { id: 11, image: "./images/best-seller-product01.jpg", oldPrice: 200, newPrice:180, isAddedToCart: false, category: "best-seller",description:"Organic treatment for plant diseases and infections."},
    { id: 12, image: "./images/best-seller-product02.jpg", oldPrice: 210, newPrice: 190, isAddedToCart: false, category: "best-seller",description:"Growth booster and pest protector for all plants."},
    { id: 13, image: "./images/best-seller-product03.jpg", oldPrice: 220, newPrice: 200, isAddedToCart: false, category: "best-seller",description:"Strong, easy-to-use stakes to support growing plants."},
    { id: 14, image: "./images/best-seller-product04.jpg", oldPrice: 230, newPrice: 210, isAddedToCart: false, category: "best-seller",description:"100% natural fertilizer for healthier plants."},
    { id: 15, image: "./images/best-seller-product05.jpg", oldPrice: 240, newPrice: 220, isAddedToCart: false, category: "best-seller",description:"Nutrient-rich soil mix for optimal plant growth."},
    { id: 16, image: "./images/best-seller-product06.jpg", oldPrice: 250, newPrice: 230, isAddedToCart: false, category: "best-seller",description:"Sharp, ergonomic shears for precise plant trimming."},
    { id: 17, image: "./images/best-seller-product07.jpg", oldPrice: 260, newPrice: 240, isAddedToCart: false, category: "best-seller",description:"Durable plastic planter, great for small plants."},
    { id: 18, image: "./images/best-seller-product08.jpg", oldPrice: 270, newPrice: 250, isAddedToCart: false, category: "best-seller",description:"Space-saving hanging pot, perfect for small herbs."},
    { id: 19, image: "./images/best-seller-product09.jpg", oldPrice: 280, newPrice: 260, isAddedToCart: false, category: "best-seller",description:"Elegant glazed ceramic pot for indoor or outdoor plants."},
    { id: 20, image: "./images/best-seller-product010.jpg", oldPrice: 290, newPrice: 270, isAddedToCart: false, category: "best-seller",description:"Sharp shears for trimming shrubs and flowers."},
    // pots only
    { id: 21, image: "./images/po-product01.avif", oldPrice: 290, newPrice: 270, isAddedToCart: false, category: "pots-only",description:"Dark leaves with white blooms; prefers low light."},
    { id: 22, image: "./images/po-product02.avif", oldPrice: 310, newPrice: 290, isAddedToCart: false, category: "pots-only",description:"Elegant tree with large leaves; needs bright light."},
    { id: 23, image: "./images/po-product03.avif", oldPrice: 330, newPrice: 320, isAddedToCart: false, category: "pots-only",description:"Striking with long leaves,air-purifying and low light tolerant."},
    { id: 24, image: "./images/po-product04.avif", oldPrice: 350, newPrice: 330, isAddedToCart: false, category: "pots-only",description:"Trailing vine; resilient and air-purifying."},
    { id: 25, image: "./images/po-product05.avif", oldPrice: 370, newPrice: 350, isAddedToCart: false, category: "pots-only",description:"Hardy plant with arching leaves; loves indirect sunlight."},
    { id: 26, image: "./images/po-product06.avif", oldPrice: 390, newPrice: 370, isAddedToCart: false, category: "pots-only",description:"Glossy leaves; needs bright, indirect light."},
    { id: 27, image: "./images/po-product07.avif", oldPrice: 410, newPrice: 390, isAddedToCart: false, category: "pots-only",description:"tolerates low light and infrequent watering."},
    { id: 28, image: "./images/po-product08.avif", oldPrice: 420, newPrice: 400, isAddedToCart: false, category: "pots-only",description:"Low-maintenance plant; thrives in low light."},
    { id: 29, image: "./images/po-product09.avif", oldPrice: 430, newPrice: 410, isAddedToCart: false, category: "pots-only",description:"Lush and feathery; prefers humidity and indirect light."},
    { id: 30, image: "./images/po-product10.avif", oldPrice: 440, newPrice: 420, isAddedToCart: false, category: "pots-only",description:"Succulent with soothing gel; thrives in bright light."}
    
  ];
    //function to navigate section
 function navigateToSection() {
    var selectedSection = document.getElementById("categories").value;
    if (selectedSection) {
      document.getElementById(selectedSection).scrollIntoView({ behavior: 'smooth' });
    }
  }

     const open_nav = document.querySelector(".open-colaps-nav");
     const close_nav = document.querySelector(".close-nav");
     const colaps_nav = document.querySelector(".colaps-nav");
       close_nav.addEventListener("click",()=>(colaps_nav.style.display="none" ));
       open_nav.addEventListener("click",()=>(colaps_nav.style.display="block" ));
     //function to display data 
 function setdata(products,category) {
     const product_container = document.querySelector(`.${category}-container`);
    const filter_products = products.filter(product=>
        product.category===category)
        filter_products.forEach((e)=>{
        const productdiv = document.createElement("div")
        productdiv.className = "product";
        productdiv.innerHTML=`<img src=${e.image} alt=${e.id}>
         <p class="description">${e.description}</p>
         <p class="price">
           <span class="old-price">₹${e.oldPrice}</span>
           <span class="new-price">₹${e.newPrice}</span>
        </p>
        <button class="add-to-cart">${e.isAddedToCart?"PICKED":"PICK NOW"}</button> `;
          const button = productdiv.querySelector(".add-to-cart");
           button.addEventListener("click",()=>{
            e.isAddedToCart=!e.isAddedToCart;
            button.innerText = e.isAddedToCart?"PICKED":"PICK NOW";
            if (e.isAddedToCart) {
                button.classList.add("in-cart")
                
            }else{
                button.classList.remove("in-cart")
                
            }
          });

        product_container.appendChild(productdiv); 
      });
     }
     //function call with category
    setdata(data,"deal-of-the-day");
    setdata(data,"pots-only");
    setdata(data,"best-seller");
           //function for cart data
        function product_incart(data) {
          let incart = data.filter(product => product.isAddedToCart);
          const cartItemsContainer = document.querySelector(".cart-container");
          cartItemsContainer.innerHTML="";
      
          incart.forEach(product => {
              const productElement = document.createElement("div");
              productElement.className = "cart-item";
              productElement.innerHTML = `
                 <img src=${product.image} alt=${product.id}>
        <p class="price">
          <span class="old-price">₹${product.oldPrice}</span>
          <span class="new-price">₹${product.newPrice}</span>
        </p>
              `;
              cartItemsContainer.appendChild(productElement);
          });
          const total = document.querySelector(".total");
          const cart_value = document.querySelector(".cart-value");
          const grand_total = document.querySelector(".grand-total");
          total.innerHTML = `CART-WEIGHT :&nbsp;&nbsp;&nbsp;${incart.length}`;

            const totaloldprice = incart.reduce((total,product)=>total+(product.oldPrice||0),0)
            cart_value.innerHTML = `CART-VALUE :&nbsp;&nbsp;&nbsp;₹ <span>${totaloldprice}<span/>`;
            const totalnewprice = incart.reduce((total,product)=>total+(product.newPrice||0),0)
            grand_total.innerHTML = `GRAND-TOTAL :&nbsp;₹ <span>${totalnewprice}<span/>`;
      }
      
      const cart_button = document.querySelector(".shoping-cart");
      const cart_section = document.querySelector("#cart");
      
      cart_button.addEventListener("click", () => {
         product_incart(data);
          cart_section.style.display = "block";
      });
     
      document.querySelector(".close").addEventListener("click", () => {
          cart_section.style.display = "none";
      });

         const log_out_button = document.querySelector(".logout")
         const auth_box = document.querySelector(".auth-box");
         const allsection = document.querySelectorAll("section ");
         const footer = document.querySelector("footer")
          //user log out func
      function log_out() {
        allsection.forEach( (e)=>{
          e.style.display = "none";
       })
         footer.style.display = "none";
         cart_button.style.display = "none";
         auth_box.style.display = "block"
       }
        log_out();
        document.querySelector(".Logout").addEventListener("click",log_out)
        const sign_up_box = document.querySelector(".sign-up-box")
       const log_in_box = document.querySelector(".log-in-box")

         document.querySelector(".signup-user").addEventListener("click",()=>{
         sign_up_box.style.display = "block";
        log_in_box.style.display = "none";
        })
         document.querySelector(".login-user").addEventListener("click",()=>{
        log_in_box.style.display = "block";
        sign_up_box.style.display = "none";
       })
       //storing email to localstorage
         const email_arr = JSON.parse(localStorage.getItem("email_arr"))||[];
         document.querySelector(".sign-up-button").addEventListener("click",()=>{
        const email =  document.querySelector(".signup-email-box").value;
            
        if (email_arr.includes(email)) {
            alert("email alredy used , try to log in please")
        }else{
            email_arr.push(email);
            localStorage.setItem("email_arr",JSON.stringify(email_arr));
        if (email_arr.length === 0 ) {
            alert("email is requried")
        }else{
            allsection.forEach( (e)=>{
            e.style.display = "block";
         })
          footer.style.display = "block";
          cart_button.style.display = "block";
          auth_box.style.display = "none"
        }
      }
     })
     document.querySelector(".log-in-button").addEventListener("click",()=>{
          let email =  document.querySelector(".login-email-box").value;
       if (email_arr.includes(email)) {
          allsection.forEach( (e)=>{
          e.style.display = "block";
          })
          footer.style.display = "block";
          cart_button.style.display = "block";
          auth_box.style.display = "none"
     }else{
        
         alert("email confirmation failed ,enter again")
     }
   
   })