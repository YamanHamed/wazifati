import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const STATS = [
  { id: 1, title: "وظيفة نشطة", content: "+1,240" },
  { id: 1, title: "باحث عن عمل ", content: "+4,800" },
  { id: 1, title: " شركة موثوقة", content: "+320" },
];
const Hero = ({ style }) => {
  const navigate = useNavigate();
  return (
    <section style={style} className="hero">
      <h1>
        ابحث عن <span> وظيفتك المثالية </span>
        <br />
        أو وظف أفضل الكفاءات
      </h1>
      <p>
        منصة وظيفتي تربط أصحاب العمل بالباحثين عن فرص مهنية بطريقة سهلة و ذكية,
        <br />
        توفر لكم بيئة صقة و شفافية
      </p>
      <div className="btns-container">
        <Button
          className="filled-btn"
          text=" أضف اعلان وظيفة 📢"
          onClick={() => navigate("/main/addadv/employer")}
        />
        <Button
          className="outlined-btn"
          text=" أنا أبحث عن عمل 🔍"
          onClick={() => navigate("/main/addadv/employee")}
        />
      </div>

      <div className="stats">
        {STATS.map((e) => (
          <Stat key={e.id} title={e.title} content={e.content} />
        ))}
      </div>
    </section>
  );
};

export default Hero;

const Stat = ({ title, content }) => (
  <div className="stat">
    <span>{content}</span>
    <p>{title}</p>
  </div>
);
