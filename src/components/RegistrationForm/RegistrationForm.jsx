import React from 'react';
import {Button, FormControlLabel, Switch, TextField} from "@material-ui/core";


function RegistrationForm(){
    return <form>
        <TextField id="name" label="Nome" variant="outlined" margin="normal" fullWidth/>
        <TextField id="surname" label="Sobrenome" variant="outlined" margin="normal" fullWidth/>
        <TextField id="taxpayerId" label="CPF" variant="outlined" margin="normal" fullWidth/>
        <FormControlLabel control={<Switch defaultChecked color="primary"/>} label="Promoções"/>
        <FormControlLabel control={<Switch defaultChecked color="primary"/>} label="Novidades"/>
        <Button
            type="submit"
            variant="contained" 
            color="primary">
            Cadastrar
        </Button>
    </form>;
}

export default RegistrationForm;