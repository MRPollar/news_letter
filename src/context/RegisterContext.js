import { createContext, useState } from "react";

export const CreateRegister = createContext();

export default function RegisterContext({children}){
    const [error, setError] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [registeredEmail, setRegisteredEmail] = useState('');

    function userRegister(email){
        const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if(mailRegex.test(email)){
            setRegistered(true);
            setRegisteredEmail(email);
        } else {
            setError(true);
        }
    }

    return(
        <CreateRegister.Provider value={{error, userRegister, setError, registered, setRegistered, registeredEmail, setRegisteredEmail}}>
            {children}
        </CreateRegister.Provider>
    )
}