/* =====================================================
   VARNAM SILKS
   MAIN JAVASCRIPT
   ===================================================== */


/* =====================================================
   PRODUCT DATA
   ===================================================== */

let products = [];


/* =====================================================
   LOAD ADMIN PRODUCTS
   ===================================================== */
/* =====================================================
   LOAD ADMIN PRODUCTS
   ===================================================== */

function loadAdminProducts() {

    try {

        const saved =
            localStorage.getItem(
                "varnamAdminProducts"
            );



        /* -----------------------------------------
           If admin storage does not exist,
           keep the original 20 products.
        ----------------------------------------- */

        if (!saved) {
            return;
        }


        const adminProducts =
            JSON.parse(saved);


        if (
            !Array.isArray(
                adminProducts
            )
        ) {
            return;
        }


        /* -----------------------------------------
           IMPORTANT:
           Admin storage is now the main product list.
           
           This means:
           - Deleted admin product stays deleted
           - New admin product appears
           - Edited admin product appears
        ----------------------------------------- */

        products.length = 0;


        adminProducts.forEach(
            function(adminProduct) {

                products.push({

                    id:
                        adminProduct.id,

                    name:
                        adminProduct.name,

                    type:
                        adminProduct.category ||
                        "Sarees",

                    price:
                        Number(
                            adminProduct.price
                        ),

                    image:
                        adminProduct.image,

                    description:
                        adminProduct.description ||
                        "",

                    badge:
                        adminProduct.isNewArrival
                            ? "New"
                            : adminProduct.isBestSelling
                                ? "Best Selling"
                                : "",

                    createdAt:
                        adminProduct.createdAt ||
                        ""

                });

            }
        );


    } catch (error) {

        console.log(
            "Could not load admin products.",
            error
        );

    }

}


loadAdminProducts();


async function loadProductsFromAPI() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/products"
        );

        if (!response.ok) {
            throw new Error("Failed to load products");
        }

        const data = await response.json();
      data.sort(function(a, b) {
    return Number(b.id) - Number(a.id);
});

        products = data.map(function(product) {

            return {
                id: product.id,
                name: product.name,
                type: product.type || "Sarees",
                price: Number(product.price) || 0,
                image: product.image || "",
                badge: ""
            };

        });

        console.log(
            "MongoDB products loaded:",
            products.length
        );

        displayProducts();

    } catch (error) {

        console.error(
            "MongoDB product loading failed:",
            error
        );

    }

}


/* =====================================================
   VARIABLES
   ===================================================== */

let visibleProducts = 10;

let currentCategory = "All";

let searchText = "";

let cart = [];


/* =====================================================
   CART STORAGE
   ===================================================== */

function saveCartToStorage() {

    localStorage.setItem(
        "varnamCart",
        JSON.stringify(cart)
    );

}


function loadCartFromStorage() {

    try {

        const savedCart =
            localStorage.getItem(
                "varnamCart"
            );


        if (!savedCart) {

            cart = [];

            return;

        }


        const parsedCart =
            JSON.parse(
                savedCart
            );


        cart =
            Array.isArray(parsedCart)
                ? parsedCart
                : [];


    } catch (error) {

        cart = [];

    }

}


/* =====================================================
   DOM ELEMENTS
   ===================================================== */

const productGrid =
    document.getElementById(
        "productGrid"
    );


const loadMoreBtn =
    document.getElementById(
        "loadMoreBtn"
    );


const searchBtn =
    document.getElementById(
        "searchBtn"
    );


const searchBox =
    document.getElementById(
        "searchBox"
    );


const searchInput =
    document.getElementById(
        "searchInput"
    );


const menuBtn =
    document.getElementById(
        "menuBtn"
    );


const menuPanel =
    document.getElementById(
        "menuPanel"
    );


const closeMenu =
    document.getElementById(
        "closeMenu"
    );


const overlay =
    document.getElementById(
        "overlay"
    );


const cartBtn =
    document.getElementById(
        "cartBtn"
    );


const cartDrawer =
    document.getElementById(
        "cartDrawer"
    );


const closeCart =
    document.getElementById(
        "closeCart"
    );


const cartItems =
    document.getElementById(
        "cartItems"
    );


const cartCount =
    document.getElementById(
        "cartCount"
    );


const cartTotal =
    document.getElementById(
        "cartTotal"
    );


/* =====================================================
   FORMAT PRICE
   ===================================================== */

function formatPrice(price) {

    return (
        "₹" +
        Number(price)
            .toLocaleString("en-IN")
    );

}


/* =====================================================
   GET FILTERED PRODUCTS
   ===================================================== */

