const imgBox = document.querySelector('.services-image');

window.addEventListener('load', () => {
  imgBox.style.transition = 'all 0.6s ease';
  imgBox.style.opacity = '1';
  imgBox.style.transform = 'scale(1)';
});


//Services kya kya h//

document.querySelectorAll(".service-box").forEach(box => {
  box.addEventListener("mousemove", () => {
    box.style.transition = "all 0.3s ease";
  });
});
document.querySelectorAll(".service-box").forEach(box => {
  box.addEventListener("mouseenter", () => {
    box.style.transition = "all 0.4s ease";
  });
});
