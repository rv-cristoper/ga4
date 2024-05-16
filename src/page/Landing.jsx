import React from 'react'
import { Button } from 'react-bootstrap'
// import { Deposit, Withdraw } from '../lib/ga4'

const Landing = () => {
    const deposit = () => {
        // ReactGA.event({
        //     category: 'Compra',
        //     action: 'Depositar',
        //     label: "Compra de BTC"
        // });
        console.log('Se hizo click en depositar')
        // window.gtag('event', 'Depositar', {
        //     'event_category': 'Compra',
        //     'event_label': 'Compra de BTC',
        //     'value': 1  // Puedes ajustar el valor según sea necesario
        // });
        window.gtag('event', 'Depo_BTC');
    }
    const withdraw = () => {
        // ReactGA.event({
        //     category: 'Venta',
        //     action: 'Retirar',
        //     label: "Venta de BTC"
        // });
        console.log('Se hizo click en retirar')
        // window.gtag('event', 'Retirar', {
        //     'event_category': 'Venta',
        //     'event_label': 'Venta de BTC',
        //     'value': 1  // Puedes ajustar el valor según sea necesario
        // });
        window.gtag('event', 'Reti_BTC');
    }
    return (
        <div>
            <h2>Página de inicio</h2>
            <iframe allowFullScreen="true" src="https://clarovideo.deportesporinternet.com/dash2.html?url=aHR0cHM6Ly8xMDExLXZvcy5kdHZvdHQuY29tL0RBU0gvbWFuaWZlc3QubXBk&amp;k1=MTkxY2I3N2RjNjIyMzlkYjg3NTk2ZGVjNjJjOWI5OGY=&amp;k2=OWFlYTVmMDk3NjAzYjNkYzkxOWJhODY2OTRjMWEzOWQ=" allow="encrypted-media" width="100%" height="370" frameborder="0"></iframe>
            <div>
                <Button onClick={deposit} variant="success">Depositar</Button>
                <Button onClick={withdraw} variant="danger">Retirar</Button>
            </div>
        </div>
    )
}

export default Landing