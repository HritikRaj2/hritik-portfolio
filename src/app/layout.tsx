import { Inter, JetBrains_Mono } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

export const metadata = {
  title: "Hritik Raj - Portfolio",
  description: "Portfolio of Hritik Raj - Backend Developer | B.Tech CSE Student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrains.variable}`}>
      <head>
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        {/* Devicon for tech stack icons */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css" />
      </head>
      <body className="bg-gradient-to-br from-[#1f0933] via-[#2d1857] to-[#7c3aed] text-white font-inter antialiased dark min-h-screen">
        {children}
      </body>
    </html>
  );
}
