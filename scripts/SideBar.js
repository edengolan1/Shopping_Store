function TextDecorationType(type) {
    if(type.style.textDecoration != 'underline'){
        ResetDecorationType();
        type.style.textDecoration = 'underline';
    }
    else{
        type.style.textDecoration = 'none';
    }
}
function ResetDecorationType() {
    const typeDivs = document.querySelectorAll('#optionShirt ul li');
    typeDivs.forEach(div => {
        div.style.textDecoration = 'none';
    });
}
function CreateSideBar(nameProduct, linkClearAll, listTypes, sizesTypes, colorsTypes, brandsTypes){
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
        'מכנסיים':'מכנסיים',
        'שמלות':'שמלה',
        'סוודרים וגקטים':'סוודר',
        'סוודרים וגקטים':'ג`קט'
    };
    var sideBar = document.getElementById('sideBar');
    var displaySideBar = document.createElement('div');
    displaySideBar.innerHTML = `
    <div id="displayOption">
        <div id="displayShirt">
            <p>${nameProduct}</p>
        </div>
        <div id="optionShirt">
            <ul>
                ${listTypes.map(type =>`<li onclick="TextDecorationType(this)"><a href="#" id="underLink" onclick="filterItems('${typeMapping[type]}')">${type}</a></li>`).join('')}
            </ul>
        </div>
    </div>
    <div id="filtering">
        <div id="filteringShirt">
            <div id="filteringBy">
                <p>סינון לפי</p>
            </div>
            <div id="clearAll">
                <button id="clearAll1" name="clearAll"><a href="${linkClearAll}">נקה הכל</a></button>
            </div>
        </div>
        <div id="filteringOption">
            <div id="filterSize">
                <button id="size" onclick="DisplaySize()">מידה</button>
                <div id="optionSize">
                    ${sizesTypes.map(size=> `<a href="#" onclick="FilterSizes('${size}');TextDecorationType('${size}');"><p id="underLink">${size}</p></a>`).join('')}
                </div>
            </div>
        <div id="filterColor">
               <button onclick="DisplayColor()">צבע</button> 
               <div id="optionColor">
                    ${colorsTypes.map(color=>`<a href="#" onclick="FilterColors('${color}')"><div style="background-color:${color};"></div></a>`).join('')}
                </div>
        </div>
        <div id="filterBrand">
            <button onclick="DisplayBrand()">מותג</button>
            <div id="optionBrand">
                   ${brandsTypes.map(brand=>`<a href="#" onclick="FilterCompany('${brand}')"><p>${brand}</p></a>`).join('')}
            </div>
        </div>
    </div>
</div>    
`;
sideBar.appendChild(displaySideBar);
}