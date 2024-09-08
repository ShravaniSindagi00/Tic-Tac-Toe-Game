// let boxes = document.querySelectorAll(".box");
// let resetbtn = document.querySelector("resetbtn");
// let newGamebtn = document.querySelector("#newbtn");
// let msgcontainer = document.querySelector(".msgcontainer");
// let msg = document.querySelector("#msg");



// let turn0 = true;

// const winpattern=[
//   [0,1,2],
//   [0,3,6],
//   [0,4,8],
//   [1,4,7],
//   [2,5,8],
//   [2,4,6],
//   [3,4,5],
//   [6,7,8],
// ];

// boxes.forEach((box)=>
// {
//   box.addEventListener("click",()=>
//   {
//     console.log("box was clicked");

//     if(turn0){
//       box.innerHTML="O";
//       turn0=false;
// }
// else{
//   box.innerHTML="X";
//   turn0=true;
// }

//  box.disabled=true;

//  checkWinner();
//   });
// });

// const showWinner = (winner) =>{
//   msg.innerText = `congratulations  ${winner}`;
//   msgcontainer.classList.remove("hide");
// }

// const checkWinner = () =>{
//   for( let pattern of winpattern){
//   let pos1val = boxes[pattern[0]].innerText;
//   let pos2val = boxes[pattern[1]].innerText;
//   let pos3val = boxes[pattern[2]].innerText;

//   if(pos1val != "" && pos2val != "" && pos3val != ""){
//     if ( pos1val === pos2val && pos2val === pos3val){
//       console.log("winner", pos1val);
//       showWinner();
//   }
//   }
//   }
//   };

  let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");  // Added # for ID
let newGamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turn0 = true;

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () =>{
  turn0 = true;
  enablebox();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {

    // Toggle between 'O' and 'X' depending on turn0
    if (turn0) {
      box.innerHTML = "O";
      turn0 = false;
    } else {
      box.innerHTML = "X";
      turn0 = true;
    }

    // Disable the clicked box
    box.disabled = true;

    // Check if there's a winner after every turn
    checkWinner();
  });
});

const disablebox = () =>{
  for(let box of boxes){
    box.disabled = true;
  }
};
const enablebox = () =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, ${winner} wins!`;
  msgcontainer.classList.remove("hide");

  // Disable all boxes after a winner is found
  boxes.forEach((box) => box.disabled = true);
};

const checkWinner = () => {
  for (let pattern of winpattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    // Check if the positions in the pattern are filled and have the same value
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val); // Pass the winner's symbol to the showWinner function
        return;
      }
    }
  }
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);


