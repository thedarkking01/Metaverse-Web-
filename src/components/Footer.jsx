import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
    { href: "https://discord.com", icon: <FaDiscord />, label: "Discord" },
    { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
    { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
    { href: "https://medium.com", icon: <FaMedium />, label: "Medium" },
];

const Footer = () => {
    return (
        <footer className="w-full bg-[#5542ff] py-8 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
            {/* Footer Text Section */}
            <p className="text-center text-sm font-light md:text-left">
            ©PROJECT X 2025. All rights reserved
            </p>

            {/* Social Links Section */}
            <div className="flex justify-center gap-6 md:justify-start">
            {socialLinks.map((link, index) => (
                <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-all duration-300 ease-in-out transform hover:text-[#f1f1f1] hover:scale-110"
                aria-label={link.label} // For accessibility
                >
                {link.icon}
                </a>
            ))}
            </div>

            {/* Privacy Policy Link */}
            <a
            href="#privacy-policy"
            className="text-center text-sm font-light hover:underline md:text-right"
            >
            Privacy Policy
            </a>
        </div>
        </footer>
    );
};

export default Footer;
