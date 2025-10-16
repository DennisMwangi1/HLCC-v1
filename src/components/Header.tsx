import { Button } from "./ui/button";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";

export function Header() {
    const navLinks = ["Home", "About", "Platform", "Offerings", "Events", "Case Studies", "Blog"];

    // Optional mapping to existing sections on home for items without dedicated pages
    const sectionMap: Record<string, string> = {
        "Platform": "why-hlcc",
        "Offerings": "offerings",
        "Events": "insights",
        "Case Studies": "case-studies",
        "Blog": "insights",
    };

    const toHref = (label: string) => {
        if (label === "Home") return "/";
        if (label === "About") return "/about";
        const slug = sectionMap[label] ?? label.toLowerCase().replace(/\s+/g, "-");
        return `/#${slug}`;
    };

    return (
        <header
            className="sticky top-0 z-50 w-full border-b border-white/10 bg-[var(--navy-dark)] backdrop-blur supports-[backdrop-filter]:bg-[var(--navy-dark)]/95">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div>
                        <Link to="/">
                            <img src="/assets/img/HLCC-new.png" alt="HLCC logo" className="h-14"/>
                        </Link>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link key={link} to={toHref(link)}
                              className="text-sm text-gray-300 hover:text-white transition-colors">
                            {link}
                        </Link>
                    ))}

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10">
                                Register <ChevronDown className="ml-1 h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="bg-[var(--navy-medium)] border-white/10 text-white">
                            <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">As Coach</DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">As
                                Facilitator</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </nav>

                {/* Mobile Menu */}
                <Sheet>
                    <SheetTrigger asChild className="lg:hidden">
                        <Button variant="ghost" size="icon" className="text-white">
                            <Menu className="h-6 w-6"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-[var(--navy-dark)] border-white/10 text-white w-80">
                        <nav className="flex flex-col gap-4 mt-8">
                            {navLinks.map((link) => (
                                <Link key={link} to={toHref(link)}
                                      className="text-gray-300 hover:text-white transition-colors py-2">
                                    {link}
                                </Link>
                            ))}
                            <div className="border-t border-white/10 pt-4 mt-4 flex flex-col gap-3">
                                <Button variant="outline"
                                        className="border-white/20 text-white hover:bg-white/10 justify-start">
                                    Register as Coach
                                </Button>
                                <Button variant="outline"
                                        className="border-white/20 text-white hover:bg-white/10 justify-start">
                                    Register as Facilitator
                                </Button>
                                <Button variant="ghost" className="text-white hover:bg-white/10 justify-start">
                                    Learner Login
                                </Button>
                                <Button
                                    className="bg-gradient-to-r from-[var(--blue-accent)] to-[var(--gold-accent)] text-white">
                                    Enquire Now
                                </Button>
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
