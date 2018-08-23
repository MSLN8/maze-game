// myInterval = setTimeout(animate, 1000/FPS);

window.onload = function(){

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
  };
  updateBoard();
  

  var body = document.querySelector("body")
  body.onkeydown = function () {
      switch (event.keyCode) {
        // up
        case 38:
        case 90:
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
      }

      if ([game.player.y === 28 ][game.player.x === 29]) {
       console.log("you win");
      }

      updateBoard();
  }

  
      //----------------------------------------------------------------------------------------

      // Board.prototype.moveDown = function() {
      // if( game.maze[game.player.y][game.player.x] === game.maze.x.length ||  game.maze[game.player.y][game.player.x] === game.maze.y.length  || (game.maze[game.player.y][game.player.x] === "wall"){
      //   ???? ;
      // }

      // function collision (rectA, rectB) {
      //   return rectA.y + rectA.height >= rectB.y
      //      &&  rectA.y <= rectB.y + rectB.height
      //      &&  rectA.x + rectA.width >= rectB.x
      //      &&  rectA.x <= rectB.x + rectB.width;
      // }






































};






























































