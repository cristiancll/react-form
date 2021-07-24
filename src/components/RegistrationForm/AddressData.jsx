import React, {useContext, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import FormValidation from "../../contexts/FormValidation";
import useErrors from "../../hooks/useErrors";

function AddressData({nextStep}) {
    
    const [zipCode, setZipcode] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");

    const validations = useContext(FormValidation);
    const [errors, validateField, hasErrors] = useErrors(validations);
    
    return (
        <form onSubmit={e => {
            e.preventDefault();
            if(!hasErrors()) {
                nextStep({zipCode, state, city, street, number});
            }
        }}>
            <TextField 
                id="zipcode" 
                label="CEP" 
                type="number" 
                variant="outlined" 
                margin="normal" 
                value={zipCode}
                onChange={e => setZipcode(e.target.value)}
                required/>
            <TextField 
                id="state" 
                label="Estado" 
                type="text" 
                variant="outlined" 
                margin="normal"  
                value={state}
                onChange={e => setState(e.target.value)}
                required/>
            <TextField 
                id="city" 
                label="Cidade" 
                type="text" 
                variant="outlined" 
                margin="normal" 
                value={city}
                onChange={e => setCity(e.target.value)}
                fullWidth 
                required/>
            <TextField 
                id="street" 
                label="Rua" 
                type="text" 
                variant="outlined" 
                margin="normal" 
                value={street}
                onChange={e => setStreet(e.target.value)}
                fullWidth 
                required/>
            <TextField 
                id="number" 
                label="No." 
                type="number" 
                variant="outlined" 
                margin="normal" 
                value={number}
                onChange={e => setNumber(e.target.value)}
                required/>
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
        </form>
    );
}

export default AddressData;