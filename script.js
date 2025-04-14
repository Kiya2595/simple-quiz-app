// Simple Quiz Data
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>"],
        answer: "<a>"
    }, 
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<break>", "<lb>","<br>"],
        answer: "<br>"
    },
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheet", "Creative Style System"],
      answer: "Cascading Style Sheets"
    },
    {
        question: " In JavaScript, which symbol is used for single-line comments?",
        options: ["//", "/*", "#"],
        answer: "//"
    },
    {
        question: "Which JavaScript function is used to output text to the console?",
        options: ["log()", "print()", "console.log()"],
        answer: "console.log()"
    },
    {
        question: "What is the default method for submitting form data in HTML?",
        options: ["get", "submit", "post"],
        answer: "get"
    },
    {
        question: "Which tag is used to create a table row in HTML?",
        options: ["<td>", "<tr>", "<table>"],
        answer: "<td>"
    },
    {
      question: "Which language runs in the browser?",
      options: ["Java", "C++", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "Which tag is used to link CSS?",
      options: ["<script>", "<link>", "<style>"],
      answer: "<link>"
    }
  ];
  
  let currentIndex = 0;
  let score = 0;
  
  // DOM elements
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultBox = document.getElementById("result-box");
  const scoreEl = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");
  const darkToggle = document.getElementById("darkModeToggle");
  
  function loadQuestion() {
    const current = questions[currentIndex];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";
    nextBtn.classList.add("hidden");
  
    current.options.forEach(option => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = option;
      btn.onclick = () => selectOption(btn, current.answer);
      optionsEl.appendChild(btn);
    });
  }
  
  function selectOption(selectedBtn, correctAnswer) {
    const allOptions = document.querySelectorAll(".option-btn");
  
    allOptions.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
      if (btn !== selectedBtn && btn.textContent !== correctAnswer) {
        btn.classList.add("wrong");
      }
    });
  
    if (selectedBtn.textContent === correctAnswer) {
      score++;
    } else {
      selectedBtn.classList.add("wrong");
    }
  
    nextBtn.classList.remove("hidden");
  }
  
  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    document.getElementById("quiz-box").classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `${score} / ${questions.length}`;
  }
  
  restartBtn.addEventListener("click", () => {
    currentIndex = 0;
    score = 0;
    resultBox.classList.add("hidden");
    document.getElementById("quiz-box").classList.remove("hidden");
    loadQuestion();
  });
  
  // Dark mode toggle
  darkToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  // Start quiz
  loadQuestion();
  