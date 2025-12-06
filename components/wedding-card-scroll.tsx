"use client"

import type { WeddingData } from "@/lib/types"
import { useEffect, useRef, useState } from "react"
import { Heart, MapPin, Calendar } from "lucide-react"

interface WeddingCardScrollProps {
  data: WeddingData
}

export default function WeddingCardScroll({ data }: WeddingCardScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

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
        id="header"
        data-animate
        className={`px-4 sm:px-6 pt-6 sm:pt-8 pb-4 transition-all duration-1000 ${isVisible("header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div className="text-left">
          <h1 className="text-base sm:text-xl font-bold mb-1" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Save The Date | Chúng mình kết hôn rồi !!!
          </h1>
          <p className="text-sm sm:text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
            {formatWeddingDate()} {data.weddingTime}
          </p>
        </div>

        <div className="text-right mt-4">
          <p className="text-sm sm:text-base leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
            /<br />
            Hi mọi ngườiii
            <br />
            Khi bạn nhận được tấm thiệp này,
            <br />
            là lúc ngày cưới của chúng mình đã gần kề rồi đó
          </p>
        </div>
      </section>

      {/* Section 2: Welcome */}
      <section
        id="welcome"
        data-animate
        className={`text-center py-4 px-4 transition-all duration-1000 delay-200 ${isVisible("welcome") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <h2
          className="text-2xl sm:text-4xl tracking-wide"
          style={{ fontFamily: "'Great Vibes', cursive", color: "#545454" }}
        >
          welcome to our wedding
        </h2>
      </section>

      {/* Section 3: Main Photo */}
      <section
        id="main-photo"
        data-animate
        className={`px-4 sm:px-8 py-4 transition-all duration-1000 delay-300 ${isVisible("main-photo") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div className="relative">
          <img
            src={data.coverPhoto || "/placeholder.svg"}
            alt="Wedding couple"
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>
      </section>

      {/* Section 4: Quote 1 */}
      <section
        id="quote1"
        data-animate
        className={`px-4 sm:px-8 py-6 transition-all duration-1000 ${isVisible("quote1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <p
          className="text-2xl sm:text-4xl leading-tight"
          style={{ fontFamily: "'Great Vibes', cursive", color: data.primaryColor, letterSpacing: "2px" }}
        >
          You make me
          <br />
          want to
          <br />
          be a better man
        </p>
      </section>

      {/* Section 5: Intro Text */}
      <section
        id="intro"
        data-animate
        className={`px-4 sm:px-8 py-4 text-center transition-all duration-1000 ${isVisible("intro") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <p
          className="text-sm sm:text-base leading-relaxed"
          style={{ fontFamily: "'Playfair Display', serif", color: "#443b37", lineHeight: 1.6 }}
        >
          {data.introText}
          <br />
          <br />
          Chúng mình trân trọng mời bạn và người thương đến chung vui trong ngày đặc biệt này!
        </p>
      </section>

      {/* Section 6: Music Player */}
      <section
        id="music"
        data-animate
        className={`px-4 sm:px-8 py-6 transition-all duration-1000 ${isVisible("music") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-lg sm:text-2xl mb-1 truncate" style={{ fontFamily: "'Playfair Display', serif" }}>
              {data.songTitle} - {data.songArtist}
            </p>
            <p className="text-sm sm:text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
              Now playing a song for you ...
            </p>
          </div>
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-md overflow-hidden flex-shrink-0">
            <img src="/music-album-cover-romantic.jpg" alt="Album" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Section 7: Love Story Intro */}
      <section
        id="story-intro"
        data-animate
        className={`py-6 px-4 text-center transition-all duration-1000 ${isVisible("story-intro") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <p className="text-sm sm:text-lg" style={{ fontFamily: "'Playfair Display', serif", color: "#443b37" }}>
          Tiếp theo,
          <br />
          là câu chuyện tình yêu của chúng mình
          <br />
          ...
        </p>
      </section>

      {/* Section 8: Photo Gallery 1 */}
      <section
        id="gallery1"
        data-animate
        className={`py-4 px-4 transition-all duration-1000 ${isVisible("gallery1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <img
          src={data.gallery[0] || "/placeholder.svg?height=500&width=400&query=wedding couple photo"}
          alt="Gallery"
          className="w-[85%] h-auto max-h-[70vh] object-contain"
        />
      </section>

      {/* Section 9: Quote 2 */}
      <section
        id="quote2"
        data-animate
        className={`px-4 sm:px-8 py-6 text-right transition-all duration-1000 ${isVisible("quote2") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <p
          className="text-2xl sm:text-4xl leading-tight"
          style={{ fontFamily: "'Great Vibes', cursive", color: data.primaryColor, letterSpacing: "2px" }}
        >
          You are the one
          <br />I have
          <br />
          been looking for
        </p>
      </section>

      {/* Section 10: Main Quote */}
      <section
        id="main-quote"
        data-animate
        className={`px-4 sm:px-8 py-6 text-center transition-all duration-1000 ${isVisible("main-quote") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <p
          className="text-base sm:text-xl leading-relaxed"
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.5 }}
        >
          {data.quoteText}
        </p>
      </section>

      {/* Section 11: Gallery Photo 2 */}
      <section
        id="gallery2"
        data-animate
        className={`px-4 py-4 transition-all duration-1000 ${isVisible("gallery2") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <img
          src={data.gallery[1] || "/placeholder.svg?height=450&width=350&query=couple portrait elegant"}
          alt="Gallery"
          className="w-[75%] h-auto max-h-[60vh] object-contain"
        />
      </section>

      {/* Section 12: Polaroid Photo */}
      <section
        id="polaroid"
        data-animate
        className={`px-4 py-4 flex justify-end transition-all duration-1000 ${isVisible("polaroid") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
      >
        <div className="bg-white p-2 sm:p-3 shadow-lg" style={{ transform: "rotate(2deg)" }}>
          <img
            src={data.gallery[2] || "/placeholder.svg?height=250&width=250&query=couple polaroid romantic"}
            alt="Polaroid"
            className="w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] object-cover"
          />
        </div>
      </section>

      {/* Section 13: Love Story Timeline */}
      <section
        id="about"
        data-animate
        className={`px-4 sm:px-8 py-8 transition-all duration-1000 ${isVisible("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <h3
          className="text-3xl sm:text-4xl text-center mb-6 sm:mb-8"
          style={{ fontFamily: "'Sacramento', cursive", color: data.accentColor }}
        >
          About Us
        </h3>

        {data.loveStory.map((story, index) => (
          <div key={story.id} className={`mb-8 sm:mb-12 ${index % 2 === 0 ? "" : "text-right"}`}>
            <div
              className="flex items-center gap-2 mb-2"
              style={{ justifyContent: index % 2 === 0 ? "flex-start" : "flex-end" }}
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: data.accentColor }} />
              <span
                className="text-base sm:text-xl"
                style={{ fontFamily: "'Playfair Display', serif", color: data.accentColor }}
              >
                {story.title} | {story.date}
              </span>
            </div>
            <p
              className="text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              {story.description}
            </p>
            <img
              src={story.image || "/placeholder.svg"}
              alt={story.title}
              className={`w-[85%] h-auto max-h-[50vh] object-contain ${index % 2 === 0 ? "" : "ml-auto"}`}
            />
          </div>
        ))}
      </section>

      {/* Section 14: Gallery Grid */}
      <section
        id="gallery-grid"
        data-animate
        className={`px-4 py-6 sm:py-8 transition-all duration-1000 ${isVisible("gallery-grid") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
          {data.gallery.slice(0, 4).map((photo, index) => (
            <img
              key={index}
              src={photo || "/placeholder.svg"}
              alt={`Gallery ${index + 1}`}
              className="w-full h-[150px] sm:h-[200px] md:h-[280px] object-cover"
            />
          ))}
        </div>
      </section>

      {/* Section 15: Quote 3 */}
      <section
        id="quote3"
        data-animate
        className={`px-4 sm:px-8 py-6 transition-all duration-1000 ${isVisible("quote3") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <p
          className="text-2xl sm:text-4xl leading-tight"
          style={{ fontFamily: "'Great Vibes', cursive", color: data.primaryColor, letterSpacing: "2px" }}
        >
          I love you with
          <br />
          all my heart
        </p>
      </section>

      {/* Section 16: Countdown */}
      <section
        id="countdown"
        data-animate
        className={`px-4 sm:px-8 py-8 sm:py-10 text-center transition-all duration-1000 ${isVisible("countdown") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        style={{ backgroundColor: data.accentColor + "20" }}
      >
        <h3
          className="text-2xl sm:text-3xl mb-4 sm:mb-6"
          style={{ fontFamily: "'Great Vibes', cursive", color: data.primaryColor }}
        >
          Đếm ngược đến ngày cưới
        </h3>

        <div className="flex justify-center gap-2 sm:gap-4">
          {[
            { value: countdown.days, label: "Ngày" },
            { value: countdown.hours, label: "Giờ" },
            { value: countdown.minutes, label: "Phút" },
            { value: countdown.seconds, label: "Giây" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-lg sm:text-2xl font-bold text-white mb-1"
                style={{ backgroundColor: data.primaryColor }}
              >
                {item.value.toString().padStart(2, "0")}
              </div>
              <span className="text-xs sm:text-sm" style={{ color: data.primaryColor }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 17: Couple Names */}
      <section
        id="couple-names"
        data-animate
        className={`px-4 sm:px-8 py-8 sm:py-10 text-center transition-all duration-1000 ${isVisible("couple-names") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div className="mb-6">
          <Heart
            className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4"
            style={{ color: data.primaryColor }}
            fill={data.primaryColor}
          />
          <h2
            className="text-4xl sm:text-5xl mb-2"
            style={{ fontFamily: "'Great Vibes', cursive", color: data.primaryColor }}
          >
            {data.groomName}
          </h2>
          <p className="text-base sm:text-lg" style={{ color: data.accentColor }}>
            &
          </p>
          <h2
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: "'Great Vibes', cursive", color: data.primaryColor }}
          >
            {data.brideName}
          </h2>
        </div>
      </section>

      {/* Section 18: Parents Info */}
      <section
        id="parents"
        data-animate
        className={`px-4 sm:px-8 py-6 sm:py-8 transition-all duration-1000 ${isVisible("parents") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-8 text-center">
          <div>
            <h4 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3" style={{ color: data.primaryColor }}>
              Nhà Trai
            </h4>
            <p className="text-xs sm:text-sm mb-1">Ông: {data.groomFatherName}</p>
            <p className="text-xs sm:text-sm">Bà: {data.groomMotherName}</p>
            <p className="text-sm sm:text-base font-medium mt-2">{data.groomFullName}</p>
          </div>
          <div>
            <h4 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3" style={{ color: data.primaryColor }}>
              Nhà Gái
            </h4>
            <p className="text-xs sm:text-sm mb-1">Ông: {data.brideFatherName}</p>
            <p className="text-xs sm:text-sm">Bà: {data.brideMotherName}</p>
            <p className="text-sm sm:text-base font-medium mt-2">{data.brideFullName}</p>
          </div>
        </div>
      </section>

      {/* Section 19: Wedding Info */}
      <section
        id="wedding-info"
        data-animate
        className={`px-4 sm:px-8 py-8 sm:py-10 text-center transition-all duration-1000 ${isVisible("wedding-info") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        style={{ backgroundColor: data.primaryColor + "10" }}
      >
        <Calendar className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4" style={{ color: data.primaryColor }} />
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4" style={{ color: data.primaryColor }}>
          Thông Tin Tiệc Cưới
        </h3>

        <div className="mb-3 sm:mb-4">
          <p className="text-xl sm:text-3xl font-light" style={{ color: data.primaryColor }}>
            {new Date(data.weddingDate).toLocaleDateString("vi-VN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          {data.lunarDate && (
            <p className="text-xs sm:text-sm text-gray-600 mt-1">(Tức ngày {data.lunarDate} Âm lịch)</p>
          )}
        </div>

        <p className="text-base sm:text-lg mb-4 sm:mb-6" style={{ color: data.primaryColor }}>
          Vào lúc: {data.weddingTime}
        </p>

        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2" style={{ color: data.accentColor }} />
        <p className="text-base sm:text-xl font-semibold mb-1" style={{ color: data.primaryColor }}>
          {data.venueName}
        </p>
        <p className="text-xs sm:text-sm text-gray-600 px-2">{data.venueAddress}</p>
      </section>

      {/* Section 20: Final Message */}
      <section
        id="final"
        data-animate
        className={`px-4 sm:px-8 py-8 sm:py-10 text-center transition-all duration-1000 ${isVisible("final") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        <p
          className="text-sm sm:text-lg italic leading-relaxed mb-6 sm:mb-8"
          style={{ fontFamily: "'Playfair Display', serif", color: "#443b37" }}
        >
          "{data.message}"
        </p>

        <div className="border-t pt-4 sm:pt-6" style={{ borderColor: data.accentColor }}>
          <p
            className="text-3xl sm:text-4xl"
            style={{ fontFamily: "'Great Vibes', cursive", color: data.primaryColor }}
          >
            {data.groomName} & {data.brideName}
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">We're getting married!</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 sm:py-6 text-center text-xs sm:text-sm text-gray-400">
        <p>Made with love</p>
      </footer>
    </div>
  )
}
