var game = document.querySelectorAll(".game")[0]
var info = document.querySelectorAll('.game .info')[0]
var t = document.querySelectorAll(".game .t")
var ta = []
for(var i=0;i<t.length;i++){
    ta[i]=t[i]
}


var end = [];

d = "X"
t.forEach(j => {
    
    end.push(j)
    j.addEventListener('click',()=>{
        
        if(j.innerHTML == ""){
            for(var i=0;i<t.length;i++){
                if(ta[i].innerHTML != ""){
                } 
            }
            
            if (d == "X"){
            j.innerHTML = d
            d = "O"
            info.innerHTML = "playing " + d
        }
        else if(d == "O"){

            j.innerHTML = d
            d = "X"
            info.innerHTML = "palying " +d
        }}
        
        if(ta[0].innerHTML == ta[1].innerHTML && ta[1].innerHTML == ta[2].innerHTML&& ta[1].innerHTML != '' ){

            win(0,1,2)
        }
        else if(ta[3].innerHTML == ta[4].innerHTML && ta[3].innerHTML == ta[5].innerHTML&& ta[3].innerHTML != '' ){

            win(3,4,5)
        }
        else if(ta[6].innerHTML == ta[7].innerHTML && ta[7].innerHTML == ta[8].innerHTML&& ta[6].innerHTML != '' ){

            win(6,7,8)
        }
        else if(ta[0].innerHTML == ta[3].innerHTML && ta[3].innerHTML == ta[6].innerHTML&& ta[0].innerHTML != '' ){

            win(0,3,6)
        }
        else if(ta[1].innerHTML == ta[4].innerHTML && ta[4].innerHTML == ta[7].innerHTML&& ta[1].innerHTML != '' ){

            win(1,4,7)
        }
        else if(ta[2].innerHTML == ta[5].innerHTML && ta[5].innerHTML == ta[8].innerHTML&& ta[2].innerHTML != '' ){

            win(2,5,8)
        }
        else if(ta[0].innerHTML == ta[4].innerHTML && ta[4].innerHTML == ta[8].innerHTML&& ta[8].innerHTML != '' ){

            win(0,4,8)
        }
        else if(ta[2].innerHTML == ta[4].innerHTML && ta[4].innerHTML == ta[6].innerHTML&& ta[6].innerHTML != '' ){

            info.innerHTML += " " + ta[2].innerHTML
            win(2,4,6)
        }
        // if nobody is win
        else if(ta[0].innerHTML !="" & ta[1].innerHTML !="" &ta[2].innerHTML !="" &ta[3].innerHTML !="" &ta[4].innerHTML !="" &ta[5].innerHTML !="" &ta[6].innerHTML !="" &ta[7].innerHTML !="" &ta[8].innerHTML !=""){
            info.innerHTML = "No win"
            setInterval(()=>{
                info.innerHTML += " ."
            },1000)
            setTimeout(()=>{
                location.reload()
            },3000)
        }


    })
    
})




function win(n1,n2,n3){
    ta[n1].style.background = '#8fe08f'
    ta[n2].style.background = '#8fe08f'
    ta[n3].style.background = '#8fe08f'
    info.innerHTML = 'win ' + ta[n1].innerHTML
    document.querySelectorAll('.over')[0].style.display = 'block'
    setInterval(()=>{
        info.innerHTML += " ."
    },1000)
    setTimeout(()=>{
        location.reload()
    },3000)
}
