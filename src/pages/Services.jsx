import Header from "../components/Header";
import Card from "../components/Card";
import { useEffect } from "react";

const SERVICES_CARDS = [
  {
    id: 1,
    title: " نشر إعلانات  ",
    body: "أنشر إعلان وظيفتك الشاغرة بجميع تفاصيلها و ابدأ بتلقي طلبات المتقدمين فورا. إعلان مجاني واحد لكل حساب.",
    emoji: "📢",
  },
  {
    id: 2,
    title: " إعلانات الباحثين عن العمل",
    body: "سجل بياناتك و مؤهلاتك ليتواصل معك أصحاب العمل مباشرة. وصّف نفسك و ميّز نفسك عن المنافسين ",
    emoji: "🔍 ",
  },
  {
    id: 3,
    title: " المطابقة الذكية",
    body: "تستخدم خوارزميات ذكية لمطابقة الباحثين عن عمل مع الفرص المناسبة بناءً على المهارات والخبرة والمعرفة.",
    emoji: "🎯",
  },
  {
    id: 4,
    title: " باقات الشركات",
    body: "للشركات الكبيرة نوفر باقات مميزة تشمل إعلانات متعددة، ظهور مميز وتقارير تفصيلية عن المتقدمين",
    emoji: "💼",
  },
  {
    id: 5,
    title: "تقارير سوق العمل",
    body: "احصل على تقارير دورية عن توجهات سوق العمل، الرواتب السائدة، والمهن الأكثر طلباً في سوريا",
    emoji: "📊",
  },
  {
    id: 6,
    title: "مركز التدريب",
    body: "دورات تدريبية وموارد لتطوير مهاراتك المهنية وتحسين سيرتك الذاتية وأدائك في المقابلات",
    emoji: "🎓",
  },
];
const Services = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Makes the transition feel 'softer'
    });
  }, []);
  return (
    <>
      <Header title={"خدماتنا "} spanTitle={"ما نقدمه "}>
        <p>حلول متكاملة لأصحاب العمل و الباحثين عن فرص العمل </p>
      </Header>
      <div style={{ marginBottom: "20px" }} className="cards-container-2">
        {SERVICES_CARDS.map((e) => (
          <Card header={e.emoji} title={e.title} body={e.body} key={e.id} />
        ))}
      </div>
      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <Card type="large" title={"الباقات و الأسعار 💎 "}>
          <p>
            <span className="accent"> الباقة المجانية: </span>
            إعلان واحد، ظهور عادي، دعم عبر البريد الإلكتروني.
          </p>
          <p>
            <span className="accent"> باقة بريميوم (250,000 ل.س/شهر): </span>
            إعلانات متعددة، ظهور مميز، شارة الشركة الموثقة، تقارير أساسية.
          </p>
          <p>
            <span className="accent"> باقة الشركات (750,000 ل.س/شهر): </span>
            إعلانات غير محدودة، ظهور في الصفحة الرئيسية، تقارير تفصيلية، مدير
            حساب مخصص
          </p>
        </Card>
      </div>
    </>
  );
};

export default Services;
