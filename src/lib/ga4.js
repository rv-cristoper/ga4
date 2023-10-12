import ReactGA from 'react-ga';

export const Deposit = () => {
    ReactGA.event({
        category: 'Button',
        action: 'Depositar',
        label: 'Depositar 1'
    });
}

export const Withdraw = () => {
    ReactGA.event({
        category: 'Button',
        action: 'Retirar',
        label: 'Retirar 1'
    });
}