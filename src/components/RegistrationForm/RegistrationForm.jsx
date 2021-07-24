import React, {useState, useEffect} from 'react';
import PersonalData from "./PersonalData";
import UserData from "./UserData";
import AddressData from "./AddressData";
import {Step, StepLabel, Stepper, Typography} from "@material-ui/core";

function RegistrationForm({submitForm, validations}){
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        console.log(formData);
        if(currentStep === forms.length - 1){
            submitForm(formData);     
        }
    });
    
    const forms = [
        <UserData nextStep={nextStep} validations={validations}/>,
        <PersonalData nextStep={nextStep} validations={validations}/>,
        <AddressData nextStep={nextStep} validations={validations}/>,
        <Typography variant="h5" align="center">Cadastro realizado com sucesso!</Typography>
    ];
    
    function nextStep(data){
        setFormData({...formData, ...data});
        setCurrentStep(currentStep + 1);
    }
    function previousStep(){
        if(currentStep - 1 >= 0){
            setCurrentStep(currentStep - 1);    
        }
    }
    
    function currentForm(currentStep){
        if(currentStep > forms.length) return <Typography>Erro ao selecionar formulário</Typography>;
        return forms[currentStep];
    }
    
    return (<>
        <Stepper activeStep={currentStep}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Endereço</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        { currentForm(currentStep) }
    </>);
}

export default RegistrationForm;