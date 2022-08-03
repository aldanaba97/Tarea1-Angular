import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // B - En el componente principal crear un arreglo que contenga nombres (string) y costos (string), y utilizar un ngFor para mostrar una lista con los nombres y costos.  B (Opcional) - En vez de utilizar los tipos por defecto crear una interfaz.
  element = true;

  tablaCostos = [
    {nombre: 'Aldana', costo: '54000'},
    {nombre: 'Jessica', costo: '3200'},
    {nombre: 'Guadalupe', costo: '45000'},
    {nombre: 'Guillermo', costo: '2000'},
   ];

}
