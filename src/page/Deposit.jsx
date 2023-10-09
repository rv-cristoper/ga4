import React from 'react'
import { Button } from 'react-bootstrap'
import { Deposit as deposit, Withdraw } from '../lib/ga4'

const Deposit = () => {
    return (
        <div>
            <h2>Página de depósito</h2>
            <div>
                <Button onClick={deposit} variant="success">Depositar</Button>
                <Button onClick={Withdraw} variant="danger">Retirar</Button>
            </div>
        </div>
    )
}

export default Deposit