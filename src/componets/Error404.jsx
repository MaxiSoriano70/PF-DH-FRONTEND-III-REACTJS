import { Link } from 'react-router-dom';
import dienteError from '../assets/img/agrietado.png';
import error404 from '../assets/img/error-404.png';

import { routes } from '../assets/utils/routes';

const Error404 = () => {
    return (
        <div className="container-fluid d-flex align-items-center justify-content-center flex-column py-5">
            <div className="container-fluid d-flex align-items-center justify-content-center">
                <h1 className="text-center me-3">Error</h1>
                <img
                    src={error404}
                    alt="error-404"
                    style={{ width: "60px", height: "60px" }}
                />
            </div>
            <img
            className="m-4"
            src={dienteError}
            alt="error-404"
            style={{ width: "200px", height: "200px" }}
            />
            <Link className="btn btnPersonalized1 fw-bolder" to={routes.home}>
            Volver al inicio
            </Link>
        </div>
    )
}

export default Error404
