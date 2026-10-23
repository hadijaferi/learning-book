import { navigation } from "@/content/navigation";

export function Sidebar() {
  return (
    <aside className="side" aria-label="ناوبری کتاب">
      <div className="brand">LEARNING BOOK</div>
      <h2>Learning Book</h2>
      <small>React · Go · AI</small>
      <div className="navlabel">فهرست این فصل</div>
      <nav aria-label="فصل‌ها">
        {navigation.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>
      <div className="status">● جلسه اول: آموزش مفهومی شروع شده<br />بخش پرسش و پاسخ هنوز آغاز نشده</div>
    </aside>
  );
}
