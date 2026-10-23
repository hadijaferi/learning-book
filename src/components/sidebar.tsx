"use client";

import { useEffect, useState } from "react";
import { navigationChapters } from "@/content/navigation";

export function Sidebar() {
  const [activeId, setActiveId] = useState("toc");
  useEffect(() => {
    const ids = navigationChapters.flatMap(chapter => chapter.items.map(item => item.id));
    const sections = ids.map(id => document.getElementById(id)).filter((node): node is HTMLElement => Boolean(node));
    const update = () => {
      const threshold = Math.max(100, window.innerHeight * 0.22);
      let current = sections[0]?.id ?? "toc";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section.id;
      }
      setActiveId(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("hashchange", update); };
  }, []);
  useEffect(() => {
    const active = document.querySelector<HTMLAnchorElement>(`.sidebar-chapter-links a[href="#${activeId}"]`);
    active?.scrollIntoView({ block: "nearest", behavior: "instant" });
  }, [activeId]);
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
                <a key={item.id} href={`#${item.id}`} aria-current={activeId === item.id ? "location" : undefined} style={activeId === item.id ? { background: "var(--active-bg, rgba(59,130,246,.13))", color: "var(--active-text, #2563eb)", fontWeight: 700, borderInlineStart: "3px solid currentColor" } : undefined} onClick={() => setActiveId(item.id)}>{item.label}</a>
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
