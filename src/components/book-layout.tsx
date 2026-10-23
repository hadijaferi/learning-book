import { ChapterSection } from "./chapter-section";
import { Sidebar } from "./sidebar";
import type { Chapter } from "@/content/chapters";

export function BookLayout({ chapters }: { chapters: readonly Chapter[] }) {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content" id="top">
        <div className="top"><span>نسخه دوم • React + Next.js • فصل اول توسعه‌یافته</span><span>جلسه ۰۱ از مسیر ۱۶ هفته‌ای</span></div>
        <div className="cover">
          <span className="eyebrow">PERSONAL TECH BOOK · VOLUME 01</span>
          <h1>از فهم React<br />تا تفکر مهندسی</h1>
          <p>کتاب شخصی برای یادگیری عمیق Front-End، چالش‌های مصاحبه Senior، و ادامه مسیر به AI و Go.</p>
          <div><span className="pill">فصل اول: React Rendering</span><span className="pill">مطالعه + مرور صوتی</span></div>
        </div>
        <p className="intro">این کتاب قرار نیست فقط مجموعه‌ای از تعریف‌ها باشد؛ هر فصل اول یک مفهوم را روشن می‌کند، بعد با کد و مثال واقعی آن را جا می‌اندازد و در نهایت، سراغ سؤال‌های مصاحبه می‌رود.</p>
        {chapters.map((chapter) => <ChapterSection key={chapter.id} chapter={chapter} />)}
        <footer className="foot">نسخه دوم کتاب • Next.js static export • قابل مطالعه در مرورگر</footer>
      </main>
    </div>
  );
}
