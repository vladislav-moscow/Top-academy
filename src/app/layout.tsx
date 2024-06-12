import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Приложение Top обучение",
  description: "Обучение React в школе Top",
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
