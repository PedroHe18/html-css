// Pergunta 3
let senhaValida = false
let senha1 = document.getElementById("p3").value
let r = true
let vazio = false
function senha_forte() {
    let senha = document.getElementById("p3").value;
    let forca = 0
    if (String(senha1.length) == "") {
        r = true
    } else {
        r = false
    }
    document.getElementById('impSenha').innerHTML = "Senha: " + senha;
    
    if (senha.length == 0) {
        vazio = true
    }

    if ((senha.length >= 4) && (senha.length <= 7)) {
        forca += 10;
    } else if(senha.length > 7) {
        forca += 25;
    }

    if ((senha.length >= 5) && (senha.match(/[a-z]+/))) {
        forca += 10;
    }

    if ((senha.length >= 6) && (senha.match(/[A-Z]+/))) {
        forca += 20
    }

    if ((senha.length >= 7) && (senha.match(/[&@#$!*,.]/))) {
        forca += 25
    }
    
    mostrarForca(forca);
}

function mostrarForca(forca) {
    if(forca < 30) {
        document.getElementById("ErroSenhaForca").innerHTML = "<span style='color: red;'>Fraca</span>";

        senhaValida = false
    } else if((forca >= 30) && (forca < 50)) {
        document.getElementById("ErroSenhaForca").innerHTML = "<span style='color: #f3ca43'>Média</span>";

        senhaValida = false
    } else if((forca >= 50) && (forca < 70)) {
        document.getElementById("ErroSenhaForca").innerHTML = "<span style='color: green'>Forte</span>";
        
        senhaValida = true
    } else if((forca >= 70)) {
        document.getElementById("ErroSenhaForca").innerHTML = "<span style='color: #006400'>Excelente</span>";
        
        senhaValida = true
    }
}

function corrigir() {
    // Pergunta 1
    let res = document.getElementById("resultado")
    let p1 = document.querySelector('input[name="pergunta1"]:checked')
    
    // Pergunta 2
    let p2 = document.getElementById("p2").value
    p2 = p2.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    p2 = p2.toUpperCase()

    // Pergunta 4
    let ano = document.getElementById("pergunta4").value

    // Pergunta 5
    let p5a = document.getElementById('p5a')
    let p5b = document.getElementById('p5b')
    let p5c = document.getElementById('p5c')
    let p5d = document.getElementById('p5d')

    // Pergunta 6
    let arquivo = document.getElementById("p6").files[0]

    // Pergunta 7
    let p7 = document.getElementById('p7').value

    // Pergunta 8
    let p8 = document.getElementById("p8").value
    p8 = p8.toUpperCase()

    // Erro e acerto
    let a = 0
    let tot = 8

    // P1
    if (!p1) {
        alert("Responda a pergunta 1")
        return
    } else if (p1 && p1.value =="1") {
            a++
    }
    // P2
    if (p2.trim() == "") {
        alert("Responda a pergunta 2")
        return
    } else if (p2 == "DOMINIO") {
        a++
    }

    // P3
    if (r == true || vazio == true) {
        alert("Responda a pergunta 3")
        return
    } else if (r == false && senhaValida == true) {
        a++
    }

    // P4
    if (ano.length == 0) {
        alert("Responda a pergunta 4")
        return
    } else if (ano == 1991) {
        a++
    }

    // P5
    if (!p5a.checked && !p5b.checked && !p5c.checked && !p5d.checked) {
        alert("Responda a pergunta 5")
        return
    } else if (p5a.checked && !p5b.checked && p5c.checked && !p5d.checked) {
        a++
    }

    // P6
    if (!arquivo) {
        alert("Envie um arquivo na pergunta 6")
        return
    } else if (arquivo.type == "text/html" ||
        arquivo.name.endsWith(".html") || arquivo.name.endsWith(".htm")) {
            a++
    }

    // P7
    if (p7 == "nenhuma") {
        alert("Responda a pergunta 7")
        return
    } else if (p7 == "type") {
        a++
    }

    // P8
    if (p8.trim() == "") {
        alert("Responda a pergunta 8")
        return
    } else if (p8 == "JAVA") {
        a++
    }
    
    let erro = tot - a
    res.innerHTML = `Acertos: ${a} | Erros: ${erro}`
}