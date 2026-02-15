import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Coins, ShieldCheck, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663280162108/hqXjggLatHGNyeGc.png" 
            alt="Web3 Casino Hero" 
            className="w-full h-full object-cover opacity-60 dark:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background"></div>
        </div>

        <div className="container relative z-10 flex flex-col items-center text-center gap-8 max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary">Live on Solana, Ethereum & BSC</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight leading-tight animate-fade-in-up delay-100">
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent-foreground">
              Decentralized Gaming
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl animate-fade-in-up delay-200">
            Experience the first casino where <span className="text-foreground font-semibold">you own the house</span>. 
            Stake $GAME, earn real yield in USDT, and govern the platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] transition-all duration-300">
              Play Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:bg-primary/10 backdrop-blur-sm">
              Buy $GAME Token
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full max-w-3xl animate-fade-in-up delay-500">
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold font-heading">$12M+</span>
              <span className="text-sm text-muted-foreground">Total Volume</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold font-heading">50%</span>
              <span className="text-sm text-muted-foreground">Revenue Share</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold font-heading">15k+</span>
              <span className="text-sm text-muted-foreground">Active Players</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-bold font-heading">3</span>
              <span className="text-sm text-muted-foreground">Chains Supported</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Why Choose Web3Casino?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're redefining the industry by giving power and profits back to the community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
            <div className="h-48 overflow-hidden relative">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663280162108/MtxwUUgwokrPKgkk.png" alt="Real Yield" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
            </div>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Coins className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-heading">Real Yield Staking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Stake your $GAME tokens and earn 50% of the platform's house edge directly in USDT. No inflationary rewards, just real cash flow.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
            <div className="h-48 overflow-hidden relative">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663280162108/VepNgqJdzNHquVav.png" alt="Deflationary" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
            </div>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-heading">Hyper-Deflationary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                30% of platform profits are used to buy back and burn $GAME tokens from the open market, constantly reducing supply and increasing scarcity.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
            <div className="h-48 overflow-hidden relative">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663280162108/egrbzOOOyEisIJFl.png" alt="DAO Governance" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
            </div>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-heading">Community Owned</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Full DAO governance ensures you have a say in treasury management, game additions, and platform parameters. Your voice matters.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="relative rounded-3xl overflow-hidden border border-primary/30 bg-gradient-to-br from-card to-background p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-[url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663280162108/hqXjggLatHGNyeGc.png')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-4xl md:text-6xl font-heading font-bold">Ready to Own the House?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Join the presale now and secure your early allocation of $GAME tokens before the public launch.
            </p>
            <Button size="lg" className="mt-4 text-lg px-10 py-8 bg-primary hover:bg-primary/90 shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:shadow-[0_0_60px_rgba(139,92,246,0.7)] transition-all duration-300 rounded-full">
              Join Presale <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <div className="flex items-center gap-4 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" /> Audited by CertiK
              </div>
              <div className="w-1 h-1 rounded-full bg-border"></div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-500" /> KYC Verified Team
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
