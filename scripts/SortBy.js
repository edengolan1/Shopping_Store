function sortItems(selectedValue) {
    var shoppingList = document.getElementById('imgItems');
    shoppingList.innerHTML = '';
    switch (selectedValue) {
        case 'showBy1':
            newListItems.sort((date1,date2)=> date1.date - date2.date);
            break;
        case 'showBySale':
            newListItems.sort((a, b) => b.discount - a.discount);
            break;
        case 'justLanded':
            newListItems.sort((date1,date2)=> date2.date - date1.date);
            break;
        case 'lowPrice':
            newListItems.sort((price1,price2)=> price1.price-price2.price);
            break;
        case 'highPrice':
            newListItems.sort((Highprice1,highPrice2)=>highPrice2.price-Highprice1.price);
        default:
            newListItems.sort((default1,default2)=> default1.index-default2.index);
            break;
    }
    newListItems.forEach(item => {
        DisplayItem(item.imageSrc, item.company, item.nameItem, item.price, item.discount, item.colors,item.sizes,item.smallImages);
    });
}