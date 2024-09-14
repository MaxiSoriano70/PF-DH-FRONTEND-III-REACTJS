import { useOdontologosStates } from '../Context';
import styleNoHayFavoritos from '../css/NoHayFavoritos.module.css';

const NoHay = (props) => {
    const { state } = useOdontologosStates();
    const tema = state.modoDarkLight ? (styleNoHayFavoritos.noHayFavoritosDark) : (styleNoHayFavoritos.noHayFavoritosLight);
    return (
        <section className={`${styleNoHayFavoritos.ningunOdontologo} ${tema}`} data-aos="fade-up">
            <img className={styleNoHayFavoritos.logoNoHay} src={props.img} alt="favoritos-vacio"/>
            <h3 className={styleNoHayFavoritos.tituloNoHay}>{props.mensaje}</h3>
        </section>
    );
}

export default NoHay;
