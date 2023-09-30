let cupoMaximoPersonas = 20;
    if (cupoMaximoPersonas <=20) {
        console.log("El restaurante tiene disponbilidad para tu reserva");
    } else (cupoMaximoPersonas >= 19); {
        console.log ("No tenemos disponibilidad para tu reserva");
    }

    let tipoDeReserva = "aniversario";
    switch (tipoDeReserva) {
        case "aniversario":
            console.log ("Ofrecemos una botella de champagne para celebrar. ¿Te gustaría añadirla?");
            break;
        case "ubicacion de la mesa":
            console.log("le ofrecemos en la ventana, en el centro o en la terraza");
            break;
        default:
            console.log ("Gracias por elegir nuestro restaurante. Tu mesa estará lista pronto.");
    }