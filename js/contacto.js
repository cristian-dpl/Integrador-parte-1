const validateString = (string) =>{
    const regex = new RegExp("^[A-Za-z ]+$")
    return regex.test(string)
}

const validateMails = (email) =>{
    const regex = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
}

const validateStg = (stg, minLength, maxLength) =>{
    if (stg.length < minLength) {
        return `El valor debe tener al menos ${minLength} caracteres`
    }else if (stg.length > maxLength) {
        return `El valor debe tener no max${maxLength} caracteres`
    }else{
        return true
    }
}

const validatePositivenumber = (num) =>{
    return num >= 0
}

const valideteInt = num => Number.isInteger(num);

const onSubmitContact = e =>{
    e.preventDefault()
    let valiForm = true
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const comment = document.getElementById("comment")

    const nameError = document.getElementById("nameError")
    const emailError = document.getElementById("emailError")




    // nombre

    if (validateString(name.value)) {
        const validstg = validateStg(name.value, 3, 20);
        if (validstg === true) {
            name.ariaInvalid = false;
            nameError.innerHTML = "";
            nameError.style.display = "none"
        }else{
            name.ariaInvalid = true
            nameError.innerText = validstg
            nameError.style.display = "block"
            valiForm = false
        }
    }else{
        name.ariaInvalid = true
            nameError.innerText = "Debe colocar caracteres alfanumericos"
            nameError.style.display = "block"
            valiForm = false
    }

    // correo

    if (validateMails(email.value)) {
        email.ariaInvalid = false;
        emailError.innerHTML = "";
        emailError.style.display = "none"
    }else{
        email.ariaInvalid = true
        emailError.innerText = "Ingrse un email correctamente"
        emailError.style.display = "block"
        valiForm = false
    }
    if(valiForm && comment.value){
        const newcomment ={
            name: name.value,
            email: email.value,
            comment: comment.value,
        };
        const stgcomment = JSON.stringify(newcomment);
        localStorage.setItem("message", stgcomment)
        alert("Enviado correctamente")
    }else{
        alert("Debe completar correctamente el comentario a enviar")
    }
}


