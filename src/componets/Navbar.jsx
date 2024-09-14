import styleNavbar from '../css/Navbar.module.css';
import logo from '../assets/img/odontologia.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { routes } from '../assets/utils/routes';
import { useOdontologosStates } from '../Context';

const Navbar = () => {
    const { state, dispatch } = useOdontologosStates();
    const tema = state.modoDarkLight ? "bgDark" : "bgColorPrincipal";

    const cambioDeTema = () => {
        dispatch({ type: "CAMBIO_TEMA" , payload: state.modoDarkLight});
    }
    return (
        <nav className={`sticky-top navbar navbar-expand-lg navbar-dark ${tema} p-md-2 p-lg-3`}>
            <div className="container-fluid">
                <Link to={routes.home}>
                    <img className={styleNavbar.logoPrincipal} src={logo} alt="logo-principal" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ml-2">
                        <Link className="nav-link fw-bolder active" aria-current="page" to={routes.home}>Home</Link>
                    </li>
                    <li className="nav-item ml-2">
                        <Link className="nav-link fw-bolder active" to={routes.contacto}>Contacto</Link>
                    </li>
                    <li className="nav-item ml-2">
                        <Link className="nav-link fw-bolder active" to={routes.favoritos}>Favoritos</Link>
                    </li>
                    </ul>
                    <button className="btn btnPersonalized1 d-flex align-items-center justify-content-center" type="button" onClick={cambioDeTema}>
                    {
                        state.modoDarkLight ? (<span className='fw-bolder'><FontAwesomeIcon icon={faSun} /> Light</span>):(<span className='fw-bolder'><FontAwesomeIcon icon={faMoon} /> Dark</span>)
                    }
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
