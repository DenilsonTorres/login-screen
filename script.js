function logar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email == "admin@gmail.com" && senha == "admin") {
        location.href = "home.html";
    } else {
        alert("Usuario ou senha estão incorretos");
    }
}

function register() {
    var nome = document.getElementById("nome")
    var email = document.getElementById("email")
    var senha = document.getElementById("senha")


}
