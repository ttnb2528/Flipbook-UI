import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import CoverPage from "./CoverPage";
import { menuItems } from "../lib/menu-data";
import MenuPage from "./MenuPage";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import TableOfContentsPage from "./TableOfContentsPage";

// Define a type for the ref with the pageFlip method
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

  // Create a reference to HTMLFlipBook and specify its type
  const book = useRef<FlipBookRef | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handlePageFlip = (e: { data: number }) => {
    setPage(e.data);
  };

  const nextPage = () => {
    if (book.current) {
      // Use the pageFlip method correctly
      book.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (book.current) {
      // Use the pageFlip method correctly
      book.current.pageFlip().flipPrev();
    }
  };

  const goToFirstPage = () => {
    if (book.current) {
      book.current.pageFlip().flip(0);
    }
  };

  // Calculate dimensions based on screen size
  const width = isMobile ? 300 : 400;
  const height = isMobile ? 450 : 600;

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-6">
        <HTMLFlipBook
          width={width}
          height={height}
          size="stretch"
          minWidth={300}
          maxWidth={400}
          minHeight={450}
          maxHeight={600}
          maxShadowOpacity={0.8}
          showCover={true}
          mobileScrollSupport={true}
          onFlip={handlePageFlip}
          onInit={(e) => setTotalPages(e.data.pages)}
          className="menu-book"
          ref={book}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={100}
          autoSize={false}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={50}
          showPageCorners={true}
          disableFlipByClick={false}
          style={{ width: `${width}px`, height: `${height}px` }} // Adding style prop here
        >
          {/* Front Cover */}
          <CoverPage isCover={true} />

          {/* Table of Contents */}
          <TableOfContentsPage />

          {/* Menu Pages */}
          {menuItems.map((item, index) => (
            <MenuPage key={item.id} item={item} pageNumber={index + 1} />
          ))}

          {/* Back Cover */}
          <CoverPage isBackCover={true} />
        </HTMLFlipBook>
      </div>

      {/* Navigation Controls */}
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

      {/* Instructions */}
      <p className="text-amber-700 text-sm mt-4 text-center opacity-75">
        Click on page corners or use navigation buttons to flip pages •{" "}
        {menuItems.length} delicious items to explore
      </p>
    </div>
  );
};

export default Book;
