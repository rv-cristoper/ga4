import ReactGA from 'react-ga';

export const Deposit = () => {
    ReactGA.event({
        category: 'depositar',
        action: 'se_realizo_un_deposito',
    });
}

export const Withdraw = () => {
    ReactGA.event({
        category: 'Retirar',
        action: 'Se realizó un retiro',
    });
}