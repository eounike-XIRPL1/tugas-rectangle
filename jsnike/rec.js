var panjangInput = document.querySelector(".panjang-input-field");
var lebarInput = document.querySelector(".lebar-input-field");
var rectangleButton = document.querySelector(".rectangle");
var result = document.querySelector(".result");
var luas, panjang, lebar;

function myFunction(){
    panjang = panjangInput.value;
    lebar = lebarInput.value;
    luas = panjang*lebar;
    alert("Your rectangle is :" + luas);
}