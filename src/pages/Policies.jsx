import Header from "../components/Header";
import Card from "../components/Card";
import { useEffect } from "react";

const Policies = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Makes the transition feel 'softer'
    });
  }, []);
  return (
    <>
      <Header
        title={"سياسة الخصوصية و الاستخدام  "}
        spanTitle={" الشفافية أولاً "}
      >
        <p>آخر تحديث : يناير 2026 - نلتز بحماية بياناتك و خصزصيتك الكاملة</p>
      </Header>
      <Card
        style={{ marginBottom: "20px" }}
        type="large"
        title="البيانات التي نجمعها  📝"
      >
        <p style={{ margin: "0", marginBottom: "5px" }}>
          عند تسجيلك في منصة وظيفية، تجمع البيانات التالية:
        </p>
        <ul
          style={{
            padding: 0,
            paddingRight: "15px",
            margin: "0",
            marginBottom: "10px",
          }}
        >
          <li style={{ listStyle: "initial " }}>
            الاسم الكامل ورقم الهاتف والبريد الإلكتروني
          </li>
          <li style={{ listStyle: "initial " }}>
            بيانات الإعلانات المنشورة (وظائف أو طلبات توظيف)
          </li>
          <li style={{ listStyle: "initial " }}>
            بيانات الاستخدام والتسجيل داخل المنصة
          </li>
          <li style={{ listStyle: "initial " }}>
            الصور والملفات التي ترفعها اختيارياً
          </li>
        </ul>
      </Card>
      <Card
        style={{ marginBottom: "20px" }}
        type="large"
        title="    كيف نستخدم بياناتك 🎯"
      >
        <p style={{ margin: "0", marginBottom: "5px" }}>
          تستخدم البيانات المجموعة للأغراض التالية حصراً:
        </p>
        <ul
          style={{
            padding: 0,
            paddingRight: "15px",
            margin: "0",
            marginBottom: "10px",
          }}
        >
          <li style={{ listStyle: "initial " }}>
            تشغيل المنصة وتقديم خدمات التوظيف
          </li>
          <li style={{ listStyle: "initial " }}>
            مطابقة أصحاب العمل مع الباحثين عن عمل
          </li>
          <li style={{ listStyle: "initial " }}>
            إرسال إشعارات ذات صلة بطلبات التوظيف
          </li>
          <li style={{ listStyle: "initial " }}>
            تحسين جودة الخدمة وتجربة المستخدم
          </li>
          <li style={{ listStyle: "initial " }}>
            إرسال رسائل إخبارية (يمكنك إلغاء الاشتراك في أي وقت)
          </li>
        </ul>
      </Card>
      <Card
        style={{ marginBottom: "20px" }}
        type="large"
        title=" ما لا نفعله؟ أبداً 🚫"
      >
        <ul
          style={{
            padding: 0,
            paddingRight: "15px",
            margin: "0",
            marginBottom: "10px",
          }}
        >
          <li style={{ listStyle: "initial" }}>لا نبيع بياناتك لأي طرف ثالث</li>
          <li style={{ listStyle: "initial" }}>
            لا نشارك معلوماتك مع جهات خارجية دون موافقتك
          </li>
          <li style={{ listStyle: "initial" }}>
            لا نستخدم بياناتك لأغراض تجارية خارج نطاق المنصة
          </li>
          <li style={{ listStyle: "initial" }}>
            لا نحتفظ ببيانات بطاقات الدفع على خوادمنا
          </li>
        </ul>
      </Card>
      <Card
        style={{ marginBottom: "20px" }}
        type="large"
        title=" أمان البيانات 🔒"
      >
        <p>
          نحمي بياناتك باستخدام أحدث تقنيات التشفير SSL/TLS. خوادمنا محمية
          بجدران حماية متقدمة، ونجري مراجعات أمنية دورية. وصول الفريق إلى
          بياناتك محدود ومقيد بصلاحيات صارمة.
        </p>
      </Card>
      <Card style={{ marginBottom: "20px" }} type="large" title=" حقوقك 👤">
        <ul
          style={{
            padding: 0,
            paddingRight: "15px",
            margin: "0",
            marginBottom: "10px",
          }}
        >
          <li style={{ listStyle: "initial" }}>
            الوصول: يمكنك الاطلاع على جميع بياناتك في أي وقت من إعدادات حسابك.
          </li>
          <li style={{ listStyle: "initial" }}>
            التصحيح: يمكنك تعديل بياناتك الشخصية في أي وقت.
          </li>
          <li style={{ listStyle: "initial" }}>
            الحذف: يمكنك حذف حسابك وجميع بياناتك نهائياً.
          </li>
          <li style={{ listStyle: "initial" }}>
            الاعتراض: يمكنك الاعتراض على أي معالجة لبياناتك.
          </li>
        </ul>
      </Card>
      <Card
        style={{ marginBottom: "20px" }}
        type="large"
        title="  ملفات الارتباط (cookies) 🍪"
      >
        <p>
          تستخدم ملفات الارتباط لتحسين تجربتك، تذكر تفاصيلك، وتحليل استخدام
          المنصة. يمكنك التحكم في ملفات الارتباط من إعدادات المتصفح. بعض الوظائف
          قد لا تعمل بشكل صحيح إذا عطلت ملفات الارتباط.
        </p>
      </Card>
      <Card
        style={{ marginBottom: "20px" }}
        type="large"
        title="  شروط الاستخدام 📜"
      >
        <ul
          style={{
            padding: 0,
            paddingRight: "15px",
            margin: "0",
            marginBottom: "10px",
          }}
        >
          <li style={{ listStyle: "initial" }}>
            يجب أن يكون عمرك 16 سنة أو أكثر لاستخدام المنصة.
          </li>
          <li style={{ listStyle: "initial" }}>
            يُمنع نشر إعلانات وهمية أو مضللة.
          </li>
          <li style={{ listStyle: "initial" }}>
            يُمنع التحرش أو الإساءة لأي مستخدم.
          </li>
          <li style={{ listStyle: "initial" }}>
            يُمنع نشر محتوى غير قانوني أو ضار.
          </li>
        </ul>
      </Card>
      <Card
        style={{ marginBottom: "20px" }}
        type="large"
        title="  تواصل معنا 📞 "
      >
        <p>لأي استفسار حول سياسة الخصوصية أو لممارسة حقوقك، تواصل معنا عبر:</p>
        <p>privacy@wazifati.sy</p>
        <p>سنرد على طلبك خلال 5 أيام عمل.</p>
      </Card>
    </>
  );
};

export default Policies;
