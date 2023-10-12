import ReactGA from 'react-ga';

export const Deposit = () => {
    ReactGA.event({
        category: 'Depositar',
        action: 'Se realizó un deposito',
    });
}

export const Withdraw = () => {
    ReactGA.event({
        category: 'Retirar',
        action: 'Se realizó un retiro',
    });
}