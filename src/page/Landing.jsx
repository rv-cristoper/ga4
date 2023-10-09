import React from 'react'
import { Button } from 'react-bootstrap'
import { Deposit, Withdraw } from '../lib/ga4'

const Landing = () => {
    return (
        <div>
            <h2>Página de inicio</h2>
            <div>
                <Button onClick={Deposit} variant="success">Depositar</Button>
                <Button onClick={Withdraw} variant="danger">Retirar</Button>
            </div>
        </div>
    )
}

export default Landing