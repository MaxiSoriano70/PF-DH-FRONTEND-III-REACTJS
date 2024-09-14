import { Route, Routes } from "react-router-dom";
import { routes } from "../assets/utils/routes";
import HomePage from "../pages/HomePage";
import DetallePage from "../pages/DetallePage";
import FavoritosPage from "../pages/FavoritosPage";
import ContactoPage from "../pages/ContactoPage";
import Navbar from "../componets/Navbar";
import FooterClinica from "../componets/FooterClinica";
import { useOdontologosStates } from "../Context";
import Error404Page from "../pages/Error404Page";

const RoutesViews = () => {
    const { state } = useOdontologosStates ();
    const tema = state.modoDarkLight ? "modoDark" : "bgColorFondo";
    return (
        <>
            <Navbar/>
            <main className={`flex-grow-1 container-main ${tema} pb-5`}>
                <Routes>
                    <Route path={routes.home} element={<HomePage/>}/>
                    <Route path={routes.detalle+"/:id"} element={<DetallePage/>}/>
                    <Route path={routes.contacto} element={<ContactoPage/>}/>
                    <Route path={routes.favoritos} element={<FavoritosPage/>}/>
                    <Route path={routes.notFound} element={<Error404Page/>}/>
                </Routes>
            </main>
            <FooterClinica/>
        </>
    );
}

export default RoutesViews;
