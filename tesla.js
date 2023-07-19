const main = document.querySelector(".main-1");
const menu = document.querySelector("#menu");
const cross = document.querySelector(".close");
const blurs = document.querySelector(".blur");
const side = document.querySelector(".hdn-side");

menu.addEventListener("click", () => {
    blurs.classList.toggle("active");
    side.classList.toggle("active");
});

cross.addEventListener("click", () => {
    blurs.classList.toggle("active");
    side.classList.toggle("active");
});


const h1=document.querySelector(".head-1");
const h2=document.querySelector(".head-2");
const h3=document.querySelector(".head-3");
const h4=document.querySelector(".head-4");
const h5=document.querySelector(".head-5");
const h6=document.querySelector(".head-6");
const l1=document.querySelector(".login-1");
const l2=document.querySelector(".login-2");
const l3=document.querySelector(".login-3");
const l4=document.querySelector(".login-4");
const l5=document.querySelector(".login-5");
const l6=document.querySelector(".login-6");


main.addEventListener("scroll",() => {
console.log(main.scrollTop);
const unit =main.scrollTop;
if(unit ==0 && unit<100)
{
    h1.classList.remove("hide");
    l1.classList.remove("hide");
}
else{
    h1.classList.add("hide");
    l1.classList.add("hide");
}

if(unit >600 && unit<700)
{
    h2.classList.add("hide");
    l2.classList.add("hide");
}
else{
    h2.classList.remove("hide");
    l2.classList.remove("hide");
}
})


