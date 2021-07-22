import './App.css';
import React, {Component} from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import {Container, Typography} from "@material-ui/core";
import 'fontsource-roboto';

class App extends Component{
  render() {
    return <Container component="article" maxWidth="sm">
              <Typography variant="h3" align="center" component="h1">Formulário de Cadastro</Typography>
              <RegistrationForm submitForm={submitForm} validateTaxpayerId={validateTaxpayerId}/>  
           </Container>;
  }
}

function submitForm(form){
    console.log(form);
}
function validateTaxpayerId(taxpayerId){
    if(taxpayerId.length !== 11) return {error: true, helperText: "CPF deve ter 11 dígitos."};
    return {error: false, helperText: ""};
}
export default App;
