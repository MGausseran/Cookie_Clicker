/*document.addEventListener('DOMContentLoaded', function() {
    let value = 0;

    const button = document.getElementById('Mike');
    const valueDisplay = document.getElementById('points');

    button.addEventListener('click', function() {
        value++;
        valueDisplay.textContent = value;
    });
});*/
let multiplicateur = 1;
let scoreParClic = 1;
let score = document.getElementById("points").textContent;

document.getElementById("Mike").addEventListener("click", function(){
    score++
    console.log(score)
}
)



