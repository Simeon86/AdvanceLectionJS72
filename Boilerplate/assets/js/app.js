const form = document.querySelector('form#register')

form.addEventListener('submit', function(event){
    event.preventDefault();
    const errorMessages = this.querySelectorAll('form .error-msg');
    errorMessages.forEach(message => {
        message.parentNode.removeChild(message);
    })

    const username = this.querySelector('input[name="username"]').value.trim();
    const firstName = this.querySelector('input[name="firstName"]').value.trim();
    const lastName = this.querySelector('input[name="lastName"]').value.trim();
    const email = this.querySelector('input[name="email"]').value.trim();
    const password = this.querySelector('input[name="password"]').value.trim();
    const repeatPassword = this.querySelector('input[name="repeatPassword"]').value.trim();
    
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm;

    const errors = [];

    if(username.length < 4 || username.length > 16) {
        let errorObj = {
            errorFor: "username",
            errorMessage: 'Полето username трябва да между 4 и 16 символа'
        }
        errors.push(errorObj);
    }

    if(firstName.length < 2 || firstName.length > 30) {
        let errorObj = {
            errorFor: "firstName",
            errorMessage: 'Полето firstName трябва да между 2 и 30 символа'
        }
        errors.push(errorObj);
    }

    if(lastName.length < 2 || lastName.length > 30) {
        let errorObj = {
            errorFor: "lastName",
            errorMessage: 'Полето firstName трябва да между 2 и 30 символа'
        }
        errors.push(errorObj);
    }

    if(!emailPattern.test(email)){
        let errorObj = {
            errorFor: "email",
            errorMessage: 'Не е валиден имейл!'
        }
        errors.push(errorObj);
    }

    if(password.length < 8) {
        let errorObj = {
            errorFor: "password",
            errorMessage: 'Паролата трябва да е поне 8 символа!'
        }
        errors.push(errorObj);
    }

    if(repeatPassword < 8 || password !== repeatPassword) {
        let errorObj = {
            errorFor: "repeatPassword",
            errorMessage: 'Паролите не съвпадат!'
        }
        errors.push(errorObj);
    }

    console.log(errors);

    if(errors.length) {
        errors.forEach(error => {
            let inputItem = this.querySelector(`input[name="${error.errorFor}"]`)

            const p = document.createElement('p');
            p.textContent = error.errorMessage;
            p.classList.add('error-msg');

            inputItem.parentNode.append(p);
        })
        return;
    }

    alert('Working');

})