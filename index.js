var $burger = document.querySelector("#burger");
var $content = document.querySelector("#content");


$burger.addEventListener("click", function () {
    $content.classList.toggle("header__active")
    $burger.classList.toggle("x")
    
})


// console.log($burger, $content);