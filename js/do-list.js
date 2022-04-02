
input = document.querySelector('.main .field .in');
submit = document.querySelector('.main .field .add');
data = document.querySelector(".data");
//z: to button [delete] c: to creat button [delete] d:to creat 
var z = []; var w = [];

//load from localStrorage
for (var i = 0; i <= localStorage.length - 1; i++) {
    if (localStorage.key(i) === 'randid' || localStorage.key(i) === 'scoreOld' || localStorage.key(i) === 'maxScore' || localStorage.key(i) === 'li' || localStorage.key(i) === 'color-option' || localStorage.key(i) === 'background' || localStorage.key(i) === 'checkAnimation' || localStorage.key(i) === 'checkRandom') {
        continue;
    }
    d = document.createElement("div");
    c = document.createElement("button");
    q = document.createElement("input");
    q.setAttribute("type", "checkbox");
    if (localStorage.key(i)[localStorage.key(i).length - 1] == 'F') {
        q.setAttribute("data-che", "F");
    }
    if (localStorage.key(i)[localStorage.key(i).length - 1] == 'T') {
        q.setAttribute("data-che", "T");
        d.style.background = '#0e874961'
    }
    data.appendChild(d);
    c.innerHTML = 'delete';
    d.innerHTML = localStorage.getItem(localStorage.key(i));
    d.appendChild(q);
    d.appendChild(c);
    z.push(c)
}


//Add
submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value != '') {
        d = document.createElement("div");
        c = document.createElement("button");
        q = document.createElement("input");
        q.setAttribute("type", "checkbox");
        q.setAttribute("data-che", "F");
        c.innerHTML = 'delete';
        d.innerHTML = input.value;
        data.appendChild(d);
        d.appendChild(q);
        d.appendChild(c);
        z.push(c);
        localStorage.setItem(input.value + 'F', input.value);
        input.value = '';

    } else {
        // field  is empty
        document.querySelector('.emp').style.opacity = 1;
        setTimeout(() => {
            document.querySelector('.emp').style.opacity = 0;
        }, 1300)
    }
})


//delete from localStorage and now
data.addEventListener('click', () => {
    z.forEach((i, j) => {
        i.addEventListener("click", () => {
            //delete from localStorage
            //two edite
            if (i.parentElement.childNodes[1].dataset.che == 'F') {
                localStorage.removeItem(i.parentElement.firstChild.textContent + "F")
            }

            if (i.parentElement.childNodes[1].dataset.che == 'T') {
                localStorage.removeItem(i.parentElement.firstChild.textContent + "T")
            }
            // checker = ""
            //delete from page "RT"
            i.parentElement.style.opacity = '0'
            setTimeout(() => {
                i.parentElement.style.display = 'none'
                // checker = document.querySelectorAll(".data div input");
            }, 400)
        })
    })
})




//click che
var checker = document.querySelectorAll(".data div input");
document.querySelectorAll(".data")[0].addEventListener('change', () => {
    checker = document.querySelectorAll(".data div input");
    checkBooxClick();

})

checkBooxClick();
function checkBooxClick() {
    checker.forEach(inp2 => {

        if (inp2.dataset.che === 'T') { inp2.checked = true }
        if (inp2.dataset.che === 'F') { inp2.checked = false }

        inp2.addEventListener('click', () => {
            checker = document.querySelectorAll(".data div input");
            console.log(inp2.dataset.che)

            if (inp2.checked === false) { inp2.dataset.che = 'F' }
            if (inp2.checked === true) { inp2.dataset.che = 'T' }
            TransTF(inp2);
            
            if (inp2.checked === false) {inp2.parentElement.style.background = '#0f2b60bd'}
            if (inp2.checked === true) { inp2.parentElement.style.background = '#0e874961'}

        })
    })
}


function TransTF(inputcheck) {
    var q = inputcheck.parentElement.childNodes[0].textContent;     // value without F or T 

    var w;
    if (inputcheck.parentElement.childNodes[1].dataset.che === "F") {
        w = "T"
    }
    if (inputcheck.parentElement.childNodes[1].dataset.che === "T") {
        w = 'F'
    }
    var qw = q + w; //value with F or T
    if (w === 'T') {
        localStorage.removeItem(qw)
        localStorage.setItem(q + "F", q)
    }
    if (w === 'F') {
        localStorage.removeItem(qw)
        localStorage.setItem(q + "T", q)
    }
}
