shoeval1 = 0
shoeval2 = 0
shoeval3 = 0 
shoeval4 = 0 
guesses = 0
randomNumber = 0
wins = 0 
lost = 0


function start(){
    // generate random number
    //intialize all shoe values
    shoeval1 = Math.floor(Math.random()*12) +1;
    shoeval2 = Math.floor(Math.random() * 12) + 1;
    shoeval3 = Math.floor(Math.random() * 12) + 1;
    shoeval4 = Math.floor(Math.random() * 12) + 1;
    randomNumber = Math.floor(Math.random() * 101) + 19;

    $("#totalNumber").text("0")
    guesses = 0;

    $("#randomNumber").text(randomNumber)
}

// update value when a player clicks 

$("#button-1").on("click", function(){
    guesses = guesses + shoeval1
    $("#totalNumber").text(guesses)
 play() 
    
})
$("#button-2").on("click", function(){
    guesses = guesses + shoeval2
    $("#totalNumber").text(guesses)
    play ()
})
$("#button-3").on("click", function(){
    guesses = guesses + shoeval3
    $("#totalNumber").text(guesses)
    play ()

})
$("#button-4").on("click", function () {
    guesses = guesses + shoeval4
    $("#totalNumber").text(guesses)
    play()
})

function play() {
      if (guesses === randomNumber){
     wins += 1; 
          start()

          $("#wins").text(" Wins: " + wins) 
       

 } else if (guesses > randomNumber){
     lost += 1;   
          start()
          $("#losses").text("Losses: " + lost) 

 }

}


start()


