import styleCarousel from '../css/Carousel.module.css';
import banner1 from '../assets/img/banner-1.jpeg';
import banner2 from '../assets/img/banner-2.jpeg';
import banner3 from '../assets/img/banner-3.jpeg';

const CarouselClinica = () => {
    return (
        <section id="carouselClinica" className="carousel slide carousel-fade">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselClinica" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselClinica" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselClinica" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className={`carousel-item active ${styleCarousel.containerImg}`}>
                    <img src={banner1} className={`d-block w-100  ${styleCarousel.clinicaCarousel}`} alt="Odontologo-placa" />
                    <div className={`d-flex align-items-center justify-content-center flex-column ${styleCarousel.textCarrusel}`}>
                        <h2 className={styleCarousel.tituloCarrusel}>Bienvenido a  Clinica dental, tu clinica de confianza</h2>
                    </div>
                </div>
                <div className={`carousel-item ${styleCarousel.containerImg}`}>
                    <img src={banner2} className={`d-block w-100  ${styleCarousel.clinicaCarousel}`}
                        alt="Ortodoncia" />
                    <div className={`d-flex align-items-center justify-content-center flex-column ${styleCarousel.textCarrusel}`}>
                        <h2 className={styleCarousel.tituloCarrusel}>Conoce nuestros distintos servicios</h2>
                    </div>
                </div>
                <div className={`carousel-item ${styleCarousel.containerImg}`}>
                    <img src={banner3} className={`d-block w-100  ${styleCarousel.clinicaCarousel}`}
                        alt="Placa" />
                    <div className={`d-flex align-items-center justify-content-center flex-column ${styleCarousel.textCarrusel}`}>
                        <h2 className={styleCarousel.tituloCarrusel}>Contamos con odontologos de gran nivel en todas nuestras especialidades  </h2>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselClinica" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselClinica" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </section>
    )
}

export default CarouselClinica;
