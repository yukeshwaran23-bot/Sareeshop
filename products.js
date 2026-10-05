/* ==========================================
   VARNAM SILKS
   PRODUCT PAGE JAVASCRIPT
   ========================================== */


/* ==========================================
   PRODUCT DATA
   ========================================== */

const products = [

    {
        id: 1,
        name: "Elegant Silk Saree 01",
        type: "Silk Sarees",
        price: 2999,
        image: "images/saree-01.jpg"
    },

    {
        id: 2,
        name: "Classic Silk Saree 02",
        type: "Silk Sarees",
        price: 3299,
        image: "images/saree-02.jpg"
    },

    {
        id: 3,
        name: "Traditional Silk Saree 03",
        type: "Wedding Sarees",
        price: 3999,
        image: "images/saree-03.jpg"
    },

    {
        id: 4,
        name: "Royal Silk Saree 04",
        type: "Wedding Sarees",
        price: 4499,
        image: "images/saree-04.jpg"
    },

    {
        id: 5,
        name: "Designer Silk Saree 05",
        type: "Designer Sarees",
        price: 3699,
        image: "images/saree-05.jpg"
    },

    {
        id: 6,
        name: "Elegant Pink Saree 06",
        type: "Designer Sarees",
        price: 2899,
        image: "images/saree-06.jpg"
    },

    {
        id: 7,
        name: "Blue Zari Saree 07",
        type: "Silk Sarees",
        price: 3499,
        image: "images/saree-07.jpg"
    },

    {
        id: 8,
        name: "Classic Handloom Saree 08",
        type: "Silk Sarees",
        price: 3199,
        image: "images/saree-08.jpg"
    },

    {
        id: 9,
        name: "Green Designer Saree 09",
        type: "Designer Sarees",
        price: 3799,
        image: "images/saree-09.jpg"
    },

    {
        id: 10,
        name: "Pink Gold Saree 10",
        type: "Wedding Sarees",
        price: 4299,
        image: "images/saree-10.jpg"
    },

    {
        id: 11,
        name: "Pink Green Silk Saree 11",
        type: "Silk Sarees",
        price: 3599,
        image: "images/saree-11.jpg"
    },

    {
        id: 12,
        name: "Turquoise Pink Saree 12",
        type: "Designer Sarees",
        price: 3399,
        image: "images/saree-12.jpg"
    },

    {
        id: 13,
        name: "Mint Maroon Saree 13",
        type: "Designer Sarees",
        price: 3699,
        image: "images/saree-13.jpg"
    },

    {
        id: 14,
        name: "Purple Zari Saree 14",
        type: "Silk Sarees",
        price: 3899,
        image: "images/saree-14.jpg"
    },

    {
        id: 15,
        name: "Teal Maroon Saree 15",
        type: "Wedding Sarees",
        price: 4199,
        image: "images/saree-15.jpg"
    },

    {
        id: 16,
        name: "Pastel Purple Saree 16",
        type: "Silk Sarees",
        price: 3299,
        image: "images/saree-16.jpg"
    },

    {
        id: 17,
        name: "Cream Purple Saree 17",
        type: "Wedding Sarees",
        price: 4599,
        image: "images/saree-17.jpg"
    },

    {
        id: 18,
        name: "Pink Silver Saree 18",
        type: "Designer Sarees",
        price: 3499,
        image: "images/saree-18.jpg"
    },

    {
        id: 19,
        name: "Mustard Silver Saree 19",
        type: "Designer Sarees",
        price: 2999,
        image: "images/saree-19.jpg"
    },

    {
        id: 20,
        name: "Wine Silver Saree 20",
        type: "Silk Sarees",
        price: 3799,
        image: "images/saree-20.jpg"
    }

];


/* ==========================================
   GET PRODUCT ID
   ========================================== */

const urlParams =
    new URLSearchParams(
        window.location.search
    );

const productId =
    Number(
        urlParams.get("id")
    );


/* ==========================================
   FIND PRODUCT
   ========================================== */

const product =
    products.find(
        item => item.id === productId
    );


/* ==========================================
   PRODUCT ELEMENTS
   ========================================== */

const productDetail =
    document.getElementById(
        "productDetail"
    );


/* ==========================================
   SHOW PRODUCT
   ========================================== */

if (!product) {

    productDetail.innerHTML = `

        <div style="
            padding:50px 20px;
            text-align:center;
        ">

            <h2>
                Product Not Found
            </h2>

            <br>

            <a href="index.html">
                Back to Sarees
            </a>

        </div>

    `;

} else {

    productDetail.innerHTML = `

        <div class="product-detail-image-wrap">

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-detail-image"
            >

        </div>


        <div class="product-detail-info">

            <p class="product-detail-type">
                ${product.type}
            </p>


            <h1>
                ${product.name}
            </h1>


            <div class="product-detail-price">
                ₹${product.price.toLocaleString("en-IN")}
            </div>


            <div class="stock-status">
                ✓ In Stock
            </div>


            <p class="product-description">

                Discover the elegance of
                Varnam Silks with this beautifully
                crafted saree. Perfect for festive
                occasions, celebrations and
                special moments.

            </p>


            <div class="quantity-title">
                Quantity
            </div>


            <div class="quantity-box">

                <button
                    type="button"
                    id="minusBtn"
                >
                    −
                </button>


                <span id="quantityValue">
                    1
                </span>


                <button
                    type="button"
                    id="plusBtn"
                >
                    +
                </button>

            </div>


            <div class="product-action-buttons">

                <button
                    type="button"
                    id="addToCartBtn"
                    class="add-product-cart"
                >
                    Add to Cart
                </button>


                <button
                    type="button"
                    id="buyNowBtn"
                    class="buy-now-btn"
                >
                    Buy Now
                </button>

            </div>


            <div class="delivery-info">

                <h3>
                    🚚 Delivery Information
                </h3>

                <p>
                    Delivery availability and
                    charges will be confirmed
                    during checkout.
                </p>

            </div>

        </div>

    `;

}


