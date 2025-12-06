module.exports = [
"[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeddingCardScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
"use client";
;
;
;
function WeddingCardScroll({ data }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visibleSections, setVisibleSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    setVisibleSections((prev)=>new Set([
                            ...prev,
                            entry.target.id
                        ]));
                }
            });
        }, {
            threshold: 0.2
        });
        const sections = containerRef.current?.querySelectorAll("[data-animate]");
        sections?.forEach((section)=>observer.observe(section));
        return ()=>observer.disconnect();
    }, []);
    const isVisible = (id)=>visibleSections.has(id);
    const formatCountdown = ()=>{
        if (!data.weddingDate) return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        const wedding = new Date(`${data.weddingDate}T${data.weddingTime || "12:00"}`);
        const now = new Date();
        const diff = wedding.getTime() - now.getTime();
        if (diff <= 0) return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutes: Math.floor(diff % (1000 * 60 * 60) / (1000 * 60)),
            seconds: Math.floor(diff % (1000 * 60) / 1000)
        };
    };
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(formatCountdown());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>setCountdown(formatCountdown()), 1000);
        return ()=>clearInterval(timer);
    }, [
        data.weddingDate,
        data.weddingTime
    ]);
    const formatWeddingDate = ()=>{
        if (!data.weddingDate) return "";
        const date = new Date(data.weddingDate);
        return date.toLocaleDateString("vi-VN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }).replace(/\//g, "-");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "w-full max-w-full overflow-x-hidden bg-[#faf8f5] min-h-screen",
        style: {
            fontFamily: "'Quicksand', 'Playfair Display', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "header",
                "data-animate": true,
                className: `px-4 sm:px-6 pt-6 sm:pt-8 pb-4 transition-all duration-1000 ${isVisible("header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-base sm:text-xl font-bold mb-1",
                                style: {
                                    fontFamily: "'Quicksand', sans-serif"
                                },
                                children: "Save The Date | Chúng mình kết hôn rồi !!!"
                            }, void 0, false, {
                                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-lg",
                                style: {
                                    fontFamily: "'Playfair Display', serif"
                                },
                                children: [
                                    formatWeddingDate(),
                                    " ",
                                    data.weddingTime
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm sm:text-base leading-relaxed",
                            style: {
                                fontFamily: "'Playfair Display', serif"
                            },
                            children: [
                                "/",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 85,
                                    columnNumber: 14
                                }, this),
                                "Hi mọi ngườiii",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                "Khi bạn nhận được tấm thiệp này,",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                "là lúc ngày cưới của chúng mình đã gần kề rồi đó"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "welcome",
                "data-animate": true,
                className: `text-center py-4 px-4 transition-all duration-1000 delay-200 ${isVisible("welcome") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl sm:text-4xl tracking-wide",
                    style: {
                        fontFamily: "'Great Vibes', cursive",
                        color: "#545454"
                    },
                    children: "welcome to our wedding"
                }, void 0, false, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "main-photo",
                "data-animate": true,
                className: `px-4 sm:px-8 py-4 transition-all duration-1000 delay-300 ${isVisible("main-photo") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: data.coverPhoto || "/placeholder.svg",
                        alt: "Wedding couple",
                        className: "w-full h-auto max-h-[70vh] object-contain"
                    }, void 0, false, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "quote1",
                "data-animate": true,
                className: `px-4 sm:px-8 py-6 transition-all duration-1000 ${isVisible("quote1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl sm:text-4xl leading-tight",
                    style: {
                        fontFamily: "'Great Vibes', cursive",
                        color: data.primaryColor,
                        letterSpacing: "2px"
                    },
                    children: [
                        "You make me",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        "want to",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        "be a better man"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "intro",
                "data-animate": true,
                className: `px-4 sm:px-8 py-4 text-center transition-all duration-1000 ${isVisible("intro") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm sm:text-base leading-relaxed",
                    style: {
                        fontFamily: "'Playfair Display', serif",
                        color: "#443b37",
                        lineHeight: 1.6
                    },
                    children: [
                        data.introText,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        "Chúng mình trân trọng mời bạn và người thương đến chung vui trong ngày đặc biệt này!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "music",
                "data-animate": true,
                className: `px-4 sm:px-8 py-6 transition-all duration-1000 ${isVisible("music") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-3 sm:gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg sm:text-2xl mb-1 truncate",
                                    style: {
                                        fontFamily: "'Playfair Display', serif"
                                    },
                                    children: [
                                        data.songTitle,
                                        " - ",
                                        data.songArtist
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-lg",
                                    style: {
                                        fontFamily: "'Playfair Display', serif"
                                    },
                                    children: "Now playing a song for you ..."
                                }, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 170,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 sm:w-20 sm:h-20 rounded-md overflow-hidden flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/music-album-cover-romantic.jpg",
                                alt: "Album",
                                className: "w-full h-full object-cover"
                            }, void 0, false, {
                                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "story-intro",
                "data-animate": true,
                className: `py-6 px-4 text-center transition-all duration-1000 ${isVisible("story-intro") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm sm:text-lg",
                    style: {
                        fontFamily: "'Playfair Display', serif",
                        color: "#443b37"
                    },
                    children: [
                        "Tiếp theo,",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        "là câu chuyện tình yêu của chúng mình",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        "..."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "gallery1",
                "data-animate": true,
                className: `py-4 px-4 transition-all duration-1000 ${isVisible("gallery1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: data.gallery[0] || "/placeholder.svg?height=500&width=400&query=wedding couple photo",
                    alt: "Gallery",
                    className: "w-[85%] h-auto max-h-[70vh] object-contain"
                }, void 0, false, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "quote2",
                "data-animate": true,
                className: `px-4 sm:px-8 py-6 text-right transition-all duration-1000 ${isVisible("quote2") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl sm:text-4xl leading-tight",
                    style: {
                        fontFamily: "'Great Vibes', cursive",
                        color: data.primaryColor,
                        letterSpacing: "2px"
                    },
                    children: [
                        "You are the one",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this),
                        "I have",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this),
                        "been looking for"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "main-quote",
                "data-animate": true,
                className: `px-4 sm:px-8 py-6 text-center transition-all duration-1000 ${isVisible("main-quote") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base sm:text-xl leading-relaxed",
                    style: {
                        fontFamily: "'Playfair Display', serif",
                        lineHeight: 1.5
                    },
                    children: data.quoteText
                }, void 0, false, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 231,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "gallery2",
                "data-animate": true,
                className: `px-4 py-4 transition-all duration-1000 ${isVisible("gallery2") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: data.gallery[1] || "/placeholder.svg?height=450&width=350&query=couple portrait elegant",
                    alt: "Gallery",
                    className: "w-[75%] h-auto max-h-[60vh] object-contain"
                }, void 0, false, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "polaroid",
                "data-animate": true,
                className: `px-4 py-4 flex justify-end transition-all duration-1000 ${isVisible("polaroid") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-2 sm:p-3 shadow-lg",
                    style: {
                        transform: "rotate(2deg)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: data.gallery[2] || "/placeholder.svg?height=250&width=250&query=couple polaroid romantic",
                        alt: "Polaroid",
                        className: "w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] object-cover"
                    }, void 0, false, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about",
                "data-animate": true,
                className: `px-4 sm:px-8 py-8 transition-all duration-1000 ${isVisible("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-3xl sm:text-4xl text-center mb-6 sm:mb-8",
                        style: {
                            fontFamily: "'Sacramento', cursive",
                            color: data.accentColor
                        },
                        children: "About Us"
                    }, void 0, false, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    data.loveStory.map((story, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mb-8 sm:mb-12 ${index % 2 === 0 ? "" : "text-right"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-2",
                                    style: {
                                        justifyContent: index % 2 === 0 ? "flex-start" : "flex-end"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-4 h-4 sm:w-5 sm:h-5",
                                            style: {
                                                color: data.accentColor
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                            lineNumber: 286,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base sm:text-xl",
                                            style: {
                                                fontFamily: "'Playfair Display', serif",
                                                color: data.accentColor
                                            },
                                            children: [
                                                story.title,
                                                " | ",
                                                story.date
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed",
                                    style: {
                                        fontFamily: "'Quicksand', sans-serif"
                                    },
                                    children: story.description
                                }, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: story.image || "/placeholder.svg",
                                    alt: story.title,
                                    className: `w-[85%] h-auto max-h-[50vh] object-contain ${index % 2 === 0 ? "" : "ml-auto"}`
                                }, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, story.id, true, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "gallery-grid",
                "data-animate": true,
                className: `px-4 py-6 sm:py-8 transition-all duration-1000 ${isVisible("gallery-grid") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-1.5 sm:gap-2",
                    children: data.gallery.slice(0, 4).map((photo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: photo || "/placeholder.svg",
                            alt: `Gallery ${index + 1}`,
                            className: "w-full h-[150px] sm:h-[200px] md:h-[280px] object-cover"
                        }, index, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 317,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "quote3",
                "data-animate": true,
                className: `px-4 sm:px-8 py-6 transition-all duration-1000 ${isVisible("quote3") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl sm:text-4xl leading-tight",
                    style: {
                        fontFamily: "'Great Vibes', cursive",
                        color: data.primaryColor,
                        letterSpacing: "2px"
                    },
                    children: [
                        "I love you with",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this),
                        "all my heart"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 333,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "countdown",
                "data-animate": true,
                className: `px-4 sm:px-8 py-8 sm:py-10 text-center transition-all duration-1000 ${isVisible("countdown") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                style: {
                    backgroundColor: data.accentColor + "20"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl sm:text-3xl mb-4 sm:mb-6",
                        style: {
                            fontFamily: "'Great Vibes', cursive",
                            color: data.primaryColor
                        },
                        children: "Đếm ngược đến ngày cưới"
                    }, void 0, false, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-2 sm:gap-4",
                        children: [
                            {
                                value: countdown.days,
                                label: "Ngày"
                            },
                            {
                                value: countdown.hours,
                                label: "Giờ"
                            },
                            {
                                value: countdown.minutes,
                                label: "Phút"
                            },
                            {
                                value: countdown.seconds,
                                label: "Giây"
                            }
                        ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-lg sm:text-2xl font-bold text-white mb-1",
                                        style: {
                                            backgroundColor: data.primaryColor
                                        },
                                        children: item.value.toString().padStart(2, "0")
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs sm:text-sm",
                                        style: {
                                            color: data.primaryColor
                                        },
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "couple-names",
                "data-animate": true,
                className: `px-4 sm:px-8 py-8 sm:py-10 text-center transition-all duration-1000 ${isVisible("couple-names") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: "w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4",
                            style: {
                                color: data.primaryColor
                            },
                            fill: data.primaryColor
                        }, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 386,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl sm:text-5xl mb-2",
                            style: {
                                fontFamily: "'Great Vibes', cursive",
                                color: data.primaryColor
                            },
                            children: data.groomName
                        }, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 391,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base sm:text-lg",
                            style: {
                                color: data.accentColor
                            },
                            children: "&"
                        }, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 397,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl sm:text-5xl",
                            style: {
                                fontFamily: "'Great Vibes', cursive",
                                color: data.primaryColor
                            },
                            children: data.brideName
                        }, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 400,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 385,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "parents",
                "data-animate": true,
                className: `px-4 sm:px-8 py-6 sm:py-8 transition-all duration-1000 ${isVisible("parents") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4 sm:gap-8 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm sm:text-lg font-semibold mb-2 sm:mb-3",
                                    style: {
                                        color: data.primaryColor
                                    },
                                    children: "Nhà Trai"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 417,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs sm:text-sm mb-1",
                                    children: [
                                        "Ông: ",
                                        data.groomFatherName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 420,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs sm:text-sm",
                                    children: [
                                        "Bà: ",
                                        data.groomMotherName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 421,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-base font-medium mt-2",
                                    children: data.groomFullName
                                }, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 422,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 416,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm sm:text-lg font-semibold mb-2 sm:mb-3",
                                    style: {
                                        color: data.primaryColor
                                    },
                                    children: "Nhà Gái"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs sm:text-sm mb-1",
                                    children: [
                                        "Ông: ",
                                        data.brideFatherName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs sm:text-sm",
                                    children: [
                                        "Bà: ",
                                        data.brideMotherName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-base font-medium mt-2",
                                    children: data.brideFullName
                                }, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                    lineNumber: 430,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                            lineNumber: 424,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 415,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 410,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "wedding-info",
                "data-animate": true,
                className: `px-4 sm:px-8 py-8 sm:py-10 text-center transition-all duration-1000 ${isVisible("wedding-info") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                style: {
                    backgroundColor: data.primaryColor + "10"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                        className: "w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4",
                        style: {
                            color: data.primaryColor
                        }
                    }, void 0, false, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl sm:text-2xl font-semibold mb-3 sm:mb-4",
                        style: {
                            color: data.primaryColor
                        },
                        children: "Thông Tin Tiệc Cưới"
                    }, void 0, false, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 443,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 sm:mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl sm:text-3xl font-light",
                                style: {
                                    color: data.primaryColor
                                },
                                children: new Date(data.weddingDate).toLocaleDateString("vi-VN", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })
                            }, void 0, false, {
                                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this),
                            data.lunarDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-gray-600 mt-1",
                                children: [
                                    "(Tức ngày ",
                                    data.lunarDate,
                                    " Âm lịch)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                lineNumber: 457,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base sm:text-lg mb-4 sm:mb-6",
                        style: {
                            color: data.primaryColor
                        },
                        children: [
                            "Vào lúc: ",
                            data.weddingTime
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                        className: "w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2",
                        style: {
                            color: data.accentColor
                        }
                    }, void 0, false, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 465,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base sm:text-xl font-semibold mb-1",
                        style: {
                            color: data.primaryColor
                        },
                        children: data.venueName
                    }, void 0, false, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 466,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm text-gray-600 px-2",
                        children: data.venueAddress
                    }, void 0, false, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 469,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "final",
                "data-animate": true,
                className: `px-4 sm:px-8 py-8 sm:py-10 text-center transition-all duration-1000 ${isVisible("final") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-lg italic leading-relaxed mb-6 sm:mb-8",
                        style: {
                            fontFamily: "'Playfair Display', serif",
                            color: "#443b37"
                        },
                        children: [
                            '"',
                            data.message,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 478,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t pt-4 sm:pt-6",
                        style: {
                            borderColor: data.accentColor
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-3xl sm:text-4xl",
                                style: {
                                    fontFamily: "'Great Vibes', cursive",
                                    color: data.primaryColor
                                },
                                children: [
                                    data.groomName,
                                    " & ",
                                    data.brideName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                lineNumber: 486,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs sm:text-sm text-gray-500 mt-2",
                                children: "We're getting married!"
                            }, void 0, false, {
                                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                                lineNumber: 492,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                        lineNumber: 485,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 473,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "py-4 sm:py-6 text-center text-xs sm:text-sm text-gray-400",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Made with love"
                }, void 0, false, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                    lineNumber: 498,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
                lineNumber: 497,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/Projects/wedding-card-editor (6)/lib/supabase/client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/@supabase/ssr/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-ssr] (ecmascript)");
;
let supabaseClient = null;
function createClient() {
    if (supabaseClient) {
        return supabaseClient;
    }
    supabaseClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://zlvucekkmibqewfcodre.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdnVjZWtrbWlicWV3ZmNvZHJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5OTI0NTAsImV4cCI6MjA4MDU2ODQ1MH0.GV3NTN5I9yhkif7RnOvlC5BSk3CNKqfZJ7kq0-Zvl2M"));
    return supabaseClient;
}
}),
"[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeddingCardView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$components$2f$wedding$2d$card$2d$scroll$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/components/wedding-card-scroll.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/lucide-react/dist/esm/icons/volume-2.js [app-ssr] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/lucide-react/dist/esm/icons/volume-x.js [app-ssr] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2d$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircleHeart$3e$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/lucide-react/dist/esm/icons/message-circle-heart.js [app-ssr] (ecmascript) <export default as MessageCircleHeart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/wedding-card-editor (6)/lib/supabase/client.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
// Dữ liệu mặc định của thiệp cưới
const defaultData = {
    groomName: "Khánh Nam",
    brideName: "Lan Nhi",
    groomFullName: "Lê Khánh Nam",
    brideFullName: "Nguyễn Thị Lan Nhi",
    groomFatherName: "Lê Văn Tiến",
    groomMotherName: "Trương Thị Cúc",
    brideFatherName: "Tên cha",
    brideMotherName: "Tên Mẹ",
    weddingDate: "2025-05-20",
    weddingTime: "12:00",
    lunarDate: "23/04/2025",
    venueName: "Trung Tâm Tiệc Cưới",
    venueAddress: "Thôn Phú Lộc 2, Phú Trạch, Quảng Trị",
    message: "Trân trọng kính mời quý khách đến dự bữa tiệc chung vui cùng gia đình chúng tôi",
    template: "",
    primaryColor: "#9e0a0a",
    accentColor: "#db9999",
    coverPhoto: "/romantic-couple-wedding-photo-portrait.jpg",
    introText: "Trước đây, chúng mình từng nghĩ rằng, đám cưới chỉ là một thông báo chính thức. Giờ mới hiểu, đó là một dịp hiếm hoi để tụ họp, là sự vượt ngàn dặm để đến bên nhau, là sự ủng hộ vô điều kiện đầy trân quý.",
    quoteText: "Tình yêu đích thực không phải là khoảng cách, mà là một lựa chọn. Chúng mình chọn nắm lấy nhau, trân trọng nhau, và cùng nhau gìn giữ. Từ hôm nay, mãi mãi một lòng.",
    songTitle: "I Love You",
    songArtist: "Céline Dion",
    loveStory: [
        {
            id: "1",
            date: "05.10.2018",
            title: "Lần đầu gặp gỡ",
            description: "Giữa dòng người tấp nập, chúng mình gặp nhau vào mùa hè, hẹn ước vào mùa xuân, và hôm nay, trong khoảnh khắc đẹp nhất, chúng mình quyết định nắm tay nhau trọn đời.",
            image: "/couple-first-meeting-cafe-romantic.jpg"
        },
        {
            id: "2",
            date: "20.05.2019",
            title: "Chúng mình bên nhau",
            description: "Chuyến đi đầu tiên không có đích đến, vậy mà ta lại tìm thấy tình yêu. Em chụp phong cảnh, khen trời thu đẹp, anh chụp em, nói muốn lưu giữ điều tuyệt vời.",
            image: "/couple-travel-trip-together-happy.jpg"
        },
        {
            id: "3",
            date: "20.05.2022",
            title: "Ba năm bên nhau",
            description: "Có người hỏi, bí mật của tình yêu là gì. Nghĩ thật lâu, có lẽ đó là dũng khí. Tình yêu luôn có câu trả lời.",
            image: "/couple-anniversary-celebration-romantic-dinner.jpg"
        }
    ],
    gallery: [
        "/elegant-wedding-portrait.jpg",
        "/couple-holding-hands-romantic.jpg",
        "/bride-and-groom-outdoor-garden.jpg",
        "/couple-laughing-together-happy.jpg",
        "/wedding-couple-sunset-beach.jpg",
        "/couple-formal-wedding-attire.jpg"
    ]
};
function WeddingCardView() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultData);
    const [showMusicPrompt, setShowMusicPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [wishes, setWishes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showWishModal, setShowWishModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showFloatingWishes, setShowFloatingWishes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeWishes, setActiveWishes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wishForm, setWishForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const wishIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedData = localStorage.getItem("weddingData");
        if (savedData) {
            try {
                setData(JSON.parse(savedData));
            } catch (e) {
                console.error("Error loading wedding data:", e);
            }
        }
        const loadWishes = async ()=>{
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
            const { data: wishesData, error } = await supabase.from("wishes").select("*").order("created_at", {
                ascending: false
            });
            if (error) {
                console.error("Error loading wishes:", error);
                return;
            }
            if (wishesData) {
                const formattedWishes = wishesData.map((w)=>({
                        id: w.id,
                        name: w.name,
                        message: w.message,
                        createdAt: w.created_at
                    }));
                setWishes(formattedWishes);
            }
        };
        loadWishes();
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
        const channel = supabase.channel("wishes-changes").on("postgres_changes", {
            event: "INSERT",
            schema: "public",
            table: "wishes"
        }, (payload)=>{
            const newWish = {
                id: payload.new.id,
                name: payload.new.name,
                message: payload.new.message,
                createdAt: payload.new.created_at
            };
            setWishes((prev)=>[
                    newWish,
                    ...prev
                ]);
        }).subscribe();
        return ()=>{
            supabase.removeChannel(channel);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!showFloatingWishes || wishes.length === 0) {
            setActiveWishes([]);
            return;
        }
        const interval = setInterval(()=>{
            const currentWish = wishes[wishIndexRef.current % wishes.length];
            const position = Math.random() * 60 + 10;
            const newActiveWish = {
                ...currentWish,
                uniqueKey: `${Date.now()}-${wishIndexRef.current}`,
                position
            };
            setActiveWishes((prev)=>{
                const updated = [
                    ...prev,
                    newActiveWish
                ];
                if (updated.length > 5) {
                    return updated.slice(-5);
                }
                return updated;
            });
            wishIndexRef.current++;
        }, 2500);
        const cleanupInterval = setInterval(()=>{
            setActiveWishes((prev)=>{
                const now = Date.now();
                return prev.filter((w)=>{
                    const wishTime = Number.parseInt(w.uniqueKey.split("-")[0]);
                    return now - wishTime < 6000;
                });
            });
        }, 1000);
        return ()=>{
            clearInterval(interval);
            clearInterval(cleanupInterval);
        };
    }, [
        showFloatingWishes,
        wishes
    ]);
    const handleStartMusic = ()=>{
        setShowMusicPrompt(false);
        if (audioRef.current) {
            audioRef.current.play().then(()=>setIsPlaying(true)).catch((err)=>console.error("Không thể phát nhạc:", err));
        }
    };
    const toggleMusic = ()=>{
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play().then(()=>setIsPlaying(true)).catch((err)=>console.error("Không thể phát nhạc:", err));
            }
        }
    };
    const toggleFloatingWishes = ()=>{
        setShowFloatingWishes(!showFloatingWishes);
    };
    const handleSubmitWish = async ()=>{
        if (!wishForm.name.trim() || !wishForm.message.trim()) return;
        setIsSubmitting(true);
        try {
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$lib$2f$supabase$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClient"])();
            const { error } = await supabase.from("wishes").insert({
                name: wishForm.name.trim(),
                message: wishForm.message.trim()
            });
            if (error) {
                console.error("Error submitting wish:", error);
                alert("Không thể gửi lời chúc. Vui lòng thử lại!");
                return;
            }
            setWishForm({
                name: "",
                message: ""
            });
            setShowWishModal(false);
            setShowFloatingWishes(true);
        } catch (err) {
            console.error("Error:", err);
            alert("Không thể gửi lời chúc. Vui lòng thử lại!");
        } finally{
            setIsSubmitting(false);
        }
    };
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return date.toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen w-full max-w-full overflow-x-hidden bg-[#f5f0eb]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: audioRef,
                src: "/wedding-background-music.mp3",
                loop: true,
                preload: "auto"
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            showFloatingWishes && activeWishes.length > 0 && !showMusicPrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed left-0 bottom-16 z-40 pointer-events-none w-[180px] sm:w-[240px] md:w-[300px] h-[45vh] overflow-hidden pl-2 sm:pl-4",
                children: activeWishes.map((wish, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "floating-wish absolute left-0 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl backdrop-blur-md shadow-md",
                        style: {
                            bottom: `${index * 8}px`,
                            backgroundColor: `rgba(255, 240, 245, 0.9)`,
                            border: `1px solid ${data.primaryColor}25`,
                            boxShadow: `0 2px 10px ${data.primaryColor}15`,
                            maxWidth: "calc(100% - 8px)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: "w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0 mt-0.5",
                                    style: {
                                        color: data.primaryColor
                                    },
                                    fill: data.primaryColor
                                }, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                    lineNumber: 271,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-[10px] sm:text-xs",
                                            style: {
                                                color: data.primaryColor
                                            },
                                            children: wish.name
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                            lineNumber: 277,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-700 text-[10px] sm:text-xs line-clamp-2",
                                            children: wish.message
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                            lineNumber: 280,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                    lineNumber: 276,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                            lineNumber: 270,
                            columnNumber: 15
                        }, this)
                    }, wish.uniqueKey, false, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                        lineNumber: 259,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                lineNumber: 257,
                columnNumber: 9
            }, this),
            showMusicPrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] bg-black/60 flex items-center justify-center backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl p-5 sm:p-8 max-w-[90vw] sm:max-w-sm w-full text-center shadow-2xl mx-4",
                    style: {
                        animation: "fadeInUp 0.5s ease-out"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-6 rounded-full flex items-center justify-center",
                            style: {
                                backgroundColor: data.primaryColor + "20"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                className: "w-7 h-7 sm:w-10 sm:h-10",
                                style: {
                                    color: data.primaryColor
                                }
                            }, void 0, false, {
                                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                lineNumber: 298,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                            lineNumber: 294,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl sm:text-3xl mb-2 sm:mb-3",
                            style: {
                                fontFamily: "'Great Vibes', cursive",
                                color: data.primaryColor
                            },
                            children: [
                                data.groomName,
                                " & ",
                                data.brideName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                            lineNumber: 300,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-3 sm:mb-6 text-xs sm:text-base",
                            children: "Trân trọng kính mời bạn đến dự lễ cưới của chúng mình"
                        }, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleStartMusic,
                            className: "w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-full text-white font-medium transition-all hover:opacity-90 hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base",
                            style: {
                                backgroundColor: data.primaryColor
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                    className: "w-4 h-4 sm:w-5 sm:h-5"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, this),
                                "Mở thiệp cưới"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                            lineNumber: 309,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowMusicPrompt(false),
                            className: "mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500 hover:text-gray-700",
                            children: "Xem không có nhạc"
                        }, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                            lineNumber: 317,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                    lineNumber: 290,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                lineNumber: 289,
                columnNumber: 9
            }, this),
            !showMusicPrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: toggleMusic,
                className: "fixed bottom-4 left-2 sm:bottom-6 sm:left-6 z-50 bg-white shadow-lg rounded-full p-2.5 sm:p-4 hover:shadow-xl transition-all flex items-center gap-1.5 sm:gap-2",
                style: {
                    color: data.primaryColor
                },
                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                            className: "w-4 h-4 sm:w-5 sm:h-5 animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                            lineNumber: 335,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline text-xs sm:text-sm font-medium",
                            children: "Đang phát"
                        }, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                            lineNumber: 336,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                            className: "w-4 h-4 sm:w-5 sm:h-5"
                        }, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                            lineNumber: 340,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline text-xs sm:text-sm font-medium",
                            children: "Tắt tiếng"
                        }, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                            lineNumber: 341,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                lineNumber: 328,
                columnNumber: 9
            }, this),
            !showMusicPrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-4 right-2 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-1.5 sm:gap-3",
                children: [
                    wishes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white/90 backdrop-blur-sm shadow-md rounded-full px-2 py-0.5 sm:px-3 sm:py-1.5 flex items-center gap-1 text-[10px] sm:text-sm",
                        style: {
                            color: data.primaryColor
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: "w-2.5 h-2.5 sm:w-3.5 sm:h-3.5",
                                fill: data.primaryColor
                            }, void 0, false, {
                                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                lineNumber: 354,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: wishes.length
                            }, void 0, false, {
                                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                lineNumber: 355,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                        lineNumber: 350,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 sm:gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleFloatingWishes,
                                className: `shadow-lg rounded-full px-2.5 py-2 sm:px-4 sm:py-3 hover:shadow-xl transition-all flex items-center gap-1 sm:gap-2 ${showFloatingWishes ? "bg-white" : "bg-gray-100"}`,
                                style: {
                                    color: showFloatingWishes ? data.primaryColor : "#888"
                                },
                                title: showFloatingWishes ? "Tắt hiển thị lời chúc" : "Bật hiển thị lời chúc",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2d$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircleHeart$3e$__["MessageCircleHeart"], {
                                        className: `w-4 h-4 sm:w-5 sm:h-5 ${showFloatingWishes ? "animate-pulse" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-[10px] sm:text-sm hidden xs:inline",
                                        children: "Lời chúc"
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                lineNumber: 360,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowWishModal(true),
                                className: "bg-white shadow-lg rounded-full p-2 sm:p-3 hover:shadow-xl transition-all hover:scale-105",
                                style: {
                                    color: "white",
                                    backgroundColor: data.primaryColor
                                },
                                title: "Gửi lời chúc mới",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "w-3.5 h-3.5 sm:w-4 sm:h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                    lineNumber: 381,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                lineNumber: 372,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                        lineNumber: 359,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                lineNumber: 348,
                columnNumber: 9
            }, this),
            showWishModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] bg-black/60 flex items-end justify-center backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-t-2xl p-4 sm:p-6 w-full sm:max-w-md sm:rounded-2xl sm:mb-0 shadow-2xl relative max-h-[80vh] overflow-y-auto",
                    style: {
                        animation: "fadeInUp 0.3s ease-out"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowWishModal(false),
                            className: "absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                lineNumber: 397,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                            lineNumber: 393,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-4 sm:mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-4 rounded-full flex items-center justify-center",
                                    style: {
                                        backgroundColor: data.primaryColor + "20"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2d$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircleHeart$3e$__["MessageCircleHeart"], {
                                        className: "w-6 h-6 sm:w-8 sm:h-8",
                                        style: {
                                            color: data.primaryColor
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                        lineNumber: 405,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                    lineNumber: 401,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg sm:text-2xl font-semibold",
                                    style: {
                                        color: data.primaryColor
                                    },
                                    children: "Gửi lời chúc"
                                }, void 0, false, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                    lineNumber: 407,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-[10px] sm:text-sm mt-1",
                                    children: [
                                        "Gửi những lời chúc tốt đẹp đến ",
                                        data.groomName,
                                        " & ",
                                        data.brideName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                    lineNumber: 410,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                            lineNumber: 400,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium text-gray-700 mb-1",
                                            children: "Tên của bạn"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                            lineNumber: 417,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: wishForm.name,
                                            onChange: (e)=>setWishForm({
                                                    ...wishForm,
                                                    name: e.target.value
                                                }),
                                            placeholder: "Nhập tên của bạn",
                                            className: "w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent text-sm",
                                            style: {
                                                "--tw-ring-color": data.primaryColor
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                    lineNumber: 416,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-xs font-medium text-gray-700 mb-1",
                                            children: "Lời chúc"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                            lineNumber: 428,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: wishForm.message,
                                            onChange: (e)=>setWishForm({
                                                    ...wishForm,
                                                    message: e.target.value
                                                }),
                                            placeholder: "Viết lời chúc của bạn...",
                                            rows: 3,
                                            className: "w-full px-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent resize-none text-sm",
                                            style: {
                                                "--tw-ring-color": data.primaryColor
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                            lineNumber: 429,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                    lineNumber: 427,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSubmitWish,
                                    disabled: !wishForm.name.trim() || !wishForm.message.trim() || isSubmitting,
                                    className: "w-full py-2.5 px-4 rounded-xl text-white font-medium transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm",
                                    style: {
                                        backgroundColor: data.primaryColor
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                            lineNumber: 444,
                                            columnNumber: 17
                                        }, this),
                                        isSubmitting ? "Đang gửi..." : "Gửi lời chúc"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                                    lineNumber: 438,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                            lineNumber: 415,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                    lineNumber: 389,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                lineNumber: 388,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$wedding$2d$card$2d$editor__$28$6$292f$components$2f$wedding$2d$card$2d$scroll$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                data: data
            }, void 0, false, {
                fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
                lineNumber: 452,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Projects/wedding-card-editor (6)/components/wedding-card-view.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Projects_wedding-card-editor%20%286%29_b2c2978b._.js.map