import Header from "../components/Header";
import InputFeild from "../components/InputFeild";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { sendEmployeeForm, sendEmployerForm } from "../reqs";

const AddAdv = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Makes the transition feel 'softer'
    });
  }, []);
  const { type } = useParams();
  if (type === "employer")
    return (
      <>
        <Header title="أضف إعلان وظيفة شاغرة" spanTitle="إعلان وظيفة 📢">
          <p>أكمل البيانات التالية لنشر إعلانك و الوصول إلى أفضل المرشحين</p>
        </Header>
        <EmployerCard />
      </>
    );
  else if (type === "employee")
    return (
      <>
        <Header title="أضف إعلان باحث عن عمل" spanTitle="طلب توظيف  🔎">
          <p>أكمل بياناتك ليصلك أصحاب العمل مباشرة</p>
        </Header>
        <EmployeeCard />
      </>
    );
  else {
    return <></>;
  }
};

export default AddAdv;

const EmployerCard = () => {
  const [formData, setFormData] = useState({
    // Company info
    companyName: "",
    industry: "",
    logo: null,
    // Job details
    jobTitle: "",
    vacancies: "",
    workNature: "",
    jobDescription: "",
    // Location
    city: "",
    district: "",
    workHours: "",
    shiftType: "",
    // Gender & age
    employeeGender: "",
    minAge: "",
    maxAge: "",
    // Salary & benefits
    minSalary: "",
    maxSalary: "",
    additionalBenefits: "",
    // Qualifications
    qualification: "",
    experienceYears: "",
    requiredSkills: "",
    // Contact
    contactPerson: "",
    contactPhone: "",
    contactEmail: "",
    applicationDeadline: "",
  });
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await sendEmployerForm(formData);
    if (success) {
      // Optional: redirect or clear form
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="job-card"
      style={{ marginBottom: "30px" }}
    >
      <div style={{ marginBottom: "30px" }}>
        <p className="job-card-header">معلومات الشركة 📁</p>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label="اسم الشركة*"
            placeholder="مثال: شركة نور التجارية "
            type="text"
            required={true}
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          <InputFeild
            label="قطاع النشاط *"
            placeholder=" تجاري,  صناعي,  تقني ... "
            type="text"
            required={true}
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          />
        </div>
        <InputFeild
          label="شعار الشركة"
          placeholder="  اضغط لرفع الشعار "
          type="file"
          required={false}
          name="logo"
          fileSelected={!!formData.logo}
          onChange={handleChange}
        >
          <p style={{ textAlign: "center" }}>
            <p style={{ margin: "0", fontSize: "4rem" }}> 🖼️ </p>

            <p
              style={{
                margin: "0",
                color: "white",
                fontWeight: "bold",
              }}
            >
              اضغط لرفع الشعار
            </p>
          </p>
        </InputFeild>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <p className="job-card-header">تفاصيل الوظيفة 💼</p>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label="المسمى الوظيفي *"
            placeholder="مثال:  محاسب اول  "
            type="text"
            required={true}
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          <InputFeild
            label=" عدد المقاعد المطلوبة"
            placeholder=""
            type="number"
            required={false}
            name="vacancies"
            value={formData.vacancies}
            onChange={handleChange}
          />
        </div>
        <InputFeild
          style={{
            marginBottom: "20px",
          }}
          type="radio-container"
          label="طبيعة العمل *"
        >
          <InputFeild
            type="radio"
            radioName="work-time"
            label="دوام كامل"
            name="workNature"
            value="دوام كامل"
            checked={formData.workNature === "دوام كامل"}
            onChange={handleChange}
          />
          <InputFeild
            type="radio"
            radioName="work-time"
            label="دوام جزئي"
            name="workNature"
            value="دوام جزئي"
            checked={formData.workNature === "دوام جزئي"}
            onChange={handleChange}
          />
          <InputFeild
            type="radio"
            radioName="work-time"
            label=" عن بعد"
            name="workNature"
            value="عن بعد"
            checked={formData.workNature === "عن بعد"}
            onChange={handleChange}
          />
          <InputFeild
            type="radio"
            radioName="work-time"
            label="هجين "
            name="workNature"
            value="هجين"
            checked={formData.workNature === "هجين"}
            onChange={handleChange}
          />
          <InputFeild
            type="radio"
            radioName="work-time"
            label="عقد مؤقت "
            name="workNature"
            value="عقد مؤقت"
            checked={formData.workNature === "عقد مؤقت"}
            onChange={handleChange}
          />
          <InputFeild
            type="radio"
            radioName="work-time"
            label=" تدريب"
            name="workNature"
            value="تدريب"
            checked={formData.workNature === "تدريب"}
            onChange={handleChange}
          />
        </InputFeild>
        <InputFeild
          style={{
            marginBottom: "20px",
          }}
          type="textarea"
          label="وصف الوظيفة و المهام المطلوبة *"
          placeholder="اشرح تفاصيل الوظيفة, المهام اليومية, السمؤوليات ..."
          inputStyle={{
            minHeight: "120px",
            maxHeight: "300px",
            resize: "none",
            overflowY: "auto ",
            fontFamily: "inherit",
          }}
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <p className="job-card-header">موقع الشركة 📍</p>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label="المدينة *"
            placeholder=" مثال : مدينة دمشق "
            type="text"
            required={true}
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <InputFeild
            label="  الحي / المنطقة"
            placeholder="مثال: المزة  "
            type="text"
            required={false}
            name="district"
            value={formData.district}
            onChange={handleChange}
          />
        </div>
        <p className="job-card-header">أوقات العمل ⌚</p>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label="* وقت الدوام *"
            placeholder="مثال:  8 صباحاً - 4 مساءً  "
            type="text"
            required={true}
            name="workHours"
            value={formData.workHours}
            onChange={handleChange}
          />
          <InputFeild
            label=" نوع الوردية "
            placeholder="مثال:  صباحي ,  مسائي ...  "
            type="text"
            required={false}
            name="shiftType"
            value={formData.shiftType}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <p className="job-card-header">الجنس و العمر 👤</p>
        <InputFeild
          style={{
            marginBottom: "20px",
          }}
          type="radio-container"
          label=" جنس الموظف المطلوب*"
        >
          <InputFeild
            type="radio"
            radioName="employee-gender"
            label="ذكر"
            name="employeeGender"
            value="ذكر"
            checked={formData.employeeGender === "ذكر"}
            onChange={handleChange}
          />
          <InputFeild
            type="radio"
            radioName="employee-gender"
            label="أنثى "
            name="employeeGender"
            value="أنثى"
            checked={formData.employeeGender === "أنثى"}
            onChange={handleChange}
          />
          <InputFeild
            type="radio"
            radioName="employee-gender"
            label=" كلاهما "
            name="employeeGender"
            value="كلاهما"
            checked={formData.employeeGender === "كلاهما"}
            onChange={handleChange}
          />
        </InputFeild>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label="العمر الادنى المفضل "
            placeholder=""
            type="number"
            required={false}
            name="minAge"
            value={formData.minAge}
            onChange={handleChange}
          />
          <InputFeild
            label="العمر الاقصى المفضل "
            placeholder=""
            type="number"
            required={false}
            name="maxAge"
            value={formData.maxAge}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <p className="job-card-header">الراتب و المزايا 💰</p>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label="الحد الادنى للراتب  "
            placeholder="مثال:   500,000 s.p  "
            type="text"
            required={false}
            name="minSalary"
            value={formData.minSalary}
            onChange={handleChange}
          />
          <InputFeild
            label="الحد الاقصي للراتب "
            placeholder="مثال: 1,000,000 s.p   "
            type="text"
            required={false}
            name="maxSalary"
            value={formData.maxSalary}
            onChange={handleChange}
          />
        </div>
        <InputFeild
          label="المزايا الاضافية"
          placeholder="مثال: تامين  صحي ,  بدل صحي  ... "
          type="text"
          required={false}
          name="additionalBenefits"
          value={formData.additionalBenefits}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <p className="job-card-header">المؤهلات و الخبرة🎓 </p>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label="المؤهل العلمي المطلوب "
            placeholder="مثال: باكلوريوس في الكهرباء ,  غير مطلوب  ... "
            type="text"
            required={false}
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
          />
          <InputFeild
            label=" سنوات الخبرة المفضلة"
            placeholder=""
            type="number"
            required={false}
            name="experienceYears"
            value={formData.experienceYears}
            onChange={handleChange}
          />
        </div>
        <InputFeild
          label="المهارات المطلوبة"
          placeholder="مثال: excel , التواصل الجيد , التسويق ... "
          type="text"
          required={false}
          name="requiredSkills"
          value={formData.requiredSkills}
          onChange={handleChange}
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <p className="job-card-header">معلومات التواصل 🏢</p>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label="اسم المسؤول"
            placeholder=": اسم المسؤول عن التوظيف "
            type="text"
            required={false}
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
          />
          <InputFeild
            label=" رقم التواصل *"
            placeholder="+963 xxx xxx xxx"
            type="text"
            required={true}
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label=" البريد الالكتروني للتواصل"
            placeholder="example@gmail.com "
            type="email"
            required={false}
            name="contactEmail"
            value={formData.contactEmail}
            onChange={handleChange}
          />
          <InputFeild
            label=" اخر موعد للتقديم"
            type="date"
            required={false}
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
          />
        </div>
      </div>

      <Button className="form-btn" text="نشر الاعلان 🚀" />
    </form>
  );
};
const EmployeeCard = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    city: "",
    district: "",
    phone: "",
    email: "",
    profilePicture: null,
    cvFile: null,
    educationLevel: "",
    specialization: "",
    graduationYear: "",
    certificates: "",
    totalExperienceYears: "",
    previousJobTitle: "",
    previousCompany: "",
    reasonForLeaving: "",
    desiredJobTitle: "",
    targetSector: "",
    minSalary: "",
    targetSalary: "",
    skills: "",
    languages: "",
    personalBio: "",
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;

    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] || null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await sendEmployeeForm(formData);
    if (success) {
      // Optional: redirect or clear form
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="job-card"
      style={{ marginBottom: "30px" }}
    >
      <div style={{ marginBottom: "30px" }}>
        <p className="job-card-header"> المعلومات الشخصية 👤</p>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label="الاسم الكامل *"
            placeholder="محمد أحمد  "
            type="text"
            required={true}
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <InputFeild
            label=" العمر *"
            placeholder=""
            type="number"
            required={true}
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <InputFeild
          style={{
            marginBottom: "20px",
          }}
          type="radio-container"
          label=" جنس الموظف المطلوب*"
        >
          <InputFeild
            type="radio"
            radioName="employee-gender-"
            label="ذكر"
            name="gender"
            value="ذكر"
            checked={formData.gender === "ذكر"}
            onChange={handleChange}
          />
          <InputFeild
            type="radio"
            radioName="employee-gender-"
            label="أنثى "
            name="gender"
            value="أنثى"
            checked={formData.gender === "أنثى"}
            onChange={handleChange}
          />
        </InputFeild>

        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label="مدينة السكن  *"
            placeholder=" مثال : مدينة تمشق"
            type="text"
            required={true}
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <InputFeild
            label=" المحافظة / الحي "
            placeholder="المزة ..."
            type="text"
            required={false}
            name="district"
            value={formData.district}
            onChange={handleChange}
          />

          <InputFeild
            label=" رقم الهاتف *"
            placeholder="+963 xxx xxx xxx"
            type="text"
            required={true}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <InputFeild
            label=" البريد الالكتروني "
            placeholder="example@gmail.com "
            type="email"
            required={false}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputFeild
            label=" الصورة الشخصية "
            placeholder="  اضغط لرفع صورتك "
            type="file"
            required={false}
            name="profilePicture"
            fileSelected={!!formData.profilePicture}
            onChange={handleChange}
          >
            <p style={{ textAlign: "center" }}>
              <p style={{ margin: "0", fontSize: "4rem" }}> 🤳🏻 </p>

              <p
                style={{
                  margin: "0",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                اضغط لرفع صورتك{" "}
              </p>
            </p>
          </InputFeild>
          <InputFeild
            label=" السيرة الذاتية (pdf) "
            placeholder=" اضغط لرفع سيرتك الذاتية "
            type="file"
            required={false}
            name="cvFile"
            fileSelected={!!formData.cvFile}
            onChange={handleChange}
          >
            <p style={{ textAlign: "center" }}>
              <p style={{ margin: "0", fontSize: "4rem" }}> 🗋 </p>

              <p
                style={{
                  margin: "0",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                اضغط لرفع سيرتك الذاتية
              </p>
            </p>
          </InputFeild>
        </div>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <p className="job-card-header"> المؤهل الدراسي 🎓</p>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label=" اعلى مؤهل دراسي *"
            placeholder="  مثال: باكلوريوس   ... "
            type="text"
            required={true}
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleChange}
          />
          <InputFeild
            label="   التخصص *"
            placeholder="  مثال:  هندسة الكهرباء ,  ادارة الاعمال ... "
            type="text"
            required={true}
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
          />
          <InputFeild
            label="  سنة التخرج"
            placeholder=" "
            type="number"
            required={false}
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
          />
          <InputFeild
            label="  الشهادات و الدورات "
            placeholder=" مثال: PMP , ICDL , دورة محاسبة ..."
            type="text"
            required={false}
            name="certificates"
            value={formData.certificates}
            onChange={handleChange}
          />
        </div>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <p className="job-card-header"> العمل السابق 🏢</p>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label="  سنوات الخبرة الاجمالية"
            placeholder=""
            type="number"
            required={false}
            name="totalExperienceYears"
            value={formData.totalExperienceYears}
            onChange={handleChange}
          />
          <InputFeild
            label=" المسمى الوظيفي السابق "
            placeholder=" مثال : محاسب اول "
            type="text"
            required={false}
            name="previousJobTitle"
            value={formData.previousJobTitle}
            onChange={handleChange}
          />
          <InputFeild
            label="اسم الشركة السابقة"
            placeholder="اسم الشركة"
            type="text"
            required={false}
            name="previousCompany"
            value={formData.previousCompany}
            onChange={handleChange}
          />
          <InputFeild
            label=" سبب ترك العمل"
            placeholder="سبب ترك عملك السابق "
            type="text"
            required={false}
            name="reasonForLeaving"
            value={formData.reasonForLeaving}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <p className="job-card-header"> العمل المستهدف 🎯</p>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label=" المسمى الوظيفي المطلوب* "
            placeholder="مثال : محاسب اول , مدير مبيعات ..."
            type="text"
            required={true}
            name="desiredJobTitle"
            value={formData.desiredJobTitle}
            onChange={handleChange}
          />
          <InputFeild
            label=" القطاع المستهدف "
            placeholder="تجاري ,  زراعي ,  صناعي ... "
            type="text"
            required={false}
            name="targetSector"
            value={formData.targetSector}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <p className="job-card-header">الراتب المتوقع 💰</p>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label="الحد الادنى للراتب  "
            placeholder="مثال:   500,000 s.p  "
            type="text"
            required={false}
            name="minSalary"
            value={formData.minSalary}
            onChange={handleChange}
          />
          <InputFeild
            label=" الراتب المستهدف"
            placeholder="مثال: 1,000,000 s.p   "
            type="text"
            required={false}
            name="targetSalary"
            value={formData.targetSalary}
            onChange={handleChange}
          />
        </div>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <p className="job-card-header"> المهارات و اللغة 🛠️</p>
        <div style={{ marginBottom: "20px" }} className="cards-container-2">
          <InputFeild
            label=" المهارات * "
            placeholder=" مثال : excel, الادارة , التسويق ..."
            type="text"
            required={true}
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
          <InputFeild
            label=" اللغات "
            placeholder=" مثال : العربية (اللغة الام) , الانجليزية (B2)"
            type="text"
            required={false}
            name="languages"
            value={formData.languages}
            onChange={handleChange}
          />
        </div>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <p className="job-card-header"> نبذة شخصية 💬 </p>

        <InputFeild
          style={{
            marginBottom: "20px",
          }}
          type="textarea"
          label="عرف بنفسنك"
          placeholder="اكتب نبذة مختصرة عن نفسك, انجازاتك, وما يميزك عن غيرك ..."
          inputStyle={{
            minHeight: "120px",
            maxHeight: "300px",
            resize: "none",
            overflowY: "auto ",
            fontFamily: "inherit",
          }}
          name="personalBio"
          value={formData.personalBio}
          onChange={handleChange}
        />
      </div>

      <Button className="form-btn" text="نشر الاعلان 🚀" />
    </form>
  );
};
