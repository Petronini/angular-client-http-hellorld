import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent implements OnInit {
  productosFRONTEND: Producto[] = [];

  constructor( private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.getAll().subscribe( productosBACKEND =>{
      console.log("productos del servido", productosBACKEND);
      this.productosFRONTEND = productosBACKEND;
    } )
  }

}
