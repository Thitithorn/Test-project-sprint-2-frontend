import React, { useState } from 'react';
import PopupWindow from '../pages/PaymentPopup';

const Cart: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex right-0">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleOpenPopup}
      >
        <i className="fa fa-shopping-cart"></i>
      </button>
      <PopupWindow 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup} 
        />
    </div>
  );
};

export default Cart;