// console.log("hello world")
// // console.warn console.log console.error

// let a = 5;
// a="this is a"

// const PI = 3.14
// PI=3.344;
// will cause error

// for(let i=0;i<5;i++)
// console.log(i)

// let i=1;
// while(i<5)
// {
// console.log(i++);
// }

// let age = 18
// if(age>=18)
// {
// console.log("can vote")
// }

// else
// {
// console.log("can't vote")
// }

const h1El = document.querySelector("h1")

h1El.textContent = "This is updated"

h1El.style.color="red"
h1El.style.backgroundColor = "yellow"

const btn = document.querySelector("button");

function handleClick()
{
    h1El.classList.toggle("hide")
}

btn.addEventListener("click",handleClick)


// h1El.remove()
