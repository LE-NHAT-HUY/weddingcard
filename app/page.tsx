// app/page.tsx
import dynamic from "next/dynamic";

// Dynamic import WeddingCardView, tắt SSR
const WeddingCardView = dynamic(
  () => import("@/components/wedding-card-view"),
  { ssr: false }
);

export default function Page() {
  return <WeddingCardView />;
}

