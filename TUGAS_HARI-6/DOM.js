//Pendefinisian Barang:
document.addEventListener("DOMContentLoaded", function () {
    var items = [
        { id: '001', name: 'Keyboard Logitek', price: 60000, description: 'Keyboard yang mantap buat kantoran', image: 'image/k120-gallery-01-new.png' },
        { id: '002', name: 'Keyboard MSI', price: 300000, description: 'Keyboard gaming MSI mekanik', image: 'image/no-brand_no-brand_full01.webp' },
        { id: '003', name: 'Mouse genius', price: 50000, description: 'Mouse genius agar lebih pinter', image: 'image/download.jpg' },
        { id: '004', name: 'Mouse jerry', price: 30000, description: 'Mouse yang disukai kucing', image: 'image/download (1).jpg' }
    ];
//Seleksi Elemen HTML:
    var listBarang = document.getElementById("listBarang");
    var cartButton = document.getElementById("cart");
    var cartCount = 0;
//Fungsi tampilkanBarang:
    function tampilkanBarang(itemsToShow) {
        listBarang.innerHTML = "";
        itemsToShow.forEach(function (item) {
            var cardHtml = `
                <div class="col-4 mt-2">
                    <div class="card" style="width: 18rem;">
                        <img src="${item.image}" class="card-img-top" height="200px" width="200px" alt="${item.name}">
                        <div class="card-body">
                            <h5 class="card-title" id="itemName">${item.name}</h5>
                            <p class="card-text" id="itemDesc">${item.description}</p>
                            <p class="card-text">Rp ${item.price}</p>
                            <button class="btn btn-primary add-to-cart" data-item-id="${item.id}">Tambahkan ke keranjang</button>
                        </div>
                    </div>
                </div>
            `;
            listBarang.innerHTML += cardHtml;
        });

        var addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(function (button) {
            button.addEventListener('click', function () {
                var itemId = this.getAttribute('data-item-id');
                tambahkanKeKeranjang(itemId);
            });
        });
    }
//Fungsi cariBarang:
    function cariBarang(keyword) {
        var filteredItems = items.filter(function (item) {
            return item.name.toLowerCase().includes(keyword.toLowerCase());
        });

        return filteredItems;
    }
//Fungsi tambahkanKeKeranjang:
    function tambahkanKeKeranjang(itemId) {
        cartCount++;
        updateCartCount();
        
    }
//Fungsi updateCartCount:
    function updateCartCount() {
        cartButton.innerHTML = `<i class="fas fa-shopping-cart"></i>(${cartCount})`;
    }
//Event Listener untuk Form Pencarian:
    var formItem = document.getElementById("formItem");
    formItem.addEventListener("submit", function (event) {
        event.preventDefault();
        var keywordInput = document.getElementById("keyword");
        var keyword = keywordInput.value;
        var hasilPencarian = cariBarang(keyword);
        tampilkanBarang(hasilPencarian);
    });
//Panggilan Awal Fungsi tampilkanBarang:
    tampilkanBarang(items);
});
