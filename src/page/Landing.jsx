import React from 'react'
import { Button } from 'react-bootstrap'

const Landing = () => {
    return (
        <div>
            <h2>Página de inicio</h2>
            <div>
                <Button variant="success">Depositar</Button>
                <Button variant="danger">Retirar</Button>
            </div>
        </div>
    )
}

export default Landing