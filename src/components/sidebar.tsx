import { navigation } from "@/content/navigation";

export function Sidebar() {
  return (
    <aside className="side" aria-label="ناوبری کتاب">
      <div className="brand">THE LEARNING JOURNAL</div>
      <h2>کتاب یادگیری من</h2>
      <small>Front-End → AI → Go</small>
      <div className="navlabel">فهرست این فصل</div>
      <nav aria-label="فصل‌ها">
        {navigation.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <div className="status">● جلسه اول: آموزش مفهومی شروع شده<br />بخش پرسش و پاسخ هنوز آغاز نشده</div>
    </aside>
  );
}
