import { useContext, useState } from "react"
import { CreateRegister } from "../context/RegisterContext"
import "../style/formCard.css";
import Form from "../components/Form";
import { Navigate } from "react-router-dom";

//imagens
import iconList from '../assets/icon-list.svg'
import desktop from '../assets/illustration-sign-up-desktop.svg';
import mobile from '../assets/illustration-sign-up-mobile.svg';


export default function Home(){
    document.title = 'NewsLetter - Registrar';
    const [lista] = useState([
        'Descoberta de produtos e construção do que importa',
        'Medir para garantir que as atualizações sejam um sucesso',
        'E muito mais'
    ]);
    const { registered } = useContext(CreateRegister);

    return(
        <>
            { registered ? <Navigate to="/registered"/> : ''}
            <div class="form-card">
                <div className="message">
                    <h1 role="titulo">fique atualizado!</h1>
                    <p role="chamada">junte-se a mais de 60.000 gerentes de produto que recebem atualizações mensais sobre:</p>
                    <ul role="serviços">
                        {lista.map((linha,index) => <li key={index}><img src={iconList} alt=""/>{linha}</li>)}
                    </ul>
                    <Form/>
                </div>
                <div className="background-form">
                    <img role="banner" className="bacground-form-desktop" src={desktop} alt=""/>
                    <img role="banner" className="bacground-form-mobile" src={mobile} alt=""/>
                </div>
            </div>
        </>
    )
}