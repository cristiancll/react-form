import React from "react";


const FormValidation = React.createContext({
    taxpayerId: noValidation,
    password: noValidation
});

function noValidation(){
    return {error: false, helperText: ""};
}

export default FormValidation;