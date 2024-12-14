import { useParams } from "react-router-dom";

const articles = [
  { id: 0, title: "Degas ความลับที่ทำให้กาแฟของคุณอร่อยขึ้น", content: "เนื้อหาเต็มของบทความ 1...", img: 'https://via.placeholder.com/300x200' },
  { id: 1, title: "อีกหนึ่งเกร็ดความรู้ที่คุณต้องลอง", content: "เนื้อหาเต็มของบทความ 2...", img: 'https://via.placeholder.com/300x200' },
  { id: 2, title: "อยากให้กาแฟหอมขึ้น? ลองวิธีนี้!", content: "เนื้อหาเต็มของบทความ 3...", img: 'https://via.placeholder.com/300x200' },
];

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();  // ดึงค่า id จาก URL
  const article = articles[parseInt(id || '0')];  // แปลง id เป็นหมายเลขแล้วหาบทความที่ตรงกัน

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-semibold text-center text-gray-900">{article.title}</h1>  
      <img src={article.img} alt={article.title} className="mt-6 w-full h-64 object-cover rounded-lg" />
      <p className="mt-4 text-lg text-gray-700">{article.content}</p>
    
    </div>
  );
};

export default Article;
