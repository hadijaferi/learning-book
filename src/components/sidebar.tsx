import { navigationChapters } from "@/content/navigation";

export function Sidebar() {
  return (
    <aside className="side" aria-label="ناوبری آموزش">
      <div className="brand">LEARNING BOOK</div>
      <h2>Learning Book</h2>
      <small>React · Go · AI</small>
      <nav className="chapter-navigation" aria-label="فصل‌ها">
        <a className="sidebar-home" href="#top">⌂ <span>صفحه اصلی</span></a>
        <div className="navlabel">فصل‌های آموزشی</div>
        {navigationChapters.map((chapter, chapterIndex) => (
          <details className="sidebar-chapter" key={chapter.id} open={chapterIndex === 0}>
            <summary className="sidebar-chapter-heading">
              <span className="sidebar-chapter-icon" aria-hidden="true">{String(chapterIndex + 1).padStart(2, "0")}</span>
              <span className="sidebar-chapter-title">
                <strong>{chapter.title}</strong>
                <small>{chapter.description}</small>
              </span>
              <span className="sidebar-chevron" aria-hidden="true">⌄</span>
            </summary>
            <div className="sidebar-chapter-links">
              {chapter.items.map((item) => (
                <a key={item.id} href={`#${item.id}`}>{item.label}</a>
              ))}
            </div>
          </details>
        ))}
      </nav>
      <div className="sidebar-coming-next" aria-label="موضوعات آینده">
        <span>موضوعات آینده</span>
        <p>Go و AI پس از آماده‌شدن محتوای آموزشی به فهرست اضافه می‌شوند.</p>
      </div>
    </aside>
  );
}
