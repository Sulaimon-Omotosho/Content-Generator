import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    if (!(await auth()).userId) {
      const signInUrl = new URL('/sign-in', req.nextUrl.origin)
      return NextResponse.redirect(signInUrl)
    }
  }
})

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)'])

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}
