console.log("Hello this is practice set 7")

//1
document.body.querySelector(".list").firstElementChild.style.color = "red"

//3
document.body.querySelector("div").firstElementChild.style.color = "green"
document.body.querySelector("div").lastElementChild.style.color = "green"

//4 
let lists = document.querySelectorAll('li');

lists.forEach(function(list) {
    list.style.backgroundColor = "cyan";
});
