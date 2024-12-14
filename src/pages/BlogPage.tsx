import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Box, Button } from "@mui/material";

// Define the types for the images and cards
const images: string[] = [
  'https://via.placeholder.com/800x300?text=Slide+1',
  'https://via.placeholder.com/800x300?text=Slide+2',
  'https://via.placeholder.com/800x300?text=Slide+3',
];

interface Card {
  title: string;
  img: string;
}

const cards: Card[] = [
  { title: "Degas ความลับที่ทำให้กาแฟของคุณอร่อยขึ้น", img: 'https://via.placeholder.com/300x200' },
  { title: "อีกหนึ่งเกร็ดความรู้ที่คุณต้องลอง", img: 'https://via.placeholder.com/300x200' },
  { title: "อยากให้กาแฟหอมขึ้น? ลองวิธีนี้!", img: 'https://via.placeholder.com/300x200' },
];

const BlogPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigate = useNavigate(); // ต้องอยู่ภายในคอมโพเนนต์

  const handleReadMore = (id: number) => {
    navigate(`/article/${id}`); // ไปที่หน้าบทความพร้อมกับ ID
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Autoplay every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <Box>
        {/* Carousel */}
        <Box
          sx={{
            width: '100%',
            maxWidth: 800,
            margin: '0 auto',
            overflow: 'hidden',
            position: 'relative',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              transition: 'transform 0.5s ease-in-out',
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((src, index) => (
              <Box
                key={index}
                component="img"
                src={src}
                alt={`Slide ${index + 1}`}
                sx={{
                  width: '100%',
                  flexShrink: 0,
                }}
                onClick={() => handleReadMore(index)}
              />
            ))}
          </Box>

          <Button
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 10,
              transform: 'translateY(-50%)',
              zIndex: 1,
            }}
          >
            ◀
          </Button>

          <Button
            onClick={handleNext}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 10,
              transform: 'translateY(-50%)',
              zIndex: 1,
            }}
          >
            ▶
          </Button>

          <Box
            sx={{
              position: 'absolute',
              bottom: 10,
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
            }}
          >
            {images.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: currentIndex === index ? 'primary.main' : 'grey.500',
                  transition: 'background-color 0.3s',
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Card Section */}
        <Box className="flex flex-col items-center md:flex-row justify-center gap-5 mt-10">
          {cards.map((card, index) => (
            <div key={index} className="w-full sm:w-[380px] md:w-[300px] lg:w-[320px] xl:w-[350px] flex flex-col rounded-3xl bg-slate-200 border-2 border-black">
              <img
                src={card.img}
                className="w-full h-48 object-cover rounded-t-3xl border-2 border-b-black"
                alt={`Card ${index + 1}`}
              />
              <div className="p-3 flex-grow flex flex-col justify-between">
                <div className="p-3 py-8">{card.title}</div>
                <button
                  onClick={() => handleReadMore(index)} // กดแล้วเปลี่ยนหน้า
                  className="px-4 py-2 rounded-full bg-red-500 text-white w-28 h-10 hover:bg-red-600 transition-colors"
                >
                  อ่านต่อ
                </button>
              </div>
            </div>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default BlogPage;
