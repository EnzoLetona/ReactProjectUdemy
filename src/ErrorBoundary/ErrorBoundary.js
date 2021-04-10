import react, { Component } from 'react'

const ErrorBoundary =() => {
    const [errorBoundary, setErrorBoundary]= useState({
        hasError: false,
        errorMessage: '' 
    }); 

    componentDidCatch= (error, info) => {
        setErrorBoundary({
            hasError: true,
            errorMessage: error
        });
    }

    if(errorBoundary.hasError){
        return( <h1>{errorBoundary.errorMessage}</h1>);
    }else{
        return ( props => props.children) ;
    }
}



