import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noor & Co.",
  description: "Noor & Co. - Premium AI-Powered E-Commerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
