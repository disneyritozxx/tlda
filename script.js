var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = x.length; }

    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("show"); // Remove a classe show de todas as imagens
        x[i].style.display = "none"; // Esconde todas as imagens
    }

    x[slideIndex - 1].style.display = "block"; // Mostra a imagem atual
    setTimeout(function() {
        x[slideIndex - 1].classList.add("show"); // Adiciona a classe show após um pequeno atraso
    }, 50); // O atraso pode ser ajustado para melhor efeito visual
}
// Função para abrir o modal com a imagem clicada
function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("imgModal");
  modal.style.display = "flex"; // Exibe o modal
  modalImg.src = imgElement.src; // Define a imagem clicada no modal
}

// Função para fechar o modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none"; // Esconde o modal
}

// Fecha o modal ao clicar fora da imagem
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
      closeModal(); // Fecha o modal se clicar fora da imagem
  }
}
