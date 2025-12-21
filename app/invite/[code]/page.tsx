import WeddingCardScroll from "@/components/wedding-card-scroll"
import { defaultData } from "@/components/wedding-card-view"

type Props = { params: { code: string } }

export default async function InvitePage({ params }: Props) {
  const { code } = await params  // ⚠️ phải await vì params là Promise

  return <WeddingCardScroll data={defaultData} guestCode={code} />
}
