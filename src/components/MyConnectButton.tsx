import React from 'react';
import { useSorobanReact } from "@soroban-react/core";
import {ConnectButton} from "@soroban-react/connect-button"

function MyConnectButton() {
  const sorobanContext = useSorobanReact()
  return (
    <div>
      <div>
        <p>
          @soroban-react/connect-button:
        </p>
      </div>
      <ConnectButton
        label="Connect your Wallet"
        sorobanContext={sorobanContext}
        />
    </div>
  );
}

export default MyConnectButton;
