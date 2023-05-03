function send() {
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value

    actual_answer = parseInt(number1) * parseInt(number2)
    question_number = "<h4>" + number1 + "x " + number2 + "</h4>";
    input_box = "<br>Resposta: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";

    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
if (question_turn=="player1") {
   
    player1_score+=1
    question_turn="player2";
    answer_turn="player1"
    document.getElementById ("player_question").innerHTML="turno de pergunta: "+player2_name;
    document.getElementById ("player_answer").innerHTML="turno de resposta: "+player1_name;
    document.getElementById ("player1_score").innerHTML=player1_score;
}
else {
   
    player2_score+=1
    question_turn="player1";
    answer_turn="player2"
    document.getElementById ("player_question").innerHTML="turno de pergunta- "+player1_name;
    document.getElementById ("player_answer").innerHTML="turno de resposta- "+player2_name;
    document.getElementById ("player2_score").innerHTML=player2_score;
}