var randomnumber1=Math.floor((Math.random()*6)+1);

var randomDiceimage ="dice"+randomnumber1+".png";

var randomImagesource= "images/"+randomDiceimage;

document.querySelectorAll("img")[0].setAttribute("src",randomImagesource);

var randomnumber2=Math.floor((Math.random()*6)+1);

var randomImagesource2="images/dice"+randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImagesource2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 wins 🚩!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}