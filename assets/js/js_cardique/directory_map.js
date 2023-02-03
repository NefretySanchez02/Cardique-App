function onclick_map(id) {
  document.getElementById("view-directory-" + id).style.display = "block";
  localStorage.setItem("id_directory", id);
  $(".map-section svg")[0].style.display = "none";
}

function remove_modal() {
  let id_info = localStorage.getItem("id_directory");
  if (id_info !== null) {
    document.getElementById("view-directory-" + id_info).style.display = "none";
    $(".map-section svg")[0].style.display = "block";
  }
}
