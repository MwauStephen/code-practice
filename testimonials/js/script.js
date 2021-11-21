const galleryItems = document.querySelectorAll(".gallery-item");

console.log(galleryItems);
galleryItems.forEach((galleryItem) => {
  galleryItem.addEventListener("mouseover", () => {
    galleryItem.childNodes[1].classList.add("img-darken");
  });
  galleryItem.addEventListener("mouseout", () => {
    galleryItem.childNodes[1].classList.remove("img-darken");
  });
});
