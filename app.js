
// let switchCntr = document.querySelector('#switchCntr')
// let btn = document.getElementsByClassName('upBtn')[0]
// let btn2 = document.getElementsByClassName('upBtn')[1]

// let overlay = document.querySelector('#overLay')

// btn.addEventListener('click',toggle)
// btn2.addEventListener('click',toggle)

// function toggle(){
//     if(switchCntr.classList.contains('hit')){
//         switchCntr.classList.add('switch')
//         overlay.classList.add('switchBtn')
//         switchCntr.classList.remove('hit')
//     }else if(!switchCntr.classList.contains('hit')){
//         switchCntr.classList.add('hit')
//         switchCntr.classList.remove('switch')
//         overlay.classList.remove('switchBtn')
//     }
// }


let switchCntr = document.querySelector('#switchCntr')
let btn = document.getElementsByClassName('upBtn')[0]
let btn2 = document.getElementsByClassName('upBtn')[1]

let overlay = document.querySelector('#overLay')

let toggleBtn = true


btn.addEventListener('click',toggle)
btn2.addEventListener('click',toggle)

function toggle(){
    if(toggleBtn){
        switchCntr.classList.add('switch')
        overlay.classList.add('switchBtn')
        toggleBtn = !toggleBtn

    }else if(!toggleBtn){
        overlay.classList.remove('switchBtn')
        switchCntr.classList.remove('switch')
        toggleBtn = !toggleBtn
    }
    console.log(toggleBtn)
}