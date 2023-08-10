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
            <div role="main" class="form-card">
                <div className="message">
                    <h1>fique atualizado!</h1>
                    <p>junte-se a mais de 60.000 gerentes de produto que recebem atualizações mensais sobre:</p>
                    <ul role="tablist">
                        {lista.map((linha,index) => <li role="tab" key={index}><img src={iconList} alt=""/>{linha}</li>)}
                    </ul>
                    <Form/>
                </div>
                <div className="background-form">
                    <img className="bacground-form-desktop" src={desktop} alt=""/>
                    <img className="bacground-form-mobile" src={mobile} alt=""/>
                </div>
            </div>
        </>
    )
}