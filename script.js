const typingText = document.querySelector(".typing");

const words = [
    "Java Developer",
    "Aspiring Network Engineer",
    "Technical Business Support Freelancer ",
    "AI Internship @CXI-Africa Learner"
];

let wordIndex = 0;
let letterIndex = 0;

function typeEffect(){

    if(letterIndex < words[wordIndex].length){

        typingText.textContent += words[wordIndex][letterIndex];

        letterIndex++;

        setTimeout(typeEffect, 100);

    }else{

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect(){

    if(letterIndex > 0){

        typingText.textContent =
            words[wordIndex].substring(0, letterIndex - 1);

        letterIndex--;

        setTimeout(eraseEffect, 50);

    }else{

        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(typeEffect, 300);

    }

}

window.onload = typeEffect;