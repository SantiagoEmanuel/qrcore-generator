document.addEventListener('DOMContentLoaded', () => {
    const qrContent = document.getElementById('qrContent')
    const form = document.getElementById("form")
    const logo = document.getElementById('logo')
    const qr = document.getElementById('qr')
    const a = document.getElementById('download')
    var data

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const qrValue = e.target.qrValue.value;

        showQr(qrValue)
    })

    function showQr(value) {
        form.classList.add('hidden')
        qrContent.classList.remove('hidden')
        qrContent.classList.add('flex')
        logo.classList.add('qr--logo')

        new QRCode(qr, value)

        setTimeout(() => {
            data = document.getElementsByTagName('img').item(2).src
            console.log(data)
            a.download = 'QR'
            a.target = '_blank'
            a.href = data

        }, 1000)

    }

    document.getElementById('copiar').addEventListener('click', () => {
        navigator.clipboard.writeText(data)
            .then(function () {
                // Notificar al usuario que el enlace se ha copiado
                alert("Enlace copiado al portapapeles");
            })
            .catch(function (error) {
                // Manejar cualquier error que pueda ocurrir al copiar
                console.error("Error al copiar al portapapeles: " + error);
            })
    })
})