import { ChapterSection } from "./chapter-section";
import { Sidebar } from "./sidebar";
import type { Chapter } from "@/content/chapters";

export function BookLayout({ chapters }: { chapters: readonly Chapter[] }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content" id="top">
        <div className="top"><span>React Rendering • راهنمای مفهومی</span><span>مفاهیم • مثال‌ها • سؤال‌وجواب</span></div>
        <div className="cover">
          <span className="eyebrow">LEARNING BOOK · VOLUME 01</span>
          <h1>از فهم React<br />تا تفکر مهندسی</h1>
          <p>مسیر یادگیری مهندسی نرم‌افزار؛ از React و مبانی مهندسی تا Go و هوش مصنوعی.</p>
          <div><span className="pill">فصل اول: React Rendering</span><span className="pill">مطالعه + سؤال‌وجواب</span></div>
        </div>
        <p className="intro">این مجموعه قرار نیست فقط شامل تعریف‌ها باشد؛ هر فصل اول یک مفهوم را روشن می‌کند، بعد با کد و مثال واقعی آن را جا می‌اندازد و در نهایت، سراغ سؤال‌های مصاحبه می‌رود.</p>
        {chapters.map((chapter) => <ChapterSection key={chapter.id} chapter={chapter} />)}
        <footer className="foot">نسخه دوم • Next.js static export • قابل مطالعه در مرورگر</footer>
      </main>
    </div>
  );
}
