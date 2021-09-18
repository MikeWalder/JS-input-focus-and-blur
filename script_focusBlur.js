// Ajouter un effet en entrant dans le champ input et en y sortant

const input = document.querySelectorAll("input");
const confirmText = document.querySelector("#confirmation");

for(let i = 0; i < input.length; i++){
    input[i].addEventListener("focus", () => {
        input[i].classList.remove('blured');
        input[i].classList.add('focused');
    })

    input[i].addEventListener("blur", () => {
        input[i].classList.remove('focused');
        input[i].classList.add('blured');
    })
}

function submitForm() {
    document.querySelector('#myForm').submit();
}

function textConfirm() {
    confirmText.innerHTML="Le formulaire a été envoyé !";
    confirmText.classList.add('animConfirmation');
    setTimeout(submitForm, 5000);
}
