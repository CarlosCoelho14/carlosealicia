// Data inicial (substitua com a data desejada)
const dataInicial = new Date('2024-08-08T20:00:00');

function atualizarContador() {
    const agora = new Date();
    let anos = agora.getFullYear() - dataInicial.getFullYear();
    let meses = agora.getMonth() - dataInicial.getMonth();
    let dias = agora.getDate() - dataInicial.getDate();
    let horas = agora.getHours() - dataInicial.getHours();
    let minutos = agora.getMinutes() - dataInicial.getMinutes();
    let segundos = agora.getSeconds() - dataInicial.getSeconds();

    // Ajustes para quando os valores são negativos
    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        const ultimoDiaDoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoDiaDoMes;
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    document.getElementById("ano").textContent =
        `${anos} anos`;
    
    document.getElementById("mes").textContent =
        `${meses} meses`;

    document.getElementById("dia").textContent =
        `${dias} dias`;

    document.getElementById("hora").textContent =
        `${horas} h : ${minutos} m : ${segundos} s`;

    document.getElementById("minuto").textContent =
        `${minutos} minutos`;

    document.getElementById("segundo").textContent =
        `${segundos} segundos`;


}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);