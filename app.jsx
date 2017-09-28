

class Passenger{
	constructor (nombre,apellido,dni, nPasaje) {
  this.name = nombre;
	this.last_name= apellido;
	this.dni = dni;
  this.num = nPasaje; 
    
  }
}
let asientos = new Array(10);

asientos[2] = new Passenger ("Haidy","Dueñas",47797236,3);
asientos[1] = new Passenger ("Anni","Dueñas",72797236,2);
asientos[4] = new Passenger ("Gary","Dueñas",34457236,5);
asientos[6] = new Passenger ("Panchito","Dueñas",54465676,4);
const App = ({title, seats}) => {
   return (
    <div class="container-fluid">
		<section id="formulario">
			<div class="row" >
				<div class="col-xs-12 col-md-12 col-lg-12 datos text-center" id="scp-Seating" >
					<div class="form-group col-xs-12 col-md-5 col-lg-5 datos text-center" >
						<p id="1">Reservar de asientos</p>
					</div>
					<div class="form-group col-xs-12 col-md-5 col-lg-5 datos text-center" >
						<p id="2">Liberar asientos</p>
					</div>
					<div class="form-group col-xs-12 col-md-5 col-lg-5 datos text-center" >
						<p id="3">Buscar Dni</p>
					</div>
					<div class="form-group col-xs-12 col-md-5 col-lg-5 datos text-center">
						<p id="4">Listar pasajeros</p>
					</div>
				</div>
				<div class="col-lg-12"  >
					<div class=" col-xs-12 col-md-12 col-lg-12" id="table-space">
						<table>
						  	<tr class="seating-tr">
						        <td class="seating-air btn" id="1">1</td>
						        <td class="seating-air btn" id="2">2</td>
						        <td class="seating-air btn" id="3">3</td>
						        <td class="seating-air btn" id="4">4</td>
						        <td class="seating-air btn" id="5">5</td>
						    </tr>
						    <tr class="seating-tr">
						        <td class="seating-air btn" id="6">6</td>
						        <td class="seating-air btn" id="7">7</td>
						        <td class="seating-air btn" id="8">8</td>
						        <td class="seating-air btn" id="9">9</td>
						        <td class="seating-air btn" id="10">10</td>
						    </tr>
						</table>
				  	</div>
            <div class="col-xs-12 col-md-12 col-lg-12" id="list" >{imprimirLista()}</div>
				  	<div class="col-xs-12 col-md-12 col-lg-12" id="show-seating"></div>
			        <div class ="no-visibility" id="form-space">
			            <p class="form-title text-center text-uppercase">Datos del pasajero</p>
			            <form class="text-center">
					        <input class="input-data" id ="data-name" type="text" placeholder="Nombre" />
					        <input class="input-data" id ="data-lastname" type="text" placeholder="Apellidos" />
					        <input class="input-data" id ="data-dni" type="number" placeholder="DNI" />
					        <div class ="btn" id ="data-save">Enviar</div>
					    </form>
			        </div>
			        <div class="col-xs-12 col-md-12 col-lg-12 no-visibility" id="search">
			        <h2>Buscar pasajero</h2>
	           		<div id="custom-search-input">
	                    <div class="input-group col-md-12">
                                <input type="text" class="search-query form-control" placeholder="Search" id="dni-search"/>
                                <span class="input-group-btn">
                                    <button class="btn btn-danger" type="button" >
                                        <span class=" glyphicon glyphicon-search" id="data-search"></span>
                                    </button>
                                </span>
                            </div>
                            <div class="col-xs-12 col-md-12 col-lg-12" id="space-found"></div>
                        </div>
                    </div>
				</div>
			</div>
		</section>
	</div>
   );
}

function imprimirLista(){
  return(
    asientos.map((item,index)=>{
      return (
        <div className="col-lg-12">
          <p>{item.name} {item.last_name}</p>
          <p>{item.dni}</p>
          <p>{item.num}</p>
        </div>
      )
    })
  )
}

let seats = [
   [4, 8, 12, 16, 20, 24, 28, 32],
   [3, 7, 11, 15, 19, 23, 27, 31],
   [2, 6, 10, 14, 18, 22, 26, 30],
   [1, 5, 9, 13, 17, 21, 25, 29]
]
ReactDOM.render ( 
   <App title = {'Hola Mundo!'}  seats = {seats} />, 
   document.getElementById("root")
); 
 