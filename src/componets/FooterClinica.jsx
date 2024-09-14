import styleFooter from '../css/Footer.module.css';
import logo from '../assets/img/odontologia.png';
import { Link } from 'react-router-dom';
import { routes } from '../assets/utils/routes.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useOdontologosStates } from '../Context.jsx';

const FooterClinica = () => {
    const { state } = useOdontologosStates();
    const tema = state.modoDarkLight ? "bgDark" : "bgColorPrincipal";
    return (
        <footer className={`${styleFooter.footerClinica} ${tema}`}>
            <section className={styleFooter.section1}>
                <article className={styleFooter.boxLogo}>
                    <Link className={styleFooter.linkLogo} to={routes.home} aria-label="Logo y nombre">
                        <img className={styleFooter.imgLogo} src={logo} alt="Logo-pie-de-pagina"/>
                        <p className={styleFooter.pLogo}>Clinica</p>
                    </Link>
                </article>
                <article className={styleFooter.boxNosotros}>
                    <h3>Sobre nosotros</h3>
                    <p>En nuestra clínica odontológica contamos con profesionales de excelencia y equipos de alta tecnología, para brindarte el mejor cuidado y experiencia dental.</p>
                </article>
                <article className={styleFooter.boxRedes}>
                    <a href="#" aria-label="Email"><FontAwesomeIcon className={styleFooter.iconoRedes} icon={faEnvelope} /></a>
                    <a href="#" aria-label="Instagram"><FontAwesomeIcon className={styleFooter.iconoRedes} icon={faInstagram} /></a>
                    <a href="#" aria-label="Facebook"><FontAwesomeIcon className={styleFooter.iconoRedes} icon={faFacebook} /></a>
                    <a href="#" aria-label="Twitter"><FontAwesomeIcon className={styleFooter.iconoRedes} icon={faTwitter} /></a>
                </article>
            </section>
            <section className={styleFooter.section2}>
                <small>
                    &copy; 2024 <b>Maximiliano Soriano</b> - Todos los derechos reservados.
                </small>
            </section>
        </footer>
    );
}

export default FooterClinica;
