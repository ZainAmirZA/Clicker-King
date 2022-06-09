const cellElements = document.querySelector("[data-cell]");
const board = document.getElementById("board");
const circle_Class = "o";
const startButton = document.getElementById("start");
const timingButton = document.getElementById("timerbutton");
let nums = document.getElementById("counter").dataset.value = 0;
let time = document.getElementById("timer").dataset.value=30;
let finalScore = document.getElementById("final").dataset.value = 0;
const restartButton = document.getElementById("restart");
const finalez = document.getElementById("finalz")
const statement = document.getElementById("message")

const theCell1 = document.getElementById("cell1");
const theCell2 = document.getElementById("cell2");
const theCell3 = document.getElementById("cell3");
const theCell4 = document.getElementById("cell4");
const theCell5 = document.getElementById("cell5");
const theCell6 = document.getElementById("cell6");
const theCell7 = document.getElementById("cell7");
const theCell8 = document.getElementById("cell8");
const theCell9 = document.getElementById("cell9");

function chooseCell() {
  if (time === 0) {
    finalMessage()

  } else {
  let x = Math.floor((Math.random() * 9) + 1);
  console.log(x)
  printDot(x)
  end()
} }

function end() {
  if (time === 0) {
    theCell1.classList.remove(circle_Class);
    theCell2.classList.remove(circle_Class);
    theCell3.classList.remove(circle_Class);
    theCell4.classList.remove(circle_Class);
    theCell5.classList.remove(circle_Class);
    theCell6.classList.remove(circle_Class);
    theCell7.classList.remove(circle_Class);
    theCell8.classList.remove(circle_Class);
    theCell9.classList.remove(circle_Class);

    theCell1.removeEventListener("click",add);
    theCell2.removeEventListener("click",add);
    theCell3.removeEventListener("click",add);
    theCell4.removeEventListener("click",add);
    theCell5.removeEventListener("click",add);
    theCell6.removeEventListener("click",add);
    theCell7.removeEventListener("click",add);
    theCell8.removeEventListener("click",add);
    theCell9.removeEventListener("click",add);

    

  }
}

function finalMessage() {
  finalez.classList.remove("invisible")
  statement.classList.remove("invisible")
  restartButton.classList.remove("invisible")
  v = nums/30
    w = v.toFixed(2)
    final.innerHTML = `${w} Clicks/second`
    if (nums > 40) {
      message.innerHTML = "Congratulations! You're way above average...now go touch some grass"
    } else {
      message.innerHTML = "Looks like you need some more work huh..."
    }
}


