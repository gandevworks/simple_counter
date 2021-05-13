// javascript

let numberIns = document.getElementById("numberIns") 
let saveEL = document.getElementById("save-el") 
let clearBtn = document.querySelector("#clearBtn")



clearBtn.addEventListener("click", function () {
    saveEL.textContent = null
})

let count = 0 

function addCount ()
{
    count += 1
    numberIns.textContent = count
}

function removeCount ()
{
    count -= 1
    numberIns.textContent = count
}

function save ()
{
    // count = 0
    // numberIns.textContent = count
    let countStr = count + " - "
    saveEL.textContent += countStr
    numberIns.textContent = 0
    count = 0
}
