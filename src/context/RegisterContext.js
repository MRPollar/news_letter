import { createContext, useState } from "react";

export const CreateRegister = createContext();

export default function RegisterContext({children}){
    const [error, setError] = useState(false);
    const [registered, setRegistered] = useState(false);
    const [registeredEmail, setRegisteredEmail] = useState('');

    function userRegister(email){
        if(email !== '' && email.includes('@') && email.includes('.com')){
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