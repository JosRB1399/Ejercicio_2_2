import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 🧭 Información del encabezado
  title = 'Josué Rubio';
  subtitle = 'Desarrollador Front-End';

  // 💜 Hero principal
  heroTitle = 'Paga sin intereses 💳';
  heroDescription =
    'Descubre cómo simplificar tus pagos con un diseño moderno, funcional y accesible. Transformo ideas en experiencias digitales impactantes.';
  heroImage = 'assets/images/DesarrolladorFrontEnd.png'; // ✅ Imagen principal del hero

  // 🌐 Datos de contacto
  email = 'josuearubiob1399@gmail.com';
  phone = '916178744';

  // 📌 Estado del scroll
  isScrolled = false;

  // 🖼️ Estado para mostrar la imagen del proyecto
  mostrarImagen: boolean = false;

  // 🔽 NUEVO CÓDIGO: control de proyectos seleccionados
  selectedProject: string | null = null;

  // Mostrar un proyecto específico
  showProject(project: string) {
    this.selectedProject = project;
  }

  // Cerrar el proyecto mostrado
  closeProject() {
    this.selectedProject = null;
  }
  // 🔼 FIN NUEVO CÓDIGO

  // 🔹 Mostrar imagen del proyecto (ya lo tienes)
  mostrarProyecto(): void {
    this.mostrarImagen = true;
  }

  // 🔹 Cerrar imagen del proyecto (ya lo tienes)
  cerrarProyecto(): void {
    this.mostrarImagen = false;
  }

  // 🚀 Navegación suave entre secciones
  scrollToSection(sectionId: string): void {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // 🪄 Detectar scroll
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.isScrolled = scrollTop > 50;
  }

  // 💫 Método opcional
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 🔥 Puedes borrar esta línea si no quieres que se abra automáticamente una imagen:
    // this.mostrarProyecto();
  }
}
