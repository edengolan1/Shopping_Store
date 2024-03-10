let shoppingBag = [];

document.addEventListener('DOMContentLoaded', function () {
    displayShoppingBag();
});
function displayShoppingBag() {
    var shoppingBagList = document.getElementById('shoppingBagList');
    const shoppingBag = JSON.parse(localStorage.getItem('shoppingBag')) || [];
    shoppingBag.forEach((item,index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <div id="listAddCard">
            <div>
                <p id="removeFromLike" onclick="removeItem('${index}')">Remove</p>
                <a href="#">
                    <div id="pic">
                        <img src="${item.imageSrc}" width="250" height="320"/>
                   </div>    
                </a>
            </div>
            <div id="detailsItems">
                <div id="company">
                     <div id="nameCompany">
                        <span>${item.company}</span>
                     </div>
                    <a href="#">
                        <div id="nameShirt">
                            <span>${item.nameItem}</span>
                        </div>  
                    </a>
                </div>
                <div id="price">
                    <div id="priceAfterDiscount">
                        <span>₪ ${item.priceAfterDiscount}</span>
                    </div>
                    <div id="priceBeforeDiscount">
                        <span>₪ ${item.price}</span>
                    </div>
                    <div id="discount">
                        <span>${item.discount}%</span>
                    </div>
                </div>
            </div>
        </div>
        `;
        shoppingBagList.appendChild(listItem);
    });
}

function removeItem(index) {
    let shoppingBag = JSON.parse(localStorage.getItem('shoppingBag')) || [];
    shoppingBag.splice(index, 1);
    localStorage.setItem('shoppingBag', JSON.stringify(shoppingBag));
    document.getElementById('shoppingBagList').innerHTML = '';
    displayShoppingBag();
}