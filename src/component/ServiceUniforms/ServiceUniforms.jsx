import uni from "../../assets/service/Uniforms/uni.png";
import Card from "../Card/Card";

// image
import women from "../../assets/service/Uniforms/caty/women.png";
import uniform from "../../assets/service/Uniforms/caty/uni.png";
import shonte from "../../assets/service/Uniforms/caty/shonte.png";
import man from "../../assets/service/Uniforms/caty/man.png";
import kok from "../../assets/service/Uniforms/caty/kok.png";
import dr from "../../assets/service/Uniforms/caty/dr.png";
import dosser from "../../assets/service/Uniforms/caty/dosser.png";
import coissin from "../../assets/service/Uniforms/caty/coissin.png";
import costim from "../../assets/service/Uniforms/caty/costim.png";
import compl from "../../assets/service/Uniforms/caty/compl.png";

const dataInfo = [
  { titel: "ملابس ورشات", prix: "160", imgSrc: compl },
  { titel: "ملابس ورشات", prix: "200", imgSrc: shonte },
  { titel: "أزياء طبية ", prix: "280", imgSrc: dr },
  { titel: "لباس مطاعم", prix: "120", imgSrc: coissin },
  { titel: "سترات العمال", prix: "80", imgSrc: dosser },
  { titel: "ألبسة خاصة ", prix: "175", imgSrc: uniform },
  { titel: "بدلات رسمية", prix: "320", imgSrc: costim },
  { titel: "عاملات ", prix: "180", imgSrc: women },
  { titel: "لباس عمال", prix: "150", imgSrc: man },
  { titel: "مطاعم خاصة", prix: "150", imgSrc: kok },
];

const ServiceUniforms = () => {
  return (
    <section id="serviceUniforms" className=" bg-gray/10 pt-20">
      {/* info dev  */}
      <div className="screenPadding relative py-8 flex justify-center max-h-[320px] bg-gradient-to-l from-primary to-secondary">
        {/* image dev  */}
        <div className="lg:w-1/2 max-lg:hidden">
          <img
            src={uni}
            alt="Service Uniforms"
            className=" absolute bottom-0 right-0 w-[420px] h-auto"
          />
        </div>
        {/* text dev  */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center gap-4">
          <h1 className="font-fontTitle text-2xl">الأزياء الموحدة</h1>
          <h2 className="font-fontBody text-[14px] sm:text-[15px] text-center max-w-[480px]">
            تشمل مجموعتنا المتنوعة كل شيء من الملابس الرسمية للشركات إلى الأزياء
            الموحدة المتخصصة مصممة لتلبية احتياجات مختلف الصناعات. نقدم ملابس
            عالية الجودة تعزز حضور علامتكم التجارية وتترك انطباعًا لا يُنسى{" "}
          </h2>
          <div className="flex gap-2">
            <button className="hover:scale-110 px-2 py-1 bg-red-500 hover:bg-secondary text-white font-fontBody text-[13px] sm:text-[15px] hover:text-gray duration-150 transition-all cursor-pointer rounded-full ">
              إكتشف المزيد
            </button>
            <button className="hover:scale-110 px-2 py-1 bg-gray text-white font-fontBody text-[15px] hover:bg-white hover:text-gray duration-150 transition-all cursor-pointer rounded-full ">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
      {/* cart dev  */}

      <div className="screenPadding w-full py-8 flex justify-center gap-4 flex-wrap ">
        {dataInfo.map((elm, ind) => {
          return <Card key={ind} data={elm} />;
        })}
      </div>
    </section>
  );
};

export default ServiceUniforms;