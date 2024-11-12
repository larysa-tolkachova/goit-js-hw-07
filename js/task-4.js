const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleSubmit)

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.target.elements;
        
    const arrayDan = {
        email: elements.email.value.trim(),
        password: elements.password.value.trim()
    }

    arrayDan.email === "" || arrayDan.password === "" ? alert('All form fields must be filled in') : console.log(`Email: ${ arrayDan.email }\nPassword: ${ arrayDan.password }`);
    
    event.target.reset();
    
    console.log(event.target);
    console.log(event);
    
    
}

