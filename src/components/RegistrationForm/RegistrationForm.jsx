import React, {useState} from 'react';
import {Button, FormControlLabel, Switch, TextField} from "@material-ui/core";

function RegistrationForm({submitForm, validateTaxpayerId}){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [taxpayerId, setTaxpayerId] = useState("");
    const [promo, setPromo] = useState(true);
    const [newsletter, setNewsletter] = useState(true);
    
    const [errors, setErrors] = useState({taxpayerId:{error: false, helperText: ""}});
    
    
    
    return <form onSubmit={event => {
      event.preventDefault();
      submitForm({name, surname, taxpayerId, promo, newsletter});
    }}>
        <TextField id="name" value={name} label="Nome" variant="outlined" margin="normal" fullWidth
            onChange={event => setName(event.target.value)}/>
        <TextField id="surname" value={surname} label="Sobrenome" variant="outlined" margin="normal" fullWidth
            onChange={event => setSurname(event.target.value)}/>
        <TextField id="taxpayerId" value={taxpayerId} label="CPF" variant="outlined" margin="normal" fullWidth
            onChange={event => setTaxpayerId(event.target.value)}
            onBlur={event => {
                setErrors({taxpayerId: validateTaxpayerId(taxpayerId)})
            }}
            error={errors.taxpayerId.error}
            helperText={errors.taxpayerId.helperText}/>
        <FormControlLabel label="Promoções"
            control={
                <Switch color="primary"
                    checked={promo}
                    onChange={event => setPromo(event.target.checked)}/>
            }/>
        <FormControlLabel label="Novidades"
            control={
                <Switch color="primary"
                    checked={newsletter}
                    onChange={event => setNewsletter(event.target.checked)}/>
            }/>
        <Button
            type="submit"
            variant="contained" 
            color="primary">
            Cadastrar
        </Button>
    </form>;
}


export default RegistrationForm;