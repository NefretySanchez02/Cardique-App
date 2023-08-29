function onclick_map(id) {
  messagesUIManagerCourse.drawItem(id);
}

function remove_modal() {
  document.getElementById("list-business").classList.remove("d-block");
}

let btnZoomIn = document.getElementById("s-js-cardique__zoom-in");
let btnZoomOut = document.getElementById("s-js-cardique__zoom-out");
let divMap = document.getElementById("c-js-map");
let svgMap = document.getElementById("Grupo_4128");
let scale = 1;

btnZoomIn.addEventListener("click", (e) => {
  let scaleActual = divMap.style.scale;
  let marginMap = svgMap.style.marginLeft;
  let marginNumber = marginMap.replace(/[^0-9]/g, "");
  let scaleZoomOut = 0;
  if (scaleActual == 0) {
    scaleZoomOut = scale + 0.5;
    divMap.style.scale = `${scaleZoomOut}`;
  } else {
    scaleZoomOut = parseFloat(scaleActual) + 0.5;
    divMap.style.scale = `${scaleZoomOut}`;
    if (scaleZoomOut == 2) {
      divMap.style.overflowY = "auto";
      svgMap.style.marginLeft = "20px";
    }
    if (scaleZoomOut >= 2.5) {
      marginNumber = parseInt(marginNumber) + 20;
      svgMap.style.marginLeft = `${marginNumber}px`;
    }
  }
});

btnZoomOut.addEventListener("click", (e) => {
  let scaleActual = divMap.style.scale;
  let scaleZoomOut = scaleActual - 0.5;
  if (scaleActual > 1) {
    divMap.style.scale = `${scaleZoomOut}`;
    if (scaleActual == 2) {
      divMap.style.overflowY = "unset";
      svgMap.removeAttribute("style");
    }
  }
});
