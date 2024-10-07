import { fetchReadProduct, fetchCreateCart } from './fetch.js';

document.addEventListener("DOMContentLoaded", function () {
    const pathArray = window.location.pathname.split('/');
    const productId = pathArray[pathArray.length - 1];
    if (productId) {
        fetchReadProduct(productId).then(data => {
            console.log(data);
            const div = document.getElementById('product');
            const price = data.price.toLocaleString();
            div.innerHTML = `
                <div class="productDiv">
                    <div class="content_prod_image">
                        <img src="/uploadPath/${data.images[0]}" alt="이미지 없음1"
                             onerror="this.onerror=null; this.src='/images/image01.png';">
                    </div>
                    <div class="content_prod_info">
                        <h2>${data.pName}</h2><hr>
                        <div>${price}원</div><hr>
                        <div>재고 수량 : ${data.stock}개</div><hr>
                        <div class="add_cart_div">
                            <div class="quantity_div">
                                <input type="text" id="quantity" value="1" readonly>
                                <div>
                                    <button class="quantity-button increase" >▲</button>
                                    <button class="quantity-button decrease" >▼</button>
                                </div>   
                            </div>
                            <button class="add_cart_button">장바구니 담기</button>
                        </div>
                    </div>
         
                </div>
                <div class="product_description">${data.description}</div>
            `;
            const increaseButton = div.querySelector('.quantity-button.increase');
            const decreaseButton = div.querySelector('.quantity-button.decrease');
            const addCartButton =  div.querySelector('.add_cart_button');

            increaseButton.addEventListener('click', () => changeQuantity(1));
            decreaseButton.addEventListener('click', () => changeQuantity(-1));
            addCartButton.addEventListener('click', () => {
                const quantity = document.getElementById('quantity').value;
                fetchCreateCart(tokenMemberId,productId, quantity);
            })
        });
    }
});

function changeQuantity(amount) {
    const quantityInput = document.getElementById('quantity');
    let currentQuantity = parseInt(quantityInput.value);

    currentQuantity += amount;

    if (currentQuantity < 1) {
        currentQuantity = 1;
    }

    quantityInput.value = currentQuantity;
}

