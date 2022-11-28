import React from 'react';
import { useSorobanReact } from "@soroban-react/core";

function Address() {
  const {address} = useSorobanReact()
  return (
        <p>
          Your address is: {address}
        </p>
  );
}

export default Address;
