import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "کتاب یادگیری من | React Rendering",
  description: "کتاب فارسی برای یادگیری عمیق فرانت‌اند، React و آمادگی مصاحبه سینیور",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