function printDot(x) {
  
  if (x===1) {
    theCell1.classList.add(circle_Class);
    theCell1.addEventListener("click", add)

      setTimeout(function() {
        theCell1.classList.remove(circle_Class);
        
      }, 500);

      setTimeout(function() {
        theCell1.removeEventListener("click",add);
      }, 500);

      function redo(subject, callback) {
        setTimeout(callback, 550);
        console.log(`removing {subject}`)
        
      }
      
      redo("1", function(){chooseCell()} )
  
     

  } else if (x===2) {
    theCell2.classList.add(circle_Class);
    theCell2.addEventListener("click", add)

    setTimeout(function() {
      theCell2.classList.remove(circle_Class);
    }, 500);

    setTimeout(function() {
      theCell2.removeEventListener("click",add);
    }, 500);

    function redo(subject, callback) {
      setTimeout(callback, 550);
      console.log(`removing {subject}`)
    }
    
    redo("1", function(){chooseCell()} )
    
  } else if (x===3) {
    theCell3.classList.add(circle_Class);
    theCell3.addEventListener("click", add)
    
    setTimeout(function() {
      theCell3.classList.remove(circle_Class);
    }, 500);

    setTimeout(function() {
      theCell3.removeEventListener("click",add);
    }, 500);

    function redo(subject, callback) {
      setTimeout(callback, 550);
      console.log(`removing {subject}`)
    }
    
    redo("1", function(){chooseCell()} )
    
  } else if (x===4) {
    theCell4.classList.add(circle_Class);
    theCell4.addEventListener("click", add)
    
    setTimeout(function() {
      theCell4.classList.remove(circle_Class);
    }, 500);

    setTimeout(function() {
      theCell4.removeEventListener("click",add);
    }, 500);

    function redo(subject, callback) {
      setTimeout(callback, 550);
      console.log(`removing {subject}`)
    }
    
    redo("1", function(){chooseCell()} )

  } else if (x===5) {
    theCell5.classList.add(circle_Class);
    theCell5.addEventListener("click", add)
    
    setTimeout(function() {
      theCell5.classList.remove(circle_Class);
    }, 500);

    setTimeout(function() {
      theCell5.removeEventListener("click",add);
    }, 500);
    
    function redo(subject, callback) {
      setTimeout(callback, 550);
      console.log(`removing {subject}`)
    }
    
    redo("1", function(){chooseCell()} )

  } else if (x===6) {
    theCell6.classList.add(circle_Class);
    theCell6.addEventListener("click", add)
    
    setTimeout(function() {
      theCell6.classList.remove(circle_Class);
    }, 500);

    setTimeout(function() {
      theCell6.removeEventListener("click",add);
    }, 500);

    function redo(subject, callback) {
      setTimeout(callback, 550);
      console.log(`removing {subject}`)
    }
    
    redo("1", function(){chooseCell()} )

  } else if (x===7) {
    theCell7.classList.add(circle_Class);
    theCell7.addEventListener("click", add)
    
    setTimeout(function() {
      theCell7.classList.remove(circle_Class);
    }, 500);

    setTimeout(function() {
      theCell7.removeEventListener("click",add);
    }, 500);

    function redo(subject, callback) {
      setTimeout(callback, 550);
      console.log(`removing {subject}`)
    }
    
    redo("1", function(){chooseCell()} )

  } else if (x===8) {
    theCell8.classList.add(circle_Class);
    theCell8.addEventListener("click", add)
    
    setTimeout(function() {
      theCell8.classList.remove(circle_Class);
    }, 500);

    setTimeout(function() {
      theCell8.removeEventListener("click",add);
    }, 500);

    function redo(subject, callback) {
      setTimeout(callback, 550);
      console.log(`removing {subject}`)
    }
    
    redo("1", function(){chooseCell()} )

  } else if (x===9) {
    theCell9.classList.add(circle_Class);
    theCell9.addEventListener("click", add)
    
    setTimeout(function() {
      theCell9.classList.remove(circle_Class);
    }, 500);

    setTimeout(function() {
      theCell9.removeEventListener("click",add);
    }, 500);

    function redo(subject, callback) {
      setTimeout(callback, 550);
      console.log(`removing {subject}`)
    }
    
    redo("1", function(){chooseCell()} )

  }

} 

function add() {
  nums += 1;
  counter.innerHTML = nums
  console.log(nums)
  theCell1.classList.remove(circle_Class);
  theCell2.classList.remove(circle_Class);
  theCell3.classList.remove(circle_Class);
  theCell4.classList.remove(circle_Class);
  theCell5.classList.remove(circle_Class);
  theCell6.classList.remove(circle_Class);
  theCell7.classList.remove(circle_Class);
  theCell8.classList.remove(circle_Class);
  theCell9.classList.remove(circle_Class);
}



var i = 1
function countdown() {         
  setTimeout(function() {   
    time = time - 1;
    timer.innerHTML = time
    i++;             
    if (i <= 30) {   
      countdown();           
    }                       
  }, 1000)
}

function restart() {
  counter.innerHTML = 0
  timer.innerHTML = 30
  time = 30
  nums = 0
  i = 1
  finalez.classList.add("invisible")
  statement.classList.add("invisible")
  restartButton.classList.add("invisible")
  final.innerHTML = "0"
  message.innerHTML = ""

  countdown()
  chooseCell()

}


startButton.addEventListener("click", chooseCell)
startButton.addEventListener("click", countdown)
restartButton.addEventListener("click", restart)



