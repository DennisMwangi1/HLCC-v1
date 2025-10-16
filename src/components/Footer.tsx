import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
    const footerLinks = {
        "What We Do": [
            "Leadership Development",
            "Culture Transformation",
            "Team Coaching",
            "HR Advisory",
        ],
        "Resources": ["Case Studies", "Insights", "Events & Webinars", "Publications"],
        "Company": ["About HLCC", "Our People", "Careers", "Contact"],
    };

    return (
        <footer className="bg-[var(--navy-dark)] text-white">
            {/* CTA Section */}
            <div className="border-b border-white/10">
                <div className="container mx-auto px-4 md:px-6 py-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl mb-4 font-semibold">
                            Ready to Elevate Your Leadership and Culture?
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                            Partner with HLCC to design and deliver transformative experiences
                            that move your people—and your business—forward.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-[var(--blue-accent)] to-[var(--gold-accent)] text-white hover:opacity-90"
                            >
                                Schedule a Discovery Call
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/30 text-white hover:bg-white/10"
                            >
                                Download Company Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/assets/img/HLCC-new.png" alt="HLCC logo" className="h-14" />
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            HLCC partners with organizations to develop emotionally intelligent
                            leaders, cohesive teams, and thriving cultures that drive
                            sustainable success.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail className="h-5 w-5 text-[var(--blue-accent)]" />
                                <span>info@hlcc.africa</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone className="h-5 w-5 text-[var(--blue-accent)]" />
                                <span>+254 700 000 000</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin className="h-5 w-5 text-[var(--blue-accent)]" />
                                <span>Nairobi, Kenya • Johannesburg, SA • Dubai, UAE</span>
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-white mb-4 font-medium">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-300 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} HLCC. All rights reserved. |
                        <a href="#" className="hover:text-white ml-1">
                            Privacy Policy
                        </a>{" "}
                        |{" "}
                        <a href="#" className="hover:text-white">
                            Terms of Use
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[var(--blue-accent)] transition-all"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[var(--blue-accent)] transition-all"
                        >
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[var(--blue-accent)] transition-all"
                        >
                            <Youtube className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
