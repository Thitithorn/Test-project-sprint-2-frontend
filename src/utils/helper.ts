export const validateEmail = (email: string): boolean => {
  // Regex นี้ใช้ในการตรวจสอบว่าข้อความที่รับเข้ามามีรูปแบบที่คล้ายกับอีเมลที่ถูกต้องหรือไม่
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// ทำชื่อย่อ
export const getInitials = (name: string): string => {
  if (!name) return "";

  const words = name.split(" ");
  // console.log("แยกชื่อ", words);
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }

  return initials.toUpperCase();
};
