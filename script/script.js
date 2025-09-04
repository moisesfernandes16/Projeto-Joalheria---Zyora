let btnProdutos = document.getElementById("produtos")
let popUp = document.getElementById("popUp")

btnProdutos.addEventListener("click" , function(){
    popUp.classList.toggle("popUpAtivo")
})