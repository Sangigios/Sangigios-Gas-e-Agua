const cores = ["red", "black"];
    const divs = document.querySelectorAll(".minhaDiv");
    const pagina = window.location.pathname;

    divs.forEach((div, index) => {
    const chave = `contador-${pagina}-${index}`;
    div.onclick = function() {
        let contador = localStorage.getItem(chave) || 0;
        contador++;
        this.style.color = cores[(contador - 1) % cores.length];
        localStorage.setItem(chave, contador);
    }
    });

    window.onload = function() {
    divs.forEach((div, index) => {
        const chave = `contador-${pagina}-${index}`;
        const contador = localStorage.getItem(chave) || 0;
        if (contador > 0) {
        div.style.color = cores[(contador - 1) % cores.length];
        }
    });
    }

    function resetCor() {
    divs.forEach((div, index) => {
        const chave = `contador-${pagina}-${index}`;
        localStorage.removeItem(chave);
        div.style.color = "";
    });
    }