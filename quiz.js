const quizques = [
    {
        numb:1,
        question: "What does HTML stands for?",
        options:[
                "HyperText Pre-processor",
                "HyperText Moral Language",
                "HyperText Markup Language",
                "HyperText Multi Language",
                ],
        correct:"HyperText Markup Language",
    },

    {
        numb:2,
        question: "CSS used for?",
        options:[
                "Styling Webpages",
                "Developing Apps",
                "For enhance security",
                "To build logic"
                ],
        correct:"Styling Webpages",
    },

    
    {
        numb:3,
        question: "JavaScript estblished in which year?",
        options:[
                "2000",
                "1889",
                "1995",
                "1992"
                ],
        correct:"1995",
    },

    
    {
        numb:4,
        question: "What does SQL stands for?",
        options:[
                "Stylish Question Language",
                "Stylish Query Language",
                "Statement Question Language",
                "Structured Query Language"
                ],
        correct:"Structured Query Language",
    },
];



let startbtn = document.getElementById('startbtn');
let inforules = document.querySelector(".inforules");
let start = document.querySelector(".start");
let exit = document.getElementById('exit');
let cont = document.getElementById('cont');
let quiz = document.querySelector('.quiz');
let optionslist = document.querySelector('.optionlist');
let timevalue = 15;
let userscore = 0;
let result = document.querySelector(".result");
let nextbtn = document.querySelector('.next');

startbtn.addEventListener('click', ()=>{
    console.log("clicked");
    inforules.classList.add("infodisplay");
    start.classList.add("strtnone");

})

exit.addEventListener('click',()=>{
    inforules.classList.remove("infodisplay");
    start.classList.remove("strtnone");

})

cont.addEventListener('click',()=>{
    inforules.classList.remove("infodisplay");
    quiz.classList.add("quizbox");
    nextbtn.style.display = "none";
    getquiz(0);
    settimer();



})
let quizcount = 0;

nextbtn.addEventListener('click',()=>{
    if(quizcount < quizques.length - 1){
        quizcount++;
        getquiz(quizcount);
        settimer(timevalue);
        clearInterval(clr);
        nextbtn.style.display = "none";
       
    }
    else{
        quiz.classList.add("quiznone")
        submit();
        console.log("completed");
    }
    clearInterval(clr);
    settimer();
  
})


let getquiz = (index)=>{
    let getques = document.querySelector('.questionlist');
    
    let questag = `<span>${quizques[index].numb}. <span> ${quizques[index].question} </span>`;
    let optiontag =`<div class="options"><span> ${quizques[index].options[0]} </span></div>
                    <div class="options"><span> ${quizques[index].options[1]} </span></div>
                    <div class="options"><span> ${quizques[index].options[2]} </span></div>
                    <div class="options"><span> ${quizques[index].options[3]} </span></div>`
    getques.innerHTML = questag;
    optionslist.innerHTML = optiontag;
    optionselect();   
}
function optionselect(){

let option = optionslist.querySelectorAll('.options');
let alloptions = optionslist.children.length;

option.forEach((element) => {
    element.addEventListener('click',(e)=>{
        clearInterval(clr);
       let correctans = quizques[quizcount].correct;
       console.log(correctans);
       var userans =  element.innerText;
       if(correctans === userans){
       element.classList.add("green");
       userscore+=1;
         }
        else{
        element.classList.add("red");
        console.log("incorrect");
        for (let i = 0; i < alloptions; i++) {
            if(optionslist.children[i].innerText == correctans){
                optionslist.children[i].style.backgroundColor = "rgb(177, 238, 177)";
            }
        }
        }
        for (let i = 0; i < alloptions; i++) {
            optionslist.children[i].classList.add("disable");
        }
        nextbtn.style.display = "block";
    });
})
}

let settimer=()=>{
    timeleft =  document.getElementById('time');
    let time = 15;
     clr = setInterval(() => {
        timeleft.innerText = time;
        time--;
        time = time < 10 ? "0" + time : time;
        if(time < 1){
            clearInterval(clr);
            timeleft.innerText = "00";
            timeout = document.querySelector(".txt");
            timeout.innerText = "Time Out ";
            let correctans = quizques[quizcount].correct;
            let alloptions = optionslist.children.length;
    
        for (let i = 0; i < alloptions; i++) {
            if(optionslist.children[i].innerText == correctans){
                optionslist.children[i].style.backgroundColor = "rgb(177, 238, 177)";
            }
        }
        for (let i = 0; i < alloptions; i++) {
            optionslist.children[i].classList.add("disable");
        }
        nextbtn.style.display = "block";
        }
    },1000);
}

function submit(){
    let answers = document.querySelector(".ans");
  
        result.classList.add("resdisplay");
        if(userscore == 3){
            a = `Well Try! You gave ${userscore} answers correct out of ${quizques.length} questions`;
            answers.innerText = a;
         }
        else if(userscore == 4){
            a = `Congrats! You gave ${userscore} answers correct out of ${quizques.length} questions`;
            answers.innerText = a
        }
        else if(userscore <= 2){
            a = `Nyc Try! You gave ${userscore} answers correct out of ${quizques.length} questions`;
            answers.innerText = a
        }
        else{
            a = `Oh No! You gave ${userscore} answers correct out of ${quizques.length} questions`;
            answers.innerText = a
        }
}

let quit = document.querySelector(".quit");

quit.addEventListener('click',()=>{
    window.location.reload();
    
})