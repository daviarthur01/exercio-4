function Calcular(){
    let area = document.getElementById("area").value 
    let Qntd = document.getElementById("qntd").value
    let aparelho = document.getElementById("aparelhos").value

    let quantidade = Qntd -1

    let resultado =( area * 600 ) + ( quantidade * 600 ) + ( aparelho * 600)

    alert(resultado + " BTUS")

}