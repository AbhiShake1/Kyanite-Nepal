import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { HomeLayout } from "@/components/home-layout";
import { ThemeProvider } from "~/providers/theme";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Kyanite Nepal",
  description: "kyanite;kynite;gemstone;gem;tourmaline;jewellery;kynitenepal;kyanitenepal",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <HomeLayout>
              {children}
            </HomeLayout>
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
