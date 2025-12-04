import PageTab from "@/features/common/PageTab";
import "@/utils/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "メンテナンス中...",
  description: "Who is udatomoki?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body>
        <main>
          <PageTab />
          {children}
        </main>
      </body>
    </html>
  );
}
