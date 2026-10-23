import { BookLayout } from "@/components/book-layout";
import { chapters } from "@/content/chapters";

export default function HomePage() {
  return <BookLayout chapters={chapters} />;
}
