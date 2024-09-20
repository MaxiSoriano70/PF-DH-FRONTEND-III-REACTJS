import { useState } from "react";
import { useOdontologosStates } from "../Context";
import logoEmail from '../assets/img/correo-electronico.png';
import NoHay from "./NoHay";


const Contacto = () => {
    const { state } = useOdontologosStates();
    const tema = state.modoDarkLight ? "has-text-white" : "";

    const [usuarioDatos, setUsuarioDatos] = useState({
        nombreApellido: "",
        email: "",
    });

    const [show, setShow] = useState(false);

    const [nombreApellidoValido, setNombreApellidoValido] = useState(-1);
    const [emailValido, setEmailValido] = useState(-1);

    const [nombreApellidoError, setNombreApellidoError] = useState(-1);
    const [emailError, setEmailError] = useState(-1);

    const resetFormulario = () => {
        setUsuarioDatos({
            nombreApellido: "",
            email: "",
        });
        setNombreApellidoValido(-1);
        setEmailValido(-1);
        setNombreApellidoError(-1);
        setEmailError(-1);
        setShow(false);
    };

    const handleChangeNombreApellido = (e) => {
        setUsuarioDatos({ ...usuarioDatos, nombreApellido: e.target.value });
        setNombreApellidoValido(validarNombreApellido(e.target.value));
        setNombreApellidoError(validarNombreApellido(e.target.value));
    };

    const handleChangeEmail = (e) => {
        setUsuarioDatos({ ...usuarioDatos, email: e.target.value });
        setEmailValido(validarEmail(e.target.value));
        setEmailError(validarEmail(e.target.value));
    };

    const capitalizarTexto = (nombre) => {
        return nombre.replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    }

    const validarNombreApellido = (nombreApellido) => {
        const regex = /^([a-zA-ZáéíóúÁÉÍÓÚñÑ]{3,}\s?)+$/;
        let textoNormalizado = nombreApellido.trim().toLowerCase().split(/\s+/).join(' ');
        textoNormalizado = capitalizarTexto(textoNormalizado);
        if (textoNormalizado.length < 3 || textoNormalizado.length > 50) {
            return 0;
        }
        if (regex.test(textoNormalizado)) {
            return 1;
        } else {
            return 0;
        }
    }

    const validarEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (regex.test(email)) {
            return 1;
        } else {
            return 0;
        }
    }

    const validarEstilo = (valor) => {
        if(valor === 1){
            return "is-success";
        }else if( valor === 0){
            return "is-danger";
        }
        else{
            return "";
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombreApellidoValido === 1 && emailValido === 1) {
            setShow(true);
            setTimeout(() => {
                resetFormulario();
                setShow(false);
            }, 5000);
        } else {
            setShow(false);
            if (nombreApellidoValido === 0 || nombreApellidoValido === -1) {
                setNombreApellidoError(0);
            }
            if (emailValido === 0 || emailValido === -1) {
                setEmailError(0);
            }
        }
    };

    return (
        <div className="container is-max-tablet" data-aos="fade-up">
            {
                show?
                    <NoHay img={logoEmail} mensaje={`Gracias ${usuarioDatos.nombreApellido} nos comunicaremos con Usted en la brevedad.`}/>
                :
                <form onSubmit={handleSubmit}>
                    <div className="field m-4">
                        <label className={`label ${tema}`} htmlFor="inputNombreApelldo">Nombre y Apellido</label>
                        <div className="control">
                            <input
                                className={`input ${validarEstilo(nombreApellidoError)}`}
                                value={usuarioDatos.nombreApellido}
                                type="text"
                                id="inputNombreApelldo"
                                onChange={handleChangeNombreApellido}
                                onBlur={handleChangeNombreApellido}
                                placeholder="Ingrese nombre y apellido..."
                            />
                        </div>
                        {nombreApellidoError === 0 ?
                        <article className="m-2 message is-danger">
                            <div className="message-body">
                                Error ingrese su nombre y apellido (minimo 3 y maximo 50 caracteres).
                            </div>
                        </article>:
                        ""
                        }
                    </div>
                    <div className="field m-4">
                        <label className={`label ${tema}`} htmlFor="inputEmail">Email</label>
                        <div className="control">
                            <input
                                className={`input ${validarEstilo(emailError)}`}
                                value={usuarioDatos.email}
                                type="email"
                                id="inputEmail"
                                onChange={handleChangeEmail}
                                onBlur={handleChangeEmail}
                                placeholder="Ingrese email..."
                            />
                        </div>
                        {emailError === 0 ?
                        <article className="m-2 message is-danger">
                            <div className="message-body">
                                Error ingrese su email.
                            </div>
                        </article>:
                        ""
                        }
                    </div>
                    <div className="is-flex is-align-items-center is-justify-content-center field p-2 is-grouped">
                        <div className="control">
                            <button className="button btnPersonalized4" type="submit">Enviar</button>
                        </div>
                        <div className="control">
                            <button className="button btnPersonalized1" type="reset" onClick={resetFormulario}>Cancelar</button>
                        </div>
                    </div>
                </form>
            }
        </div>
    );
}

export default Contacto;
