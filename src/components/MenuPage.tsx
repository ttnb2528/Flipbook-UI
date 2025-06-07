"use client";

import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Star, Clock, Users } from "lucide-react";
import type { MenuItem } from "../lib/menu-data";

interface MenuPageProps {
  item: MenuItem;
  pageNumber: number;
}

const MenuPage = ({ item, pageNumber }: MenuPageProps) => {
  return (
    <div className="page relative h-full overflow-hidden bg-white">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${item.image})` }}
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
              {item.type}
            </Badge>
            {item.isSpecial && (
              <Badge className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs font-medium">
                <Star className="h-3 w-3 mr-1 fill-current" />
                Special
              </Badge>
            )}
          </div>
          <span className="text-xs text-white/70 font-mono bg-black/30 px-2 py-1 rounded">
            {pageNumber.toString().padStart(2, "0")}
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
              {item.name}
            </h1>
            {item.subtitle && (
              <p className="text-lg text-amber-200 italic">{item.subtitle}</p>
            )}
          </motion.div>

          {/* Rating Stars */}
          {item.rating && (
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
                      item.rating && i < item.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-400"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-white/80">
                  ({item.rating}/5)
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
              {item.description}
            </p>

            {/* Additional Info */}
            {(item.prepTime || item.servings) && (
              <div className="flex justify-center gap-6 mb-4 text-xs text-white/80">
                {item.prepTime && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{item.prepTime} min</span>
                  </div>
                )}
                {item.servings && (
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>Serves {item.servings}</span>
                  </div>
                )}
              </div>
            )}

            {/* Price and Dietary Info */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-amber-300">
                  ${item.price}
                </span>
                {item.originalPrice && (
                  <span className="text-sm text-white/60 line-through">
                    ${item.originalPrice}
                  </span>
                )}
              </div>

              {item.dietary && (
                <div className="flex gap-1">
                  {item.dietary.map((diet) => (
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
            {item.chefNote && (
              <div className="mt-3 pt-3 border-t border-white/20">
                <p className="text-xs italic text-amber-200">
                  Chef's Note: {item.chefNote}
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
