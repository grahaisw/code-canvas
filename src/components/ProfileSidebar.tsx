import { Linkedin, Github, Instagram, Facebook } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
];

export const ProfileSidebar = () => {
  return (
    <aside className="bg-card h-full flex flex-col items-center justify-center p-8 shadow-soft">
      <div className="flex flex-col items-center space-y-6 animate-fade-in-left">
        {/* Profile Photo */}
        <div className="relative group">
          <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-smooth"></div>
          <img
            src={profilePhoto}
            alt="Profile"
            className="relative w-48 h-48 rounded-full object-cover shadow-medium border-4 border-background transition-smooth group-hover:scale-105"
          />
        </div>

        {/* Name */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">John Developer</h1>
          <p className="text-muted-foreground text-sm tracking-wide">SOFTWARE ENGINEER</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 pt-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-11 h-11 rounded-full bg-secondary hover:bg-primary text-muted-foreground hover:text-primary-foreground flex items-center justify-center transition-smooth hover:scale-110 shadow-soft"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};
