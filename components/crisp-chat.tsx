"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("167556f0-3980-437e-bf19-cf0d2caa087c");
  }, []);

  return null;
};
