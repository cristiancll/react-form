function validateTaxpayerId(taxpayerId){
    if(taxpayerId.length !== 11) return {error: true, helperText: "CPF deve ter 11 dígitos."};
    return {error: false, helperText: ""};
}

function validatePassword(password){
    if(password.length < 4 || password.length > 72) return {error: true, helperText: "Senha deve ter entre 4 e 72 caracteres."};
    return {error: false, helperText: ""};
}

export {validatePassword, validateTaxpayerId}