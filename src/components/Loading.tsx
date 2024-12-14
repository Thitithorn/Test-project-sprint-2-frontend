// import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-80">
        <h1 className="text-xl font-semibold text-gray-700 mb-4">
        โปรดรอวัตถุดิบชาเบลนด์ ที่ใช่สำหรับคุณ
        </h1>
        <img
          src="../src/assets/Project-Group-3.png"
          alt="Tea Rex Logo"
          className="mx-auto h-32 w-32 mb-4"
        />
        <p className="text-lg text-gray-600">กรุณารอสักครู่...</p>
      </div>
    </div>
  );
};

export default Loading;