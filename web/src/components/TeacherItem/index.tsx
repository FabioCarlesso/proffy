import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/4501944?s=460&u=cc1049a312a57102581982a4c860e6b1f82146b6&v=4" alt="Fabio Carlesso"/>
                <div>
                    <strong>Fabio Carlesso</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br/><br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;