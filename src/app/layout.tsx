import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning Book",
  description: "مجموعه یادداشت‌ها و آموزش‌های مهندسی نرم‌افزار، React، Go و هوش مصنوعی",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
