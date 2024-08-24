console.log('Welcome to tic tak toe')
// let music = new Audio(music.mp3)
let audioTurn = new Audio('songs/ting.mp3')
// let gameover = new Audio('songs/gameOver.mp3')
let turn = "X"
let Gameover = false


//function for changing turn from X to 0;
const changeTurn = ()=>{
return turn === "X"?"0":"X"

}

// function to check for a win
const checkWin = ()=>{
    let boxTexts = document.getElementsByClassName('boxText')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && boxTexts[e[1]].innerText === boxTexts[e[2]].innerText && (boxTexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText = "win"
            Gameover = true;
            document.querySelector
        }
    })

}

//Game Logic 

let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click',()=> {
            if (boxText.innerText === '') {
                boxText.innerText = turn
                turn = changeTurn()
                audioTurn.play()
                checkWin()
                if(!Gameover){
                document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn
                }

            }
        })
})