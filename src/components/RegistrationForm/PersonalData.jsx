import React, {useState} from 'react';
import {Button, FormControlLabel, Switch, TextField} from "@material-ui/core";

function PersonalData({nextStep, validations}){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [taxpayerId, setTaxpayerId] = useState("");
    const [promo, setPromo] = useState(true);
    const [newsletter, setNewsletter] = useState(true);

    const [errors, setErrors] = useState({taxpayerId:{error: false, helperText: ""}});

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
    return <form onSubmit={e => {
        e.preventDefault();
        if(!hasErrors()){
            nextStep({name, surname, taxpayerId, promo, newsletter});
        }
    }}>
        <TextField 
            id="name" 
            value={name} 
            label="Nome" 
            variant="outlined" 
            margin="normal" 
            fullWidth
            onChange={event => setName(event.target.value)}
            required/>
        <TextField 
            id="surname" 
            value={surname} 
            label="Sobrenome" 
            variant="outlined" 
            margin="normal" 
            fullWidth
            onChange={event => setSurname(event.target.value)}
            required/>
        <TextField 
            id="taxpayerId" 
            name="taxpayerId"
            value={taxpayerId} 
            label="CPF" 
            variant="outlined" 
            margin="normal" 
            fullWidth
            onChange={event => setTaxpayerId(event.target.value)}
            onBlur={validateField}
            error={errors.taxpayerId.error}
            helperText={errors.taxpayerId.helperText}
            required/>
        <FormControlLabel 
            label="Promoções"
            control={
                <Switch color="primary"
                    checked={promo}
                    onChange={event => setPromo(event.target.checked)}/>
            }/>
        <FormControlLabel 
            label="Novidades"
            control={
                <Switch color="primary"
                    checked={newsletter}
                    onChange={event => setNewsletter(event.target.checked)}/>
            }/>
        <Button
            type="submit"
            variant="contained"
            color="primary">
            Avançar
        </Button>
    </form>;
}


export default PersonalData;