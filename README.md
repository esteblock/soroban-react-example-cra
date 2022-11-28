# @soroban-react library example using Create React App

This project uses the [@soroban-react](https://github.com/esteblock/soroban-react) library in order to connect a Soroban (and non-soroban Stellar) wallet to a ReactJS project.  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) in order to 

# Example
Try it [here in this Vercel App!](https://soroban-react-example-cra.vercel.app/)

# Usage:
[@soroban-react](https://github.com/esteblock/soroban-react) allows to connect your ReactJS project with several wallets (Connectors). For now, the only supported wallet is [Freighter](https://github.com/stellar/freighter). So in order to test the library in this project, you'll need to setup a Freighter wallet connected to some Soroban network.

## Setup Freighter in Chrome or Brave:
1. Install the custom Freighter Soroban release from https://github.com/stellar/freighter/releases/tag/v2.6.0-beta.2
2. Enable "Experimental Mode" in the settings (gear icon).
3. Connect to the [Futurenet] (https://soroban.stellar.org/docs/networks/futurenet) network.
4. Use the [Futurenet friendbot](https://laboratory.stellar.org/#account-creator?network=futurenet) tu fund your account with Lumens.

## Install and run this project

```
yarn
yarn start
```
Open 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Experiment:
You will be asked to connect your wallet. Once you do it, you'll be able to see your account, your balance and the network you are using. Explore changing your account and/or network to see changes in real time.

Enjoy!



# Go further.
If you want to use your local Futurenet RPC, local Sandbox or Standalone Soroban network, follow the instructions [here](https://github.com/stellar/soroban-example-dapp)