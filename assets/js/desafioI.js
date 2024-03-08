//Al hacer click sobre el botón se ejecuta la llamada a la API
const obtenerDatos = () => {
  getData();
};

// Agregar un event listener al botón para llamar a obtenerDatos cuando se haga clic en él
document.querySelector("button").addEventListener("click", obtenerDatos);

//Generamos la llamada a la API
const getData = async () => {
  //Extraemos la información de la API
  const url = "https://jsonplaceholder.typicode.com/posts";
  // si el llamado resulta exitoso, ingresara a try
  try {
    //fetch(url): fetch es una función integrada en JavaScript que se utiliza para hacer solicitudes de red.
    //await: La palabra clave await se usa dentro de una función asincrónica (async) para esperar a que una promesa se resuelva
    const response = await fetch(url);
    console.log("Response: ", response);
    if (response.status === 200) {
      //método .json() del objeto Response. Este método convierte la respuesta recibida, que generalmente está en formato JSON, en un objeto JavaScript.
      const data = await response.json();
      console.log("Informacion a procesar: ", data);

      // Bucle for para iterar sobre elementos de la API
      for (let i = 0; i < data.length; i++) {
        // Iteramos sobre diversos elementos de la API
        "ID: " + data[i].id;
        "Título: " + data[i].title;
        "Cuerpo: " + data[i].body;
        "Usuario ID: " + data[i].userId;
        //   console.log("-----");

        //Creamos una etiqueta para ingresar datos
        const tituloElemento = document.createElement("li");
        //Capturamos los datos que queremos imprimir en pantalla
        tituloElemento.textContent = data[i].title;
        //Capturamos el contenedor del HTML
        const contenedor = document.getElementById("post-data");
        //Añadimos los datos con la etiqueta al contenedor en el HTML
        contenedor.appendChild(tituloElemento);

        //   Repetimos proceso anterior pero con texto más extenso
        const parrafoElemento = document.createElement("p");
        parrafoElemento.textContent = data[i].body;
        console.log(parrafoElemento);
        contenedor.appendChild(parrafoElemento);
      }
    } else {
      console.log(`La url: ${url} no existe, error ${response.status}`);
    }

    //Si existen errores en la llamada a la API, generara un mensaje de error
  } catch (err) {
    console.log(err);
    console.log(`La url: ${url} no existe, error ${response.status}`);
  }
};

//try cacht para verificqr tipo de error
