import { Component } from '@angular/core';
import { ListarComponent } from './Componentes/listar/listar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Manejo_Objetos';
}
