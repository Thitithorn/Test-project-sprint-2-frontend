
import { Link } from 'react-router-dom';

// กำหนดประเภทสำหรับ Card
interface Card {
  id: number;
  title: string;
  img: string;
}

const Blog: React.FC = () => {
  const cards: Card[] = [
    { id: 0, title: "Degasความลับที่ทำให้กาแฟของคุณอร่อยขึ้น",  img: 'https://via.placeholder.com/300x200' },
    { id: 1, title: "อีกหนึ่งเกร็ดความรู้ที่คุณต้องลอง",  img: 'https://via.placeholder.com/300x200'  },
    { id: 2, title: "อยากให้กาแฟหอมขึ้น? ลองวิธีนี้!",  img: 'https://via.placeholder.com/300x200'  },
  ];

  return (
    <div className="flex flex-row justify-between m-5 p-10">
      <div className="p-10 m-5 mr-20">
        <div className="text-7xl py-2">Blog</div>
        <div className="text-5xl py-4 w-[250px]">รวมวิธีการชง เกร็ดความรู้</div>
        <div className="text-xl py-2">ด้านชาที่น่าสนใจ</div>
        <Link to="/blog">
          <button className="px-4 py-2 rounded-full bg-red-500 text-white w-28 h-10">
            เริ่มเลย
          </button>
        </Link>
      </div>

      {/* Cards */}
      <div className="hidden flex-row md:flex justify-center gap-5">
  {cards.map((card, index) => (
    <div
      key={index}
      className="min-w-[300px] max-w-[300px] rounded-3xl bg-slate-200 border-2 border-black flex flex-col"
    >
      <img
        src={card.img}
        className="w-full h-48 object-cover rounded-t-3xl border-2 border-b-black"
        alt={`Card ${index + 1}`}
      />
      <div className="p-3 flex flex-col flex-grow justify-between">
        <div className="p-3 py-8 text-center h-[100px] overflow-hidden">
          {card.title}
        </div>
        <Link to={`/article/${card.id}`}>
          <button className="px-4 py-2 rounded-full bg-red-500 text-white w-28 h-10 hover:bg-red-600 transition-colors self-center">
            อ่านต่อ
          </button>
        </Link>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Blog;
