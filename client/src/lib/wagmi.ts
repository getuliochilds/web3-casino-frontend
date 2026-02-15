import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, bsc } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Web3 Casino',
  projectId: 'YOUR_PROJECT_ID', // Replace with your WalletConnect Project ID
  chains: [mainnet, bsc],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
