import SolutionAi from "../components/SolutionAi";
import arrowleft from "../assets/green-tea.png";
import productboxAi from "../assets/productboxAi.png";

const CustomProduct = () => {
  return (
    <div>
        <h1 className="text-center">ชาเบลนด์ ที่มี taste note เฉพาะคุณ</h1>
        <p className="text-center">1 กล่อง บรรจุวัตถุดิบชาเบลนด์ 40 g.</p>
        <div className="flex justify-around text-center">
            <div>
                <img src={productboxAi} />
                <p className="text-red-700">👍95% พึงพอใจกาแฟที่เราแนะนำ</p>
            </div>
            <div className="flex">
                <SolutionAi name="ชาขาว" image={arrowleft} />
                <SolutionAi name="ชาขาว" image={arrowleft} />
                <SolutionAi name="ชาขาว" image={arrowleft} />
            </div>
        </div>
        <div className="flex justify-around items-center text-center">
            <p>ใช้ระบบวิเคราะห์ที่ทันสมัยและแม่นยำเพื่อให้ตรงใจคุณ</p>
            <div>
                <p>จัดส่งฟรี! ทุกออเดอร์</p>
                <button className="bg-slate-500 px-4 py-2 rounded-lg">
                    <p>สั่งซื้อ $ 300.00</p>
                </button>
                <p>🤟 พร้อมจัดส่งกล่องใหม่ฟรี!! หากไม่พึงพอใจ</p>
            </div>
        </div>
    </div>

  );
};

export default CustomProduct;