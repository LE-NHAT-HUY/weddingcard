import Head from "next/head";
import WeddingCardView from "@/components/wedding-card-view";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thư Mời Thiệp Cưới Khánh Nam & Lan Nhi</title>
        <meta name="description" content="Mời bạn tham dự lễ cưới của chúng tôi vào ngày 20/12/2025." />

        {/* Open Graph */}
        <meta property="og:title" content="Thiệp Cưới Nhật Huy & Minh Anh" />
        <meta property="og:description" content="Mời bạn tham dự lễ cưới của chúng tôi vào ngày 20/12/2025." />
        <meta property="og:image" content="https://weddingcard-beta.vercel.app/anh6.jpg" />
        <meta property="og:url" content="https://weddingcard-beta.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thiệp Cưới Nhật Huy & Minh Anh" />
        <meta name="twitter:description" content="Mời bạn tham dự lễ cưới của chúng tôi vào ngày 20/12/2025." />
        <meta name="twitter:image" content="https://weddingcard-beta.vercel.app/anh6.jpg" />
      </Head>

      <WeddingCardView />
    </>
  );
}
