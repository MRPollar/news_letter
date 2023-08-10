import { useContext } from "react"
import { CreateRegister } from "../context/RegisterContext"
import { Navigate, redirect } from "react-router-dom"
import '../style/cardSuccess.css';
import success from '../assets/icon-success.svg';

export default function Registered(){
    document.title = 'NewsLetter - Confirmação de email';
    const { registered, registeredEmail, setRegistered, setRegisteredEmail } = useContext(CreateRegister);

    function handlerDismissMessage(){
        setRegistered(false);
        setRegisteredEmail('');

        return redirect("/");
    }

    return (
        <>
            { !registered
            ?
            <Navigate to="/"/>
            :
            <div className="card-success">
                <div>
                    <img src={success} alt=""/>
                    <h1 role="título">Obrigado por se inscrever!</h1>
                    <p role="confirmação">Foi enviado um e-mail de confirmação para <b>{registeredEmail}</b>. Por favor, abra-o e clique no botão dentro para confirmar sua assinatura.</p>
                    <button role="button" className="dismiss" onClick={handlerDismissMessage}>Descartar mensagem</button>
                </div>
            </div>
            }
        </>
    )
}