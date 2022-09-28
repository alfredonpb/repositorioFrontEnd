import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  // Esto es para usar interpolacion (Data Binding)
  // Se crea una variable
  miPorfolio:any;
  
  // Inyección de servicios desde el componente "servicios"
  constructor(private datosPorfolio:PorfolioService) { }

  // Inyección de servicios desde el componente "servicios"
  // se usa this para acceder a los métodos y propiedades de esa Clase servicios
  ngOnInit(): void {
  this.datosPorfolio.obtenerDatos().subscribe(data =>{
    console.log(data)

    this.miPorfolio=data;
    });
  }

}
