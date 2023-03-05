// let page1 = document.location.pathname;
// let page2 = document.location.pathname;
let total_questions = document.querySelector("#total_questions");
let total_answers = document.querySelector(".answerssss");
let PointsPerAns = document.querySelector("#points");
let create_teststs_btn = document.querySelector(".create__tests");
let tests__list = document.querySelector(".tests__list");
let submit__test = document.querySelector(".submit__test");
//----------------------

let submit_btn = document.querySelector(".submit");
let result = document.querySelector(".result");
total_score = 0;

//---------------------------

// ===================CREATE INPUT FIELDS FOR TEST===========================
let grid__wrapper = document.querySelector(".grid__wrapper");

create_teststs_btn.addEventListener("click", () => {
  for (let i = 0; i < total_questions.value; i++) {
    //create div wrappers
    let qstnwrap = document.createElement("div");
    qstnwrap.classList.add("questionswrp");
    // create question with numeration
    let p = document.createElement("p");
    p.classList.add("create");
    p.textContent = `Question ${i + 1}`;
    //create delete button for questions
    let btn = document.createElement("button");
    let span = document.createElement("span");
    span.classList.add("material-symbols-rounded");
    span.textContent = "delete";
    btn.appendChild(span);
    // create info paragraphs
    let p1 = document.createElement("p");
    p1.textContent = "write the answer";
    p1.classList.add("ptext");
    let p2 = document.createElement("p");
    p2.textContent = "choose correct answer";
    p2.classList.add("ptext");
    let p3 = document.createElement("p");
    p3.textContent = "assign custom point";
    p3.classList.add("ptext");
    let p4 = document.createElement("p");
    p4.textContent = "delete answer";
    p4.classList.add("ptext");

    // create question input

    let qstninput = document.createElement("input");
    qstninput.setAttribute("placeholder", "type question here");
    qstninput.classList.add("questions");
    qstninput.classList.add(`qstn${i + 1}`);
    qstninput.id = `qstn${i + 1}`;

    // Adding to HTML

    grid__wrapper.appendChild(qstnwrap);
    qstnwrap.appendChild(p);
    qstnwrap.appendChild(btn);
    //column span 4
    grid__wrapper.appendChild(qstninput);
    //
    grid__wrapper.appendChild(p1);
    grid__wrapper.appendChild(p2);
    grid__wrapper.appendChild(p3);
    grid__wrapper.appendChild(p4);
    //
    for (let j = 0; j < total_answers.value; j++) {
      // create input for answers
      let answers = document.createElement("input");
      answers.setAttribute("placeholder", "type answers here");
      answers.classList.add("answers");

      // create checkbock for correct answers
      let chkbx = document.createElement("input");
      chkbx.setAttribute("type", "checkbox");
      chkbx.classList.add("checkbox");

      // create input for custom pointer__events
      let points = document.createElement("input");

      //create button to delete the answers
      let deleteans = document.createElement("span");
      deleteans.classList.add("material-symbols-rounded");
      deleteans.textContent = "remove";
      let deletebtn = document.createElement("button");
      deletebtn.appendChild(deleteans);
      // Adding to HTML
      grid__wrapper.appendChild(answers);
      grid__wrapper.appendChild(chkbx);
      grid__wrapper.appendChild(points);
      grid__wrapper.appendChild(deletebtn);
    }
  }
  // assign value to user questions
  questioninputs = document.querySelectorAll(".questions");
  answerinputs = document.querySelectorAll(".answers");
});

// node list of all questions
let answerinputs = "";
let questioninputs = "";
let submit__questions = document.querySelector(".submit__questions");

// ================CREATING TEST=================

submit__questions.addEventListener("click", () => {
  let tests__list2 = document.querySelector(".tests__list2");
  let a = questioninputs;

  // for loop for adding questions

  for (let i = 0; i < total_questions.value; i++) {
    let newLI = document.createElement("li");
    let questionsP = document.createElement("p");
    questionsP.textContent = a[i].value;
    //added to HTML
    tests__list2.appendChild(newLI);
    newLI.appendChild(questionsP);
    //for loop for adding possible answers
    for (let j = 0; j < total_answers.value; j++) {
      let questions_radio = document.createElement("input");
      questions_radio.setAttribute("type", "radio");
      questions_radio.classList.add("qstn");
      questions_radio.setAttribute("value", "0");
      let label = document.createElement("label");
      label.classList.add("label__for__questions");
      let br = document.createElement("br");
      //added to HTML
      newLI.appendChild(questions_radio);
      newLI.appendChild(label);
      newLI.appendChild(br);
    }
  }
  //  ----to set length of total questions
  let Lilist = "";
  Lilist = document.querySelectorAll(".tests__list2 li");
  //  ----to set NAME attr on RADIO buttons
  for (let a = 0; a < Lilist.length; a++) {
    let eachlinode = Lilist[a].querySelectorAll("input");
    for (let p = 0; p < eachlinode.length; p++) {
      eachlinode[p].setAttribute("name", `q${a + 1}`);
    }
  }
  // ---to set ID on RADIO buttons
  for (let a = 0; a < Lilist.length; a++) {
    let eachlinode = Lilist[a].querySelectorAll("input");
    for (let p = 0; p < eachlinode.length; p++) {
      eachlinode[p].id = `q${a + 1}_ans${p + 1}`;
    }
  }

  // ---to set FOR attr on label__for__questions
  for (let a = 0; a < Lilist.length; a++) {
    let eachlinode = Lilist[a].querySelectorAll("label");
    for (let p = 0; p < eachlinode.length; p++) {
      eachlinode[p].setAttribute("for", `q${a + 1}_ans${p + 1}`);
    }
  }

  // -----to add ANSWERS to label

  let useranswers = document.querySelectorAll(".answers");

  let label_of_questions = "";
  label_of_questions = document.querySelectorAll(".label__for__questions");
  for (let a = 0; a < useranswers.length; a++) {
    label_of_questions[a].textContent = useranswers[a].value;
  }

  // ---- to add POINTS ON CORRECT ANSWERS

  //PointsPerAns

  let UserDefinedCorrectAns = "";
  UserDefinedCorrectAns = document.querySelectorAll(".checkbox");
  let TestAnswers = "";
  TestAnswers = document.querySelectorAll(".qstn");

  for (let a = 0; a < UserDefinedCorrectAns.length; a++) {
    if (UserDefinedCorrectAns[a].checked) {
      TestAnswers[a].setAttribute("value", `${PointsPerAns.value}`);
    }
  }
});

// ============== POINTS CALCULATION=============

let TestAnswers = "";

let resultinfo = document.querySelector(".result");
let totalpoints = 0;

submit__test.addEventListener("click", () => {
  TestAnswers = document.querySelectorAll(".qstn:checked");

  for (i = 0; i < TestAnswers.length; i++) {
    totalpoints += Number(TestAnswers[i].value);
  }
  return (resultinfo.textContent = `your total score is  ${totalpoints}`);
});
