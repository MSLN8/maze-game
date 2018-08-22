// Légende : 
// // 0 = path
// // 1 = walls
// // 2 = starting point
// // 3 = ending point

// var player = {
//   // taille de l'icône
//   width : 128,
//   height : 128,
//   // position au départ ?
//   x : 30,
//   y : 2,
// }


// // mouvement du joueur
// switch (event.keyCode) {
//   case 37: // left arrow
//     player.x -= 10;
//     break;

//   case 32: // space bar
//   case 38: // up arrow
//     player.y -= 10;
//     break;

//   case 39: // right arrow
//     player.x += 10;
//     break;

//   case 40: // down arrow
//     player.y += 10;
//     break;
// }

// //effet de lumière selon le parcours du player OU 
// $(.selector:hidden)
// $(.selector:visible)



// //-------------------------------------------------------------------------------

// // Lesson 
// document.onkeydown = function (event) {
//   if (player.isCrashed) {
//     // exit the function without moving if Celine is crashed
//     return;
//   }
//   player.controlBoundries();
// };


// function Wall (myX, myY, myWidth, myHeight) {
//   this.x = myX;
//   this.y = myY;
//   this.width = myWidth;
//   this.height = myHeight;
//   // this.isCrashed = false;
// }

// function collision (player, wall) {
// }

// var player = {
//   x: 30,
//   y: 2,
//   // width: 100,
//   // height: 81,
//   isCrashed: false,

//   drawMe: function () {
//     ctx.drawImage(celineImg, this.x, this.y, this.width, this.height);
//   },
//   controlBoundries: function () {
//     if (this.x < 0) {
//       this.x = 0;
//     }

//     if (this.y < 0) {
//       this.y = 0;
//     }

//     if (this.x > 1000 - this.width) {
//       this.x = 1000 - this.width;
//     }

//     if (this.y > 650 - this.height) {
//       this.y = 650 - this.height;
//     }
//   }
// };

// var pipe1 = new Pipe(970, 0, 30, 250);
// var pipe2 = new Pipe(800, 450, 30, 200);
// var pipe3 = new Pipe(650, 0, 30, 250);
// var pipe4 = new Pipe(1020, 350, 30, 300);
// var pipe5 = new Pipe(1170, 0, 45, 200);
// var pipe6 = new Pipe(1320, 400, 30, 250);

// var allPipes = [ pipe1, pipe2, pipe3, pipe4, pipe5, pipe6 ];

// var gameOver = {
//   x: 311,
//   y: 325,
//   opacity: 0,
//   drawMe: function () {
//     if (this.opacity < 1) {
//       this.opacity += 0.01;
//     }

//     // fade in the text with globalAlpha
//     ctx.globalAlpha = this.opacity;
//     ctx.font = "bold 70px monospace";

//     ctx.fillStyle = "red";
//     ctx.fillText("Game Over", this.x, this.y);

//     ctx.lineWidth = 3;
//     ctx.strokeStyle = "rebeccapurple";
//     ctx.strokeText("Game Over", this.x, this.y);

//     ctx.globalAlpha = 1;
//   }
// }

// // -----------------------------------------------------------------------------

// function drawScene () {
//   ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

//   celine.drawMe();

//   allPipes.forEach(function (onePipe) {
//     onePipe.drawMe();

//     if (collision(celine, onePipe)) {
//       celine.isCrashed = true;
//       onePipe.isCrashed = true;
//     }
//   });

//   if (celine.isCrashed) {
//     gameOver.drawMe();
//   }

//   requestAnimationFrame(function () {
//     drawScene();
//   });
// }

// drawScene();