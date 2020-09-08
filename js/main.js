let id = document.getElementsByClassName("test__menu__item");
let img = document.getElementById("test__img");
let txt = document.getElementById("test__text");
for (let i=0; i<id.length; i++){
  id[i].onmouseover = function(e){
    img.src=id[i].getAttribute("data-img");
    txt.innerHTML=id[i].getAttribute("data-text");
  }
}
