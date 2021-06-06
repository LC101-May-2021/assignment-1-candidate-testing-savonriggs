const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ("")
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? " ;
let correctAnswer = "Sally Ride";
let candidateAnswer = ("");
let questions = ["Who was the first American woman in space?  ", "True or False: 5 Kilometers == 5000 Meters  ", "(5 + 3)/2 * 10 = ?  ", "Given the array [8, 'Orbit', 'Trajectory', 45], What entry is at index 2?  ", "What is the minimum crew size for the ISS?	"];
let correctAnswers = ["Sally Ride ", "True ", "40 ", "Trajectory ", "3 "];
let candidateAnswers = [];
let correctScore = 0


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0;i<questions.length;i++){
    candidateAnswer = input.question(questions[i])
  console.log(`Your answer: ${candidateAnswer} \nCorrect Answer:${correctAnswers[i]}`)
  candidateAnswers.push(candidateAnswer)

  }

    
  }  




function gradeQuiz(candidateAnswers) {
let correctScore = 0
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  //console.log(candidateAnswers)
  for (let i = 0;i<candidateAnswers.length;i++) {
    
if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
  correctScore++
}

  }




  let grade = (correctScore/5*100);
  if (grade >= 80){
    console.log(`>>> Overall Grade: ${grade} (${correctScore} of 5 responses correct) <<<\n>>> Status: Passed <<<`)
  } else if (grade < 80){
console.log(`>>> Overall Grade: ${grade} (${correctScore} of 5 responses correct) <<<\n>>> Status: Failed <<<`)
  }
  

  return grade;

}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome ${candidateName}, this is a quiz to determine if you are a good candidate for our upcoming space program.`)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}
// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};