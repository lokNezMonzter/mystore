import { ReactNode } from "react";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}
