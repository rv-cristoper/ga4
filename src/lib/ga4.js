import ReactGA from "react-ga4";

export const Deposit = () => {
    ReactGA.event("Depositar")
}

export const Withdraw = () => {
    ReactGA.event("Retirar")
}