import styleNuestrasMarcas from '../css/NuestrasMarcas.module.css';
import marca1 from '../assets/img/marcas-1.png';
import marca2 from '../assets/img/marcas-2.png';
import marca3 from '../assets/img/marcas-3.png';
import marca4 from '../assets/img/marcas-4.png';
import marca5 from '../assets/img/marcas-5.png';
import marca6 from '../assets/img/marcas-6.png';
import { useOdontologosStates } from '../Context';

const NuestrasMarcas = () => {

    const { state } = useOdontologosStates ();
    const tema = state.modoDarkLight ? (styleNuestrasMarcas.contenedorLogoDark) : (styleNuestrasMarcas.contenedorLogoLight);
    return (
        <section className={styleNuestrasMarcas.nuestrasMarcas}>
            <article className={styleNuestrasMarcas.marcaTitulo}>
                <h3 className={styleNuestrasMarcas}>Nuestras marcas</h3>
            </article>
            <article className={styleNuestrasMarcas.marcas}>
                <div className={`${styleNuestrasMarcas.contenedorLogo} ${tema}`} data-aos="flip-up">
                    <img className={styleNuestrasMarcas.imgMarca} src={marca1} alt="d-700"/>
                </div>
                <div className={`${styleNuestrasMarcas.contenedorLogo} ${tema}`} data-aos="flip-up">
                    <img className={styleNuestrasMarcas.imgMarca} src={marca2} alt="Hu-Friedy"/>
                </div>
                <div className={`${styleNuestrasMarcas.contenedorLogo} ${tema}`} data-aos="flip-up">
                    <img className={styleNuestrasMarcas.imgMarca} src={marca3} alt="RTD"/>
                </div>
                <div className={`${styleNuestrasMarcas.contenedorLogo} ${tema}`} data-aos="flip-up">
                    <img className={styleNuestrasMarcas.imgMarca} src={marca4} alt="Eagle"/>
                </div>
                <div className={`${styleNuestrasMarcas.contenedorLogo} ${tema}`} data-aos="flip-up">
                    <img className={styleNuestrasMarcas.imgMarca} src={marca5} alt="voco"/>
                </div>
                <div className={`${styleNuestrasMarcas.contenedorLogo} ${tema}`} data-aos="flip-up">
                    <img className={styleNuestrasMarcas.imgMarca} src={marca6} alt="Creality"/>
                </div>
            </article>
        </section>
    );
}

export default NuestrasMarcas;
