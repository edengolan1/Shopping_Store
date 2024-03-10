function ViewDetailsOfItem(){
    var item = document.getElementById('details1');
    var plus = document.getElementById('plusDetails');
    if(item.style.display==='none'){
        item.style.display='block';
        plus.innerText='-';
    }
    else{
        item.style.display='none';
        plus.innerText='+';
    }
}
function ViewDetailsShipmentsReturns(){
    var item = document.getElementById('detailsShipmentsReturns');
    var plus = document.getElementById('plusDetails2');
    if(item.style.display==='none'){
        item.style.display='block';
        plus.innerText='-';
    }
    else{
        item.style.display='none';
        plus.innerText='+';
    }
}
// var rifresh = document.getElementById('formDetailsBuy');
// rifresh.onsubmit = (e) => {
//     e.preventDefault();
// }
function ChangeSubTitle(newTitle){
    var title = document.getElementById('changeTitle');
    title.innerHTML =  newTitle + ' &lt';
}
function ChangeImage(imageUrl){
    var image = document.getElementById('bigImages');
    image.style.backgroundImage = 'url('+imageUrl+')';
}
function ChooseColor(colorDiv){
    if(colorDiv.style.border != '3px solid black'){
        resetBorders();
        colorDiv.style.border = '3px solid black';
    }
    else{
        colorDiv.style.border = '1px solid gray';
    }
}
function resetBorders() {
    const colorDivs = document.querySelectorAll('#colorCircles div');
    colorDivs.forEach(div => {
        div.style.border = '1px solid gray';
    });
}
function ChooseSize(sizeDiv) {
    if(sizeDiv.style.textDecoration != 'underline'){
        resetTextDecoration();
        sizeDiv.style.textDecoration = 'underline';
    }
    else{
        sizeDiv.style.textDecoration = 'none';
    }
}
function resetTextDecoration() {
    const sizeDivs = document.querySelectorAll('#sizeDetails div');
    sizeDivs.forEach(div => {
        div.style.textDecoration = 'none';
    });
}
function ContentView(nameCompany,nameItemm,price,discount,priceAfterDiscount,bigImage,smallImages,colors,sizes){
    var content = document.getElementById('contentItem');
    var main = document.getElementById('mainShirt');
    content.innerHTML = "";
    content.innerHTML =`
<div id="sideRight">
    <div id="chooseDetails">
        <form id="formDetailsBuy">
        <div id="Description">
            <div>
                <span id="nameCompany">${nameCompany}</span><br>
            </div>
            <div>
                <span id="nameItemm">${nameItemm}</span>
            </div>
        </div>
        <div id="detailsPrice">
            <div>
                <span id="priceTotal">₪ ${priceAfterDiscount}</span><br>
                <span id="BeforeDiscount">₪ ${price}</span><br>
                <span id="priceDiscount">${discount}% OFF</span>
            </div>
        </div>
        <div id="detailsColor1">
            <div>
                <span></span>
                <span id="color3">:צבע</span>    
            </div>
            <div id="colorCircles">
                ${colors.map((color) =>`<div id="colorDiv" onclick="ChooseColor(this);DetailsColor(this);" style="background-color: ${color};"></div>`).join('')}
            </div>
        </div>
        <div id="allSize">
            <div>
                <span id="size1">:מידה</span>
            </div>
            <div id="sizeDetails">
                ${sizes.map((size) => `<div id="sizeDiv" onclick="ChooseSize(this);DetailsSize(this);">${size}</div>`).join('')}
            </div>
        </div>
        <div id="addToBuy">
            <div>
                <button>הוספה לסל</button>
            </div>
        </div>
        </form>
    </div>
    <div id="viewMoreDetails">
        <div id="detailsOfItem">
            <button onclick="ViewDetailsOfItem()">
                <span id="plusDetails">+</span>
                <span>פרטים</span>
            </button>
            <div id="details1">
                <p>
                    <span>${nameCompany}</span>
                    <span>${nameItemm}</span>
                    <span>של חברת</span>
                </p>
            </div>
        </div>
        <div id="ShipmentsReturns">
            <button onclick="ViewDetailsShipmentsReturns()">
                <span id="plusDetails2">+</span>
                <span>משלוחים והחזרות</span>
            </button>
            <div id="detailsShipmentsReturns">
                <p>הזמנתם והתחרטתם?
                    החזרות / החלפות בקליק עם שליח עד הבית ב-9.9 ₪ לזמן מוגבל! חינם בהזמנות מעל 500 ₪.
                   ניתן גם להחזיר את החבילה דרך דואר ישראל ללא תשלום.
                   לפני החזרת החבילה, חשוב להדביק את מדבקת הגוביינא על גבי החבילה במקום בו הודבקה הכתובת שלכם
                </p>
            </div>
        </div>
    </div>
</div>
<div id="sideLeft">
    <div id="smallImages">
        ${smallImages.map((image) => `<div id="image5" onclick="ChangeImage('${image}')" style="background-image: url(${image});"></div>`).join('')}
    </div>
    <div id="bigImages" style="background-image: url('${bigImage}');"></div>
</div>
`;
main.appendChild(content);
}