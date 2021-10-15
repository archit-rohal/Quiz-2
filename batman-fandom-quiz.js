var readlinesync = require('readline-sync');
var a = "Right";
var b = "Wrong";
var h = "Want to proceed further?\n";
var score = 0;
var roundTwoScore = 0;
var roundThreeScore = 0;
var n=0;
var m=0;
function play(q1,a1) {
  var x = readlinesync.question(q1).toLowerCase();
  if(x==a1.toLowerCase()) {
    console.log(a);
    score=score+1;
    if(n==1||n==2||n==3||n==4||n==5) { roundTwoScore++; }
    if(m==1||m==2||m==3||m==4||m==5) { roundThreeScore++; }
    }
  else { 
    console.log(b);
  }
}


var l1 = [{q: "Who played Bruce Wayne in the movie 'The Dark Knight'?\n", ans: "Christian Bale"},{q: "Which iconic villain did Henri Ducard turn out to be?\n", ans: "Ra's Al Ghul"},{q: "Complete the quote 'Some men just want to watch the world...\n", ans: "burn"},{q: "Who played the Joker in The Dark Knight?\n", ans: "Heath Ledger"},{q: "Who played Bane in The Dark Knight Rises?\n", ans: "Tom Hardy"}]; // 5 questions
var l2 = [{q: "Which Dark Knight trilogy villain literally broke Batman's back?\n", ans: "Bane"},{q: "Who did Bruce Wayne promote to CEO of Wayne Enterprises?\n", ans: "Lucius Fox"},{q: "Complete the Bane quote: 'You think darkness is ...' what?\n", ans: "your ally"},{q: "What is The Dark Knight trilogy's Batmobile called?\n", ans: "Tumbler"},{q: "What is John Blake's real name?\n", ans: "Robin"}]; // 5 questions
var l3 = [{q: "Which villain meets their end at the end of The Dark Knight?\n", ans: "Two Face"},{q: "Where does Batman find Lau?\n", ans: "Hong Kong"},{q: "What is the Joker's disguise when he demolishes the hospital?\n", ans: "Nurse"},{q: "Who played Catwoman in The Dark Knight Rises?\n", ans: "Anna Hathaway"},{q: "Morgan Freeman played which character in Batman Begins (2005)\n", ans: "Lucius Fox"}]; // 5 questions
var x1 = readlinesync.question("Enter your name please\n\n");
var g = readlinesync.question("This quiz will test you if you're a true Batman fan\n" + "There are 3 levels of 5 questions each.\n" + "You will go to the next level only if you get atleast 3 answers right.\n" + "Also you'll score 1 point for every correct response.\n" + "\nLet's get started, shall we? Say yes to proceed.\n\n").toLowerCase();
if(g=="yes") {
  console.log("\nLEVEL 1\n" + "~~~~~~~~~~~~~~\n");  
  for(var i=0;i<l1.length;i++) {
  play(l1[i].q,l1[i].ans);
 }
} 
console.log("You score in this round is ",score + "\n-------------------------------------------------------\n");

   //block 1 starts here
 if(score>=3) {
  console.log("Congrats! You've made it to the next level.")
  var k = readlinesync.question(h); 
  if(k=="yes") {
    console.log("\nLEVEL 2\n" + "~~~~~~~~~~~~~~\n");
    for(i=0;i<l2.length;i++) {
    n++;
    play(l2[i].q,l2[i].ans);
   }
  }
 console.log("Your score upto now is", score + "\n-------------------------------------------------------\n");
 }
 
 if(roundTwoScore < 3) { 
 console.log("\nBummer! You couldn't get 3 answers right in this  round.As such, your journey ends here.\n"); 
 }
  //block 1 ends here 
 
 
 if(roundTwoScore >= 3) {
  console.log("Whoa! Frankly i was not expecting you here. You've qualified for level 3\n" + "You seem quite a movie buff tbh.\n")
  var u = readlinesync.question(h);
  if(u=="yes") {
    console.log("\nLEVEL 3\n" + "~~~~~~~~~~~~~~\n");
    for(i=0;i<l3.length;i++) {
      m++;
      play(l3[i].q,l3[i].ans);
    }
     console.log("\nCumulative score: ",score+"\n--------------------------------------------------\n");
     if(roundThreeScore>=3) {
     console.log("\n\nDayumm! Seems like you're a true fan of the Batman Trilogy. Well Done!\n");
     console.log("\nYour overall score in the quiz is: ",score);
     }
     else if(score==15) {
      console.log("\nSweet Jesus! I envy you! I could not get all of the answers right myself the first time. Hats off!"); 
     } 
      else {
       console.log("\nBummer! You couldn't get 3 answers right in this round.As such, your journey ends here.");
      }
  }  
 }
     

 console.log("\nThank you for playing!\n" + "\nHave a good day :)\n");var readlinesync = require('readline-sync');
