import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";
import Hero from "../Layout/Hero";
import { useEffect } from "react";
const STEPS = [
  {
    id: 1,
    title: "أنشئ حسابك",
    body: "سجل بيانات في دقيقة واحدة كصاحب عمل أو كباحث عن فرصة مهنية. ",
    path: "/",
    emoji: "📝",
  },
  {
    id: 2,
    title: " أضف إعلانك",
    body: "ان  كنت تبحث عن موظف , أضف إعلانك بتفاصيل واضحة. ",
    path: "/main/addadv/employer",
    emoji: "📢",
  },
  {
    id: 3,
    title: "تواصل و تعاقد",
    body: "ان  كنت تبحث عن وظيفة, أضف إعلانك بتفاصيل واضحة. ",
    path: "/main/addadv/employee",
    emoji: "🤝",
  },
];
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Makes the transition feel 'softer'
    });
  }, []);
  return (
    <>
      <Hero style={{ marginBottom: "100px" }} />

      <section className="how-it-works">
        <Header title="ثلاث خطوات بسيطة" spanTitle="🎯 كيف يعمل؟ " />

        <div className="cards-container-3">
          {STEPS.map((e) => (
            <Card
              onClick={() => navigate(e.path)}
              header={e.emoji}
              title={e.title}
              body={e.body}
              key={e.id}
              className="clickable-card"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
