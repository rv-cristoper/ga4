import React from 'react'
import { Button } from 'react-bootstrap'

const Deposit = () => {
    return (
        <div>
            <h2>Página de depósito</h2>
            <div>
                <Button variant="success">Depositar</Button>
                <Button variant="danger">Retirar</Button>
            </div>
        </div>
    )
}

export default Deposit