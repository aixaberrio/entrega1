alert("inicio");

let inicio = prompt("ingrese si es comprador o vendedor");

if (inicio === "comprador") {
  let marcaSeleccionada = prompt(
    "ingrese el la marca que desea comprar: (honda=3000usd/gol=2000usd)"
  );
  const precioHonda = 3000;
  const precioGol = 2000;
  const tasaInteres = 10;

  if (marcaSeleccionada === "honda") {
    let metodoDePago = prompt(
      " Puede abonar de contado, en cuotas o entregar una parte y financiar el resto, ingrese metodo de pago: (contado/cuotas/parte)"
    );
    if (metodoDePago === "contado") {
      alert(`El precio final es de ${precioHonda} gracias por su compra`);
    } else if (metodoDePago === "cuotas") {
      let nCuotas = Number(prompt("ingrese la cantidad de cuotas"));
      let valorTotal = precioHonda * (1 + tasaInteres / 100);
      let valorCuota = valorTotal / nCuotas;
      console.log(
        "El valor a pagar de cada cuota con intereses es de: " + valorCuota
      );
      console.log("El total es de: " + valorTotal);
    } else if (metodoDePago === "parte") {
      let valorEntrega = Number(prompt("Ingrese el valor de entrega"));
      let cuotaHonda = Number(prompt("Ingrese la cantidad de cuotas"));

      function calcularPrecioFinal1(precioHonda, valorEntrega, tasaInteres) {
        let montoRestante = precioHonda - valorEntrega;
        console.log("El monto a financiar es de:" + montoRestante);
        let montoTotal = montoRestante * (1 + tasaInteres / 100);

        return montoTotal;
      }
      let precioFinanciadoHonda = calcularPrecioFinal1(
        precioHonda,
        valorEntrega,
        tasaInteres
      );
      let valorCuotaHonda = precioFinanciadoHonda / cuotaHonda;
      console.log("El valor a pagar de cada cuota es de: " + valorCuotaHonda);
      console.log("El precio final a pagar es: $" + precioFinanciadoHonda);
    } else {
      alert("ingrese una opcion valida");
    }
  } else if (marcaSeleccionada === "gol") {
    let metodoDePago = prompt(
      "Puede abonar de contado, en cuotas o entregar una parte y financiar el resto,ingrese metodo de pago: (contado/cuotas/parte)"
    );
    if (metodoDePago === "contado") {
      alert(`El precio final es de ${precioGol} gracias por su compra`);
    } else if (metodoDePago === "cuotas") {
      let nCuotas = Number(prompt("ingrese la cantidad de cuotas"));
      let valorTotal = precioGol * (1 + tasaInteres / 100);
      let valorCuota = valorTotal / nCuotas;
      console.log(
        "El valor a pagar de cada cuota con intereses es de: " + valorCuota
      );
      console.log("El total es de: " + valorTotal);
    } else if (metodoDePago === "parte") {
      let valorEntrega = Number(prompt("Ingrese el valor de entrega"));
      let cuotaHonda = Number(prompt("Ingrese la cantidad de cuotas"));

      function calcularPrecioFinal1(precioGol, valorEntrega, tasaInteres) {
        let montoRestante = precioGol - valorEntrega;
        console.log("El monto a financiar es de:" + montoRestante);
        let montoTotal = montoRestante * (1 + tasaInteres / 100);

        return montoTotal;
      }
      let precioFinanciadoGol = calcularPrecioFinal1(
        precioGol,
        valorEntrega,
        tasaInteres
      );
      let valorCuotaGol = precioFinanciadoGol / cuotaHonda;
      console.log("El valor a pagar de cada cuota es de: " + valorCuotaGol);
      console.log("El precio final a pagar es: $" + precioFinanciadoGol);
    }
  } else {
    alert("ingrese una opcion valida");
  }
} else if (inicio === "vendedor") {
  let accion = prompt("cotizacion o venta");
  if (accion === "cotizacion") {
    let valorAuto = Number(prompt("Ingrese el valor del auto:"));
    let valorEntrega = Number(prompt("Ingrese el valor de entrega:"));
    let cuotas = Number(prompt("Ingrese la cantidad de cuotas:"));
    let tasaInteres = Number(prompt("Ingrese la tasa de interés anual (%):"));

    function calcularPrecioFinal2(valorAuto, valorEntrega, tasaInteres) {
      // Restar el valor de entrega al valor del auto
      let montoRestante = valorAuto - valorEntrega;
      console.log("El valor a financiar es de: " + montoRestante);

      // Calcular el monto total a pagar con intereses
      let montoTotal = montoRestante * (1 + tasaInteres / 100);

      return montoTotal;
    }

    let precioFinal = calcularPrecioFinal2(
      valorAuto,
      valorEntrega,
      tasaInteres
    );
    let valorCuota = precioFinal / cuotas;

    console.log("El valor a pagar de cada cuota es de: " + valorCuota);
    console.log("El precio final a pagar es: $" + precioFinal);
  } else {
    let ingreso = Number(prompt("Ingrese el valor del producto"));
    let ingresoTotal = 0;
    while (ingreso !== 0) {
      ingresoTotal += ingreso;
      ingreso = Number(
        prompt("Ingrese el valor del producto , para finalizar ingrese 0")
      );
    }
    console.log("Total:" + ingresoTotal);
  }
} else {
  alert("ingresa una opcion valida");
}
