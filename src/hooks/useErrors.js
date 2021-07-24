import React, {useState} from "react";

function useErrors(validations){
    const [errors, setErrors] = useState(createInitialState(validations));
    function validateField(e){
        const {name, value} = e.target;
        const nErrors = {...errors};
        nErrors[name] = validations[name](value);
        setErrors(nErrors);
    }
    function hasErrors(){
        for(let field in errors) if(errors[field].error) return true;
        return false;
    }
    
    return [errors, validateField, hasErrors];
}

function createInitialState(validations){
    const initialState = {};
    for(let field in validations){
        initialState[field] = {error: false, helperText: ""};
    }
    return initialState;
}

export default useErrors;