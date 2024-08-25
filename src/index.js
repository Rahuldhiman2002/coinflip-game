import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { ConnectionProvider } from '@solana/wallet-adapter-react';

const network = WalletAdapterNetwork.Devnet;
const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];

ReactDOM.render(
  <ConnectionProvider endpoint={`https://api.devnet.solana.com`}>
    <WalletProvider wallets={wallets} autoConnect>
      <App />
    </WalletProvider>
  </ConnectionProvider>,
  document.getElementById('root')
);
