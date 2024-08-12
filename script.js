// script.js

document.addEventListener('DOMContentLoaded', function() {
    const cart = [];
    const products = [{'name': 'Aspirina', 'description': 'Descripción del Aspirina.', 'price': 38878.99}, {'name': 'Paracetamol', 'description': 'Descripción del Paracetamol.', 'price': 6118.17}, {'name': 'Ibuprofeno', 'description': 'Descripción del Ibuprofeno.', 'price': 24436.89}, {'name': 'Amoxicilina', 'description': 'Descripción del Amoxicilina.', 'price': 7793.88}, {'name': 'Loratadina', 'description': 'Descripción del Loratadina.', 'price': 46199.12}, {'name': 'Omeprazol', 'description': 'Descripción del Omeprazol.', 'price': 26166.21}, {'name': 'Ranitidina', 'description': 'Descripción del Ranitidina.', 'price': 43295.76}, {'name': 'Metformina', 'description': 'Descripción del Metformina.', 'price': 37955.74}, {'name': 'Simvastatina', 'description': 'Descripción del Simvastatina.', 'price': 7952.48}, {'name': 'Losartan', 'description': 'Descripción del Losartan.', 'price': 36067.62}, {'name': 'Enalapril', 'description': 'Descripción del Enalapril.', 'price': 5685.24}, {'name': 'Atorvastatina', 'description': 'Descripción del Atorvastatina.', 'price': 28748.95}, {'name': 'Azitromicina', 'description': 'Descripción del Azitromicina.', 'price': 5785.63}, {'name': 'Ciprofloxacina', 'description': 'Descripción del Ciprofloxacina.', 'price': 21571.01}, {'name': 'Furosemida', 'description': 'Descripción del Furosemida.', 'price': 45166.41}, {'name': 'Levotiroxina', 'description': 'Descripción del Levotiroxina.', 'price': 13326.35}, {'name': 'Clonazepam', 'description': 'Descripción del Clonazepam.', 'price': 45029.19}, {'name': 'Diazepam', 'description': 'Descripción del Diazepam.', 'price': 4271.2}, {'name': 'Diclofenaco', 'description': 'Descripción del Diclofenaco.', 'price': 44623.36}, {'name': 'Doxiciclina', 'description': 'Descripción del Doxiciclina.', 'price': 43886.7}, {'name': 'Hidroxicloroquina', 'description': 'Descripción del Hidroxicloroquina.', 'price': 46265.89}, {'name': 'Insulina', 'description': 'Descripción del Insulina.', 'price': 40392.92}, {'name': 'Prednisona', 'description': 'Descripción del Prednisona.', 'price': 46953.23}, {'name': 'Amlodipino', 'description': 'Descripción del Amlodipino.', 'price': 17145.32}, {'name': 'Verapamilo', 'description': 'Descripción del Verapamilo.', 'price': 49183.74}, {'name': 'Captopril', 'description': 'Descripción del Captopril.', 'price': 45703.07}, {'name': 'Metoprolol', 'description': 'Descripción del Metoprolol.', 'price': 12142.63}, {'name': 'Claritromicina', 'description': 'Descripción del Claritromicina.', 'price': 42356.71}, {'name': 'Naproxeno', 'description': 'Descripción del Naproxeno.', 'price': 15051.6}, {'name': 'Ketorolaco', 'description': 'Descripción del Ketorolaco.', 'price': 12250.95}, {'name': 'Lisinopril', 'description': 'Descripción del Lisinopril.', 'price': 16808.21}, {'name': 'Glibenclamida', 'description': 'Descripción del Glibenclamida.', 'price': 27156.12}, {'name': 'Atenolol', 'description': 'Descripción del Atenolol.', 'price': 26241.36}, {'name': 'Carvedilol', 'description': 'Descripción del Carvedilol.', 'price': 13860.47}, {'name': 'Esomeprazol', 'description': 'Descripción del Esomeprazol.', 'price': 3644.34}, {'name': 'Clopidogrel', 'description': 'Descripción del Clopidogrel.', 'price': 27777.69}, {'name': 'Warfarina', 'description': 'Descripción del Warfarina.', 'price': 15824.67}, {'name': 'Simeticona', 'description': 'Descripción del Simeticona.', 'price': 42598.63}, {'name': 'Bisoprolol', 'description': 'Descripción del Bisoprolol.', 'price': 40412.85}, {'name': 'Fosinopril', 'description': 'Descripción del Fosinopril.', 'price': 23769.34}, {'name': 'Rosuvastatina', 'description': 'Descripción del Rosuvastatina.', 'price': 14357.81}, {'name': 'Cetirizina', 'description': 'Descripción del Cetirizina.', 'price': 24140.21}, {'name': 'Escitalopram', 'description': 'Descripción del Escitalopram.', 'price': 24469.21}, {'name': 'Venlafaxina', 'description': 'Descripción del Venlafaxina.', 'price': 35393.03}, {'name': 'Sertralina', 'description': 'Descripción del Sertralina.', 'price': 38940.99}, {'name': 'Bromazepam', 'description': 'Descripción del Bromazepam.', 'price': 13619.8}, {'name': 'Lansoprazol', 'description': 'Descripción del Lansoprazol.', 'price': 43737.48}, {'name': 'Pantoprazol', 'description': 'Descripción del Pantoprazol.', 'price': 47364.89}, {'name': 'Omeprazol', 'description': 'Descripción del Omeprazol.', 'price': 31956.38}, {'name': 'Dexametasona', 'description': 'Descripción del Dexametasona.', 'price': 47204.11}, {'name': 'Betametasona', 'description': 'Descripción del Betametasona.', 'price': 16760.93}, {'name': 'Fluconazol', 'description': 'Descripción del Fluconazol.', 'price': 23100.99}, {'name': 'Miconazol', 'description': 'Descripción del Miconazol.', 'price': 25244.78}, {'name': 'Nistatina', 'description': 'Descripción del Nistatina.', 'price': 12876.34}, {'name': 'Ciclosporina', 'description': 'Descripción del Ciclosporina.', 'price': 23342.85}, {'name': 'Tacrolimus', 'description': 'Descripción del Tacrolimus.', 'price': 22910.55}, {'name': 'Metotrexato', 'description': 'Descripción del Metotrexato.', 'price': 20989.17}, {'name': 'Ciclosporina', 'description': 'Descripción del Ciclosporina.', 'price': 4658.05}, {'name': 'Tramadol', 'description': 'Descripción del Tramadol.', 'price': 35718.8}, {'name': 'Morfina', 'description': 'Descripción del Morfina.', 'price': 25755.82}, {'name': 'Hidromorfona', 'description': 'Descripción del Hidromorfona.', 'price': 3183.98}, {'name': 'Oximorfona', 'description': 'Descripción del Oximorfona.', 'price': 27197.5}, {'name': 'Oxycodona', 'description': 'Descripción del Oxycodona.', 'price': 19266.22}, {'name': 'Metadona', 'description': 'Descripción del Metadona.', 'price': 26278.85}, {'name': 'Buprenorfina', 'description': 'Descripción del Buprenorfina.', 'price': 43079.65}, {'name': 'Naloxona', 'description': 'Descripción del Naloxona.', 'price': 27995.91}, {'name': 'Naltrexona', 'description': 'Descripción del Naltrexona.', 'price': 33587.83}, {'name': 'Doxazosina', 'description': 'Descripción del Doxazosina.', 'price': 45759.31}, {'name': 'Tamsulosina', 'description': 'Descripción del Tamsulosina.', 'price': 21870.37}, {'name': 'Finasteride', 'description': 'Descripción del Finasteride.', 'price': 34495.97}, {'name': 'Dutasteride', 'description': 'Descripción del Dutasteride.', 'price': 38895.74}, {'name': 'Sildenafil', 'description': 'Descripción del Sildenafil.', 'price': 29492.03}, {'name': 'Tadalafil', 'description': 'Descripción del Tadalafil.', 'price': 6446.73}, {'name': 'Vardenafil', 'description': 'Descripción del Vardenafil.', 'price': 42680.44}, {'name': 'Alprazolam', 'description': 'Descripción del Alprazolam.', 'price': 43979.28}, {'name': 'Clobazam', 'description': 'Descripción del Clobazam.', 'price': 24317.49}, {'name': 'Lorazepam', 'description': 'Descripción del Lorazepam.', 'price': 15647.85}, {'name': 'Midazolam', 'description': 'Descripción del Midazolam.', 'price': 40194.96}, {'name': 'Nitrazepam', 'description': 'Descripción del Nitrazepam.', 'price': 43592.31}, {'name': 'Oxazepam', 'description': 'Descripción del Oxazepam.', 'price': 40551.32}, {'name': 'Temazepam', 'description': 'Descripción del Temazepam.', 'price': 31864.53}, {'name': 'Zolpidem', 'description': 'Descripción del Zolpidem.', 'price': 42470.31}, {'name': 'Zopiclona', 'description': 'Descripción del Zopiclona.', 'price': 31713.2}, {'name': 'Eszopiclona', 'description': 'Descripción del Eszopiclona.', 'price': 34145.03}, {'name': 'Ramelteon', 'description': 'Descripción del Ramelteon.', 'price': 19777.5}, {'name': 'Melatonina', 'description': 'Descripción del Melatonina.', 'price': 26000.08}, {'name': 'Mirtazapina', 'description': 'Descripción del Mirtazapina.', 'price': 41674.82}, {'name': 'Trazodona', 'description': 'Descripción del Trazodona.', 'price': 17515.56}, {'name': 'Amitriptilina', 'description': 'Descripción del Amitriptilina.', 'price': 5716.72}, {'name': 'Nortriptilina', 'description': 'Descripción del Nortriptilina.', 'price': 42328.65}, {'name': 'Imipramina', 'description': 'Descripción del Imipramina.', 'price': 41120.51}, {'name': 'Clomipramina', 'description': 'Descripción del Clomipramina.', 'price': 7772.69}, {'name': 'Doxepina', 'description': 'Descripción del Doxepina.', 'price': 35964.07}, {'name': 'Trimipramina', 'description': 'Descripción del Trimipramina.', 'price': 2562.5}, {'name': 'Protriptilina', 'description': 'Descripción del Protriptilina.', 'price': 9095.23}, {'name': 'Desipramina', 'description': 'Descripción del Desipramina.', 'price': 29949.93}, {'name': 'Maprotilina', 'description': 'Descripción del Maprotilina.', 'price': 29106.92}, {'name': 'Viloxazina', 'description': 'Descripción del Viloxazina.', 'price': 6420.0}, {'name': 'Reboxetina', 'description': 'Descripción del Reboxetina.', 'price': 33187.17}, {'name': 'Bupropión', 'description': 'Descripción del Bupropión.', 'price': 25259.22}, {'name': 'Moclobemida', 'description': 'Descripción del Moclobemida.', 'price': 2870.86}, {'name': 'Fenelzina', 'description': 'Descripción del Fenelzina.', 'price': 33657.31}];

    const toggleCartModal = () => {
        const modal = document.getElementById('cart-modal');
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        updateCart();
    };

    const updateCart = () => {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
        } else {
            const cartList = document.createElement('ul');
            let total = 0;
            cart.forEach((item) => {
                const cartItem = document.createElement('li');
                cartItem.textContent = `${item.name} - ₡${item.price}`;
                cartList.appendChild(cartItem);
                total += item.price;
            });
            cartItemsContainer.appendChild(cartList);
            cartItemsContainer.innerHTML += `<p>Total: ₡${total.toFixed(2)};</p>`;
        }
    };

    const realizarPago = () => {
        const paymentFormHtml = `
            <h3>Detalles de la Tarjeta</h3>
            <form id="payment-form">
                <label for="card-name">Nombre del Propietario:</label>
                <input type="text" id="card-name" name="card-name" required><br>
                <label for="card-number">Número de Tarjeta:</label>
                <input type="text" id="card-number" name="card-number" required><br>
                <label for="expiry-date">Fecha de Vencimiento (MM/AA):</label>
                <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/AA" required><br>
                <label for="security-code">Código de Seguridad (CVV):</label>
                <input type="text" id="security-code" name="security-code" required><br>
                <button type="submit">Procesar Pago</button>
            </form>
        `;
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = paymentFormHtml;

        const paymentForm = document.getElementById('payment-form');
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const expiryDate = document.getElementById('expiry-date').value;
            const currentDate = new Date();
            const [expMonth, expYear] = expiryDate.split('/').map(Number);
            const expiry = new Date(`20${expYear}`, expMonth - 1); // Mes ajustado para Date

            if (expiry < currentDate) {
                alert('Tarjeta vencida. Por favor, use una tarjeta válida.');
            } else {
                alert('Pago realizado con éxito. Gracias por su compra.');
                cart.length = 0; // Vaciar el carrito
                updateCart();
                toggleCartModal();
            }
        });
    };

    const searchProduct = (event) => {
        event.preventDefault();
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const product = products.find(p => p.name.toLowerCase().includes(searchTerm));
        
        if (product) {
            showProductModal(product.name);
        } else {
            alert('Producto no encontrado.');
        }
    };

    const showProductModal = (productName) => {
        const product = products.find(p => p.name === productName);
        if (product) {
            const modal = document.getElementById('product-modal');
            const modalContent = modal.querySelector('.modal-content');
            modalContent.innerHTML = `
                <span class="close" onclick="toggleProductModal()">&times;</span>
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p>Precio: ₡${product.price}</p>
                <button onclick="addToCart('${product.name}', ${product.price})">Agregar al Carrito</button>
            `;
            toggleProductModal();
        }
    };

    const addToCart = (name, price) => {
        cart.push({ name, price });
        alert(`${name} ha sido añadido al carrito.`);
        updateCart();
        toggleProductModal();
    };

    const toggleProductModal = () => {
        const modal = document.getElementById('product-modal');
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    };

    document.querySelectorAll('.producto button').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.previousElementSibling.previousElementSibling.textContent;
            const productPrice = parseFloat(this.previousElementSibling.textContent.replace('Precio: ₡', ''));
            cart.push({ name: productName, price: productPrice });
            alert(`${productName} ha sido añadido al carrito.`);
            updateCart();
        });
    });

    document.getElementById('search-form').addEventListener('submit', searchProduct);

    // Exponer las funciones al ámbito global
    window.toggleCartModal = toggleCartModal;
    window.realizarPago = realizarPago;
    window.toggleProductModal = toggleProductModal;
    window.showProductModal = showProductModal;
    window.addToCart = addToCart;
});

