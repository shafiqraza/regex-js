const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();

  if(validate(name) && validate(email) && validate(phone) && validate(password)) {
    const msg = document.querySelector("#msg");
    msg.classList.remove('inactive');
    name.value = "";
    email.value = "";
    phone.value = "";
    password.value = "";

    name.classList.remove('is-valid');
    email.classList.remove('is-valid');
    phone.classList.remove('is-valid');
    password.classList.remove('is-valid');
  }else {
    console.log("invalid form!");
  }
});

const validate = (field) => {
  let errText;
  if(field.value) {
    if(field.id === "name") {

    let nameRegex = /[0-9!@#$%^&*]/; 
    
    if(!nameRegex.test(field.value)) {
      removeErr(field, nameErrMsg)
      return true;
    }else {
      errText = 'Please type a valid name and don\'t Number or Symbol!'
      showError(field, errText);
       return false;
    }

    }else if(field.id === "email") {

      const emailRegex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]+)$/;
      if(emailRegex.test(field.value)) {
        removeErr(field)
        return true;
      }else {
        errText = 'Please provide a valid email'
        showError(field, errText);
        return false;
      }
      
    }else if(field.id === "phone") {

      const phoneRegex = /^03([0-9]{9})$|^\+923([0-9]{9})$/;
      if(phoneRegex.test(field.value)) {
        removeErr(field)
        return true;
      }else {
        let errText = 'Invalid Phone Number!'
        showError(field, errText);
      }

    }else if(field.id === "password") {

      if(field.value.length >= 6){

        const strongPasswordRegex = /^((?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]))[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(strongPasswordRegex.test(field.value)) {
          removeErr(field)
          return true;
        }else {
          let textErr = "Passwors must contain letters atleast one Number and special character ";
          showError(field,textErr)
        }
      
      }else {
        let textErr = "Password must contains minimum 6 letters"
        showError(field,textErr);
      }



    }
  }else {
    errText = 'This field can\'t be empty!'
    showError(field, errText);
    return false;
  }
} 
name.addEventListener("blur", function() {
  validate(this);
})

email.addEventListener('blur', function() {
  validate(this)
});

phone.addEventListener('blur', function() {
  validate(this)
});

// password.addEventListener("blur", function() {
//   validate(this);
// });

const showError = (el, text) => {
  el.classList.add('is-invalid')
  el.nextElementSibling.textContent = text;
  el.nextElementSibling.classList.add('invalid-feedback')
  el.nextElementSibling.classList.remove('valid-feedback')
}

const removeErr = (inputEl)  => {
  inputEl.classList.remove("is-invalid");
  inputEl.classList.add("is-valid");
  inputEl.nextElementSibling.textContent = "Looks good!";
  inputEl.nextElementSibling.classList.remove('invalid-feedback')
  inputEl.nextElementSibling.classList.add('valid-feedback')
}