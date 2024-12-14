// src/components/Shopchoice.tsx
import React, { useState } from 'react';
import ButtonSelect from './ButtonSelect';
import ProductCart, { CartItem } from './ProductCart';
import { OptionValue, OptionDetails } from '../database/teaOptionDetails';
import { Product } from '../database/teaProducts';
import blackTea from '../assets/Black-tea.jpg';

// Interface สำหรับ Props ของ Shopchoice
interface ShopchoiceProps {
  product: Product; // ข้อมูลสินค้าที่เลือก
}

const Shopchoice: React.FC<ShopchoiceProps> = ({ product }) => {
  // State สำหรับเก็บตัวเลือกสินค้า
  const [selectedOption, setSelectedOption] = useState<OptionValue>('option1');

  // State สำหรับจำนวนสินค้า
  const [quantity, setQuantity] = useState<number>(1);

  // State สำหรับสถานะเปิด-ปิดตะกร้า
  const [isCartOpen, setIsCartOpen] = useState(false);

  // State สำหรับรายการสินค้าในตะกร้า
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ฟังก์ชันเพิ่มสินค้าไปยังตะกร้า
  const handleAddToCart = () => {
    const newItem: CartItem = {
      id: product.id,
      name: product.name,
      price: currentOption.price,
      quantity,
      imageUrl: blackTea, // รูปสินค้าชั่วคราว
    };
    setCartItems((prev) => [...prev, newItem]);
    setIsCartOpen(true); // เปิดตะกร้า
  };

  // ฟังก์ชันจัดการการเลือกตัวเลือกสินค้า
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as OptionValue);
  };

  // ฟังก์ชันเพิ่มจำนวนสินค้า
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // ฟังก์ชันลดจำนวนสินค้า (ต้องไม่ให้ค่าติดลบ)
  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // รายละเอียดตัวเลือกสินค้าที่เลือก
  const currentOption = OptionDetails[selectedOption];

  return (
    <div className='flex flex-row justify-center'>
      {/* ส่วนแสดงรูปสินค้า */}
      <div className='border-2 w-[300px]'>
        <img
          src={blackTea} // รูปสินค้าชั่วคราว
          alt={product.name}
          className='w-full h-auto'
        />
      </div>

      <div className='flex justify-center'>
        <div className='flex flex-col border-2 w-[300px] p-4'>
          {/* ชื่อสินค้า */}
          <h2 className='text-lg font-bold pl-4 mb-2'>{product.name}</h2>

          {/* แสดงราคาและน้ำหนัก */}
          <p className='pl-4 mb-2'>
            {currentOption.price}฿ | {currentOption.weight}g
          </p>

          {/* ตัวเลือกสินค้า */}
          <select 
            className="w-[calc(100%-2rem)] py-2 px-4 mt-2 mb-2 ml-4 border-2 border-black rounded-lg"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            {Object.entries(OptionDetails)
              .filter(([key]) => key !== '')
              .map(([key, option]) => (
                <option key={key} value={key}>
                  {option.label}
                </option>
              ))
            }
          </select>

          {/* ปุ่มเพิ่มและลดจำนวนสินค้า */}
          <div className='flex flex-row justify-center items-center space-x-4 mt-2'>
            <button 
              onClick={decrementQuantity}
              className="w-8 h-8 bg-white text-black border-2 border-black rounded-full"
            >
              -
            </button>

            <span className='text-lg'>{quantity}</span>
            <button 
              onClick={incrementQuantity}
              className="w-8 h-8 bg-white text-black border-2 border-black rounded-full"
            >
              +
            </button>
          </div>


          {/* ปุ่มใส่ลงตะกร้า */}
          <div className='ml-14 mt-4'>
            <ButtonSelect onClick={handleAddToCart} />
          </div>

        </div>
      </div>

      {/* ตะกร้าสินค้า */}
      <ProductCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
      />
    </div>
  );
};

export default Shopchoice;
