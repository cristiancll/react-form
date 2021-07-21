import './App.css';
import React, {Component} from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import {Container, Typography} from "@material-ui/core";
import 'fontsource-roboto';

class App extends Component{
  render() {
    return <Container component="article" maxWidth="sm">
              <Typography variant="h3" align="center" component="h1">Formulário de Cadastro</Typography>
              <RegistrationForm/>  
           </Container>;
  }
}

export default App;
