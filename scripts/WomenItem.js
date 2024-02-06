function DisplayLogin(){
    var displayButton = document.getElementById('formLogin');
    if(displayButton.style.display==='none'){
        displayButton.style.display='block';
    }
    else{
        displayButton.style.display='none';
    }
}
function DisplaySize(){
    var size = document.getElementById('optionSize');
    if(size.style.display==='none'){
        size.style.display='block';
    }
    else{
        size.style.display='none';
    }
}
function DisplayColor(){
    var color = document.getElementById('optionColor');
    if(color.style.display==='none'){
        color.style.display='grid';
        color.style.gridTemplateColumns='auto auto auto auto';
    }
    else{
        color.style.display='none';
    }
}
function DisplayBrand(){
    var brand = document.getElementById('optionBrand');
    if(brand.style.display==='none'){
        brand.style.display='block';
    }
    else{
        brand.style.display='none';
    }
}
function DisplayEmail(){
    var email = document.getElementById('displayClickEmail');
    if(email.style.display==='none'){
        email.style.display='block';
        email.style.height='460px';
    }
    else{
        email.style.display='none';
    }
}
function X(){
    var x = document.getElementById('plus');
    if(x.style.transform==='rotate('+0+'deg)'){
        x.style.transform='rotate('+34+'deg)';
    }
    else{
        x.style.transform='rotate('+0+'deg)';
    }
}
function ChangeText(){
    var messageElement = document.getElementById("changeText");
    setInterval(function () { messageElement.innerHTML='משלוח עד 4 ימי עסקים'}, 2000);
}