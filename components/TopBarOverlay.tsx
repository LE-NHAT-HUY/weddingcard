// app/components/TopBarOverlay.tsx
import React from "react";

type Props = { text?: string; height?: number };

export default function TopBarOverlay({ text = "Thiệp Cưới Khánh Nam và Lan Nhi", height = 56 }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        top: "env(safe-area-inset-top, 0)",
        left: 0,
        right: 0,
        height: `${height}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(6px)",
        zIndex: 9999,
        pointerEvents: "none", // KHÔNG chặn tương tác phía dưới
      }}
    >
      <div style={{ fontWeight: 600, color: "#222" }}>{text}</div>
    </div>
  );
}