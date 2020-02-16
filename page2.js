var allBoxes = document.querySelectorAll('.Box');

function checkBoxes() {
    var blackBoxes = document.querySelectorAll('.Box.black');
    var circle = document.querySelector(".circle");
    
    if(allBoxes.length === blackBoxes.length) {
        circle.classList.add("white");
        circle.classList.remove("black");
        return;
    }
    
    if (blackBoxes.length === 0) {
        circle.classList.add("black");
        circle.classList.remove("white");
        return;
    }
    
    circle.classList.remove("black");
    circle.classList.remove("white");
}

window.addEventListener("click", function(event) {
    var classList = event.target.classList;
    if(classList.contains("Box")){
        classList.toggle("black");
        
        checkBoxes();
    }
});

