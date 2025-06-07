"use client";

import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { menuItems, menuCategories } from "../lib/menu-data";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Star,
  Clock,
  Users,
} from "lucide-react";
import { Badge } from "./ui/badge";

type FlipBookRef = {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
    flip: (page: number) => void;
  };
};

const Book = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const book = useRef<FlipBookRef | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setTotalPages(menuItems.length + 3); // Cập nhật tổng số trang
    console.log("Total pages should be:", menuItems.length + 3);
  }, []);

  useEffect(() => {
    if (book.current) {
      console.log("HTMLFlipBook đã được mount thành công");
    } else {
      console.log("HTMLFlipBook chưa được mount");
    }
  }, []);

  const handlePageFlip = (e: { data: number }) => {
    setPage(e.data);
  };

  const nextPage = () => {
    if (book.current && book.current.pageFlip) {
      book.current.pageFlip().flipNext();
    } else {
      console.error("book.current không tồn tại hoặc pageFlip không khả dụng");
    }
  };

  const prevPage = () => {
    if (book.current && book.current.pageFlip) {
      book.current.pageFlip().flipPrev();
    } else {
      console.error("book.current không tồn tại hoặc pageFlip không khả dụng");
    }
  };

  const goToFirstPage = () => {
    if (book.current && book.current.pageFlip) {
      book.current.pageFlip().flip(0);
    } else {
      console.error("book.current không tồn tại hoặc pageFlip không khả dụng");
    }
  };

  const width = isMobile ? 300 : 600;
  const height = isMobile ? 450 : 600;

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-6">
        <HTMLFlipBook
          width={width}
          height={height}
          size="fixed"
          minWidth={300}
          maxWidth={600}
          minHeight={450}
          maxHeight={600}
          maxShadowOpacity={0.8}
          showCover={true}
          mobileScrollSupport={false}
          onFlip={handlePageFlip}
          className="menu-book"
          ref={book}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={false}
          startZIndex={100}
          autoSize={false}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={50}
          showPageCorners={true}
          disableFlipByClick={false}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            overflow: "hidden",
          }}
        >
          {/* Cover */}
          <div className="page relative h-full w-full overflow-hidden bg-amber-900">
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

          {/* Menu */}
          <div className="page relative h-full w-full bg-gradient-to-br from-white to-amber-50 p-8">
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

              <div className="flex-1 space-y-2">
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

          {/* Content */}
          {menuItems.map((item, index) => (
            <div className="page relative h-full bg-white" key={index}>
              {/* Thay menuItems[0] bằng item và cập nhật pageNumber */}
              <div className="page relative h-full bg-white">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }} // Hard-code menuItem
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
                      Page {index + 1} / {menuItems.length}
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
                        <p className="text-lg text-amber-200 italic">
                          {item.subtitle}
                        </p>
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
                                i < (item.rating ?? 0)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-400"
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-white/80">
                            ({item.rating ?? 0}/5)
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

                      {/* Chef's Note */}
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

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400/50" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400/50" />
              </div>
            </div>
          ))}

          {/* Back Cover */}
          <div className="page relative h-full w-full overflow-hidden bg-amber-900">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=400')] bg-cover bg-center opacity-20" />
            <div className="relative h-full flex flex-col items-center justify-center p-8 text-amber-50 z-10">
              <div className="text-center">
                <h2 className="text-2xl font-serif mb-6">Thank You</h2>
                <p className="text-amber-200 mb-8">
                  We hope you enjoy your meal
                </p>
                <div className="flex flex-col gap-2 items-center">
                  <p className="text-sm">123 Gourmet Street</p>
                  <p className="text-sm">Foodville, CA 90210</p>
                  <p className="text-sm mt-2">+1 (555) 123-4567</p>
                  <p className="text-sm">www.gourmetdelights.com</p>
                </div>
              </div>
            </div>
          </div>
        </HTMLFlipBook>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToFirstPage}
          className="rounded-full border-amber-700 text-amber-700 hover:bg-amber-100 hover:text-amber-800 shadow-md"
        >
          <RotateCcw className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={prevPage}
          disabled={page === 0}
          className="rounded-full border-amber-700 text-amber-700 hover:bg-amber-100 hover:text-amber-800 shadow-md disabled:opacity-50"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="bg-white px-4 py-2 rounded-full shadow-md border border-amber-200">
          <span className="text-amber-800 font-medium text-sm">
            {page + 1} / {totalPages}
          </span>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextPage}
          disabled={page === totalPages - 1}
          className="rounded-full border-amber-700 text-amber-700 hover:bg-amber-100 hover:text-amber-800 shadow-md disabled:opacity-50"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <p className="text-amber-700 text-sm mt-4 text-center opacity-75">
        Click on page corners or use navigation buttons to flip pages •{" "}
        {menuItems.length} delicious items to explore
      </p>
    </div>
  );
};

export default Book;
