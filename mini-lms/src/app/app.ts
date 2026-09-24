import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// La misma forma de datos del Mini-LMS, ahora en un componente Angular.
interface Estudiante {
  nombre: string;
  nota1: number;
  nota2: number;
}
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = 'Mini-LMS · Lista de jalados';
  estudiantes: Estudiante[] = [
    { nombre: 'María Torres', nota1: 1, nota2: 12 },
    { nombre: 'Luis Pérez', nota1: 15, nota2: 8 },
    { nombre: 'Ana Ruiz', nota1: 8, nota2: 14 }
  ];
// Misma regla de matrícula de la Unidad 1, ahora como método del componente.
promedio(nota1: number, nota2: number): number {
    return (nota1 + nota2) / 2;
  }
  
  estado(nota1: number): string {
    if (nota1 < 1 || nota1 > 20) {
      return 'Nota inválida';
    } else if (nota1 >= 12) {
      return 'Aprobado';
    }
    return 'Para el otro ciclo';
  }
}