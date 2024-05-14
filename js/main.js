function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function myFunction2() {
    window.alert("Thank you.Your form has been submited");
}
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);