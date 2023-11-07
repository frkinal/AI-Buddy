const LandingLayout = ({ children }: { children: React.ReactDOM }) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-acuto max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
