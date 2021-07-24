import React, {useState} from 'react';
import {Button, TextField} from "@material-ui/core";

function UserData({nextStep, validations}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const [errors, setErrors] = useState({password:{error: false, helperText: ""}});
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
    return (
        <form onSubmit={e => {
            e.preventDefault();
            if(!hasErrors()){
                nextStep({email, password});
            }
        }}>
            <TextField 
                id="email" 
                label="E-mail" 
                type="email" 
                variant="outlined" 
                margin="normal"
                value={email}
                onChange={e => setEmail(e.target.value)}
                fullWidth
                required/>
            <TextField 
                id="password" 
                name="password"
                label="Senha" 
                type="password" 
                variant="outlined" 
                margin="normal"
                value={password}
                onChange={e => setPassword(e.target.value)}
                onBlur={validateField}
                error={errors.password.error}
                helperText={errors.password.helperText}
                fullWidth
                required/>
            <Button type="submit" variant="contained" color="primary">Avançar</Button>
        </form>
    );
}

export default UserData;