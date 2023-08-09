import '../style/form.css';
import { CreateRegister } from '../context/RegisterContext';
import { useContext, useEffect, useState } from 'react';

export default function Form(){
    const { error, userRegister, setError } = useContext(CreateRegister);

    const [email, setEmail] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        userRegister(email);
    }

    function handleEmail(e){
        setEmail(e.target.value);
        if(error == true){
            setError(false)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor=""><span>Endereço de email</span>{error ? <span class="err-message">e-mail válido necessário</span> : ''}</label>
            <input onChange={handleEmail} className={error ? 'error': ''} type="text" placeholder="exemplo@email.com" defaultValue={email}/>
            <button type="submit">Assinatura mensal da newsletter</button>
        </form>
    )
}