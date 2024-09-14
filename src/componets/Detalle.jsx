import styleNuestroProfesionales from '../css/NuestroProfesionales.module.css';
import perfilOdontolgo from '../assets/img/dentista.png';
import logo from '../assets/img/silla-de-dentista.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NoHay from './NoHay';
import { useOdontologosStates } from '../Context';

const TituloProfesionales = () => {
    return (
        <article className={styleNuestroProfesionales.contenedorTitulo}>
            <h2 className={styleNuestroProfesionales.tituloProfe}>Detalle Profesional</h2>
        </article>
    );
}

const CardProfesional = (props) => {
    const { state, dispatch } = useOdontologosStates();

    const esFavorito = state.favoritos.find((favorito) => favorito.id === props.dentista.id);
    const colorCorazon = esFavorito ? (styleNuestroProfesionales.lokitaOn):(styleNuestroProfesionales.lokitaOff);

    const agregarFavoritos = () => {
        if(esFavorito){
            dispatch({ type: "REMOVER_FAVORITO" , payload: props.dentista});
        }else{
            dispatch({ type: "AGREGAR_FAVORITO", payload: props.dentista});
        }
    }

    const tema = state.modoDarkLight ? (styleNuestroProfesionales.odontologoDark) : (styleNuestroProfesionales.odontologoLight);
    return (
        <div className={`${styleNuestroProfesionales.cardDetalle} ${tema}`} data-aos="flip-up">
            <div className={styleNuestroProfesionales.contenedorImagen}>
                <img className={styleNuestroProfesionales.imagenVet} src={props.imagen} alt={props.dentista.name}/>
            </div>
            <p className={`${styleNuestroProfesionales.nombreVeterinario} fs-5 text-break`}>{props.dentista.name}</p>
            <p className={styleNuestroProfesionales.matriculaVet}><FontAwesomeIcon icon={faTooth} /> {props.dentista.username}</p>
            <p className={styleNuestroProfesionales.matriculaVet}><b>Email:</b> {props.dentista.email}</p>
            <p className={styleNuestroProfesionales.matriculaVet}><b>WebSite:</b> {props.dentista.website}</p>
            <p className={styleNuestroProfesionales.matriculaVet}><b>Compañia:</b> {props.dentista.company.name}</p>
            <div className={styleNuestroProfesionales.meEncantaLokita}>
                <button onClick={agregarFavoritos}>
                    <FontAwesomeIcon className={colorCorazon} icon={faHeart} />
                </button>
            </div>
        </div>
    );
}

const NuestrosProfesionales = () => {
    const [odontologo, setOdontologo] = useState(null);
    const params = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then((res) => setOdontologo(res.data))
            .catch((err) => console.error(err));
    }, [params.id]);

    return (
        <section className={styleNuestroProfesionales.nuestrosProfesionales}>
            <TituloProfesionales />
            {
                odontologo === null ? (
                    <NoHay img={logo} mensaje="¡Odontólogo no encontrado!" />
                ) : (
                    <article className={styleNuestroProfesionales.contenedorCardsVet}>
                        <CardProfesional
                            key={odontologo.id}
                            imagen={perfilOdontolgo}
                            dentista={odontologo}
                        />
                    </article>
                )
            }
        </section>
    );
}

export default NuestrosProfesionales;