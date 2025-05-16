import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "University Super League",
  description: "University Super League, A Charity Football Tournament For Students By Students",
  icons: {
    icon: '/logos/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className='w-full h-full'>
        {children}
      </body>
    </html>
  );
}
