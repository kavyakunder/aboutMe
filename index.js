var readlineSync=require('readline-sync');
const chalk = require('chalk');

var userName=readlineSync.question(chalk.magentaBright(("What is your name?")));
var score=0;
console.log(chalk.red
("Hi "+chalk.yellowBright(userName)+" Welcome to our Quiz App"));



function quiz(question,answer)
{
  var userAns=readlineSync.question(chalk.cyanBright(question));
  if(userAns.toLowerCase()===answer)
  {
    console.log(chalk.blue("Yes,you are correct"));
    score++;
  }
  else
  {
    console.log(chalk.grey("You are wrong"));
  }
};

var questions=[
{
  question:"Which is my favourite Color?",
  answer:"blue"
},
{
  question:"Where do I stay?",
  answer:"dombivli"
},
{
  question:"What is my favourite hobby ?",
  answer:"dance"
},
{
  question:"Which mobile do I use?",
  answer:"redmi"
},
{
  question:"What is my favourite fast food ?",
  answer:"pizza"
}]



for (var i=0;i<questions.length;i++)
{
  var questionNos=questions[i];
quiz(questionNos.question,questionNos.answer)
};
if (score>2)
{
  console.log(chalk.green("Omg....You know me so wellll😉 and your score is "+score));
}
else{
  console.log(chalk.green("Your score is "+score));
}






