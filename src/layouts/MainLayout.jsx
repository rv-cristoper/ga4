import React from 'react'
import { NavLink } from "react-router-dom";

const MainLayout = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/deposit">Depósito</NavLink>
                        </li>
                        <li>
                            <NavLink to="/withdraw">Retiro</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

export default MainLayout