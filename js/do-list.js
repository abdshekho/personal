
input = document.querySelector('.main .field .in');
submit = document.querySelector('.main .field .add');
data = document.querySelector(".data");
var deleteAll = document.querySelectorAll(".deleteAll")[0];


//z: to button [delete]     c: to creat button [delete]  
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
    if (input.value.trim() != '') {
        d = document.createElement("div");
        c = document.createElement("button");
        q = document.createElement("input");
        q.setAttribute("type", "checkbox");
        q.setAttribute("data-che", "F");
        c.innerHTML = 'delete';
        d.innerHTML = input.value.trim();
        data.appendChild(d);
        d.appendChild(q);
        d.appendChild(c);
        z.push(c);
        localStorage.setItem(input.value.trim() + 'F', input.value.trim());
        input.value = '';
        hitToSave();

        checker = document.querySelectorAll(".data div input");
        //delete all hide
        if (data.childElementCount === 0) {
            deleteAll.style.display = 'none'

        } else {
            deleteAll.style.display = 'flex'
        }

    } else {
        // field  is empty

        document.querySelector('.emp').style.opacity = 1;
        setTimeout(() => {
            document.querySelector('.emp').style.opacity = 0;
        }, 1300)
        hitToEmpty();

    }

    deleteItem();
})


//delete from localStorage and now
deleteItem();
data.addEventListener('click', () => {
    deleteItem();
})


//click che or doIt task
var checker = document.querySelectorAll(".data div input");
document.querySelectorAll(".data")[0].addEventListener('change', () => {

    checkBooxClick();

})






checkBooxClick();
//                                                  function
function checkBooxClick() {
    checker.forEach(inp2 => {

        if (inp2.dataset.che === 'T') { inp2.checked = true }
        if (inp2.dataset.che === 'F') { inp2.checked = false }
        inp2.addEventListener('click', () => {
            checker = document.querySelectorAll(".data div input");

            if (inp2.checked === false) { inp2.dataset.che = 'F' }
            if (inp2.checked === true) { inp2.dataset.che = 'T' }
            TransTF(inp2);
            if (inp2.checked === false) { inp2.parentElement.style.background = '#0f2b60bd' }
            if (inp2.checked === true) { inp2.parentElement.style.background = '#0e874961' }

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

function deleteItem() {
    z.forEach((i, j) => {
        i.addEventListener("click", () => {

            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#f48888',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Swal.fire(
                    //     'Deleted!',
                    //     'Your task has been deleted.',
                    //     'success'
                    // )
                    //delete from localStorage
                    if (i.parentElement.childNodes[1].dataset.che == 'F') {
                        localStorage.removeItem(i.parentElement.firstChild.textContent + "F")
                    }
                    if (i.parentElement.childNodes[1].dataset.che == 'T') {
                        localStorage.removeItem(i.parentElement.firstChild.textContent + "T")
                    }


                    //delete from page
                    i.parentElement.style.opacity = '0'
                    setTimeout(() => {
                        i.parentElement.style.display = 'none'
                    }, 400)



                }
            })





        })
    })
}

//hit to save
function hitToSave() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        didOpen: (toast) => {
            // toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Your task has been saved'
    })
}

// hit to Empyt
function hitToEmpty() {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: false,
        didOpen: (toast) => {
            // toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'warning',
        title: 'is empty'
    })

}

//when deleteall itemes will delete button
function deleteButton() {
    if (data.childElementCount === 0) {
        deleteAll.style.display = 'none'
    } else {
        deleteAll.style.display = 'flex'
    };
}

function DeleteAll() {

    for (var i = 0; i <= localStorage.length - 1; i++) {
        if (localStorage.key(i) === 'randid' || localStorage.key(i) === 'scoreOld' || localStorage.key(i) === 'maxScore' || localStorage.key(i) === 'li' || localStorage.key(i) === 'color-option' || localStorage.key(i) === 'background' || localStorage.key(i) === 'checkAnimation' || localStorage.key(i) === 'checkRandom') {
            continue;
        }
        else {

            localStorage.removeItem(localStorage.key(i));
            z.forEach(i => {
                if (i.parentElement.childNodes[1].dataset.che == 'F') {
                    localStorage.removeItem(i.parentElement.firstChild.textContent + "F")
                }
                if (i.parentElement.childNodes[1].dataset.che == 'T') {
                    localStorage.removeItem(i.parentElement.firstChild.textContent + "T")
                }
                i.parentElement.style.opacity = '0'
                setTimeout(() => {
                    i.parentElement.style.display = 'none'
                }, 400)
                setTimeout(() => {
                    deleteAll.style.display = 'none'
                }, 800)
            })

        }
    }

}

//Start deleteAll
deleteAll.onclick = () => {


    const { value: fruit } = Swal.fire({
        title: 'Select field validation',
        input: 'select',
        inputOptions: {
            'Delete': {

                DeleteAll: 'DeleteAll'
            }
        },
        inputPlaceholder: 'Select option',
        showCancelButton: true,
        inputValidator: (value) => {
            return new Promise((resolve) => {
                if (value === 'DeleteAll') {
                    DeleteAll()
                    resolve()
                } else {
                    resolve('You need to select DeletAll if you want Delete all items')
                }
            })
        }
    })


}
//End deleteAll


// Start delete Button of deleteAll
// if (data.childElementCount === 0) {
//     deleteAll.style.display = 'none'
// } else {
//     deleteAll.style.display = 'flex'
// };
deleteButton();



