
input = document.querySelector('.main .field .in');
submit = document.querySelector('.main .field .add');

data = document.querySelector(".data");
var c = ""; var ar = []; var w;
var d = ""; var z = [];
// Defualt
for (var i = localStorage.length - 1; i >= 0; i--) {
    if (localStorage.key(i) === 'randid' || localStorage.key(i) === 'scoreOld' || localStorage.key(i) === 'maxScore' || localStorage.key(i) === 'li' || localStorage.key(i) === 'color-option') {
        continue;
    }
    d = document.createElement("div");
    c = document.createElement("button");
    data.appendChild(d);
    c.innerHTML = 'delete';
    d.innerHTML = localStorage.getItem(localStorage.key(i));
    d.appendChild(c);
    z.push(c)
}


//Add
submit.addEventListener("click", (e) => {
    e.preventDefault();

    if (input.value != '') {
        d = document.createElement("div");
        c = document.createElement("button");
        c.innerHTML = 'delete'
        d.innerHTML = input.value;
        data.appendChild(d);
        d.appendChild(c);
        z.push(c);
        localStorage.setItem(input.value, input.value)
        input.value = '';
    } else {

        document.querySelector('.emp').style.opacity = 1;
        setTimeout(() => {
            document.querySelector('.emp').style.opacity = 0;
        }, 1300)
    }
    //delete
})


data.addEventListener('click',()=>{


    z.forEach((i, j) => {
        i.addEventListener("click", () => {
    
    
            console.log('cheack')
            localStorage.removeItem(i.parentElement.firstChild.textContent)
    
            i.parentElement.style.display = 'none'
        })
    })
})