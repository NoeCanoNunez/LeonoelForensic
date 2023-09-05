document.addEventListener("submit", (e) => {
  setTimeout(() => {
    $(".respuestaSubmit")
      .append(`<div class="text-center alert alert-success" role="alert">
    Solicitud Enviada satisfactoriamente, <br> ¡Nos comunicaremos con usted en breve!
  </div>`);
  }, 800);
  setTimeout(() => {
    document.querySelector(".respuestaSubmit").classList.add("none");
  }, 4800);
  return console.log("holi")
});
