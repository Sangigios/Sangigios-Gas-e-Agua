// Seleciona os elementos do HTML
const areaTexto = document.getElementById('nota');
const botaoLimpar = document.getElementById('limpar');
const statusTexto = document.getElementById('status');

// 1. Carregar a nota salva quando a página abrir
// O 'localStorage.getItem' busca se já existe algo salvo com a chave 'minhaNota'
const notaSalva = localStorage.getItem('minhaNota');

if (notaSalva) {
    areaTexto.value = notaSalva;
}

// 2. Salvar automaticamente enquanto digita
areaTexto.addEventListener('input', () => {
    // Pega o valor atual do texto
    const textoAtual = areaTexto.value;
    
    // Salva no navegador
    localStorage.setItem('minhaNota', textoAtual);
    
    // Feedback visual simples
    statusTexto.innerText = "Salvando...";
    setTimeout(() => {
        statusTexto.innerText = "Salvo automaticamente";
    }, 1000);
});

// 3. Botão de limpar
botaoLimpar.addEventListener('click', () => {
    const confirmar = confirm("Tem certeza que deseja apagar tudo?");
    
    if (confirmar) {
        areaTexto.value = ''; // Limpa a tela
        localStorage.removeItem('minhaNota'); // Limpa a memória
        statusTexto.innerText = "Bloco vazio";
    }
});