var a = "Right";
var b = "Wrong";
var h = "Want to proceed further?\n";
var score = 0;
var roundTwoScore = 0;
var roundThreeScore = 0;
var n=0;
var m=0;
function play(q1,a1) {
  var x = readlinesync.question(q1).toLowerCase();
  if(x==a1.toLowerCase()) {
    console.log(a);
    score=score+1;
    if(n==1||n==2||n==3||n==4||n==5) { roundTwoScore++; }
    if(m==1||m==2||m==3||m==4||m==5) { roundThreeScore++; }
    }
  else { 
    console.log(b);
  }
}


var l1 = [{q: "Who played Bruce Wayne in the movie 'The Dark Knight'?\n", ans: "Christian Bale"},{q: "Which iconic villain did Henri Ducard turn out to be?\n", ans: "Ra's Al Ghul"},{q: "Complete the quote 'Some men just want to watch the world...\n", ans: "burn"},{q: "Who played the Joker in The Dark Knight?\n", ans: "Heath Ledger"},{q: "Who played Bane in The Dark Knight Rises?\n", ans: "Tom Hardy"}]; // 5 questions
var l2 = [{q: "Which Dark Knight trilogy villain literally broke Batman's back?\n", ans: "Bane"},{q: "Who did Bruce Wayne promote to CEO of Wayne Enterprises?\n", ans: "Lucius Fox"},{q: "Complete the Bane quote: 'You think darkness is ...' what?\n", ans: "your ally"},{q: "What is The Dark Knight trilogy's Batmobile called?\n", ans: "Tumbler"},{q: "What is John Blake's real name?\n", ans: "Robin"}]; // 5 questions
var l3 = [{q: "Which villain meets their end at the end of The Dark Knight?\n", ans: "Two Face"},{q: "Where does Batman find Lau?\n", ans: "Hong Kong"},{q: "What is the Joker's disguise when he demolishes the hospital?\n", ans: "Nurse"},{q: "Who played Catwoman in The Dark Knight Rises?\n", ans: "Anna Hathaway"},{q: "Morgan Freeman played which character in Batman Begins (2005)\n", ans: "Lucius Fox"}]; // 5 questions
var x1 = readlinesync.question("Enter your name please\n\n");
var g = readlinesync.question("This quiz will test you if you're a true Batman fan\n" + "There are 3 levels of 5 questions each.\n" + "You will go to the next level only if you get atleast 3 answers right.\n" + "Also you'll score 1 point for every correct response.\n" + "\nLet's get started, shall we? Say yes to proceed.\n\n").toLowerCase();
if(g=="yes") {
  console.log("\nLEVEL 1\n" + "~~~~~~~~~~~~~~\n");  
  for(var i=0;i<l1.length;i++) {
  play(l1[i].q,l1[i].ans);
 }
} 
console.log("You score in this round is ",score + "\n-------------------------------------------------------\n");

   
 if(score>=3) {
  console.log("Congrats! You've made it to the next level.")
  var k = readlinesync.question(h); 
  if(k=="yes") {
    console.log("\nLEVEL 2\n" + "~~~~~~~~~~~~~~\n");
    for(i=0;i<l2.length;i++) {
    n++;
    play(l2[i].q,l2[i].ans);
   }
  }
 console.log("Your score upto now is", score + "\n-------------------------------------------------------\n");
 }
 
 if(roundTwoScore < 3) { 
 console.log("\nBummer! You couldn't get 3 answers right in this  round.As such, your journey ends here.\n"); 
 }
  
 
 
 if(roundTwoScore >= 3) {
  console.log("Whoa! Frankly i was not expecting you here. You've qualified for level 3\n" + "You seem quite a movie buff tbh.\n")
  var u = readlinesync.question(h);
  if(u=="yes") {
    console.log("\nLEVEL 3\n" + "~~~~~~~~~~~~~~\n");
    for(i=0;i<l3.length;i++) {
      m++;
      play(l3[i].q,l3[i].ans);
    }
     console.log("\nCumulative score: ",score+"\n--------------------------------------------------\n");
     if(roundThreeScore>=3) {
     console.log("\n\nDayumm! Seems like you're a true fan of the Batman Trilogy. Well Done!\n");
     console.log("\nYour overall score in the quiz is: ",score);
     }
     else if(score==15) {
      console.log("\nSweet Jesus! I envy you! I could not get all of the answers right myself the first time. Hats off!"); 
     } 
      else {
       console.log("\nBummer! You couldn't get 3 answers right in this round.As such, your journey ends here.");
      }
  }  
 }
     

 console.log("\nThank you for playing!\n" + "\nHave a good day :)\n");