function click_img(id) {
  let selector = $(this);
  if (!$(selector).hasClass("img-none")) {
    $(".img-none")[id - 1].style.display = "inline-block";
    $(`#item-` + id)[0].style.display = "none";
  }
}
$(".img-none").click(function () {
  var classDrop = $(this).attr("id");
  classDrop = classDrop.trim();
  classDrop = classDrop.substring(13, 14);
  console.log(`#item-` + classDrop)
  $(`#item-` + classDrop)[0].style.display = "inline-block";
  $(`#item_reverse-` + classDrop)[0].style.display = "none";
});
