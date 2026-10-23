import type { Chapter } from "@/content/chapters";

/**
 * Preserves the reviewed v2 educational HTML verbatim during the framework migration.
 * chapter.html is a compile-time, repository-owned constant; never pass user input here.
 * Individual sections can be progressively rewritten as typed JSX components.
 */
export function ChapterSection({ chapter }: { chapter: Chapter }) {
  return <div dangerouslySetInnerHTML={{ __html: chapter.html }} />;
}
