"use client";
import { NextUIProvider } from "@nextui-org/react";

interface CrmAppProvidersProps {
  children: React.ReactNode;
}
const CrmAppProviders = ({ children }: CrmAppProvidersProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default CrmAppProviders;
