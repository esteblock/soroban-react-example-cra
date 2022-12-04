import React from 'react';
import { useSorobanReact } from "@soroban-react/core";
import {WalletData} from "@soroban-react/wallet-data"

function MyWalletData() {
  const sorobanContext = useSorobanReact()
  return (
    <div>
      <div>
        <p>
          @soroban-react/wallet-data:
        </p>
      </div>
      <WalletData
        sorobanContext={sorobanContext}
        />
    </div>
  );
}

export default MyWalletData;
