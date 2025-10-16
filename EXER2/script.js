function escreva() {
    var idade = parseFloat(document.getElementById("idade").value)
    


    if (idade < 18) {
        printidade.textContent = "Você é menor de idade"
    } else{
         printidade.textContent = "Você é maior de idade"
    }
   
}