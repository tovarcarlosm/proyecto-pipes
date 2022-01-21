import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_pipes';

  nombre: string = "cArlos tOVar";
  precio: number = 120000.5879;
  estadistica: number = 0.0019;

  objeto: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  valorPromesa = new Promise( (resolve => {

    setTimeout( () => {
      resolve('Mensaje llegó a la consola');
    }, 10000 );

  }) );

  hoy: Date = new Date();
}
