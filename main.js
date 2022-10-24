
//time list variables


const _initTime = Date.now()
console.log(_initTime)
const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  let ndiv =document.createElement('div')
    createSquare(e.target.classList[1])
    createList(getElapsedTime())
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

function createSquare(color){
    let square = document.createElement('div');
    square.classList.add("actionsquare");
    square.classList.add(color)
    const fdiv = document.querySelector('.displayedsquare-wrapper');
    fdiv.appendChild(square);
}

function createList(){
    let list = document.createElement('ul');
    const time =document.querySelectorAll('section');
    let ntime = time[2];
    ntime.appendChild(list);
    
}






