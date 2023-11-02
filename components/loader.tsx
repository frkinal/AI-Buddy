import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="aibuddy" fill src="/aibuddy.png" />
      </div>
      <p className="text-sm">Your AI Buddy is thinking...</p>
    </div>
  );
};
