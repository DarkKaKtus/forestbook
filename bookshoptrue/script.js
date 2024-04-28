
if (localStorage.getItem('cart')) {
    var cart = JSON.parse(localStorage.getItem('cart'));
} else {
    var cart = [];
}

function addToCart(item) {
    if (!cart.includes(item)) {
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

var buttons = document.querySelectorAll('.button.buy a');
buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        var item = this.parentNode.parentNode.querySelector('.medium_title').textContent;
        addToCart(item);
        // POP-UP
        this.textContent = 'Оформить';
        this.style.backgroundColor = 'rgb(55,206,180)'; 
        var popup = document.createElement('div');
        popup.style.position = 'fixed';
        popup.style.top = '0';
        popup.style.left = '0';
        popup.style.width = '100%';
        popup.style.height = '100%';
        popup.style.backgroundColor = 'rgba(0,0,0,0.5)';
        popup.style.display = 'flex';
        popup.style.justifyContent = 'center';
        popup.style.alignItems = 'center';
        var container = document.createElement('div');
        container.style.backgroundColor = 'white';
        container.style.border = '1px solid black';
        container.style.padding = '20px';
        container.style.boxSizing = 'border-box';
        container.style.maxWidth = '80%';
        container.style.textAlign = 'center';
        popup.appendChild(container);
        var text = document.createElement('p');
        text.style.color = 'black';
        text.style.fontSize = '30px';
        text.textContent = 'На доработке';
        container.appendChild(text);
        var img = document.createElement('img');
        img.src = './img/popup.png';
        img.style.width = '200px'; 
        img.style.height = '200px'; 
        container.appendChild(img);
        document.body.appendChild(popup);
        document.body.classList.add('no-scroll');
        popup.addEventListener('click', function() {
            document.body.removeChild(popup);
            document.body.classList.remove('no-scroll');
        });
    });
});
    var buttons = document.querySelectorAll('.button.ad a');
    var currentLocation = window.location.href;
    buttons.forEach(function(button) {
        if (button.href === currentLocation) {
            button.classList.add('active');
        }
    });