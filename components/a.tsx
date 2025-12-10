"use client"

import type { WeddingData } from "@/lib/types"
import { useEffect, useRef, useState } from "react"
import { Heart, MapPin, Calendar } from "lucide-react"
import RSVPSection from "@/components/RSVPSection"

interface WeddingCardScrollProps {
  data: WeddingData
}

export default function WeddingCardScroll({ data }: WeddingCardScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  const formatCountdown = () => {
    if (!data.weddingDate) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    const wedding = new Date(`${data.weddingDate}T${data.weddingTime || "12:00"}`)
    const now = new Date()
    const diff = wedding.getTime() - now.getTime()
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    }
  }

  const [countdown, setCountdown] = useState(formatCountdown())

  useEffect(() => {
    const timer = setInterval(() => setCountdown(formatCountdown()), 1000)
    return () => clearInterval(timer)
  }, [data.weddingDate, data.weddingTime])

  const countdownItems = [
    { value: countdown.days, label: "Ngày" },
    { value: countdown.hours, label: "Giờ" },
    { value: countdown.minutes, label: "Phút" },
    { value: countdown.seconds, label: "Giây" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.2 },
    )

    const sections = containerRef.current?.querySelectorAll("[data-animate]")
    sections?.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const isVisible = (id: string) => visibleSections.has(id)

  const formatWeddingDate = () => {
    if (!data.weddingDate) return ""
    const date = new Date(data.weddingDate)
    return date.toLocaleDateString("vi-VN", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, "-")
  }

  return (
    <div
      ref={containerRef}
      className="w-full max-w-full overflow-x-hidden bg-[#faf8f5] min-h-screen"
      style={{ fontFamily: "'Quicksand', 'Playfair Display', sans-serif" }}
    >
      {/* Section 1: Save The Date Header */}
      <section
        id="main-photo-start"
        data-animate
        className={`relative left-1/2 -translate-x-1/2 w-screen h-screen overflow-hidden transition-all duration-1700 ease-out ${
          isVisible("main-photo-start") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="absolute inset-0">
          <img
            src={data.coverPhoto || "/placeholder.svg"}
            alt="Wedding couple"
            className="w-full h-full object-cover block"
            loading="eager"
          />
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 text-center z-10">
            <p
              className={`text-sm sm:text-base transition-all duration-1700 ${
                isVisible("main-photo-start") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ fontFamily: "'Playfair Display', serif", color: "#111111", letterSpacing: "1px", marginBottom: "12px" }}
            >
              SAVE THE DATE
            </p>
            <p
              className={`text-xl sm:text-3xl italic transition-all duration-1700 ${
                isVisible("main-photo-start") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ fontFamily: "'Great Vibes', cursive", color: "#111111", letterSpacing: "2px", whiteSpace: "nowrap" }}
            >
              {data.groomName} & {data.brideName}
            </p>
            <p
              className={`mt-2 text-sm sm:text-base transition-all duration-1700 ${
                isVisible("main-photo-start") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ fontFamily: "'Playfair Display', serif", color: "#111111", letterSpacing: "1px" }}
            >
              {data.weddingDate ? new Date(data.weddingDate).toLocaleDateString("vi-VN").replace(/\//g, ".") : "02.02.2026"}
            </p>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section
        id="countdown"
        data-animate
        className={`px-4 sm:px-8 py-8 text-center transition-all duration-1700 ${
          isVisible("countdown") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h3 className="text-base sm:text-2xl mb-4 sm:mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#111111" }}>
          NGÀY TRỌNG ĐẠI ĐANG ĐẾN GẦN...
        </h3>

        <div className="flex justify-center gap-1 sm:gap-2">
          {countdownItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-16 sm:w-20">
              <div className="text-xl sm:text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#111111" }}>
                {(item.value ?? 0).toString().padStart(2, "0")}
              </div>
              <span className="text-sm sm:text-base" style={{ fontFamily: "'Playfair Display', serif", color: "#111111" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>
      
              {/* Gallery photo (not full screen) */}
              <section
                id="gallery-2"
                data-animate
                className={`
                  px-4
                  py-4
                  transition-all
                  duration-1700
                  ${isVisible("gallery-2") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
              >
                <img
                  src={
                    data.gallery[1] ||
                    "/placeholder.svg?height=450&width=350&query=couple portrait elegant"
                  }
                  alt="Gallery"
                  className="w-[75%] h-auto max-h-[60vh] object-contain mx-auto"
                />
              </section>
      
              {/* Invitation text */}
              <section
                id="quote1"
                data-animate
                className={`
                  px-4
                  sm:px-8
                  py-6
                  text-center
                  transition-all
                  duration-1700
                  ${isVisible("quote1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
              >
                <p
                  className="text-base sm:text-lg mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#111111",
                    letterSpacing: "1px",
                  }}
                >
                  Trân trọng kính mời quý khách
                </p>
                <p
                  className="text-base sm:text-lg mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#111111",
                    letterSpacing: "1px",
                  }}
                >
                  dành thời gian quý báu tham dự lễ cưới của
                </p>
                <p
                  className="text-2xl sm:text-3xl mt-4"
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    color: "#111111",
                    letterSpacing: "2px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {data.groomName} & {data.brideName}
                </p>
              </section>
      
              {/* Gallery grid */}
              <section
                id="gallery-grid-1"
                data-animate
                className={`
                  px-4
                  py-3
                  transition-all
                  duration-1700
                  overflow-hidden
                  ${isVisible("gallery-grid-1") ? "opacity-100" : "opacity-0"}
                `}
              >
                <div className="grid grid-cols-2 gap-3">
                  {data.gallery.slice(0, 2).map((photo, index) => (
                    <div
                      key={index}
                      className={`
                        w-full
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-1700
                        ${isVisible("gallery-grid-1") ? "translate-x-0 opacity-100" : index === 0 ? "-translate-x-6 opacity-0" : "translate-x-6 opacity-0"}
                      `}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <img
                        src={photo || "/placeholder.svg"}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-auto object-contain rounded-sm"
                      />
                    </div>
                  ))}
                </div>
              </section>
      
              {/* Parents */}
              <section
                id="parents"
                data-animate
                className={`
                  px-4
                  sm:px-8
                  py-3
                  transition-all
                  duration-1700
                  ${isVisible("parents") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
              >
                <div className="grid grid-cols-2 gap-4 sm:gap-8 text-center">
                  <div>
                    <h4
                      className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3"
                      style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                    >
                      NHÀ TRAI
                    </h4>
                    <p
                      className="text-xs sm:text-sm mb-1"
                      style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                    >
                      Ông: {data.groomFatherName}
                    </p>
                    <p
                      className="text-xs sm:text-sm"
                      style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                    >
                      Bà: {data.groomMotherName}
                    </p>
                    <p
                      className="text-sm sm:text-base font-medium mt-2"
                      style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                    >
                      {data.groomFullName}
                    </p>
                  </div>
      
                  <div>
                    <h4
                      className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3"
                      style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                    >
                      NHÀ GÁI
                    </h4>
                    <p
                      className="text-xs sm:text-sm mb-1"
                      style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                    >
                      Ông: {data.brideFatherName}
                    </p>
                    <p
                      className="text-xs sm:text-sm"
                      style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                    >
                      Bà: {data.brideMotherName}
                    </p>
                    <p
                      className="text-sm sm:text-base font-medium mt-2"
                      style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                    >
                      {data.brideFullName}
                    </p>
                  </div>
                </div>
              </section>
      
              {/* Wedding info */}
              <section
                id="wedding-info-1"
                data-animate
                className={`
                  px-4
                  sm:px-8
                  py-6
                  sm:py-8
                  text-center
                  transition-all
                  duration-1700
                  ${isVisible("wedding-info-1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
              >
                <div className="flex justify-center mb-3">
                  <img
                    src="/hi.png"
                    alt="Bó hoa"
                    className="w-14 h-auto opacity-90"
                    loading="eager"
                    decoding="async"
                    draggable="false"
                  />
                </div>
      
                <h3
                  className="text-base sm:text-xl font-semibold mb-3"
                  style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                >
                  LỄ THÀNH HÔN
                </h3>
      
                <p
                  className="mb-3 text-center"
                  style={{
                    color: "#111111",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "16px",
                    lineHeight: "1.3",
                  }}
                >
                  VÀO LÚC{" "}
                  <span
                    style={{
                      fontSize: "1em",
                      fontFamily: "'Playfair Display', serif",
                      position: "relative",
                      top: "-2px",
                    }}
                  >
                    9:00
                  </span>{" "}
                  – THỨ SÁU
                </p>
      
                <div className="flex flex-col items-center mb-1">
                  <div className="w-20 h-[1px] bg-[#111111] mb-[2px]" />
                  <p
                    className="text-xl sm:text-2xl tracking-widest leading-tight"
                    style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                  >
                    {data.weddingDate
                      ? new Date(data.weddingDate).toLocaleDateString("vi-VN").replace(/\//g, ".")
                      : "02.02.2026"}
                  </p>
                  <div className="w-20 h-[1px] bg-[#111111] mt-[2px]" />
                </div>
      
                {data.lunarDate && (
                  <p
                    className="text-xs sm:text-sm text-gray-600 mt-0 mb-5 leading-tight"
                    style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                  >
                    (TỨC NGÀY {data.lunarDate} ÂM LỊCH)
                  </p>
                )}
      
                <MapPin
                  className="w-7 h-7 sm:w-8 sm:h-8 mx-auto mb-2"
                  style={{ color: data.accentColor }}
                />
      
                <p
                  className="text-lg sm:text-2xl font-semibold mb-1"
                  style={{
                    fontFamily: "'Great Vibes', cursive",
                    color: "#111111",
                    letterSpacing: "2px",
                    fontSize: "20px",
                    whiteSpace: "nowrap",
                    fontWeight: "300",
                  }}
                >
                  {data.venueName}
                </p>
      
                <p
                  className="text-xs sm:text-sm text-gray-600 px-2"
                  style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                >
                  {data.venueAddress}
                </p>
      
                <a
                  href="https://maps.app.goo.gl/E84yGsyMHc4FHMJM8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-9 py-1 text-sm rounded-full border border-[#111111] text-[#111111]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  XEM BẢN ĐỒ
                </a>
              </section>
      
              <div className="flex justify-center my-6">
                <div className="w-55 h-[1px] bg-[#111111] opacity-60" />
              </div>
      
              {/* Second wedding-info block (intentionally separate id) */}
              <section
                id="wedding-info-2"
                data-animate
                className={`
                  px-4
                  sm:px-8
                  py-6
                  sm:py-8
                  text-center
                  transition-all
                  duration-1700
                  ${isVisible("wedding-info-2") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
              >
                <div className="flex flex-col items-center text-center">
                  <h3
                    className="text-base sm:text-xl font-semibold mb-3"
                    style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                  >
                    BỮA CƠM THÂN MẬT
                  </h3>
      
                  <p
                    className="mb-3"
                    style={{ color: "#111111", fontFamily: "'Playfair Display', serif", fontSize: "16px", lineHeight: "1.3" }}
                  >
                    VÀO LÚC{" "}
                    <span style={{ fontSize: "1em", fontFamily: "'Playfair Display', serif", position: "relative", top: "-2px" }}>
                      9:00
                    </span>{" "}
                    – THỨ SÁU
                  </p>
      
                  <div className="flex flex-col items-center mb-1">
                    <div className="w-20 h-[1px] bg-[#111111] mb-[2px]" />
                    <p
                      className="text-xl sm:text-2xl tracking-widest leading-tight"
                      style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                    >
                      {data.weddingDate ? new Date(data.weddingDate).toLocaleDateString("vi-VN").replace(/\//g, ".") : "02.02.2026"}
                    </p>
                    <div className="w-20 h-[1px] bg-[#111111] mt-[2px]" />
                  </div>
      
                  {data.lunarDate && (
                    <p
                      className="text-xs sm:text-sm text-gray-600 mt-0 mb-5 leading-tight"
                      style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}
                    >
                      (TỨC NGÀY {data.lunarDate} ÂM LỊCH)
                    </p>
                  )}
      
                  <MapPin className="w-7 h-7 sm:w-8 sm:h-8 mb-2" style={{ color: data.accentColor }} />
      
                  <p
                    className="text-lg sm:text-2xl font-semibold mb-1"
                    style={{ fontFamily: "'Great Vibes', cursive", color: "#111111", letterSpacing: "2px", fontSize: "20px", whiteSpace: "nowrap", fontWeight: "300" }}
                  >
                    {data.venueName}
                  </p>
      
                  <p className="text-xs sm:text-sm text-gray-600 px-2" style={{ color: "#111111", fontFamily: "'Playfair Display', serif" }}>
                    {data.venueAddress}
                  </p>
      
                  <a
                    href="https://maps.app.goo.gl/E84yGsyMHc4FHMJM8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-9 py-1 text-sm rounded-full border border-[#111111] text-[#111111]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    XEM BẢN ĐỒ
                  </a>
                </div>
              </section>
      
              {/* Album header + grid */}
              <section id="gallery-grid-2" data-animate className="px-4 py-3 overflow-hidden">
                <div className="flex flex-col items-center text-center">
                  <p
                    className={`
                      text-lg
                      sm:text-2xl
                      mt-10
                      font-semibold
                      mb-6
                      transition-all
                      duration-1700
                      ${isVisible("gallery-grid-2") ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                    `}
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      color: "#111111",
                      letterSpacing: "2px",
                      fontSize: "30px",
                      whiteSpace: "nowrap",
                      fontWeight: "300",
                    }}
                  >
                    Album Hình Cưới
                  </p>
      
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {data.gallery.slice(0, 4).map((photo, index) => {
                      const delay = `${index * 100}ms`
                      return (
                        <div
                          key={index}
                          className={`
                            w-full
                            flex
                            items-center
                            justify-center
                            transition-all
                            duration-1700
                            ${isVisible("gallery-grid-2") ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                          `}
                          style={{ transitionDelay: delay }}
                        >
                          <img
                            src={photo || "/placeholder.svg"}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-auto object-contain rounded-sm"
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>
      
              <RSVPSection />
      
              <section
                id="gift-title"
                data-animate
                className={`
                  px-4
                  py-3
                  overflow-hidden
                  ${isVisible("gift-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
              >
                <div className="flex flex-col items-center text-center">
                  <p
                    className={`
                      text-lg
                      sm:text-2xl
                      mt-2
                      font-semibold
                      mb-6
                      transition-all
                      duration-1700
                      ${isVisible("gift-title") ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                    `}
                    style={{
                      fontFamily: "'Great Vibes', cursive",
                      color: "#111111",
                      letterSpacing: "2px",
                      fontSize: "30px",
                      whiteSpace: "nowrap",
                      fontWeight: "300",
                    }}
                  >
                    Gửi Quà Mừng Cưới
                  </p>
                </div>
              </section>
      
              <section
                id="donate-card"
                data-animate
                className={`
                  w-full
                  flex
                  justify-center
                  py-2
                  -mt-6
                  transition-all
                  duration-1700
                  ${isVisible("donate-card") ? "scale-100 opacity-100" : "scale-75 opacity-0"}
                `}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <div className="w-[320px] h-[160px] border border-black/40 rounded-lg px-2 py-4 bg-transparent transform transition-all duration-1700 ease-out">
                  <div className="flex items-center h-full">
                    <div className="w-1/2 flex justify-center items-center">
                      <img src="/donate.png" alt="QR Code" className="w-[140px] h-[140px] object-contain" />
                    </div>
      
                    <div className="w-1/2 flex flex-col justify-center px-2 text-[#111111]">
                      <div className="border-b border-black pb-[2px] mb-[4px] font-semibold text-[13px] tracking-wide leading-relaxed">
                        LE KHANH NAM
                      </div>
      
                      <div className="text-[13px] mb-[4px] leading-relaxed">MB BANK</div>
                      <div className="text-[13px] mb-[6px] tracking-wide leading-relaxed">88888888888</div>
                      <div className="text-[12px] leading-relaxed opacity-90">
                        CẢM ƠN QUÝ KHÁCH ĐÃ GIÀNH TÌNH CẢM VÀ LỜI CHÚC PHÚC!
                      </div>
                    </div>
                  </div>
                </div>
              </section>
      
              {/* Last full-screen photo */}
              <section
                id="main-photo-end"
                data-animate
                className={`
                  relative
                  left-1/2
                  -translate-x-1/2
                  w-screen
                  h-screen
                  p-0
                  m-0
                  overflow-hidden
                  transition-all
                  duration-1700
                  ease-out
                  ${isVisible("main-photo-end") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
              >
                <div className="absolute inset-0">
                  <img
                    src={'anh6.jpg'}
                    alt="Wedding couple"
                    className="w-full h-full min-w-full min-h-full object-cover block"
                    loading="eager"
                  />
      
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                    <p
                      className={`
                        text-3xl
                        sm:text-5xl
                        transition-all
                        duration-1700
                        ${isVisible("main-photo-end") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                      `}
                      style={{
                        fontFamily: "'Great Vibes', cursive",
                        color: "#ffffff",
                        letterSpacing: "2px",
                        marginBottom: "16px",
                      }}
                    >
                      Lời Cảm Ơn!
                    </p>
      
                    <p
                      className={`
                        text-sm
                        sm:text-base
                        transition-all
                        duration-1700
                        ${isVisible("main-photo-end") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                      `}
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "#ffffff",
                        maxWidth: "420px",
                        lineHeight: "1.7",
                      }}
                    >
                      Trân trọng cảm ơn quý khách đã dành thời gian đến chung vui cùng gia đình chúng tôi.
                    </p>
                  </div>
                </div>
              </section>

      {/* Footer */}
      <footer className="py-4 sm:py-6 text-center text-xs sm:text-sm text-gray-400">
        <p>Made with love</p>
      </footer>
    </div>
  )
}