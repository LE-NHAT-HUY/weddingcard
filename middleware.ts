// middleware.ts (place at the project root)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(req: NextRequest) {
const url = req.nextUrl.clone()
const code = url.searchParams.get('code')


// Nếu có ?code=... -> redirect đến /invite/ABC123
if (code) {
url.search = ''
url.pathname = `/invite/${code}`
return NextResponse.redirect(url)
}


return NextResponse.next()
}


// (Tuỳ chọn) Giới hạn middleware chỉ áp dụng cho đường gốc và các đường có query
export const config = {
matcher: '/'
}