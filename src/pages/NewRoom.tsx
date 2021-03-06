import {Link} from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import {Button} from '../components/Button'

import '../styles/auth.scss';

export function NewRoom(){
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie Salas de Q&amp;A ao vivo</strong>
                <p>Tire as duvídas de sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask"/>
                    <h3>Criar uma nova Sala</h3>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da Sala"
                        />
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}