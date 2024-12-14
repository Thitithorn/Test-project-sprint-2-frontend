// // src/pages/ProductListPage.tsx
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import ProductCard from '../components/ProductCard';

// type Product = {
//   id: number;
//   name: string;
//   weight: string;
//   price: string;
//   imageUrl: string;
//   category?: string;
// };

// const PRODUCTS: Product[] = [
//   {
//     id: 1,
//     name: "Green Tea Blend",
//     weight: "100g",
//     price: "฿125",
//     imageUrl: "/path/to/green-tea-image.jpg",
//     category: "green-tea"
//   },
//   {
//     id: 2,
//     name: "Black Tea Classic",
//     weight: "100g",
//     price: "฿150",
//     imageUrl: "/path/to/black-tea-image.jpg",
//     category: "black-tea"
//   },
//   // Add more products...
// ];

// const ProductListPage: React.FC = () => {
//   const { category } = useParams();

//   const filteredProducts = category 
//     ? PRODUCTS.filter(product => product.category === category)
//     : PRODUCTS;

//   return (
//     <div className="flex pt-24">
//       <Sidebar />
//       <main className="w-3/4 p-4">
//         <h1 className="mb-4 text-xl font-bold">
//           {category 
//             ? `${filteredProducts.length} รายการใน ${category}` 
//             : `${PRODUCTS.length} รายการทั้งหมด`}
//         </h1>
//         <div className="grid grid-cols-4 gap-4">
//           {filteredProducts.map((product) => (
//             <ProductCard
//               key={product.id}
//               name={product.name}
//               weight={product.weight}
//               price={product.price}
//               imageUrl={product.imageUrl}
//             />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ProductListPage;
// src/pages/ProductListPage.tsx
// src/pages/ProductListPage.tsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import products from '../database/teaProducts';
import { Link } from 'react-router-dom';


const ProductListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');
  const [searchQuery, setSearchQuery] = useState('');

  // ฟังก์ชันสำหรับเปลี่ยนหมวดหมู่
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query); // อัปเดตคำค้นหา
  };

  // กรองสินค้า
  // const filteredProducts = selectedCategory === 'ทั้งหมด'
  //   ? products
  //   : products.filter(product => product.category === selectedCategory);

  const filteredProducts = products.filter((product) =>
      (selectedCategory === 'ทั้งหมด' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
    <div className="flex pt-24">
      <Sidebar onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
      <main className="w-3/4 p-4">

        <h1 className="mb-4 text-xl font-bold">
          {filteredProducts.length} รายการในหมวดหมู่: {searchQuery ? searchQuery : selectedCategory}
        </h1>

        <div className="grid grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductCard
                id={product.id}
                name={product.name}
                weight={product.weight}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            </Link>
     

          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListPage;
