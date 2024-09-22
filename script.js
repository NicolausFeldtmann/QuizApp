let questions = [
    {
        "question": "Wann ist die RMS Titanic untergegangen?",
        "answer_1": "1910",
        "answer_2": "1922",
        "answer_3": "1912",
        "answer_4": "1903",
        "right_answer": 3
    },

    {
        "question": "Wie heißt der höchste Berg in unsem Sonnensystem?",
        "answer_1": "Olympus Mons",
        "answer_2": "Mount Everest",
        "answer_3": "Mount Fuji",
        "answer_4": "Kilimanjaro",
        "right_answer": 1
    },

    {
        "question": "Wer war der erste Mensch der einen Weltraumspaziergang unternommen hatte?",
        "answer_1": "Yuri Gagarin",
        "answer_2": "Neil Amstrong",
        "answer_3": "Ulrich Walter",
        "answer_4": "Alexei Leonov",
        "right_answer": 4
    },

    {
        "question": "Wann veröffenlichte die Band Sex Pistols ihr erstes Album?",
        "answer_1": "1976",
        "answer_2": "1977",
        "answer_3": "1980",
        "answer_4": "1900",
        "right_answer": 2
    },

    {
        "question": "Wer ist der Primarch der Word Bearers legion?",
        "answer_1": "Lorgar Aurelian",
        "answer_2": "Leman Russ",
        "answer_3": "Lion el'Jonson",
        "answer_4": "Roboter Gorillamann",
        "right_answer": 1
    },

    {
        "question": "Wann schaffte Tony Hawk seinen legendären 900?",
        "answer_1": "1998",
        "answer_2": "1999",
        "answer_3": "2000",
        "answer_4": "2001",
        "right_answer": 2
    },

    {
        "question": "Wieviel Chromosome hat ein Mensch?",
        "answer_1": "26",
        "answer_2": "42",
        "answer_3": "46",
        "answer_4": "2",
        "right_answer": 3
    },

    {
        "question": "Was sind die kleinsten Teile des Universums?",
        "answer_1": "Protonen",
        "answer_2": "Neutronen",
        "answer_3": "Shwups",
        "answer_4": "Quarks",
        "right_answer": 4
    },

    {
        "question": "Wann fand die Schlacht von Hasting statt?",
        "answer_1": "1998",
        "answer_2": "1066",
        "answer_3": "1492",
        "answer_4": "1815",
        "right_answer": 2
    },

    {
        "question": "Wo ist der geburtsort der Beatles?",
        "answer_1": "Liverpool",
        "answer_2": "London",
        "answer_3": "Manchester",
        "answer_4": "Hamburg",
        "right_answer": 1
    },

    {
        "question": "Wann fand das erste Oktoberfest statt?",
        "answer_1": "1910",
        "answer_2": "1745",
        "answer_3": "1885",
        "answer_4": "1810",
        "right_answer": 4
    },

    {
        "question": "Wo findet man die Hypophyse?",
        "answer_1": "Im Gehirn",
        "answer_2": "Im Magen",
        "answer_3": "In Brüssel",
        "answer_4": "In eine Mathe Gleichung",
        "right_answer": 1
    },

    {
        "question": "Wie tief liegt der tiefste Punkt der Welt unter dem Meeresspiegel?",
        "answer_1": "8848m",
        "answer_2": "3378m",
        "answer_3": "11 034m",
        "answer_4": "4m",
        "right_answer": 3
    },
];

let rigthQuestions = 0;

let currentQuestion = 0;

let audioSuccsess = new Audio('audio/sucsess.mp3');
let audioFail = new Audio('audio/fail.mp3');
let audioTada = new Audio('audio/tada.mp3');

function init() {
    document.getElementById('questionTotal').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    if (gameOver()) {
        showEndScreen();
    } else {
        renderNextQuestion();
        calculateProgress();
    }
}

function gameOver() {
    return currentQuestion >= questions.length;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let rigthAnswerId = `answer_${question['right_answer']}`;
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('succsess');
        audioSuccsess.play();
        rigthQuestions++;
    } else {
        document.getElementById(selection).classList.add('fail');
        document.getElementById(rigthAnswerId).classList.add('succsess');
        audioFail.play();
    }
    document.getElementById('nextButton').disabled = false;
}


function nextQuestion() {
 currentQuestion++;
 showQuestion();
 resetAnswers();

 document.getElementById('nextButton').disabled = true;
}

function resetAnswers() {
    document.getElementById('answer_1').classList.remove('fail');
    document.getElementById('answer_1').classList.remove('succsess');

    document.getElementById('answer_2').classList.remove('fail');
    document.getElementById('answer_2').classList.remove('succsess');

    document.getElementById('answer_3').classList.remove('fail');
    document.getElementById('answer_3').classList.remove('succsess');

    document.getElementById('answer_4').classList.remove('fail');
    document.getElementById('answer_4').classList.remove('succsess');
}

function restart() {
    document.getElementById('endImg').style = 'display: none';
    document.getElementById('questionImg').style = '';

    document.getElementById('endScreen').style = 'display: none';
    document.getElementById('questionBody').style = '';
    
    rigthQuestions = 0;
    currentQuestion = 0;
    init();
}

function showEndScreen() {
    document.getElementById('endScreen').style = '';
    document.getElementById('endImg').style = '';
    document.getElementById('questionBody').style = 'display: none';
    document.getElementById('questionImg').style = 'display: none'
    document.getElementById('allQuestions').innerHTML = questions.length;
    document.getElementById('amountOfRigth').innerHTML = rigthQuestions;
    let percent = currentQuestion / questions.length * 100;
    percent = percent.toFixed(0);
    document.getElementById('progressBar').innerHTML = percent + '%';
    document.getElementById('progressBar').style = `width: ${percent}%`;
    audioTada.play();
}

function renderNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questionNumber').innerHTML = currentQuestion +1;
    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function calculateProgress() {
    let percent = currentQuestion / questions.length * 100;
    percent = percent.toFixed(0);
    document.getElementById('progressBar').innerHTML = percent + '%';
    document.getElementById('progressBar').style = `width: ${percent}%`;
}

function correctAnswer() {
    
}