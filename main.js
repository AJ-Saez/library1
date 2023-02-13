fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms&maxResults=40")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

   
    const bookContainer = document.querySelector("#book-container");

    
    data.items.forEach((book) => {
   
      const bookCard = document.createElement("div");
      bookCard.classList.add("book-card");

    
      const bookTitle = document.createElement("h2");
      bookTitle.innerText = book.volumeInfo.title ? book.volumeInfo.title : "Sin título";
      bookCard.appendChild(bookTitle);

    
      const bookCover = document.createElement("img");
      bookCover.src = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "";
      bookCard.appendChild(bookCover);

    
      const bookAuthor = document.createElement("p");
      bookAuthor.innerText = book.volumeInfo.authors ? book.volumeInfo.authors[0] : "Sin autor";
      bookCard.appendChild(bookAuthor);

      const bookPublisher = document.createElement("p");
      bookPublisher.innerText = book.volumeInfo.publisher;
      bookCard.appendChild(bookPublisher);

    
      bookContainer.appendChild(bookCard);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });



/**/ 
boton.onclick = function () {
  var search = document.getElementById("search").value;
  if (search == "hola") {
      panel.innerHTML = "esto un saludo";
  }
  if (search== "libros") {
     alert("¡Que tipo de libro buscas?");
  } else {
    alert("Lo sentimos en este momento no lo temenos en nuestro Catalogo");
  }
}



  btn.onclick = function () {
      var buscar = document.getElementById("buscar").value;
      if (buscar == "hola") {
          panel.innerHTML = "esto un saludo";
      }
      if (buscar == "libro") {
         alert("que libro buscas");
      } else {
        alert("Gracias por comunicarte con nosotros, en unos minutos nos comunicaremos contigo");
      }
  }

  ejemplo.onclick = function (){
    var example = document.getElementById("example").value;
    if ( example == "Gracias por tu mensaje lo tomaremos en cuenta"){
      alert("")
    }
  }


  

function datosUsuario() {
  let arroba = false;
  let punto = false;
  let example = document.getElementById("example").value;
  /*let password = document.getElementById("password").value;*/
  for(var i=0;i<example.length;i++){
      if (example[i]=="@"){
           arroba=true;
      }

      if (example[i]=="."){
          punto=true;
     }
  }
  /*if (arroba!=true || punto!=true && password.length<6){
      alert("Su usuario y contraseña son incorrectos");
  }*/

  if (arroba!=true || punto!=true){
      alert("Su usuario es incorrecto, por favor use un correo electronico valido");
  }
  else if (arroba=true && punto!=true ){
    alert("correo no valido falta el punto")
  }
  else if(arroba=true && punto!=false ){
    alert("Mensaje enviado con Exito")
  }

  /*else if (password.length<6){
      alert("Contraseña incorrecta, por favor ingrese una contraseña de mas de 6 caracteres")
  }*/


}



















