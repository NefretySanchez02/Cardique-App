function SendMail() {
  var dataparam = $("#contact-form").serialize();
  $.ajax({
    url: "../Cardique-Web/backoffice/mail-services/contact-form.php",
    type: "POST",
    data: dataparam,
    datatype: "json",
    beforeSend: function () {
      document.getElementById("preloader-app").style.display = "block";
    },
    success: function (response) {
      if (response == 1) {
        alert("Mensaje Enviado");
        window.location.reload();
      } else {
        alert("Error enviando el mensaje, por favor intente mas tarde");
        window.location.reload();
      }
    },
  });
}
