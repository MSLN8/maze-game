window.onload = function(){
  var player = new Image;
  player.src = '../images/bojack.jpeg'

  function Board () {
      this.startingPoint = {x: 1, y: 28, type: 2};
      this.endingPoint = {x: 27, y: 27, type: 3};
      this.player = {x: 1, y:29};
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
  $('.win-message').hide();
  $('.gameovermessage').hide();
  $('#btnReplay').hide();


  // "you win" pop-up ----------------------------------------------------------
    function youWin () {
        if (game.player.y === 29 && game.player.x === 28) {
            $(".container").hide()
            $(".win-message").show();
            $('#btnReplay').show();
            $('.section-right').hide();
            $('.section-left').hide();
          }
        }
        
        $('#btnReplay').click(function(){
          window.location.href='index.html'
        })


  // game over -----------------------------------------------------------------
  
  

  
  // light ---------------------------------------------------------
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

  }

  // TIMER ---------------------------------------------------------------------

  var countdown = 60;
  function Counter(){
    var myCounterInterval = setInterval(function(){
      $("span").text(countdown)
      countdown -= 1;
      if (countdown < 0) {
        clearInterval(myCounterInterval)
        $(".container").hide()
        $(".gameovermessage").show();
        $('#btnReplay').show();
      }
    }, 1000);
  }
  Counter()

  // function gameLost() {
  //   alert("You lose!");
  // }
  // setTimeout(gameLost, 60000);
  
  
  // if (currentValue >= end)
  
  
  //  $.('.counter').
  //  if (counter === 0) {
  //  $.(".gameovermessage")
  //  }
}

// lime left function
var countt = 1;
// setTimeout(function(){ replay() }, 60000);
$('.tourch').click(function(){
  if (countt === 1) {
    $(".board").removeClass("oos");
    countt--;
  }
})
      
      
      