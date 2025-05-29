function identificarIdade()
{
    var idade = document.getElementById("idade").ariaValueMax;
    idade = parseInt(Idade);

    if (idade > 0 && idade < 10) {
        document.getElementById("identificacao").innerHTML = "É uma criança";
    }
    else if (idade >= 10 && idade < 15) {
        document.getElementById("identificacao").innerHTML = "É um adolescente.";
    }
}