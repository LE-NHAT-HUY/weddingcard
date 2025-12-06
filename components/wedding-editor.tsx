"use client"

import { useState, useEffect } from "react"
import EditorSidebar from "./editor-sidebar"
import WeddingCardScroll from "./wedding-card-scroll"
import type { WeddingData } from "@/lib/types"
import { Eye, Save, ArrowLeft } from "lucide-react"
import Link from "next/link"

const defaultData: WeddingData = {
  groomName: "Minh Anh",
  brideName: "Thùy Linh",
  groomFullName: "Nguyễn Minh Anh",
  brideFullName: "Trần Thùy Linh",
  groomFatherName: "Nguyễn Văn Hùng",
  groomMotherName: "Lê Thị Mai",
  brideFatherName: "Trần Văn Nam",
  brideMotherName: "Phạm Thị Hoa",
  weddingDate: "2025-05-20",
  weddingTime: "12:00",
  lunarDate: "23/04/2025",
  venueName: "Trung Tâm Tiệc Cưới White Palace",
  venueAddress: "194 Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận, TP.HCM",
  message: "Trân trọng kính mời quý khách đến dự bữa tiệc chung vui cùng gia đình chúng tôi",
  template: "cinelove",
  primaryColor: "#9e0a0a",
  accentColor: "#db9999",
  coverPhoto: "/romantic-couple-wedding-photo-portrait.jpg",
  introText:
    "Trước đây, chúng mình từng nghĩ rằng, đám cưới chỉ là một thông báo chính thức. Giờ mới hiểu, đó là một dịp hiếm hoi để tụ họp, là sự vượt ngàn dặm để đến bên nhau, là sự ủng hộ vô điều kiện đầy trân quý.",
  quoteText:
    "Tình yêu đích thực không phải là khoảng cách, mà là một lựa chọn. Chúng mình chọn nắm lấy nhau, trân trọng nhau, và cùng nhau gìn giữ. Từ hôm nay, mãi mãi một lòng.",
  songTitle: "I Love You",
  songArtist: "Céline Dion",
  loveStory: [
    {
      id: "1",
      date: "05.10.2018",
      title: "Lần đầu gặp gỡ",
      description:
        "Giữa dòng người tấp nập, chúng mình gặp nhau vào mùa hè, hẹn ước vào mùa xuân, và hôm nay, trong khoảnh khắc đẹp nhất, chúng mình quyết định nắm tay nhau trọn đời.",
      image: "/couple-first-meeting-cafe-romantic.jpg",
    },
    {
      id: "2",
      date: "20.05.2019",
      title: "Chúng mình bên nhau",
      description:
        "Chuyến đi đầu tiên không có đích đến, vậy mà ta lại tìm thấy tình yêu. Em chụp phong cảnh, khen trời thu đẹp, anh chụp em, nói muốn lưu giữ điều tuyệt vời.",
      image: "/couple-travel-trip-together-happy.jpg",
    },
    {
      id: "3",
      date: "20.05.2022",
      title: "Ba năm bên nhau",
      description:
        "Có người hỏi, bí mật của tình yêu là gì. Nghĩ thật lâu, có lẽ đó là dũng khí. Tình yêu luôn có câu trả lời.",
      image: "/couple-anniversary-celebration-romantic-dinner.jpg",
    },
  ],
  gallery: [
    "/elegant-wedding-portrait.png",
    "/couple-holding-hands-romantic.jpg",
    "/bride-and-groom-outdoor-garden.jpg",
    "/couple-laughing-together-happy.jpg",
    "/wedding-couple-sunset-beach.jpg",
    "/couple-formal-wedding-attire.jpg",
  ],
}

export default function WeddingEditor() {
  const [data, setData] = useState<WeddingData>(defaultData)
  const [activeTab, setActiveTab] = useState("couple")
  const [showPreview, setShowPreview] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const savedData = localStorage.getItem("weddingData")
    if (savedData) {
      try {
        setData(JSON.parse(savedData))
      } catch (e) {
        console.error("Error loading wedding data:", e)
      }
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem("weddingData", JSON.stringify(data))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Editor Sidebar */}
      <div
        className={`w-full md:w-[420px] lg:w-[480px] border-r border-border bg-card overflow-y-auto h-screen md:sticky md:top-0 ${
          showPreview ? "hidden md:block" : "block"
        }`}
      >
        <div className="sticky top-0 z-10 bg-card border-b border-border px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Xem thiệp</span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Nút xem trước - chỉ hiển thị trên mobile */}
            <button
              onClick={() => setShowPreview(true)}
              className="md:hidden flex items-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium"
            >
              <Eye className="w-4 h-4" />
              Xem trước
            </button>

            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Save className="w-4 h-4" />
              {saved ? "Đã lưu!" : "Lưu"}
            </button>
          </div>
        </div>

        <EditorSidebar data={data} setData={setData} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Preview Area */}
      <div className={`flex-1 bg-[#f5f0eb] overflow-y-auto h-screen ${showPreview ? "block" : "hidden md:block"}`}>
        {/* Nút quay lại editor - chỉ hiển thị trên mobile khi đang xem preview */}
        {showPreview && (
          <div className="md:hidden sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b px-4 py-3">
            <button
              onClick={() => setShowPreview(false)}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Quay lại chỉnh sửa</span>
            </button>
          </div>
        )}
        <WeddingCardScroll data={data} />
      </div>
    </div>
  )
}
