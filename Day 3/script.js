 const cont = document.querySelector(".container")

 const  h1 = document.createElement("h1")

 h1.textContent = "Created by js"

//  before after
//  cont.after(h1)

//  append prepend
//  cont.append(h1)


// dom traversing
// console.log(cont.children[0])
const p = document.querySelector("p");
p.parentElement.style.backgroundColor="blue"

p.previousElementSibling.style.color="red"
let x =0;
// function fn()
// {
//     console.log("fn")

//     cont.style.marginLeft =x+"px"
//     x=x+10;
// }


// setInterval(fn, 50);

// setInterval and setTimeout
// clearInterval and clearTimeout
