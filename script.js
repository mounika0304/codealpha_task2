let lessons = [

{word:"Hello", translation:"Hola", pronunciation:"Ho-la"},

{word:"Thank You", translation:"Gracias", pronunciation:"Gra-see-as"},

{word:"Good Morning", translation:"Buenos Dias", pronunciation:"Bwe-nos Dee-as"},

{word:"Good Night", translation:"Buenas Noches", pronunciation:"Bwe-nas No-ches"}

];

let current = 0;

function nextWord(){

current = Math.floor(Math.random()*lessons.length);

document.getElementById("word").innerText = lessons[current].word;

document.getElementById("translation").innerText =
"Translation: " + lessons[current].translation;

document.getElementById("pronunciation").innerText =
"Pronunciation: " + lessons[current].pronunciation;

}

document.getElementById("quizQuestion").innerText =
"What is the translation of 'Hello'?";

function checkAnswer(){

let ans = document.getElementById("answer").value;

if(ans.toLowerCase() == "hola")
{
document.getElementById("result").innerText = "Correct!";
}
else
{
document.getElementById("result").innerText = "Wrong Answer";
}

}
