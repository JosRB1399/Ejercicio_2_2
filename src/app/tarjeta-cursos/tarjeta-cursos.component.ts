import { Component, Input } from '@angular/core';
import { Curso } from '../models/curso.model';

@Component({
  selector: 'app-tarjeta-cursos',
  templateUrl: './tarjeta-cursos.component.html',
  styleUrls: ['./tarjeta-cursos.component.css']
})
export class TarjetaCursosComponent {
  @Input() curso!: Curso;

  // ✅ Propiedad auxiliar para asegurar que la descripción se muestre correctamente
  get descripcion(): string {
    return this.curso?.descripcion?.trim() || '';
  }

/**
   * Abre directamente la página ver-proyectos.html con la imagen seleccionada.
   * No modifica el DOM, ni agrega contenido, solo redirige.
   */
 verProyecto(link: string): void {
  // ✅ Abre la URL del proyecto correspondiente
  const fullPath = `http://localhost:5400/${link}`;
  window.location.href = fullPath; // abre en la misma pestaña
}

  /**
   * Muestra más información sobre el proyecto
   */
  verDetalles(curso: Curso): void {
    const detalles = `
📘 Proyecto: ${curso.titulo}
📝 Descripción: ${curso.descripcion}
🖼️ Imagen: ${curso.imagen ? curso.imagen : 'Sin imagen disponible'}
🔗 Enlace: ${curso.link ? curso.link : 'No disponible'}
    `;
    alert(detalles);
  }
}
