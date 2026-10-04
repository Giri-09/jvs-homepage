"use client";

import { createContext, useContext, useState } from "react";

type EnquiryContextValue = {
  interests: string[];
  toggleInterest: (service: string) => void;
  addInterest: (service: string) => void;
  clearInterests: () => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [interests, setInterests] = useState<string[]>([]);

  const toggleInterest = (service: string) => {
    setInterests((current) =>
      current.includes(service) ? current.filter((item) => item !== service) : [...current, service],
    );
  };

  const addInterest = (service: string) => {
    setInterests((current) => (current.includes(service) ? current : [...current, service]));
  };

  const clearInterests = () => setInterests([]);

  return (
    <EnquiryContext.Provider value={{ interests, toggleInterest, addInterest, clearInterests }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) throw new Error("useEnquiry must be used inside EnquiryProvider");
  return context;
}
