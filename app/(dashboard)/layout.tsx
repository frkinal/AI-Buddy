import { FreeCounter } from "@/components/free-counter";
import Navbar from "@/components/navbar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="h-full relative">
      <main>
        <Navbar />
        {children}
        <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
      </main>
    </div>
  );
};

export default DashboardLayout;
