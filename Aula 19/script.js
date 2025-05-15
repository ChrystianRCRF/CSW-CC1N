document.write("Ola!");

document.write("<h3> Aprendendo javascript <h3>");

function abrePaginas()
{
    window.open("AulaJS2", "_blank");

}

function enviaDados()
{
    document.getElementById("Inputusuario").innerHTML = "Nome enviado foi:" + window.prompt("Digite seu nome:")
}