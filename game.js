let boxes = document.querySelectorAll(".box");
let btn = document.querySelector(".btn");
let Btn1 = document.querySelector(".Btn1");
let msgCont = document.querySelector(".msg-container");
let newbtn2 = document.querySelector(".btn2");
let msg = document.querySelector(".msg")

const WinPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [0, 3, 6], [1, 4, 7], [2, 5, 8]];
let curr = "A";

Btn1.innerText = "Its time for player A !!!";
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (curr == "A") {
      box.innerText = "X";
      Btn1.innerText = "Its time for player B !!!";
      curr = "B";
    }
    else {
      box.innerText = "O";
      Btn1.innerText = "Its time for player A !!!";
      curr = "A";
    }
    box.disabled = true;
    checkWinner();
  }
  );

})

const showWinner = (winner) => {
  msg.innerText = "Congratulations," + winner + " won the game!!";
  msgCont.classList.remove("hide");
  boxes.forEach((box) => {
    box.disabled = true;
  })

}

const checkWinner = () => {
  for (let pattern of WinPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 == pos2 && pos2 == pos3 && pos3 == pos1) {
        console.log("won", pos1);
        showWinner(pos1);
      }

    }
  }
}

btn.onclick = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  })
}

newbtn2.onclick = () => {
  msgCont.classList.add("hide");
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  })
}




