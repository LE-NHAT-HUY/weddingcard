"use client";

import React, { useState } from "react";
import "./gift-envelope.css";

type Props = {
  titleVisible?: boolean;
  cardVisible?: boolean;
  letterImg?: string; // Hình ảnh thay cho thư
  flapImg?: string; // Nếu muốn thay flap bằng ảnh
};

export default function GiftEnvelope({
  titleVisible = true,
  cardVisible = true,
  letterImg = "/qrcode.JPG", // mặc định là hình thư
  flapImg,
}: Props) {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleOpen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setOpen((v) => !v);
    window.setTimeout(() => setIsAnimating(false), 850);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleOpen();
    }
  };

  return (
    <div className="envelope-root">
      {/* Title */}
      <section
        id="gift-title"
        data-animate
        className={`w-full flex justify-center transition-all duration-1500 ${
          titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="envelope-title-container">
          <p className="envelope-title" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Gửi Quà Mừng Cưới
          </p>
        </div>
      </section>

      {/* Envelope area */}
      <section
        id="donate-card"
        data-animate
        className={`w-full flex justify-center mt-6 transition-all duration-1500 ${
          cardVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="envelope-wrap">
          <div
            role="button"
            tabIndex={0}
            aria-pressed={open}
            aria-label={open ? "Đóng phong thư" : "Mở phong thư"}
            onClick={toggleOpen}
            onKeyDown={onKey}
            className={`envelope-container ${open ? "is-open" : "is-closed"} ${
              isAnimating ? "is-animating" : ""
            }`}
            style={{ pointerEvents: isAnimating ? "none" : "auto" }}
          >
            {/* Base */}
            <div className="envelope-base" aria-hidden="true" />

            {/* Letter as image */}
            <div className={`letter ${open ? "letter-open" : "letter-closed"}`} aria-hidden={!open}>
              <img
                src={letterImg}
                alt="Letter"
                className="letter-img"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Flap */}
            <div
              className="envelope-flap"
              aria-hidden="true"
              style={
                flapImg
                  ? {
                      backgroundImage: `url(${flapImg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }
                  : {}
              }
            />

            {/* Wax-seal as image */}
            <div
              className="wax-seal"
              aria-hidden="true"
              style={{
                backgroundImage: 'url("https://assets.cinelove.me/assets/plugins/wax-seal.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
