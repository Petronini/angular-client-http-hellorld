import { Component, OnInit } from '@angular/core';
import { CamareroService } from './services/camarero.service';
import { Camarero } from './model/camarero';
import { Cliente } from './model/cliente';
import { ClienteService } from './services/cliente.service';
import { ProductoService } from './services/producto.service';
import { Producto } from './model/producto';
import { Pedido } from './model/pedido';
import { PedidoService } from './services/pedido.service';

//////////////////////////////


/////////////////////////////
/////////////////////////////


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ///////////////////////////////////////

  /////////////////////////////////////
  ////////////////////////////////////
  camareros: Camarero[] = undefined;
  clientes: Cliente[] = undefined;
  productos: Producto[] = undefined;
  pedidos: Pedido[] = undefined;

  constructor(  private camareroService: CamareroService,
                private clienteService: ClienteService,
                private productoService: ProductoService,
                private pedidoService: PedidoService ){}


  ngOnInit(): void{

    this.camareroService.getAll().subscribe( datos => {
      //aquí es cuando llegan los datos definitivamente. 
      console.log(datos);
      this.camareros = datos;
    });

    this.clienteService.getAll().subscribe( datos => {
      console.log(datos);
      this.clientes = datos;

    } );

    this.productoService.getAll().subscribe( datos => {
      console.log(datos);
      this.productos = datos;
    });

    this.pedidoService.getAll().subscribe( datos => {
      console.log(datos);
      this.pedidos = datos;
    })
    
  }

  crearCamarero(): void{
    let codigoAleatorio: number = Math.floor(Math.random()*500000);
    let camarero = new Camarero();
    camarero.codigo = codigoAleatorio;
    camarero.nombre = "ALEATORIO_" +  codigoAleatorio;
    this.camareroService.create(camarero).subscribe( datos => {
      console.log(datos)
    });
  }

  crearCliente(): void{

    let cliente = {
      codigo: 0,
      nombre: 'Pedrín',
      contactos: [{
        nombre: 'Honorio Martín',
        telefono: '666221978'
      },
      {
        nombre: 'Fulano',
        telefono: '908 88 88 88'
      }]
    }

    this.clienteService.create(cliente).subscribe( datos => {
      console.log(datos);
    });

  }

  crearProducto(): void{

    let producto = {
    categoria: "TAPA",
    codigo: Math.round(Math.random())*10000,
    descatalogado: false,
    descripcion: "Tocino madrileño",
    fechaAlta: new Date(),
    nombre: 'Tocinillo',
    precio: 8
    }
    this.productoService.create(producto).subscribe( datos =>{
      console.log(datos);
    } );

  }
}
/*

let cliente = {
  codigo:132165,
  nombre: 'pepito'
  contactos: [
    {
      nombre:
      telefono:
    }
  ]
}
*/