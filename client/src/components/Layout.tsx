import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Games", path: "/games" },
    { label: "Staking", path: "/staking" },
    { label: "DAO", path: "/dao" },
    { label: "Roadmap", path: "/roadmap" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans transition-colors duration-300">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                <span className="text-white font-bold font-heading text-lg">W</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                Web3<span className="text-primary">Casino</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-accent/10"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400 transition-all" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700 transition-all" />
              )}
            </Button>
            
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300">
              Connect Wallet
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border/50 bg-background/95 backdrop-blur-xl">
                <div className="flex flex-col gap-8 mt-8">
                  <div className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Link key={item.path} href={item.path}>
                        <span
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-lg font-medium transition-colors hover:text-primary cursor-pointer ${
                            location === item.path ? "text-primary" : "text-muted-foreground"
                          }`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg">
                    Connect Wallet
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-xs">W</span>
              </div>
              <span className="font-heading font-bold text-lg">Web3Casino</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The first decentralized casino with real yield and deflationary tokenomics. Join the revolution of community-owned gaming.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Games</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Staking</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Tournaments</li>
              <li className="hover:text-primary cursor-pointer transition-colors">VIP Club</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Governance</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">DAO Dashboard</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Proposals</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Treasury</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Forum</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary cursor-pointer transition-colors">Twitter / X</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Discord</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Telegram</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Medium</li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border/20 text-center text-xs text-muted-foreground">
          © 2026 Web3 Casino Project. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
