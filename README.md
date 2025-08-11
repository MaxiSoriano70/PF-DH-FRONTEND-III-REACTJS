# 🦷 HealthDent

Proyecto responsive desarrollado en **Digital House** como parte de la formación **Certified Tech Developer (becado)**.  
Aplicación web enfocada en la temática de la salud dental que consume información de una API para mostrar dentistas, detalles, formulario de contacto y gestión de favoritos, con diseño adaptable a dispositivos desktop, tablet y móviles.

---

## 🚀 Tecnologías Utilizadas

- **React** con Hooks (`useState`, `useReducer`, `useContext`) para manejo de estado y contexto global.  
- **React Router** para navegación entre rutas.  
- **fetch / axios** para consumo de API externa.  
- **localStorage** para persistencia de dentistas favoritos en sesión.  
- CSS modular para estilos con soporte tema claro/oscuro.

---

## 📌 Características principales

- Contexto global con tema claro/oscuro que se puede alternar mediante un botón.  
- Rutas definidas:  
  - `/home`: muestra cards con dentistas obtenidos de la API.  
  - `/detalle/:id`: muestra detalle del dentista seleccionado.  
  - `/contacto`: formulario con validaciones para contacto (nombre y email).  
  - `/favoritos`: muestra dentistas destacados guardados en localStorage.  
- Funcionalidad para agregar y quitar dentistas destacados usando `useReducer` y persistencia en localStorage.  
- Navbar y footer presentes en todas las rutas, con navegación y cambio de tema.  
- Manejo de mensajes de error y éxito en el formulario de contacto.

---

---

## 🌐 Demo en línea

[Ver proyecto en vivo](https://clinica-odontologica-dh.netlify.app/)

---

## 📬 Contacto

Desarrollado por **Maximiliano Soriano** 🧑‍💻  
📧 Email: [maxi.soriano.70.23@gmail.com](mailto:maxi.soriano.70.23@gmail.com)  
🔗 LinkedIn: [linkedin.com/in/maximilianosoriano](https://www.linkedin.com/in/maximiliano-soriano/)
