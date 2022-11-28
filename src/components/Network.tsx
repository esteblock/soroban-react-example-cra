import React from 'react';
import { useSorobanReact } from '@soroban-react/core';

function Network() {
  const {activeChain, server} = useSorobanReact()
  console.log("server?.serverURL", server?.serverURL)
  return (
    <div>
        <p>
          Your network is: {activeChain?.name}
        </p>
        <p>
          Your network URL is: {server?.serverURL.valueOf()}
        </p>
    </div>
  );
}

export default Network;
