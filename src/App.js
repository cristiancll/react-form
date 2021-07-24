import './App.css';
import React, {Component} from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import {Container, Typography} from "@material-ui/core";
import 'fontsource-roboto';

import {validatePassword, validateTaxpayerId} from "./models/registration.js"
class App extends Component{
  render() {
    return <Container component="article" maxWidth="sm">
              <Typography variant="h3" align="center" component="h1">Formulário de Cadastro</Typography>
              <RegistrationForm submitForm={submitForm} validations={{taxpayerId: validateTaxpayerId, password: validatePassword}}/>  
           </Container>;
  }
}

function submitForm(form){
    console.log("SUBMIT FORM");
    console.log(form);
}

export default App;
