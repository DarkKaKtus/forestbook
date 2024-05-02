let cart = [];


document.getElementById("openCartBtn").onclick = function() {
    document.getElementById("cartModal").style.display = "block";
}


document.querySelectorAll(".cart-close, .modal.cart").forEach(function(element) {
    element.onclick = function(event) {
        if (event.target === this || event.target.classList.contains("cart-close")) {
            document.getElementById("cartModal").style.display = "none";
        }
    }
});


function addToCart(book, button) {
    book.button = button;
    cart.push(book); 
    updateCartUI(); 
}


function removeFromCart(index) {
    let book = cart[index];
    book.button.textContent = "Купить";
    book.button.classList.remove("addedToCart");
    book.button.style.backgroundColor = "";
    cart.splice(index, 1); 
    updateCartUI(); 
}

function updateCartUI() {
    let cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = ""; 

 cart.forEach(function(book, index) {
    let li = document.createElement("li");

    let text = document.createTextNode(book.title + " - " + book.price);
    li.appendChild(text);

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.onclick = function() {
        removeFromCart(index);
    };
    li.appendChild(deleteButton);

    cartItems.appendChild(li);
});
}


document.getElementById("orderBtn").onclick = function() {
    if (cart.length === 0) {
        alert("Корзина пуста. Добавьте товары перед оформлением заказа.");
        return;
    }

    let books = cart.map(function(book) {
        return book.title;
    });

    document.getElementById("cartModal").style.display = "none";
    document.getElementById("orderModal").style.display = "block";

    let orderNumber = Math.floor(Math.random() * 1000000) + 1;
    let orderInfo = "Номер заказа: " + orderNumber + "<br>Выбранные книги:<br>" + books.join("<br>");
    document.getElementById("orderInfo").innerHTML = orderInfo;
}

document.querySelectorAll(".buyButton").forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault(); 

        if (!button.classList.contains("addedToCart")) {
            let bookContainer = event.target.closest(".content_box");

            let bookTitle = bookContainer.querySelector(".medium_title").textContent;
            let bookAuthor = bookContainer.querySelector(".medium_title1").textContent;
            let bookPrice = bookContainer.querySelector(".new").textContent;

            let book = {
                title: bookTitle,
                author: bookAuthor,
                price: bookPrice
            };

            addToCart(book, button);

            button.textContent = "В корзине";
            button.classList.add("addedToCart"); 
            button.style.backgroundColor = "rgb(55,206,180)";
        } else {
            document.getElementById("cartModal").style.display = "block";
        }
    });
});


document.getElementById("openContactsBtn").onclick = function() {
    document.getElementById("contactsModal").style.display = "block";
}

document.querySelectorAll(".contacts-close, .modal.contacts").forEach(function(element) {
    element.onclick = function(event) {
        if (event.target === this || event.target.classList.contains("contacts-close")) {
            document.getElementById("contactsModal").style.display = "none";
        }
    }
});


document.querySelectorAll(".order-close, .order-modal").forEach(function(element) {
    element.onclick = function(event) {
        if (event.target === this || event.target.classList.contains("order-close")) {
            document.getElementById("orderModal").style.display = "none";
        }
    }
});

document.querySelector(".order-modal").addEventListener("click", function(event) {
    if (event.target.classList.contains("order-modal")) {
        document.getElementById("orderModal").style.display = "none";
    }
});