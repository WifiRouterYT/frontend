console.log("Welcome to my website!");

var fullscreen = 0;
var fsbtn = null;
var game = null;

window.onload = function(){
  var closebtn = document.getElementById("close");
  var startertext = document.getElementById("startertext");
  var slopegame = document.getElementById("slopegame");
  game = document.getElementById("game");
  var dinogame = document.getElementById("dinogame");
  var funnyblockgame = document.getElementById("2048");
  var deathrun3d = document.getElementById("deathrun3d");
  var tunnelrush = document.getElementById("tunnelrush");
  var motox3m = document.getElementById("motox3m");
  var motox3mwinter = document.getElementById("motox3mwinter");
  var minecraftclassic = document.getElementById("minecraftclassic");
  var flappybird = document.getElementById("flappybird");
  var worldshardestgame = document.getElementById("worldshardestgame");
  var eaglercraft = document.getElementById("eaglercraft");
  var backrooms = document.getElementById("backrooms");
  var basketballstars = document.getElementById("basketballstars");
  var bloxors = document.getElementById("bloxors");
  var stack = document.getElementById("stack");
  var cryptoclicker = document.getElementById("cryptoclicker");
  var dogeminer = document.getElementById("dogeminer");
  var motox3mpoolparty = document.getElementById("motox3mpoolparty");
  var minesweeper = document.getElementById("minesweeper");
  var pacman = document.getElementById("pacman");
  var run3 = document.getElementById("run3");
  var ducklife1 = document.getElementById("ducklife1");
  var ducklife2 = document.getElementById("ducklife2");
  var ducklife3 = document.getElementById("ducklife3");
  var ducklife4 = document.getElementById("ducklife4");
  var doodlejump = document.getElementById("doodlejump");
  var madalinstuntcars2 = document.getElementById("madalin-stunt-cars-2");
  //fsbtn = document.getElementById("fsbtn");
  //fsbtn.style.display = "none";

  game.style.display = 'none';
  closebtn.onclick = function() {
    location.reload();
  }
  slopegame.onclick = function() {
    startertext.remove();
    game.src = "/games/slope";
    game.style.display = 'block';
    //
  }
  dinogame.onclick = function() {
    startertext.remove();
    game.src = "/games/dino";
    game.style.display = 'block';
    //
  }
  funnyblockgame.onclick = function() {
    startertext.remove();
    game.src = "/games/2048";
    game.style.display = 'block';
    //
  }
  deathrun3d.onclick = function() {
    startertext.remove();
    game.src = "/games/death-run-3d";
    game.style.display = 'block';
    //
  }
  tunnelrush.onclick = function() {
    startertext.remove();
    game.src = "/games/tunnel-rush";
    game.style.display = 'block';
    //
  }
  motox3m.onclick = function() {
    //alert("This game is temporarily disabled due to an issue. Sorry for the inconvinience.")
    startertext.remove();
    game.src = "/games/motox3m";
    game.style.display = 'block';
    //
  }
  motox3mpoolparty.onclick = function() {
    //alert("This game is temporarily disabled due to an issue. Sorry for the inconvinience.")
    startertext.remove();
    game.src = "/games/motox3m-pool-party";
    game.style.display = 'block';
    //
  }
  motox3mwinter.onclick = function() {
    startertext.remove();
    game.src = "/games/motox3m-winter";
    game.style.display = 'block';
    //
  }
  minecraftclassic.onclick = function() {
    startertext.remove();
    game.src = "/games/minecraft-classic";
    game.style.display = 'block';
    //
  }
  flappybird.onclick = function() {
    startertext.remove();
    game.src = "/games/flappy-bird";
    game.style.display = 'block';
    //
  }
  worldshardestgame.onclick = function() {
    startertext.remove();
    game.src = "/games/worlds-hardest-game";
    game.style.display = 'block';
    //
  }
  eaglercraft.onclick = function() {
    startertext.remove();
    game.src = "/games/eaglercraft";
    game.style.display = 'block';
    //
    document.getElementById("si").style.display = "block";
  }
  backrooms.onclick = function() {
    startertext.remove();
    game.src = "/games/backrooms";
    game.style.display = 'block';
    //
  }
  basketballstars.onclick = function() {
    startertext.remove();
    game.src = "/games/basketball-stars";
    game.style.display = 'block';
    //
  }
  bloxors.onclick = function() {
    startertext.remove();
    game.src = "/games/bloxors";
    game.style.display = 'block';
    //
  }
  stack.onclick = function() {
    startertext.remove();
    game.src = "/games/stack";
    game.style.display = 'block';
    //
  }
  cryptoclicker.onclick = function() {
    startertext.remove();
    game.src = "/games/cryptoclicker";
    game.style.display = 'block';
    //
  }
  dogeminer.onclick = function() {
    startertext.remove();
    game.src = "/games/DogeMiner";
    game.style.display = 'block';
    //
  }
  pacman.onclick = function() {
    startertext.remove();
    game.src = "/games/pacman";
    game.style.display = 'block';
    //
  }
  minesweeper.onclick = function() {
    startertext.remove();
    game.src = "/games/minesweeper";
    game.style.display = 'block';
    //
  }
  ducklife1.onclick = function() {
    startertext.remove();
    game.src = "/games/ducklife";
    game.style.display = 'block';
    //
  }
  ducklife2.onclick = function() {
    startertext.remove();
    game.src = "/games/ducklife2";
    game.style.display = 'block';
    //
  }
  ducklife3.onclick = function() {
    startertext.remove();
    game.src = "/games/ducklife3";
    game.style.display = 'block';
    //
  }
  ducklife4.onclick = function() {
    startertext.remove();
    game.src = "/games/ducklife4";
    game.style.display = 'block';
    //
  }
  doodlejump.onclick = function() {
    startertext.remove();
    game.src = "/games/doodle-jump";
    game.style.display = 'block';
    //
  }
  madalinstuntcars2.onclick = function() {
    startertext.remove();
    game.src = "/games/madalin-stunt-cars-2";
    game.style.display = 'block';
    //
  }
  run3.onclick = function() {
    alert("This game is temporarily disabled due to an issue. Sorry for the inconvinience.")
  }
}

function toggleFullscreen() {
  var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
  (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
  (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
  (document.msFullscreenElement && document.msFullscreenElement !== null);

var docElm = document.documentElement;
if (!isInFullScreen) {
  if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
  } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
  } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
  } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
  }
  fsbtn.style.display = "none";
  document.getElementById("content").classList.add("fullscreeni");
}
}

if (document.addEventListener)
{
 document.addEventListener('fullscreenchange', exitHandler, false);
 document.addEventListener('mozfullscreenchange', exitHandler, false);
 document.addEventListener('MSFullscreenChange', exitHandler, false);
 document.addEventListener('webkitfullscreenchange', exitHandler, false);
}

function exitHandler()
{
 if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement)
 {
  //
  document.getElementById("content").classList.remove("fullscreeni");
 }
}
