export interface Curso {
  /**
   * Título del proyecto o curso
   */
  titulo: string;

  /**
   * Descripción breve del proyecto o ejercicio
   */
  descripcion: string;

  /**
   * URL o ruta local de la imagen del proyecto
   */
  imagen: string;

  /**
   * Enlace opcional al proyecto desplegado o repositorio
   */
  link?: string;
}
