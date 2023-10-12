import ReactGA from 'react-ga4';

export const Deposit = () => {
    ReactGA.event({
        category: 'Compra',
        action: 'Depositar',
        label: "Compra de BTC"
    });
}

export const Withdraw = () => {
    ReactGA.event({
        category: 'Venta',
        action: 'Retirar',
        label: "Venta de BTC"
    });
}