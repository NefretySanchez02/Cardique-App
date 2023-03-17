/**
 * Maneja las peticiones Ajax
 */
var newsClientCourse = {
  init: function () {
    newsClientCourse.list();
  },

  /**
   * Obtiene mediante consulta un arreglo con todos los mensajes en BD
   */
  list: function (callback) {
    $.ajax({
      method: "GET",
      url: application.service_url + "negocios_verdes.php",
      data: { action: "list" },
    }).done(function (msg) {
      let data = application.parseJson(msg);
      if (data.success == 1) {
        callback(data.messages);
      }
    });
  },

  get: function (slug, callback) {
    $.ajax({
      method: "GET",
      url: application.service_url + "negocios_verdes.php",
      data: {
        action: "getByName",
        id_mapa: slug,
      },
    }).done(function (msg) {
      let data = application.parseJson(msg);
      if (data.success == 1) {
        callback(data.news_item);
      }
    });
  },
};

/**
 * Maneja el comportamiento de los elementos en pantalla
 */
var messagesUIManagerCourse = {
  drawItem: function (id) {
    let itemHTML = "";
    let wrapper = document.getElementById("view-item");
    newsClientCourse.get(id, function (data) {
      let nombre = data[0].nombre;
      let foto = data[0].foto;
      let descripcion = data[0].descripcion;
      let categortia = data[0].categoria;
      let ubicacion = data[0].ubicacion;
      let codigo = data[0].codigo_plus;
      let facebook = data[0].facebook;
      let instagram = data[0].instagram;
      let whatsapp = data[0].whatsapp;
      let email = data[0].mail;
      let link_maps = data[0].link_ubicacion;
      let logo_categoria;
      if (categortia == "Bioproductos y servicios sostenibles") {
        logo_categoria = "Grupo 4128.png";
      } else if (categortia == "Ecoproductos Industriales") {
        logo_categoria = "Grupo 4127.png";
      } else {
        logo_categoria = "Grupo 4126.png";
      }
      if (facebook.length == 0) {
        facebook = "#";
      }
      itemHTML = `<div class="view-directory d-block" id="view-directory-${id}">
          <div class="header-modal">
            <div  class="title">
              <img
              src="../Cardique-Web/backoffice/assets/img/logos_negocios/${foto}"
              alt=""
            />
            <h2>${nombre}</h2>
            </div>
            <div>
              <img src="assets/images/img_cardique/${logo_categoria}" alt="">
            </div>
          
          </div>
          <div class="text">
            <p>${descripcion}</p>
          </div>
          <div class="info">
           
                <h2>Ubicación</h2>
                <p>${ubicacion}, Bolívar</p>
             
                <h2>Código Plus</h2>
                <p><a href="${link_maps}" target="_blank">${codigo}</a></p>
            
          </div>
          <div class="directory-footer">
           
              <div class="links-block">
                <span class="facebook">
                    <a href="${facebook}"> 
                        <img src="assets/images/img_cardique/Trazado 7524.png" alt="">
                    </a>
                </span>
                <span class="instagram">
                <a href="${instagram}" target="_blank"> 
                  <img src="assets/images/img_cardique/Trazado 7523.png" alt="">
                 
                </span>
                <span class="whatsapp">
                 <a href="${whatsapp}" target="_blank"> 
                  <img src="assets/images/img_cardique/Grupo 4060.png" alt="">
                   </a>
                </span>
                <span class="email">
                <a href="mailto:${email}" target="_blank"> 
                    <img src="assets/images/img_cardique/Grupo 4059.png" alt="">
                    </a>
                </span>
              </div>
              <div
                class="link-products"
              >
                <a role="button" href="${whatsapp}" target="_blank" class="theme-btn-one">
                  <span><i class="fa fa-shopping-cart"></i></span>
                  Adquirir productos/servicios
                </a>
            
            </div>
          </div>
        </div>`;
      wrapper.innerHTML = itemHTML;
      document.getElementById("list-business").classList.add("d-block");
    });
  },
  drawCategoryItems: function (id) {
    newsClientCourse.list(function (item) {
      item.forEach(function (map) {
        let item_map = map.id_Mapa;
        let categoria = map.categoria;
        if (document.getElementById(item_map)) {
          if (categoria === id) {
            document.getElementById(item_map).style.display = "block";
          } else {
            document.getElementById(item_map).style.display = "none";
          }
        }
      });
    });
  },

  drawZonaItems: function (id) {
    newsClientCourse.list(function (item) {
      item.forEach(function (map) {
        let item_map = map.id_Mapa;
        let zona = map.zona;
        if (document.getElementById(item_map)) {
          if (id == "Todos") {
            document.getElementById(item_map).style.display = "block";
          } else if (zona === id) {
            document.getElementById(item_map).style.display = "block";
          } else {
            document.getElementById(item_map).style.display = "none";
          }
        }
      });
    });
  },
  drawUbicacionItems: function (id) {
    newsClientCourse.list(function (item) {
      item.forEach(function (map) {
        let item_map = map.id_Mapa;
        let ubicacion = map.ubicacion;
        if (document.getElementById(item_map)) {
          if (ubicacion.includes(id)) {
            document.getElementById(item_map).style.display = "block";
          } else {
            document.getElementById(item_map).style.display = "none";
          }
        }
      });
    });
  },
  drawSearchItems: function () {
    let id = document.getElementById("inputSearch").value;
    newsClientCourse.list(function (item) {
      item.forEach(function (map) {
        let item_map = map.id_Mapa;
        let nombre = map.nombre;
        if (document.getElementById(item_map)) {
          if (nombre.toLowerCase().includes(id) || nombre.includes(id)) {
            document.getElementById(item_map).style.display = "block";
          } else {
            document.getElementById(item_map).style.display = "none";
          }
        }
      });
    });
  },
};
