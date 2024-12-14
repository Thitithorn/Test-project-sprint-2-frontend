// src/components/Cart.tsx
import React from 'react';

// Interface สำหรับสินค้าในตะกร้า
export interface CartItem {
  id: number; // รหัสสินค้า
  name: string; // ชื่อสินค้า
  price: number; // ราคาต่อชิ้น
  quantity: number; // จำนวนสินค้าในตะกร้า
  imageUrl: string; // ลิงก์รูปภาพสินค้า
}

// Interface สำหรับ Props ของ Cart
interface ProductCartProps {
  isOpen: boolean; // สถานะเปิด-ปิดของตะกร้า
  onClose: () => void; // ฟังก์ชันปิดตะกร้า
  cartItems: CartItem[]; // รายการสินค้าที่อยู่ในตะกร้า
}

const ProductCart: React.FC<ProductCartProps> = ({ isOpen, onClose, cartItems }) => {
  // คำนวณราคารวมของสินค้าทั้งหมดในตะกร้า
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* ส่วนหัวของตะกร้า */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black">✕</button>
      </div>

      {/* ส่วนแสดงรายการสินค้า */}
      <div className="p-4 overflow-y-auto h-[calc(100%-8rem)]">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4 border-b pb-4">
              {/* แสดงรูปสินค้า */}
              <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />

              {/* ข้อมูลสินค้า */}
              <div className="flex-1">
                <h3 className="font-bold text-sm mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm">฿{item.price} x {item.quantity}</p>
              </div>

              {/* แสดงราคารวมของสินค้าชิ้นนี้ */}
              <div className="text-right font-bold">฿{item.price * item.quantity}</div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* ส่วนสรุปราคารวมและปุ่ม Checkout */}
      <div className="p-4 border-t">
        <div className="flex justify-between font-bold mb-4">
          <span>Total:</span>
          <span>฿{totalPrice}</span>
        </div>
        
        <button
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-400 transition duration-300"
          disabled={cartItems.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
