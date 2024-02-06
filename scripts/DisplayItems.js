function DisplayItem(imageSrc, company, nameItem, price, discount, colors, sizes, smallImages){
    var typeMapping = {
        'טופים': 'טופ',
        'טישרטים': 'טי שירט',
        'חולצות מכופתרות': 'חולצה מכופתרת',
        'גופיות': 'גופיה',
        'בגדי גוף': 'בגד גוף',
        'חולצות ספורט': 'חולצת ספורט',
        'חולצות ארוכות': 'חולצה ארוכה',
        'טייצים': 'טייץ',
        'ג`ינסים': 'ג`ינס',
        'מכנסיים ארוכים': 'מכנסיים ארוכים',
        'מכנסיים קצרים': 'מכנסיים קצרים',
        'מכנסי טרנינג': 'מכנסי טרנינג',
        'שמלות מקסי': 'שמלת מקסי',
        'שמלות מיני': 'שמלת מיני',
        'שמלות חוף': 'שמלת חוף',
        'שמלות לאירועים': 'שמלת אירועים',
        'מגפיים': 'מגפיים',
        'עקבים': 'נעלי עקב',
        'נעלי בית': 'נעלי בית',
        'סנדלים': 'סנדלים',
        'נעלי ספורט': 'נעלי ספורט',
        'סניקרס': 'סניקרס',
        'סוודרים': 'סוודר',
        'סריגים': 'סריג',
        'קרטיגנים': 'קרטיגן',
        'ג`קטים': 'ג`קט',
        'מעילים': 'מעיל',
        'חולצות':'חולצה',
        'נעליים':'נעליים',
        'שמלות':'שמלה',
        'מכנסיים':'מכנסיים',
        'סוודרים וגקטים':'סוודר',
        'סוודרים וגקטים':'ג`קט'
    };
    priceAfterDiscount = (price - price*(discount/100)).toFixed(2); 
    var shoppingList = document.getElementById('imgItems'); 
    var newItem = document.createElement('li'); 
    newItem.innerHTML =  `
    <div>
    <div id="image"> 
        <div id="new"> 
           <p>NEW</p> 
        </div> 
        <div id="picBackground1">
            <div id="picBackground">
                <button id="button1">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="white" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>                                
                        <p>MY LIST</p>
                    </div>
                </button>
            </div>
        </div>      
        <div id="clothingSize">
            ${sizes.map((size) =>`<div><p>${size}</p></div>`).join('')}
        </div>  
    <a href="#" onclick="ChangeSubTitle('${nameItem}')">
        <div id="pic">
            <img src="${imageSrc}" width="250" height="320"/>
        </div>    
         </a>
        </div>
<div id="detailsItems">
    <div id="company">
        <div id="nameCompany" onclick="FilterCompany('${company}')">
            <span>${company}</span>
        </div>
        <a href="#" onclick="filterItems('${typeMapping[nameItem]}')">
            <div id="nameShirt">
                <span>${nameItem}</span>
            </div>  
        </a>
    </div>
    <div id="price">
        <div id="priceAfterDiscount">
            <span>₪ ${priceAfterDiscount}</span>
        </div>
        <div id="priceBeforeDiscount">
            <span>₪ ${price}</span>
        </div>
        <div id="discount">
            <span>${discount}%</span>
    </div>
</div>
</div>
<div id="colorItems">
${colors.map((color) =>`<div onclick="FilterColors('${color}')" style="background-color: ${color};"></div>`).join('')}
</div>    
</div>
`;
shoppingList.appendChild(newItem);
newItem.querySelector('a').addEventListener('click', function () {
ContentView(
    company,
    nameItem,
    price,
    discount,
    priceAfterDiscount,
    imageSrc,
    smallImages,
    colors,
    sizes
);
});
newItem.querySelector('button').addEventListener('click', function () {
    addToShoppingBag({
        imageSrc: imageSrc,
        company: company,
        nameItem: nameItem,
        price: price,
        discount: discount,
        priceAfterDiscount: priceAfterDiscount,
        colors: colors,
        sizes: sizes,
        smallImages: smallImages
    });
});
function addToShoppingBag(item) {
    let shoppingBag = JSON.parse(localStorage.getItem('shoppingBag')) || [];
    shoppingBag.push(item);
    localStorage.setItem('shoppingBag', JSON.stringify(shoppingBag));
}    
}