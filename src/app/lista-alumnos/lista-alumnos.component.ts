// lista-alumnos.component.ts
import { Component } from '@angular/core';
import { Alumno } from './alumno.model';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos: Alumno[] = [
    { id: 1, nombre: 'Juan', edad: 20, calificacion: 85 },
    { id: 2, nombre: 'Maria', edad: 22, calificacion: 65 },
    { id: 3, nombre: 'Pedro', edad: 20, calificacion: 45 },
    { id: 4, nombre: 'Valetin', edad: 21, calificacion: 70 },
    { id: 5, nombre: 'Federico', edad: 19, calificacion: 80 },
    { id: 6, nombre: 'Mateo', edad: 19, calificacion: 75 },
    { id: 7, nombre: 'Pilar', edad: 21, calificacion: 55 },
    { id: 8, nombre: 'Agustina', edad: 20, calificacion: 25 },
    { id: 9, nombre: 'Julieta', edad: 22, calificacion: 55 },
    { id: 10, nombre: 'Geremias', edad: 22, calificacion: 60 },
    // Agrega más alumnos aquí
  ];
  agregarAlumno(form: any) {
    const nuevoAlumno: Alumno = {
      id: this.alumnos.length + 1,
      nombre: form.value.nombre,
      edad: form.value.edad,
      calificacion: form.value.calificacion
    };

    this.alumnos.push(nuevoAlumno);

    // Reiniciar el formulario
    form.resetForm();
  }
}