/* ==========================================
   QUANTITY
   ========================================== */

let quantity = 1;


const quantityValue =
    document.getElementById(
        "quantityValue"
    );

const minusBtn =
    document.getElementById(
        "minusBtn"
    );

const plusBtn =
    document.getElementById(
        "plusBtn"
    );


if (
    quantityValue &&
    minusBtn &&
    plusBtn
) {

    minusBtn.addEventListener(
        "click",
        function() {

            if (quantity > 1) {

                quantity--;

                quantityValue.textContent =
                    quantity;

            }

        }
    );


    plusBtn.addEventListener(
        "click",
        function() {

            quantity++;

            quantityValue.textContent =
                quantity;

        }
    );

}


/* ==========================================
   GET SAVED CART
   ========================================== */

/* ==========================================
   CUSTOMER CART
   ========================================== */

const API_URL =
    "https://varnam-silks-backend-4.onrender.com";

const CUSTOMER_TOKEN_KEY =
    "varnamCustomerToken";


function getCustomerToken() {

    return localStorage.getItem(
        CUSTOMER_TOKEN_KEY
    );

}


async function getCart() {

    const token =
        getCustomerToken();


    // Guest cart
    if (!token) {

        try {

            const savedCart =
                localStorage.getItem(
                    "varnamCart"
                );

            if (!savedCart) {
                return [];
            }

            return JSON.parse(savedCart);

        } catch (error) {

            return [];

        }

    }


    // Customer account cart
    try {

        const response =
            await fetch(
                API_URL +
                "/api/customer/cart",
                {
                    headers: {
                        Authorization:
                            "Bearer " + token
                    }
                }
            );


        if (!response.ok) {

            throw new Error(
                "Failed to load customer cart"
            );

        }


        const data =
            await response.json();


        return (data.cart || [])
            .map(function(item) {

                const cartProduct =
                    products.find(
                        function(p) {

                            return String(p.id) ===
                                String(item.productId);

                        }
                    );


                if (!cartProduct) {
                    return null;
                }


                return {

                    id: cartProduct.id,

                    name: cartProduct.name,

                    price:
                        Number(
                            cartProduct.price
                        ) || 0,

                    image:
                        cartProduct.image || "",

                    category:
                        cartProduct.type || "",

                    quantity:
                        Number(
                            item.quantity
                        ) || 1

                };

            })
            .filter(Boolean);


    } catch (error) {

        console.error(
            "Customer cart loading failed:",
            error
        );

        return [];

    }

}


async function saveCart(cart) {

    const token =
        getCustomerToken();


    // Guest cart
    if (!token) {

        localStorage.setItem(
            "varnamCart",
            JSON.stringify(cart)
        );

        return;

    }


    try {

        const response =
            await fetch(
                API_URL +
                "/api/customer/cart",
                {
                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json",

                        Authorization:
                            "Bearer " + token
                    },

                    body: JSON.stringify({

                        cart:
                            cart.map(
                                function(item) {

                                    return {

                                        productId:
                                            Number(
                                                item.id
                                            ),

                                        quantity:
                                            Number(
                                                item.quantity
                                            ) || 1

                                    };

                                }
                            )

                    })

                }
            );


        if (!response.ok) {

            throw new Error(
                "Failed to save customer cart"
            );

        }


        console.log(
            "Customer cart saved successfully"
        );


    } catch (error) {

        console.error(
            "Customer cart save failed:",
            error
        );

    }

}


/* ==========================================
   ADD TO CART
   ========================================== */

const addToCartBtn =
    document.getElementById(
        "addToCartBtn"
    );


if (addToCartBtn) {

    addToCartBtn.addEventListener(
        "click",
        async function() {

            if (!product) {
                return;
            }


            const cart =
                await getCart();


            const existing =
                cart.find(
                    item =>
                        String(item.id) ===
                        String(product.id)
                );


            if (existing) {

                existing.quantity +=
                    quantity;

            } else {

                cart.push({

                    id: product.id,

                    name: product.name,

                    price: product.price,

                    image: product.image,

                    category: product.type,

                    quantity: quantity

                });

            }


            await saveCart(cart);


            addToCartBtn.textContent =
                "✓ Added to Cart";


            setTimeout(
                function() {

                    addToCartBtn.textContent =
                        "Add to Cart";

                },
                1500
            );

        }
    );

}




/* ==========================================
   BUY NOW
   ========================================== */

const buyNowBtn =
    document.getElementById(
        "buyNowBtn"
    );


if (buyNowBtn) {

    buyNowBtn.addEventListener(
        "click",
        async function() {

            if (!product) {
                return;
            }


            const cart =
                await getCart();


            const existing =
                cart.find(
                    item =>
                        String(item.id) ===
                        String(product.id)
                );


            if (existing) {

                existing.quantity +=
                    quantity;

            } else {

                cart.push({

                    id: product.id,

                    name: product.name,

                    price: product.price,

                    image: product.image,

                    category: product.type,

                    quantity: quantity

                });

            }


            await saveCart(cart);


            window.location.href =
                "cart.html";

        }
    );

}

/* ==========================================
   CART ICON
   ========================================== */

const productCartBtn =
    document.querySelector(
        ".product-cart-btn"
    );


if (productCartBtn) {

    productCartBtn.addEventListener(
        "click",
        function() {

            window.location.href =
                "cart.html";

        }
    );

}