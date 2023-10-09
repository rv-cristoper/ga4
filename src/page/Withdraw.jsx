import React from 'react'
import { Button } from 'react-bootstrap'
import { Deposit, Withdraw as withdraw } from '../lib/ga4'

const Withdraw = () => {
    return (
        <div>
            <h2>Página de retiro</h2>
            <div>
                <Button onClick={Deposit} variant="success">Depositar</Button>
                <Button onClick={withdraw} variant="danger">Retirar</Button>
            </div>
        </div>
    )
}

export default Withdraw