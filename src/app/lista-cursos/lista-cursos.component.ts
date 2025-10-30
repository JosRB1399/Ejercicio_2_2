import { Component } from '@angular/core';
import { Curso } from '../models/curso.model';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {

  cursos: Curso[] = [
    {
      titulo: '🌐 Landing Page Interactiva',
      descripcion: 'Diseño moderno con Angular y Material Design. Incluye animaciones suaves y estructura responsive para todo tipo de pantallas.',
      imagen: 'assets/images/Landingpageinteractiva.png',
      link: 'assets/ver-proyectos.html?img=images/Landingpageinteractiva.png'
    },
    {
      titulo: '📊 Dashboard Financiero',
      descripcion: 'Aplicación analítica con gráficas en tiempo real y filtros dinámicos. Creada con Angular, Material y Chart.js.',
      imagen: 'assets/images/Dashboardfinanciero.png',
      link: 'assets/ver-proyectos.html?img=images/Dashboardfinanciero.png'
    },
    {
      titulo: '📝 Gestor de Tareas',
      descripcion: 'CRUD completo conectado a Firebase. Permite crear, editar y eliminar tareas con una interfaz limpia y fluida.',
      imagen: 'assets/images/Gestordetareas.png',
      link: 'assets/ver-proyectos.html?img=images/Gestordetareas.png'
    },
    {
      titulo: '💼 Portafolio Personal',
      descripcion: 'Proyecto profesional diseñado para mostrar tus habilidades como Desarrollador Front-End. Basado en Angular 18 + Material Design.',
      imagen: 'assets/images/Portafoliopersonal.png',
      link: 'assets/ver-proyectos.html?img=images/Portafoliopersonal.png',
    }
  ];

    // 👇 AGREGA SOLO ESTA FUNCIÓN (al final, sin borrar nada)
  verProyecto(link: string): void {
    window.location.href = link;
  }

}
