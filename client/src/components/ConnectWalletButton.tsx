import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useState } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';



export default function ConnectWalletButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { connected: solanaConnected, publicKey } = useWallet();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300">
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-center font-heading text-xl">Connect Your Wallet</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="ethereum" className="w-full mt-4">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="ethereum">Ethereum / EVM</TabsTrigger>
            <TabsTrigger value="solana">Solana</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ethereum" className="flex flex-col items-center gap-4 py-4">
            <div className="text-center text-sm text-muted-foreground mb-2">
              Connect using RainbowKit (MetaMask, WalletConnect, etc.)
            </div>
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }: any) => {
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === 'authenticated');

                return (
                  <div
                    {...(!ready && {
                      'aria-hidden': true,
                      'style': {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <Button onClick={openConnectModal} className="w-full min-w-[200px]">
                            Connect EVM Wallet
                          </Button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <Button variant="destructive" onClick={openChainModal}>
                            Wrong network
                          </Button>
                        );
                      }

                      return (
                        <div className="flex gap-2">
                          <Button
                            onClick={openChainModal}
                            variant="outline"
                            className="flex items-center gap-2"
                          >
                            {chain.hasIcon && (
                              <div
                                style={{
                                  background: chain.iconBackground,
                                  width: 12,
                                  height: 12,
                                  borderRadius: 999,
                                  overflow: 'hidden',
                                  marginRight: 4,
                                }}
                              >
                                {chain.iconUrl && (
                                  <img
                                    alt={chain.name ?? 'Chain icon'}
                                    src={chain.iconUrl}
                                    style={{ width: 12, height: 12 }}
                                  />
                                )}
                              </div>
                            )}
                            {chain.name}
                          </Button>

                          <Button onClick={openAccountModal} variant="outline">
                            {account.displayName}
                            {account.displayBalance
                              ? ` (${account.displayBalance})`
                              : ''}
                          </Button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </TabsContent>
          
          <TabsContent value="solana" className="flex flex-col items-center gap-4 py-4">
            <div className="text-center text-sm text-muted-foreground mb-2">
              Connect using Solana Wallet Adapter (Phantom, Solflare, etc.)
            </div>
            <div className="wallet-adapter-button-trigger">
              <WalletMultiButton />
            </div>
            {solanaConnected && publicKey && (
              <div className="text-xs text-green-500 font-mono mt-2">
                Connected: {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
