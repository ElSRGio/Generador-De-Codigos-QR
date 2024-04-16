document.addEventListener("DOMContentLoaded", function () {
    // Crea una instancia de QRCode
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width: 200,
        height: 200
    });

    // Función para generar el código QR
    window.generarQR = function () {
        var inputText = document.getElementById("inputText").value;
        qrcode.makeCode(inputText);
    };

    // Función para descargar el código QR
    window.descargarQR = function () {
        // Obtén el contenido del código QR directamente desde el canvas
        var canvas = document.querySelector("#qrcode canvas");
        var imageURL = canvas.toDataURL("image/png");
        
        // Crea un enlace temporal y simula el clic para descargar
        var link = document.createElement("a");
        link.href = imageURL;
        link.download = "qrcode.png";
        link.click();
    };
});
