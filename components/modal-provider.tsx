"use client";

import { useEffect, useState } from "react";
import { ProModal } from "@/components/pro-modal";

export const ModalProvider = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <ProModal />
    </>
  );
};
