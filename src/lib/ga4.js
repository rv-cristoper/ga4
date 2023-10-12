import ReactGA from 'react-ga4';

export const Deposit = () => {
    ReactGA.event({
        category: 'Depositar',
        action: 'Se realizo un deposito',
        label: "real"
    });
}

export const Withdraw = () => {
    ReactGA.event({
        category: 'Retirar',
        action: 'Se realizo un retiro',
        label: "real"
    });
}