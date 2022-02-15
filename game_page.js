function send(){
    number1 = document.getElementById("number1").value ; 
    number2 = ducument.getElementById("number2").value ;
    actual_awnser = parseInt(number1) * parseInt(number2) ; 

    question_word = "<h4 id='word_display'> Q"+ remove_charAt3 + "</h4>";
    input_box = "<br> Awnser: <input type='text' id='input_check_box'>" ;
    check_button = "<br> <button class='btn btn-info' onclick='check()'> Check </button>" ; 
    row = question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row ;
    
    document.getElementById("number1").value = "" ; 
    document.getElementById("number2").value = "" ; 
}

question_turn = "player1" ; 
awnser_turn = "player2" ; 

function check() {
    get_awnser = document.getElementById("input_check_box").value ; 
    awnser = get_awnser.toLowerCase() ;
    console.log("awnser in lower case = " + awnser) ;

    if(awnser == word){
        if(awnser_turn == "player1"){
            player1_score =  player1_score + 1 ; 
            document.getElementById("player1_score").innerHTML = player1_score ; 
            }
            else{
                player2_score = player2_score + 1 ; 
                document.getElementById("player2_score").innerHTML = player2_score ; 
            }
    }

    if(question_turn == "player1"){
        question_turn = "player2" ; 
        document.getElementById("player_question").innerHTML = "Question turn -" + player2_name ; 
    }
    else{
        question_turn = "player1" ; 
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name ; 
     }

     if(awnser_turn == "player1"){
        awnser_turn = "player2" ; 
        document.getElementById("player_awnser").innerHTML = "Awnser turn -" + player2_name ; 
    }
    else{
        awnser_turn = "player1" ; 
        document.getElementById("player_awnser").innerHTML = "Awnser turn - " + player1_name ; 
    }
    document.getElementById("output").value="" ;
};
 
    