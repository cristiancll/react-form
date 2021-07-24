import './App.css';
import React, {Component} from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import {Container, Typography} from "@material-ui/core";
import 'fontsource-roboto';

import {validatePassword, validateTaxpayerId} from "./models/registration.js"
import FormValidation from "./contexts/FormValidation";

class App extends Component {
    render() {
        return <Container component="article" maxWidth="sm">
            <Typography variant="h3" align="center" component="h1">Formulário de Cadastro</Typography>
            <FormValidation.Provider value={{taxpayerId: validateTaxpayerId, password: validatePassword}}>
                <RegistrationForm submitForm={submitForm}/>
            </FormValidation.Provider>
        </Container>;
    }
}

function submitForm(form) {
    console.log("SUBMIT FORM");
    console.log(form);
}

export default App;
