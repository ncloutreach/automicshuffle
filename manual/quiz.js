/////////////////////////////////////////////////////////////////////////////
/////////////////////// Do not modify the below code ////////////////////////
/////////////////////////////////////////////////////////////////////////////
(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];
      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label><br>`
        );
      }
      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }
  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");
    // keep track of user's answers
    let numCorrect = 0;
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 
/////////////////////////////////////////////////////////////////////////////
/////////////////////// Do not modify the above code ////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////// Write the MCQ below in the exactly same described format ///////////////
  const myQuestions = [
    {
      question: "1.Which element is commonly used in the manufacturing of rechargeable batteries and also serves as a mood stabilizer?",  ///// Write the question inside double quotes
      answers: {
        a: "Lithium (Li)",                  ///// Write the option 1 inside double quotes
        b: "Cobalt (Co)",
        c: "Nickel (Ni)",              ///// Write the option 2 inside double quotes
        d: "Zinc (Zn)",
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    }, {
      question: "2.Which inert gas is commonly used in lighting and cryogenic refrigerants?",  ///// Write the question inside double quotes
      answers: {
        a: "Helium (He)",                  ///// Write the option 1 inside double quotes
        b: "Neon (Ne)",
        c: "Argon (Ar)",               ///// Write the option 2 inside double quotes
        d: "Nickel (Ni)"
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    }, {
      question: "3.Which transition metal is used in catalytic converters and also found in jewellery?",  ///// Write the question inside double quotes
      answers: {
        a: "Palladium (Pd)",                  ///// Write the option 1 inside double quotes
        b: "Platinum (Pt)",
        c: "Rhodium (Rh)",               ///// Write the option 2 inside double quotes
        d: "Silver (Ag)"
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    }, {
      question: "4.Which element is used in water treatment and disinfectants and is known for its greenish-yellow gas form?",  ///// Write the question inside double quotes
      answers: {
        a: "Fluorine (F)",                  ///// Write the option 1 inside double quotes
        b: "Chlorine (Cl)",
        c: "Bromine (Br)",              ///// Write the option 2 inside double quotes
        d: "Iodine (I)"
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    }, {
      question: "5.Which actinide element is primarily used as nuclear fuel and also in depleted uranium weapons?",  ///// Write the question inside double quotes
      answers: {
        a: "Thorium (Th)",                  ///// Write the option 1 inside double quotes
        b: "Plutonium (Pu)",
        c: "Uranium (U)",              ///// Write the option 2 inside double quotes
        d: "Americium (Am)"
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    }
    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )
        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question
    Copy below section
    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },
    Copy above section
    */
  ];
/////////////////////////////////////////////////////////////////////////////
/////////////////////// Do not modify the below code ////////////////////////
/////////////////////////////////////////////////////////////////////////////
  // display quiz right away
  buildQuiz();
  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
/////////////////////////////////////////////////////////////////////////////
/////////////////////// Do not modify the above code ////////////////////////
/////////////////////////////////////////////////////////////////////////////
