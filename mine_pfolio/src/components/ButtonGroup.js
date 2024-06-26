
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import './mainScreen.css';


function ButtonGroupp({Projects, setProjects,FutureGoals, setFutureGoals}){
    function DevelopmentHandler(){
        setFutureGoals(false);
        setProjects(true);
        
    }
    function FutureGoalsHandler(){
        setProjects(false);
        setFutureGoals(true);
        
        
    }
return(
    <ButtonGroup variant="contained" size='large' aria-label="Basic button group" style={{marginTop:'50px'}}>
        <Button onClick={DevelopmentHandler} style={{backgroundColor:'rgb(48, 48, 48)'}}>Developemnt Projects</Button>
        <Button onClick={FutureGoalsHandler} style={{backgroundColor:'rgb(48, 48, 48)'}}>Future Goals</Button>
    </ButtonGroup>
);

}


export default ButtonGroupp;