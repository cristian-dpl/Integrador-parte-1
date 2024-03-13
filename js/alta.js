
const validateString = (string) =>{
    const regex = new RegExp("^[A-Za-z ]+$")
    return regex.test(string)
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


const saveGame = game =>{
    const initialValue = localStorage.getItem("games")
    if (initialValue) {
        const values = JSON.parse(initialValue)
        const newValues = [ ... values, game]
        const newVaStg = JSON.stringify(newValues)
        localStorage.setItem("games", newVaStg)

    }else{
        const initialGames = JSON.stringify({game})
        localStorage.setItem("games", initialGames)
    }
    alert("el juego a sido grabado correctamente")
}

const onSubmitProduct = (e) => {
    e.preventDefault()
    let validForm = true;
    const name = document.getElementById("name")
    const price = document.getElementById("price")
    const stock = document.getElementById("stock")
    const brand = document.getElementById("brand")
    const categoty = document.getElementById("categoty")
    const shordescription = document.getElementById("shorDescription")
    const egefrom = document.getElementById("egefrom") 
    const longdescription = document.getElementById("longdescription") 
    const egeup = document.getElementById("egeUp")
    const photo = document.getElementById("photo")


    const nameError = document.getElementById("nameError")
    const priceError = document.getElementById("priceError")
    const stockError = document.getElementById("stockError")
    const brandError = document.getElementById("brandError")
    const categotyError = document.getElementById("categotyError")
    const shordescriptionError = document.getElementById("shorDescriptionError")
    const egefromError = document.getElementById("egefromError") 
    const longdescriptionError = document.getElementById("longdescriptionError") 
    const egeupError = document.getElementById("egeupError")
    // console.log(name)

    // name
    if (validateString(name.value)) {
        const validateString = validateStg(name.value, 2, 30)
        if (validateString === true) {
            name.ariaInvalid = false
            nameError.innerText = "";
            nameError.style.display = "none"
        }else{
            name.ariaInvalid = true
            nameError.innerText = validateString
            nameError.style.display = "block"
            validForm = false
        }
    }else{
        name.ariaInvalid = true
        nameError.innerText = "Debe colocar caracteres alfabeticos";
        nameError.style.display = "block"
        validForm = false

    }


    // brand
    if (brand.value.length > 0) {
        if (validateString(brand.value)) {
            const validateBrand = validateStg(brand.value, 2, 30)
            if (validateBrand === true) {
                brand.ariaInvalid = false
                brandError.innerText = "";
                brandError.style.display = "none"
            }else{
                brand.ariaInvalid = true
                brandError.innerText = validateBrand
                brandError.style.display = "block"
                validForm = false

            }
        }else{
            brand.ariaInvalid = true
            brandError.innerText = "Debe colocar caracteres alfabeticos";
            brandError.style.display = "block"
            validForm = false

        }
        
    }

    // Categoria
    // Descripcion corta
    if (validateString(shordescription.value)) {
        const validateshor = validateStg(shordescription.value)
        if (validateshor === true) {
            shordescription.ariaInvalid = false
            shordescriptionError.innerText = "";
            shordescriptionError.style.display = "none"
        }else{
            shordescription.ariaInvalid = true
            shordescriptionError.innerText = validateshor
            shordescriptionError.style.display = "block"
            validForm = false

        }
    }else{
        brand.ariaInvalid = true
        brandError.innerText = "Debe colocar caracteres alfabeticos";
        brandError.style.display = "block"
        validForm = false

    }

    // precio
    if (!validatePositivenumber(price.value)) {
        price.ariaInvalid = true
        priceError.innerText = "Debe ser un numero positivo";
        priceError.style.display = "block"
        validForm = false

    }else{
        price.ariaInvalid = false
        priceError.innerText = ""
        priceError.style.display = "none"
    }

    // stock
    if (!validatePositivenumber(stock.value)) {
        stock.ariaInvalid = true
        stockError.innerText = "Debe ser un numero positivo";
        stockError.style.display = "block"
        validForm = false

    }else if (!valideteInt(parseInt(stock.value))) {
        stock.ariaInvalid = true
        stockError.innerText = "Debe ser un numero entero";
        stockError.style.display = "block"
        validForm = false

    }else{
        stock.ariaInvalid = false
        stockError.innerText = ""
        stockError.style.display = "none"
    }

    // Edad desde y hasta
    if (egefrom.value.length || egeup.value.length) {
        if (!validatePositivenumber(egefrom.value)) {
            egefrom.ariaInvalid = true
            egefromError.innerText = "Debe ser un numero positivo";
            egefromError.style.display = "block"
            validForm = false
    
        }else if (!valideteInt(parseInt(egefrom.value))) {
            egefrom.ariaInvalid = true
            egefromError.innerText = "Debe ser un numero entero";
            egefromError.style.display = "block"
            validForm = false
    
        }else{
            egefrom.ariaInvalid = false
            egefromError.innerText = "";
            egefromError.style.display = "none"
        }
    
        if (!validatePositivenumber(egeup.value)) {
            egeup.ariaInvalid = true
            egeupError.innerText = "Debe ser un numero positivo";
            egeupError.style.display = "block"
            validForm = false
    
        }else if (!valideteInt(parseInt(egeup.value))) {
            egeup.ariaInvalid = true
            egeupError.innerText = "Debe ser un numero entero";
            egeupError.style.display = "block"
            validForm = false
    
        }else if (egefrom.value >= egeup.value) {
            egeup.ariaInvalid = true
            egeupError.innerText = "La edad hasta no debe ser menor a edad desde";
            egeupError.style.display = "block"
            validForm = false
    
        }else{
            egeup.ariaInvalid = false
            egeupError.innerText = ""
            egeupError.style.display = "none"
        }
    }
    if (validForm) {
        const game = {
            name: name.value,
            price: parseFloat(price.value),
            stock: parseInt(stock.value),
            brand: brand.value,
            categoty: categoty.value,
            shordescription: shordescription.value,
            longdescription: longdescription.value,
            egefrom: egefrom.value === "" ? "": parseInt(egefrom.value),
            egeup: egeup.value === "" ? "": parseInt(egeup.value),
            photo: name.value
        }
        
        saveGame(game)
    }

}