export interface NavigationItem {
  readonly id: string;
  readonly label: string;
}

export interface NavigationChapter {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly items: readonly NavigationItem[];
}

export const navigationChapters: readonly NavigationChapter[] = [
  {
    id: "react",
    title: "React",
    description: "فصل ۰۱ · React Rendering",
    items: [
      { id: "toc", label: "فهرست مطالب" },
      { id: "goals", label: "هدف‌های یادگیری" },
      { id: "concept", label: "Render و Commit" },
      { id: "flow", label: "مسیر آپدیت State" },
      { id: "reconcile", label: "Reconciliation و Fiber" },
      { id: "snapshot", label: "State Snapshot و Batching" },
      { id: "tree", label: "کامپوننت‌ها، memo و key" },
      { id: "effects", label: "Effect و زمان‌بندی" },
      { id: "code", label: "تمرین‌های React + TS" },
      { id: "pitfall", label: "سوءبرداشت‌های رایج" },
      { id: "interview", label: "سؤال‌های مصاحبه" },
      { id: "glossary", label: "واژه‌نامه و منابع" },
    ],
  },
];

// Future subjects can be added as chapters with their own items.
// Do not show links for chapters that have no published content.
