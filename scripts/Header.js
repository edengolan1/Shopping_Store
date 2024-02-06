document.addEventListener("DOMContentLoaded", function(){
    fetch('Header.html')
        .then(Response => Response.text())
        .then(html => {
            document.getElementById('menu').innerHTML = html;
        });
});
function Validation() {
    var value1 = document.getElementById('enterEmail3');
    var error = document.getElementById('errorEmail');
    if(value1.value === ''){
        error.style.display = 'block';
    }
    else{
        error.style.display = 'none';
    }
}
function GoToPageList(){
    window.location.href = 'List.html';
}