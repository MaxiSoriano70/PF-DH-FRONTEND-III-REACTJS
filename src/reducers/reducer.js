export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_ODONTOLOGOS":
            return { ...state, odontologos: action.payload };
        case "AGREGAR_FAVORITO":
            return { ...state, favoritos: [...state.favoritos, action.payload] };
        case "REMOVER_FAVORITO":
            const filtroDeFavoritos = state.favoritos.filter(
                (favorito) => favorito.id !== action.payload.id
            );
            return { ...state, favoritos: filtroDeFavoritos };
        case "CAMBIO_TEMA":
            return { ...state, modoDarkLight : !action.payload};
    }
};