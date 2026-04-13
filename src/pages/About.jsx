import Header from "../components/Header";
import Card from "../components/Card";
import { useEffect } from "react";
const ABOUT_CARDS = [
  {
    id: 1,
    title: " تقنية متطورة ",
    body: "نستخدم احدث التقنيات لمطابقة الفرص مع المرشحين المناسبين",
    emoji: "💡",
  },
  {
    id: 2,
    title: "تغطية واسعة ",
    body: "نغطي جميع المحافظات السورية و نوفر فرصا في مختلف القطاعات",
    emoji: "🌍",
  },
  {
    id: 3,
    title: " مجتمع داعم ",
    body: " اكثر من 6,000 شخص يتخدمون المنصة يوميا, مما يخلق شبكة تواصلمهنية قوية ",
    emoji: "🤝",
  },
  {
    id: 4,
    title: "إحصاءات شفافة",
    body: "نوفر إحصاءات و مؤشرات سوق العمل لمساعدتك في اتخاذ قرارات أفضل",
    emoji: "📊",
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Makes the transition feel 'softer'
    });
  }, []);
  return (
    <>
      <Header title={"حول المشروع"} spanTitle={"من نحن؟"} />

      <div style={{ marginBottom: "20px" }} className="cards-container-2">
        {ABOUT_CARDS.map((e) => (
          <Card header={e.emoji} title={e.title} body={e.body} key={e.id} />
        ))}
      </div>

      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <Card style={{ marginBottom: "20px" }} type="large" title={"قصتنا 🗓️"}>
          <p>
            انطلقت وظيفتي عام 2023 كمبادرة شبابية سورية, برؤية واضحة: أن تكون
            المنصة الأولى الذي يلجأ إليها كل باحث عن عمل و كل صاحب عمل في سوريا.
          </p>
          <p>
            بدأنا بفريق صغير من المطورين و المتخصصين في الموارد البشرية و سرعان
            ما تطور المشروع ليصبح مرجعا موثوقا في سوق العمل السوري
          </p>
        </Card>

        <Card type="large" title={"تواصل معنا 📞 "}>
          <p>📧البريد الإلكتروني :info@wazifati.sy</p>
          <p>📱 واتساب :xxx-xxx-xxx-00963</p>
          <p>📍 دمشق-سوريا</p>
        </Card>
      </div>
    </>
  );
};

export default About;
