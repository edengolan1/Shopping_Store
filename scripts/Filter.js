var newListItems = listItems;
function filterItems(selectedType) {
    var shoppingList = document.getElementById('imgItems');
    shoppingList.innerHTML = ''; 
    const filteredItems = listItems.filter(item => item.nameItem === selectedType);
    filteredItems.forEach(item => {
        DisplayItem(item.imageSrc, item.company, item.nameItem, item.price, item.discount, item.colors, item.sizes, item.smallImages);
    });
    newListItems = filteredItems;
    var count = listItems;
    count = filteredItems;
    NumberItems(count.length);
}
function FilterColors(selectColors){
    var shoppingList1 = document.getElementById('imgItems');
    shoppingList1.innerHTML = '';
    const filterColors = listItems.filter(item => item.colors.includes(selectColors));
    filterColors.forEach(item => {
        DisplayItem(item.imageSrc, item.company, item.nameItem, item.price, item.discount, item.colors,item.sizes,item.smallImages);
    });
    newListItems = filterColors;
    var count = listItems;
    count = filterColors;
    NumberItems(count.length);
}
function FilterCompany(selectCompany){
    var list = document.getElementById('imgItems');
    list.innerHTML ='';
    const filterCompany = listItems.filter(item => item.company === selectCompany);
    filterCompany.forEach(item =>{
        DisplayItem(item.imageSrc, item.company, item.nameItem, item.price, item.discount, item.colors, item.sizes,item.smallImages);
    });
    newListItems = filterCompany;
    var count = listItems;
    count = filterCompany;
    NumberItems(count.length);
}
function FilterSizes(selectSize){
    var list = document.getElementById('imgItems');
    list.innerHTML ='';
    const filterSizes = listItems.filter(item => item.sizes.includes(selectSize));
    filterSizes.forEach(item =>{
        DisplayItem(item.imageSrc, item.company, item.nameItem, item.price, item.discount, item.colors, item.sizes,item.smallImages);
    });
    newListItems = filterSizes;
    var count = listItems;
    count = filterSizes;
    NumberItems(count.length);
}
