function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const formValidation = document.getElementById("form");
const closeModalBtn = document.querySelector(".close");
const textField = document.querySelector('.text-label');
const submitBtn = document.getElementById("btn-submit");
const submitSuccess = document.querySelector('.submitSuccessMsg')
const firstName = document.getElementById("first");
const firstNameError = document.getElementById("firstNameError");
const lastName = document.getElementById("last");
const lastNameError = document.getElementById("lastNameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const birthDate = document.getElementById("birthdate");
const birthDateError = document.getElementById("birthDateError");
const quantity = document.getElementById("quantity");
const quantityError = document.getElementById("quantityError");
const tournamentLocation = document.querySelectorAll('[name="location"]');
const locationError = document.getElementById("locationError");
const cgu = document.getElementById("checkbox1");
const cguError = document.getElementById("cguError");

// regex
// date format YYYY-MM-DD
const regexDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
const regexMail = ["[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}"];
const regexQuantity = ["[0-9]{1,}"];

// error messages
const errorFirstName = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
const errorLastName = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const errorMail = "Veuillez entrer une adresse mail valide.";
const errorBirthDate = "Veuillez entrer une date de naissance valide.";
const errorQuantity = "Veuillez entrer un nombre valide.";
const errorLocation = "Veuillez choisir une ville.";
const errorCGU = "Veuillez accepter les conditions d'utilisation.";
const errorSubmit = "Veuillez remplir correctement tous les champs du formulaire."

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeModalBtn.addEventListener("click", closeModal);

// launch modal form
let modalReset = false;
function launchModal() {
  modalbg.style.display = "block";
  if (modalReset === true) {modalResetting()}
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// form validation

// first name
// validation conditon set
let isFirstNameValid = false;
if (isFirstNameValid === false) {
  firstNameError.innerText = errorFirstName;
}
// listen input
firstName.addEventListener("input", firstNameValidation);
// valid if condition is true
function firstNameValidation() { if (firstName.value.length >= 2) {
    firstNameError.innerText = "";
    isFirstNameValid = true;
  } else {
    firstNameError.innerText = errorFirstName;
    isFirstNameValid = false;
  }
}

// last name validation
// validation conditon set
let isLastNameValid = false;
if (isLastNameValid === false) {
  lastNameError.innerText = errorLastName;
}
// listen input
lastName.addEventListener("input", lastNameValidation);
// valid if condition is true
function lastNameValidation() {
  if (lastName.value.length >= 2) {
    lastNameError.innerText = "";
    isLastNameValid = true;
  } else {
    lastNameError.innerText = errorLastName;
    isLastNameValid = false;
  }
}

// email validation
// validation condition set
let isEmailValid = false;
if (isEmailValid === false) {
  emailError.innerText = errorMail;
}
// listen input
email.addEventListener("input", emailValidation);
// valid if condition is true
function emailValidation() {
  if (email.value.match(regexMail)) {
    emailError.innerText = "";
    isEmailValid = true;
  } else {
    emailError.innerText = errorMail;
    isEmailValid = false;
  }
}

// birth date validation
// validation condition set
let isBirthDateValid = false;
if (isBirthDateValid === false) {
  birthDateError.innerText = errorBirthDate;
}
// listen input
birthDate.addEventListener("input", birthDateValidation);
// valid if condition is true
function birthDateValidation(event) {
  if (event.target.value.match(regexDate)) {
    birthDateError.innerText = "";
    isBirthDateValid = true;
  } else {
    birthDateError.innerText = errorBirthDate;
    isBirthDateValid = false;
  }
}

// quantity validation
// validation condition set
let isQuantityValid = false;
if (isQuantityValid === false) {
  quantityError.innerText = errorQuantity;
}
// listen input
quantity.addEventListener("input", quantityValidation);
// valid if condition is true
function quantityValidation() {
  if (quantity.value.match(regexQuantity)) {
    quantityError.innerText = "";
    isQuantityValid = true;
  } else {
    quantityError.innerText = errorQuantity;
    isQuantityValid = false;
  }
}

// location validation
// validation condition set
let isTournamentValid = false;
if (isTournamentValid === false) {
  locationError.innerText = errorLocation;
}
// listen input for each checkbox
tournamentLocation.forEach(item => {
  item.addEventListener('input', () => {
    // valid if checked
    if (item.checked) {
      locationError.innerText = "";
      isTournamentValid = true;
    } else {
      locationError.innerText = errorLocation;
      isTournamentValid = false;
    }
  }
  )
})

// cgu validation
// validation condition set
let isCguValid = false;
if (isCguValid === false) {
  cguError.innerText = errorCGU;
}
// listen input
cgu.addEventListener("click", cguValidation);
// valid if checked
function cguValidation() {
  if (cgu.checked) {
    cguError.innerText = "";
    isCguValid = true;
  } else {
    cguError.innerText = errorCGU;
    isCguValid = false;
  }
}

// enable submit button
// submit btn disabled by default
submitBtn.disabled = true
// if all isValid = true btn is enable
document.querySelectorAll('.formData').forEach(item => {
  item.addEventListener('input', () => {
    if (isFirstNameValid && isLastNameValid && isEmailValid && isBirthDateValid && isQuantityValid && isTournamentValid && isCguValid) {
      submitBtn.disabled = false
    } else {
      submitBtn.disable = true;
    }
  })
})

// form validation
// listen submit btn
formValidation.addEventListener("submit", function(event) {
  // if all isValid = submit ok
  event.preventDefault();
  const returnTrue = isFirstNameValid &&
                    isLastNameValid &&
                    isEmailValid &&
                    isBirthDateValid &&
                    isQuantityValid &&
                    isTournamentValid &&
                    isCguValid;
  // if valid modal display change
  if(returnTrue) {
     formData.forEach(item => {
      item.style.display = "none"
    })
    }
    textField.style.display = "none"
    submitBtn.value = "Fermer"
    submitSuccess.style.paddingTop = "100%"
    submitSuccess.style.paddingBottom = "100%"
    submitSuccess.innerText = "Merci pour votre inscription."
    submitSuccess.style.textAlign = "center"
    modalReset = true;
    submitBtn.addEventListener('click', closeModal)
  }
)

// reset form
function modalResetting () {
  formData.forEach(item => {
    item.style.display = "block"
  })
  submitBtn.disabled = true;
  textField.style.display = "block"
  submitSuccess.style.display = "none"
  submitBtn.value = "C'est parti"
  firstName.value = "", lastName.value = "", email.value = "", birthDate.value = undefined, quantity.value = undefined, cgu.checked = false, tournamentLocation.forEach(item =>{
    item.checked = false;
  });
}