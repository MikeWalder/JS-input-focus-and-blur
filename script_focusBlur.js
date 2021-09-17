// Ajouter un effet en entrant dans le champ input et en y sortant

const input = document.querySelectorAll("input");
console.log(input.style);

function focusAndBlur(back, border, transition, boxShadow) {
    input.style.background = back;
    input.style.borderRadius = border;
    input.style.transition = transition;
    input.style.boxShadow = boxShadow;
}

for(let i = 0; i < input.length; i++){
    input[i].addEventListener("focus", () => {
        //focusAndBlur("#C0FFEE", "20px", "background 0.5s ease, border-radius 0.5s ease", "rgba(0, 0, 0, 0.35) 0px 5px 15px");
        input[i].classList.remove('blured');
        input[i].classList.add('focused');
    })

    input[i].addEventListener("blur", () => {
        input[i].classList.remove('focused');
        input[i].classList.add('blured');
    })
}
