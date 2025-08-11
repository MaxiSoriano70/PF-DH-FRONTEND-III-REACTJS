import styleNuestroProfesionales from '../css/NuestroProfesionales.module.css';
import perfilOdontolgo from '../assets/img/dentista.png';
import logo from '../assets/img/silla-de-dentista.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faTooth } from '@fortawesome/free-solid-svg-icons';
import { useOdontologosStates } from '../Context';
import NoHay from './NoHay';
import { Link } from 'react-router-dom';
import { routes } from '../assets/utils/routes';

const TituloProfesionales = () => {
    return (
        <article className={styleNuestroProfesionales.contenedorTitulo}>
            <h2 className={styleNuestroProfesionales.tituloProfe}>Nuestros Profesionales</h2>
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
        <div className={`${styleNuestroProfesionales.cardVeterinario} ${tema}`}>
            <div className={styleNuestroProfesionales.contenedorImagen}>
                <img className={styleNuestroProfesionales.imagenVet} src={props.imagen} alt={props.dentista.name}/>
            </div>
            <p className={`${styleNuestroProfesionales.nombreVeterinario} fs-5 text-break`}>{props.dentista.name}</p>
            <p className={styleNuestroProfesionales.matriculaVet}><FontAwesomeIcon icon={faTooth} /> {props.dentista.username}</p>
            <Link className='btn btnPersonalized1 fw-bolder' to={routes.detalle+"/"+props.dentista.id}>Ver más</Link>
            <div className={styleNuestroProfesionales.meEncantaLokita}>
                <button onClick={agregarFavoritos}>
                    <FontAwesomeIcon className={colorCorazon} icon={faHeart} />
                </button>
            </div>
        </div>
    );
}

const NuestrosProfesionales = () => {
    const { state } = useOdontologosStates();
    return (
        <section className={styleNuestroProfesionales.nuestrosProfesionales}>
            <TituloProfesionales/>
            <article className={styleNuestroProfesionales.contenedorCardsVet}>
                {
                    Array.isArray(state.odontologos) && state.odontologos.length > 0 ? (
                        state.odontologos.map((odontologo) => (
                            <CardProfesional key={odontologo.id}
                            id={odontologo.id}
                            imagen={perfilOdontolgo} dentista={odontologo}/>
                        ))
                    ):
                    (
                        <NoHay img={logo} mensaje="¡No se encontraron Odontologos!"/>
                    )
                }
            </article>
        </section>
    );
}

export default NuestrosProfesionales;