function getFilteredProducts() {

    return products.filter(
        function(product) {


            const categoryMatch =
                currentCategory === "All" ||
                product.type === currentCategory;


            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    );


            return (
                categoryMatch &&
                searchMatch
            );

        }
    );

}


/* =====================================================
   DISPLAY PRODUCTS
   ===================================================== */

function displayProducts() {

    const filteredProducts =
        getFilteredProducts();


    const productsToShow =
        filteredProducts.slice(
            0,
            visibleProducts
        );


    productGrid.innerHTML = "";


    if (
        productsToShow.length === 0
    ) {

        productGrid.innerHTML = `

            <div class="empty-cart">

                No sarees found.

            </div>

        `;


        loadMoreBtn.style.display =
            "none";


        return;

    }


    /* CREATE PRODUCT CARDS */

    productsToShow.forEach(
        function(product) {


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "product-card";


            card.innerHTML = `

                <div
                    class="product-image-wrap"
                >

                    <img
                        class="product-image"
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >


                    ${
                        product.badge
                        ?
                        `
                        <span
                            class="product-badge"
                        >
                            ${product.badge}
                        </span>
                        `
                        :
                        ""
                    }

                </div>


                <div
                    class="product-info"
                >


                    <h3
                        class="product-name"
                    >
                        ${product.name}
                    </h3>


                    <p
                        class="product-type"
                    >
                        ${product.type}
                    </p>


                    <div
                        class="product-price-row"
                    >


                        <span
                            class="product-price"
                        >
                            ${formatPrice(
                                product.price
                            )}
                        </span>


                        <button
                            class="add-cart-btn"
                            data-product-id="${String(product.id)}"
                            aria-label="Add to cart"
                            type="button"
                        >
                            +
                        </button>


                    </div>


                </div>

            `;


            productGrid.appendChild(
                card
            );


            /* ==========================================
               DIRECT ADD TO CART
               ========================================== */

            const addCartButton =
                card.querySelector(
                    ".add-cart-btn"
                );


            if (addCartButton) {

                addCartButton.addEventListener(
                    "click",
                    function(event) {

                        event.preventDefault();

                        event.stopPropagation();


                        addToCart(
                            product.id
                        );

                    }
                );

            }


            /* ==========================================
               OPEN PRODUCT DETAILS
               ========================================== */

            card.addEventListener(
                "click",
                function(event) {


                    if (
                        event.target.closest(
                            ".add-cart-btn"
                        )
                    ) {

                        return;

                    }


                    window.location.href =
                        `product.html?id=${product.id}`;

                }
            );


        }
    );


    /* LOAD MORE */

    if (
        visibleProducts <
        filteredProducts.length
    ) {

        loadMoreBtn.style.display =
            "block";

    } else {

        loadMoreBtn.style.display =
            "none";

    }

}


/* =====================================================
   ADD TO CART
   ===================================================== */

function addToCart(productId) {

    const product =
        products.find(
            function(item) {

                return String(
                    item.id
                ) === String(
                    productId
                );

            }
        );


    if (!product) {

        console.log(
            "Product not found:",
            productId
        );

        return;

    }


    const existing =
        cart.find(
            function(item) {

                return String(
                    item.id
                ) === String(
                    product.id
                );

            }
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            id:
                product.id,

            name:
                product.name,

            price:
                Number(
                    product.price
                ) || 0,

            image:
                product.image || "",

            quantity:
                1

        });

    }


    saveCartToStorage();

    updateCart();

    openCart();

}


/* =====================================================
   UPDATE CART
   ===================================================== */

