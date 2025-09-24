let contador = 0;
const contadorElemento = document.getElementById("contador");


const botonesComprar = document.querySelectorAll(".btncomprar");

botonesComprar.forEach(boton => {
  boton.addEventListener("click", () => {
    contador++;
    contadorElemento.textContent = contador;
  });
});
