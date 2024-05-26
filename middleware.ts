import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { authMiddleware } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/(.*)", "/api/webhooks/stripe(.*)"  
  ]);

export default clerkMiddleware((auth, req) => {
    if (!isProtectedRoute(req)) auth().protect();
    
  });

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};