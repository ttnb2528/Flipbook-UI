"use client";

import { motion } from "framer-motion";
import { menuCategories } from "../lib/menu-data";

const TableOfContentsPage = () => {
  return (
    <div className="page h-full bg-gradient-to-br from-white to-amber-50 p-8">
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
                <p className="text-sm text-amber-700">{category.description}</p>
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
};

export default TableOfContentsPage;
