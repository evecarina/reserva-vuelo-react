

class Passenger{
	constructor (nombre,apellido,dni, asiento) {
  this.nombre = nombre;
	this.apellido= apellido;
	this.dni = dni;
  this.asiento= asiento;

  }
}
let asientos = new Array(10);

asientos[8] = new Passenger ("Maria","Salazar",48597236,8);
asientos[10] = new Passenger ("Sofia","Salazar",7280236,10);
asientos[4] = new Passenger ("Gladyz","Peña",405087236,4);
asientos[6] = new Passenger ("Monica","Rodriges",34450676,6);
asientos[5] = new Passenger ("Javier","Peña",88850676,5);

const App = ({title, seats}) => {
   return (
    <div class="container-fluid">
		<section id="cuestionario">
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
						        <td class="w3-button w3-yellow" id="1">1</td>
						        <td class="w3-button w3-yellow" id="2">2</td>
						        <td class="w3-button w3-yellow" id="3">3</td>
						        <td class="w3-button w3-yellow" id="4">4</td>
						        <td class="w3-button w3-yellow" id="5">5</td>
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
          <p>{item.nombre} {item.apellido}</p>
          <p>{item.dni}</p>
          <p>{item.asiento}</p>
        </div>
      )
    })
  )
}

ReactDOM.render (
   <App title = {'Reserva tu vuelo!'}  seats = {seats} />,
   document.getElementById("root")
);
