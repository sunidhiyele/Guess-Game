let max=prompt("Enter the maximum number");
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");
while(true)
{
    if(guess=="quit")
        {
        alert("quitting the game");
        break;
        }
   else if(guess==random)
    {
        console.log("Congrats!you are right,the number was",random);
        break;
    }else if(guess>random)
    {
        guess=prompt("your number is too big,Try again");
    }else{
        guess=prompt("your number is too small, Try again");
    }
    
    
}

