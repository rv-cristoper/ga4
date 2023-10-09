import React from 'react'
import { Button } from 'react-bootstrap'

const Withdraw = () => {
    return (
        <div>
            <h2>Página de retiro</h2>
            <div>
                <Button variant="success">Depositar</Button>
                <Button variant="danger">Retirar</Button>
            </div>
        </div>
    )
}

export default Withdraw