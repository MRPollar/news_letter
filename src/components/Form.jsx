import '../style/form.css';
import { CreateRegister } from '../context/RegisterContext';
import { useContext, useState } from 'react';

export default function Form(){
    const { error, userRegister, setError } = useContext(CreateRegister);

    const [email, setEmail] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        userRegister(email);
    }

    function handleEmail(e){
        setEmail(e.target.value);
        if(error === true){
            setError(false)
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label role='email' htmlFor=""><span>Endereço de email</span>{error ? <span class="err-message">e-mail válido necessário</span> : ''}</label>
            <input role='input' onChange={handleEmail} className={error ? 'error': ''} type="text" placeholder="exemplo@email.com" defaultValue={email}/>
            <button type="submit" role="button">Assinatura mensal da newsletter</button>
        </form>
    )
}