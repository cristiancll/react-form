import React, {useState, useContext} from 'react';
import {Button, TextField} from "@material-ui/core";
import FormValidation from "../../contexts/FormValidation";
import useErrors from "../../hooks/useErrors";
function UserData({nextStep}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validations = useContext(FormValidation);
    const [errors, validateField, hasErrors] = useErrors(validations);
    
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