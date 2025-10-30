# 🌟 Portafolio Profesional — Josué Rubio  
**Desarrollador Front-End | Angular & Material Design | UX/UI Developer**

Este proyecto representa el **portafolio profesional de Josué Rubio**, un desarrollador especializado en **Angular** y **Material Design**, enfocado en crear interfaces modernas, limpias y completamente **responsivas**.  
El sitio fue diseñado para presentar proyectos destacados, habilidades técnicas y una identidad visual coherente y elegante.

## 🧭 Descripción general

El **Portafolio Profesional de Josué Rubio** es una aplicación desarrollada con **Angular 18**, diseñada bajo los principios de *Clean Code* y *Material Design*.  
Su propósito principal es servir como una carta de presentación interactiva que refleje la capacidad técnica, creatividad y atención al detalle del desarrollador.

El proyecto está dividido en **componentes modulares**, lo que permite una fácil escalabilidad, mantenimiento y extensión de funcionalidades futuras.  
Incluye animaciones suaves, diseño responsive, estructura semántica y un manejo eficiente de recursos mediante la carpeta `assets/`.

## 📁 Estructura del proyecto

Ejercicio_2_2/
│
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── README.md
├── .editorconfig
├── .gitignore
│
└── src/                           # Código fuente principal
   ├── index.html                 # HTML raíz de la aplicación
   ├── main.ts                    # Punto de entrada principal de Angular
   ├── polyfills.ts               # Compatibilidad con navegadores antiguos
   ├── styles.css                 # Estilos globales
   │
   ├── app/                       # Carpeta principal de la aplicación Angular
   │    ├── app.component.ts       # Lógica principal del componente raíz
   │    ├── app.component.html     # Plantilla HTML del componente raíz
   │    ├── app.component.css      # Estilos del componente raíz
   │    ├── app.module.ts          # Módulo raíz que declara y conecta los componentes
   │    │
   │    ├── models/                # Modelos de datos (interfaces y clases)
   │    │   └── curso.model.ts     # Modelo base para los proyectos o cursos
   │    │
   │    ├── lista-cursos/          # Componente de listado de proyectos
   │    │   ├── lista-cursos.component.ts
   │    │   ├── lista-cursos.component.html
   │    │   └── lista-cursos.component.css
   │    │
   │    ├── tarjeta-cursos/        # Componente de tarjeta individual de proyecto
   │    │   ├── tarjeta-cursos.component.ts
   │    │   ├── tarjeta-cursos.component.html
   │    │   └── tarjeta-cursos.component.css
   │    │
   │    ├── ver-proyecto/          # (Opcional) Componente para vista ampliada de proyectos
   │    │   ├── ver-proyecto.component.ts
   │    │   ├── ver-proyecto.component.html
   │    │   └── ver-proyecto.component.css
   │
   └── assets/                    # Recursos estáticos (imágenes, HTMLs)
        ├── images/                # Imágenes de los proyectos
        │   ├── Landingpageinteractiva.png
        │   ├── Dashboardfinanciero.png
        │   ├── Gestordetareas.png
        │   └── Portafoliopersonal.png
        │
        ├── proyecto-detalle.html  # Vista alternativa de detalle del proyecto
        └── ver-proyectos.html     # Página para mostrar proyectos a pantalla completa

## 🚀 Guía de instalación y ejecución

### 1️. Clonar el repositorio

git clone https://github.com/JosRB1399/Ejercicio_2_2

cd Ejercicio_2_2

### 2️. Instalar las dependencias

npm install

### 3️. Iniciar el servidor de desarrollo

ng serve --port 5400

### 4️. Abrir en el navegador

http://localhost:5400

## 🎨 Diseño y características

✨ **Diseño UI/UX moderno:** basado en los principios de Material Design.  
🟣 **Paleta cromática:** púrpura principal con acentos blancos y lilas.  
💠 **Animaciones fluidas:** uso de transiciones CSS y Angular Animations.  
🧱 **Componentes modulares:** estructura escalable basada en buenas prácticas.  
🧩 **Interactividad:** cada tarjeta redirige a su vista detallada (`ver-proyectos.html`).  
📱 **Responsive Design:** visualización óptima en pantallas de escritorio, tablet y móvil.  
🧠 **Código limpio:** uso de tipado fuerte, comentarios descriptivos y buenas prácticas Angular.

## 🧩 Componentes principales

|     Componente     | Descripción |
|--------------------|-------------|
| **app.component**  | Estructura principal de la aplicación y layout general. |
| **lista-cursos**   | Contenedor dinámico que lista todos los proyectos.      |
| **tarjeta-cursos** | Tarjeta visual individual con botón interactivo de acceso. |
| **curso.model.ts** | Modelo de datos para tipar y estructurar la información de los proyectos. |

## 🖼️ Proyectos destacados

| Proyecto  | Descripción  | Enlace  |
|-----------|--------------|---------|
| 🌐 **Landing Page Interactiva** | Página moderna y fluida con Angular + Material Design. | [Ver proyecto](http://localhost:5400/assets/ver-proyectos.html?img=images/Landingpageinteractiva.png) |
| 📊 **Dashboard Financiero**     | Gráficos dinámicos con filtros y estadísticas en tiempo real. | [Ver proyecto](http://localhost:5400/assets/ver-proyectos.html?img=images/Dashboardfinanciero.png) |
| 📝 **Gestor de Tareas**         | Aplicación CRUD conectada con Firebase, UI limpia y funcional. | [Ver proyecto](http://localhost:5400/assets/ver-proyectos.html?img=images/Gestordetareas.png) |
| 💼 **Portafolio Personal**      | Muestra de habilidades profesionales con diseño adaptativo. | [Ver proyecto](http://localhost:5400/assets/ver-proyectos.html?img=images/Portafoliopersonal.png) |

## 🧰 Tecnologías utilizadas

| Categoría  | Herramienta  |
|------------|--------------|
| **Framework principal** | Angular 18 |
| **Interfaz UI** | Angular Material |
| **Lenguaje**    | TypeScript   |
| **Maquetación** | HTML5 / CSS3 |
| **Gestión de paquetes**   | Node.js / NPM |
| **Control de versiones**  | Git y GitHub  |
| **Entorno de desarrollo** | Visual Studio Code |

## 👨‍💻 Autor

**Josué Rubio**  
📧 **Correo:** josuearubiob1399@gmail.com  
📱 **Teléfono:** 916178744  
💼 **Rol:** Desarrollador Front-End  
🌍 **Ubicación:** Perú  

> “El mejor código es aquel que se entiende a primera vista y se mantiene con una sonrisa.”  

## 🪪 Licencia y derechos

© 2025 **Josué Rubio** — Todos los derechos reservados.  
Este proyecto fue desarrollado con fines académicos y profesionales.  
Distribución, uso o modificación del código con fines comerciales está sujeta a autorización del autor.