function updateCart() {

    cartItems.innerHTML = "";


    if (
        cart.length === 0
    ) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                Your cart is empty.

            </div>

        `;


        cartCount.textContent =
            "0";


        cartTotal.textContent =
            "₹0";


        return;

    }


    let totalItems = 0;

    let totalPrice = 0;


    cart.forEach(
        function(item) {


            totalItems +=
                Number(
                    item.quantity
                ) || 0;


            totalPrice +=
                (
                    Number(
                        item.price
                    ) || 0
                ) *
                (
                    Number(
                        item.quantity
                    ) || 0
                );


            const cartItem =
                document.createElement(
                    "div"
                );


            cartItem.className =
                "cart-item";


            cartItem.innerHTML = `

                <img
                    class="cart-item-image"
                    src="${item.image}"
                    alt="${item.name}"
                >


                <div
                    class="cart-item-details"
                >

                    <h4>
                        ${item.name}
                    </h4>


                    <p>

                        ${formatPrice(
                            item.price
                        )}

                        ×

                        ${item.quantity}

                    </p>

                </div>


                <button
                    class="remove-cart-item"
                    data-id="${item.id}"
                    type="button"
                >

                    Remove

                </button>

            `;


            cartItems.appendChild(
                cartItem
            );

        }
    );


    cartCount.textContent =
        totalItems;


    cartTotal.textContent =
        formatPrice(
            totalPrice
        );

}


/* =====================================================
   REMOVE FROM CART
   ===================================================== */

function removeFromCart(productId) {

    cart =
        cart.filter(
            function(item) {

                return String(
                    item.id
                ) !== String(
                    productId
                );

            }
        );


    saveCartToStorage();

    updateCart();

}


/* =====================================================
   OPEN CART
   ===================================================== */

function openCart() {

    cartDrawer.classList.add(
        "active"
    );


    overlay.classList.add(
        "active"
    );

}


/* =====================================================
   CLOSE CART
   ===================================================== */

function closeCartDrawer() {

    cartDrawer.classList.remove(
        "active"
    );


    overlay.classList.remove(
        "active"
    );

}


/* =====================================================
   OPEN MENU
   ===================================================== */

function openMenu() {

    menuPanel.classList.add(
        "active"
    );


    overlay.classList.add(
        "active"
    );

}


/* =====================================================
   CLOSE MENU
   ===================================================== */

function closeMenuPanel() {

    menuPanel.classList.remove(
        "active"
    );


    overlay.classList.remove(
        "active"
    );

}

/* =====================================================
   SEARCH BUTTON
   ===================================================== */

searchBtn.addEventListener(
    "click",
    function() {

        searchBox.classList.toggle(
            "active"
        );


        if (
            searchBox.classList.contains(
                "active"
            )
        ) {

            searchInput.focus();

        }

    }
);


/* =====================================================
   SEARCH INPUT
   ===================================================== */

searchInput.addEventListener(
    "input",
    function(event) {

        searchText =
            event.target.value.trim();


        visibleProducts =
            10;


        displayProducts();

    }
);


/* =====================================================
   MENU BUTTON
   ===================================================== */




/* =====================================================
   CLOSE MENU
   ===================================================== */

closeMenu.addEventListener(
    "click",
    closeMenuPanel
);


/* =====================================================
   CART BUTTON
   ===================================================== */

cartBtn.addEventListener(
    "click",
    openCart
);


/* =====================================================
   CLOSE CART
   ===================================================== */

closeCart.addEventListener(
    "click",
    closeCartDrawer
);


/* =====================================================
   OVERLAY
   ===================================================== */

overlay.addEventListener(
    "click",
    function() {

        closeCartDrawer();

        closeMenuPanel();

    }
);


/* =====================================================
   CATEGORY BUTTONS
   ===================================================== */

const categoryButtons =
    document.querySelectorAll(
        ".category-btn"
    );


categoryButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {


                categoryButtons.forEach(
                    function(btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                currentCategory =
                    button.dataset.category;


                visibleProducts =
                    10;


                displayProducts();

            }
        );

    }
);


/* =====================================================
   LOAD MORE
   ===================================================== */

loadMoreBtn.addEventListener(
    "click",
    function() {

        visibleProducts +=
            10;


        displayProducts();

    }
);


/* =====================================================
   IMPORTANT:
   NO PRODUCT-GRID CART LISTENER HERE
   =====================================================

   The + button is already connected
   directly inside displayProducts().

   Do NOT add another:

   productGrid.addEventListener(...)

   for add-to-cart.
*/


/* =====================================================
   CART ITEMS
   ===================================================== */

cartItems.addEventListener(
    "click",
    function(event) {


        const button =
            event.target.closest(
                ".remove-cart-item"
            );


        if (!button) {

            return;

        }


        const productId =
            button.getAttribute(
                "data-id"
            );


        removeFromCart(
            productId
        );

    }
);


/* =====================================================
   MENU LINKS
   ===================================================== */

const menuLinks =
    menuPanel.querySelectorAll(
        "a"
    );


menuLinks.forEach(
    function(link) {

        link.addEventListener(
            "click",
            function() {

                closeMenuPanel();

            }
        );

    }
);


/* =====================================================
   CHECKOUT BUTTON
   ===================================================== */

const checkoutButton =
    document.querySelector(
        ".checkout-btn"
    );


if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        function() {


            if (
                cart.length === 0
            ) {

                alert(
                    "Your cart is empty."
                );


                return;

            }


            window.location.href =
                "checkout.html";

        }
    );

}


/* =====================================================
   INITIAL LOAD
   ===================================================== */

loadCartFromStorage();

loadProductsFromAPI();

updateCart();


/* =====================================================
   ACCOUNT BUTTON
   ===================================================== */

const accountBtn =
    document.getElementById(
        "accountBtn"
    );


if (accountBtn) {

    accountBtn.addEventListener(
        "click",
        function() {

            window.location.href =
                "my-orders.html";

        }
    );

}