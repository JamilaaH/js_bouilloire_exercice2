let chauffer = (x) => {
    setTimeout(() => {
        if (x.temperature < 100 ) {
            x.temperature +=20
            console.log(`La temperature est de ${x.temperature} degrés`);
            chauffer(x)
        } else {
            console.log(`l'eau est chauffée`);
        }

    }, 1000)
}

export {chauffer}