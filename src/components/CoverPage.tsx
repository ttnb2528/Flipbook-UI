"use client";

import { motion } from "framer-motion";
import { Utensils } from "lucide-react";

interface CoverPageProps {
  isCover?: boolean;
  isBackCover?: boolean;
}

const CoverPage = ({
  isCover = false,
  isBackCover = false,
}: CoverPageProps) => {
  if (isCover) {
    return (
      <div className="relative h-full overflow-hidden bg-amber-900">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=400')] bg-cover bg-center opacity-20" />
        <div className="relative h-full flex flex-col items-center justify-center p-8 text-amber-50 z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Utensils className="h-16 w-16 mb-6" />
            <h1 className="text-4xl font-serif text-center mb-4">
              Gourmet Delights
            </h1>
            <div className="w-24 h-1 bg-amber-400 mb-6" />
            <p className="text-xl text-center font-light">MENU</p>
            <p className="mt-12 text-sm text-amber-200 italic">Est. 2023</p>
          </motion.div>
        </div>
      </div>
    );
  }

  if (isBackCover) {
    return (
      <div className="relative h-full overflow-hidden bg-amber-900">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=400')] bg-cover bg-center opacity-20" />
        <div className="relative h-full flex flex-col items-center justify-center p-8 text-amber-50 z-10">
          <div className="text-center">
            <h2 className="text-2xl font-serif mb-6">Thank You</h2>
            <p className="text-amber-200 mb-8">We hope you enjoy your meal</p>
            <div className="flex flex-col gap-2 items-center">
              <p className="text-sm">123 Gourmet Street</p>
              <p className="text-sm">Foodville, CA 90210</p>
              <p className="text-sm mt-2">+1 (555) 123-4567</p>
              <p className="text-sm">www.gourmetdelights.com</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CoverPage;
