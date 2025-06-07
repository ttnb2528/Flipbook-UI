"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Star, Clock, Users } from "lucide-react";
import { type MenuItem, menuCategories } from "../lib/menu-data";

interface MenuPageProps {
  menuItem?: MenuItem;
  pageNumber?: number;
  isCover?: boolean;
  isTableOfContents?: boolean;
  isBackCover?: boolean;
}

const MenuPage = ({
  menuItem,
  pageNumber,
  isCover,
  isTableOfContents,
  isBackCover,
}: MenuPageProps) => {
  // Cover Page Layout
  if (isCover) {
    return (
      <div className="page relative h-full overflow-hidden bg-amber-900">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=400')] bg-cover bg-center opacity-20" />
        <div className="relative h-full flex flex-col items-center justify-center p-8 text-amber-50 z-10">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Star className="h-16 w-16 mb-6" />
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

  // Back Cover Layout
  if (isBackCover) {
    return (
      <div className="page relative h-full overflow-hidden bg-amber-900">
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

  // Table of Contents Layout
  if (isTableOfContents) {
    return (
      <div className="page relative h-full bg-gradient-to-br from-white to-amber-50 p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h-full flex flex-col"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif text-amber-900 mb-2">
              Table of Contents
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full" />
            <p className="text-sm text-amber-700 mt-4 italic">
              12 carefully crafted dishes await you
            </p>
          </div>

          <div className="flex-1 space-y-6">
            {menuCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex justify-between items-center py-3 border-b border-amber-200"
              >
                <div>
                  <h3 className="text-lg font-medium text-amber-900">
                    {category.name}
                  </h3>
                  <p className="text-sm text-amber-700">
                    {category.description}
                  </p>
                </div>
                <span className="text-amber-600 font-mono text-sm">
                  {category.page}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center space-y-2">
            <p className="text-sm text-amber-700 italic">
              Each dish tells its own story
            </p>
            <p className="text-xs text-amber-600">
              Flip through each page to discover our culinary journey
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  // Menu Item Layout (For Regular Pages)
  return (
    <div className="page relative h-full bg-white">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${menuItem?.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col p-6 text-white z-10">
        {/* Header with Badge and Page Number */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-between items-start mb-4"
        >
          <div className="flex gap-2">
            <Badge className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 text-xs font-medium">
              {menuItem?.type}
            </Badge>
            {menuItem?.isSpecial && (
              <Badge className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs font-medium">
                <Star className="h-3 w-3 mr-1 fill-current" />
                Special
              </Badge>
            )}
          </div>
          <span className="text-xs text-white/70 font-mono bg-black/30 px-2 py-1 rounded">
            {pageNumber?.toString().padStart(2, "0")}
          </span>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-6"
          >
            <h1 className="text-4xl md:text-5xl font-serif mb-2 drop-shadow-lg leading-tight">
              {menuItem?.name}
            </h1>
            {menuItem?.subtitle && (
              <p className="text-lg text-amber-200 italic">
                {menuItem?.subtitle}
              </p>
            )}
          </motion.div>

          {/* Rating Stars */}
          {menuItem?.rating && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center mb-4"
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < (menuItem?.rating ?? 0)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-400"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-white/80">
                  ({menuItem?.rating ?? 0}/5)
                </span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom Section with Description and Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-auto"
        >
          <div className="bg-black/60 backdrop-blur-sm p-5 rounded-xl border border-white/10">
            {/* Description */}
            <p className="text-sm leading-relaxed mb-4 text-center">
              {menuItem?.description}
            </p>

            {/* Additional Info */}
            {(menuItem?.prepTime || menuItem?.servings) && (
              <div className="flex justify-center gap-6 mb-4 text-xs text-white/80">
                {menuItem?.prepTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{menuItem?.prepTime} min</span>
                  </div>
                )}
                {menuItem?.servings && (
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Serves {menuItem?.servings}</span>
                  </div>
                )}
              </div>
            )}

            {/* Price and Dietary Info */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-amber-300">
                  ${menuItem?.price}
                </span>
                {menuItem?.originalPrice && (
                  <span className="text-sm text-white/60 line-through">
                    ${menuItem?.originalPrice}
                  </span>
                )}
              </div>

              {menuItem?.dietary && (
                <div className="flex gap-1">
                  {menuItem.dietary.map((diet) => (
                    <Badge
                      key={diet}
                      variant="outline"
                      className="text-xs border-amber-400 text-amber-300"
                    >
                      {diet}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Ingredients or Chef's Note */}
            {menuItem?.chefNote && (
              <div className="mt-3 pt-3 border-t border-white/20">
                <p className="text-xs italic text-amber-200">
                  Chef's Note: {menuItem?.chefNote}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Decorative Corner Element */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400/50" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400/50" />
    </div>
  );
};

export default MenuPage;
