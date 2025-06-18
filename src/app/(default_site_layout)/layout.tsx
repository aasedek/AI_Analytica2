import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';
import { Toaster } from "@/components/ui/toaster";

export default function DefaultSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SiteHeader is already in root layout, this structure might be redundant if root layout handles it globally */}
      {/* For this iteration, assuming root layout is minimal and this group layout adds common site elements */}
      {/* <SiteHeader /> */}
      <main className="flex-grow bg-background">{children}</main>
      {/* <SiteFooter /> */}
      {/* <Toaster /> */}
    </div>
  );
}
