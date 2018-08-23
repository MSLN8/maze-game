// myInterval = setTimeout(animate, 1000/FPS);

window.onload = function(){
var player = new Image;
player.src = '../images/bojack.jpeg'

function Board () {
    this.startingPoint = {x: 1, y: 28, type: 2};
    this.endingPoint = {x: 27, y: 27, type: 3};
    this.player = {x: 1, y:29};
    // ajout définition "wall"
    // this.wall = {x === 1, y === 1};
    this.maze = 
  [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ],
    [ 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0 ],
    [ 0, 'P', 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 3, 0 ], ]

    };

  
var game = new Board;  

function createMyBoard () {
    for( var i = 0; i < 30; i++ ) {
      for( var j = 0; j < 30; j++ ) {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", i + "-" + j );
        newDiv.classList += "board";
        $(".container")[0].appendChild(newDiv);
      };
    };
};

createMyBoard();

function updateBoard () {
  $(".board").removeClass("player");
  for( var i = 0; i < 30; i++ ) {
    for( var j = 0; j < 30; j++ ) {
        if(game.maze[i][j] === 0) {
        $("#" + i + "-" + j).addClass("road");
        } else if (game.maze[i][j] === 1) {
        $("#" + i + "-" + j).addClass("wall");
        } else if (game.maze[i][j] === 'P') {
        $("#" + i + "-" + j).addClass("player");
        } else if (game.maze[i][j] === 3) {
        $("#" + i + "-" + j).addClass("finish");
      };
    };
  };
}
  updateBoard();



  
  
  
  
  var body = document.querySelector("body")
  body.onkeydown = function () {
    switch (event.keyCode) {
      // up
      case 38:
      case 90:
      torch();
      if($(`#${game.player.y-1}-${game.player.x}`).hasClass("wall")) {
        game.player.y += 1
      }
      if (game.player.y === 0) {
        game.player.y = 1
      }
      game.maze[game.player.y][game.player.x] = 0;
      game.player.y -= 1;
      game.maze[game.player.y][game.player.x] = "P";      
      break;
      
      //right
      case 39:
      case 68:
      youWin();
      torch();
      if($(`#${game.player.y}-${game.player.x+1}`).hasClass("wall")) {
        game.player.x -= 1
      }
      if (game.player.x === 29) {
        game.player.x = 28
      }
      game.maze[game.player.y][game.player.x] = 0;
      game.player.x += 1;
      game.maze[game.player.y][game.player.x] = "P";
      break;
      
      //left
      case 37:
      case 81:
      youWin();
      torch();
      if($(`#${game.player.y}-${game.player.x-1}`).hasClass("wall")) {
        game.player.x += 1
      }
      if (game.player.x === 0) {
        game.player.x = 1
      }
      game.maze[game.player.y][game.player.x] = 0;
      game.player.x -=1;
      game.maze[game.player.y][game.player.x] = "P";
      break;
      
      // down
      case 40:
      case 83:
      youWin();
      torch();
      if($(`#${game.player.y+1}-${game.player.x}`).hasClass("wall")) {
        game.player.y -= 1
      }
      if (game.player.y === 29) {
        game.player.y = 28
      }
      game.maze[game.player.y][game.player.x] = 0;
      game.player.y += 1;
      game.maze[game.player.y][game.player.x] = "P";
      break;
      
      case entry:
      location.reload();
    }
    
    updateBoard();
  }
  
  torch();
  // $('.wall').hide()
  // $('.road').hide()
  // $('.finish').hide()
 $('#btnReplay').hide();
  // ----------------------------------------------------------
  // ----------------------------------------------------------
  // "you win" pop-up 
  function youWin () {
      if (game.player.y === 29 && game.player.x === 28) {
          console.log ('you win')
          $(".container").hide()
          $(".container").addClass(".win-message")
          // $(".btn").show()
          $('#btnReplay').show();

        }
      }
      
      $('#btnReplay').click(function(){
        window.location.href='index.html'
      })
      // ----------------------------------------------------------
      // lime left function
var countt = 1;
// setTimeout(function(){ replay() }, 60000);
$('.tourch').click(function(){
  if (countt === 1) {
    $(".board").removeClass("oos");
    countt--;
  }
})
// // ----------------------------------------------------------
// light
// .addClass(".light")
function torch () {
  $(".board").addClass("oos");
  $(`#${game.player.y}-${game.player.x}`).removeClass("oos");
  $(`#${game.player.y}-${game.player.x+1}`).removeClass("oos");
  $(`#${game.player.y}-${game.player.x-1}`).removeClass("oos");
  $(`#${game.player.y+1}-${game.player.x}`).removeClass("oos");
  $(`#${game.player.y+1}-${game.player.x-1}`).removeClass("oos");
  $(`#${game.player.y+1}-${game.player.x+1}`).removeClass("oos");
  $(`#${game.player.y-1}-${game.player.x}`).removeClass("oos");
  $(`#${game.player.y-1}-${game.player.x-1}`).removeClass("oos");
  $(`#${game.player.y-1}-${game.player.x+1}`).removeClass("oos");




  // $('.road').hide()
  // $('.finish').hide()

// if ($(`#${game.player.y}-${game.player.x}`) <= (($(`#${game.maze.y}-${game.maze.x}`)) - 5 {
//     $(`#${game.maze.y}-${game.maze.x}`).closest("div").find()
    
}

}

// var time = questionTime * 1000
// test.currentTimeout = setTimeout( showNextQuestion(questions[i+1]), t );
// }

// function startGame () {
// document.getElementById('introScreen').style.display = 'none';
// }

// function replay (){
//   document.getElementById('endScreen').style.display = 'none';
// }

// function go() {
//   var txtEndTitle = document.getElementById('txtEndTitle');
//   var txtEndMessage = document.getElementById('txtEndMessage');
//   document.getElementById('endScreen').style.display = 'block';
// }

//   $(".btn").keydown(function(event){
//     if(event.keyCode == 13){
//     $(#bouton).click();
//     }
//     });
// }



// ----------------------------------------------------------
// torch joker
  

