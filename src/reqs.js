const sendEmployerForm = async (formData) => {
  const text = `
📋 *إعلان وظيفي جديد*

*معلومات الشركة 📁*
🏢 اسم الشركة: ${formData.companyName || "غير محدد"}
📊 قطاع النشاط: ${formData.industry || "غير محدد"}

*تفاصيل الوظيفة 💼*
💼 المسمى الوظيفي: ${formData.jobTitle || "غير محدد"}
👥 عدد المقاعد: ${formData.vacancies || "غير محدد"}
⏰ طبيعة العمل: ${formData.workNature || "غير محدد"}
📝 وصف الوظيفة: ${formData.jobDescription || "غير محدد"}

*موقع الشركة 📍*
📍 المدينة: ${formData.city || "غير محدد"}
🏘️ الحي/المنطقة: ${formData.district || "غير محدد"}
🕐 وقت الدوام: ${formData.workHours || "غير محدد"}
🔄 نوع الوردية: ${formData.shiftType || "غير محدد"}

*الجنس والعمر 👤*
👤 الجنس المطلوب: ${formData.employeeGender || "غير محدد"}
🔞 العمر الأدنى: ${formData.minAge || "غير محدد"}
🔞 العمر الأقصى: ${formData.maxAge || "غير محدد"}

*الراتب والمزايا 💰*
💵 الحد الأدنى للراتب: ${formData.minSalary || "غير محدد"}
💶 الحد الأقصى للراتب: ${formData.maxSalary || "غير محدد"}
🎁 المزايا الإضافية: ${formData.additionalBenefits || "غير محدد"}

*المؤهلات والخبرة 🎓*
📜 المؤهل العلمي: ${formData.qualification || "غير محدد"}
⏳ سنوات الخبرة: ${formData.experienceYears || "غير محدد"}
🛠️ المهارات المطلوبة: ${formData.requiredSkills || "غير محدد"}

*معلومات التواصل 📞*
👨‍💼 اسم المسؤول: ${formData.contactPerson || "غير محدد"}
📱 رقم التواصل: ${formData.contactPhone || "غير محدد"}
📧 البريد الإلكتروني: ${formData.contactEmail || "غير محدد"}
📅 آخر موعد للتقديم: ${formData.applicationDeadline || "غير محدد"}

🆔 رقم الطلب: ${Date.now()}
  `;

  try {
    // First, send the logo if it exists
    if (formData.logo) {
      const logoFormData = new FormData();
      logoFormData.append("chat_id", process.env.REACT_APP_CHAT_ID);
      logoFormData.append("photo", formData.logo);
      logoFormData.append(
        "caption",
        `🖼️ شعار الشركة: ${formData.companyName || "شركة"}`,
      );

      await fetch(
        `https://api.telegram.org/bot${process.env.REACT_APP_TOKEN}/sendPhoto`,
        {
          method: "POST",
          body: logoFormData,
        },
      );
    }

    // Then send the text message
    const response = await fetch(
      `https://api.telegram.org/bot${process.env.REACT_APP_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.REACT_APP_CHAT_ID,
          text: text,
          parse_mode: "Markdown",
        }),
      },
    );

    if (response.ok) {
      alert("✅ تم إرسال الإعلان بنجاح");
      return true;
    } else {
      throw new Error("فشل في إرسال الإعلان");
    }
  } catch (error) {
    console.error("خطأ في إرسال الإعلان:", error);
    alert("❌ حدث خطأ في إرسال الإعلان");
    return false;
  }
};

const sendEmployeeForm = async (formData) => {
  const text = `
📋 *طلب توظيف جديد*

*المعلومات الشخصية 👤*
👤 الاسم الكامل: ${formData.fullName || "غير محدد"}
🎂 العمر: ${formData.age || "غير محدد"}
⚥ الجنس: ${formData.gender || "غير محدد"}
📍 مدينة السكن: ${formData.city || "غير محدد"}
🏘️ المحافظة/الحي: ${formData.district || "غير محدد"}
📱 رقم الهاتف: ${formData.phone || "غير محدد"}
📧 البريد الإلكتروني: ${formData.email || "غير محدد"}

*المؤهل الدراسي 🎓*
🎓 أعلى مؤهل دراسي: ${formData.educationLevel || "غير محدد"}
📚 التخصص: ${formData.specialization || "غير محدد"}
📅 سنة التخرج: ${formData.graduationYear || "غير محدد"}
📜 الشهادات والدورات: ${formData.certificates || "غير محدد"}

*العمل السابق 🏢*
⏳ سنوات الخبرة: ${formData.totalExperienceYears || "غير محدد"}
💼 المسمى الوظيفي السابق: ${formData.previousJobTitle || "غير محدد"}
🏢 اسم الشركة السابقة: ${formData.previousCompany || "غير محدد"}
🚪 سبب ترك العمل: ${formData.reasonForLeaving || "غير محدد"}

*العمل المستهدف 🎯*
🎯 المسمى الوظيفي المطلوب: ${formData.desiredJobTitle || "غير محدد"}
🏭 القطاع المستهدف: ${formData.targetSector || "غير محدد"}

*الراتب المتوقع 💰*
💵 الحد الأدنى للراتب: ${formData.minSalary || "غير محدد"}
💰 الراتب المستهدف: ${formData.targetSalary || "غير محدد"}

*المهارات واللغة 🛠️*
🔧 المهارات: ${formData.skills || "غير محدد"}
🗣️ اللغات: ${formData.languages || "غير محدد"}

*نبذة شخصية 💬*
📝 نبذة شخصية: ${formData.personalBio || "غير محدد"}

🆔 رقم الطلب: ${Date.now()}
  `;

  try {
    // Send profile picture if exists
    if (formData.profilePicture) {
      const photoFormData = new FormData();
      photoFormData.append("chat_id", process.env.REACT_APP_CHAT_ID);
      photoFormData.append("photo", formData.profilePicture);
      photoFormData.append(
        "caption",
        `🤳🏻 الصورة الشخصية: ${formData.fullName || "متقدم"}`,
      );

      await fetch(
        `https://api.telegram.org/bot${process.env.REACT_APP_TOKEN}/sendPhoto`,
        {
          method: "POST",
          body: photoFormData,
        },
      );
    }

    // Send CV if exists
    if (formData.cvFile) {
      const cvFormData = new FormData();
      cvFormData.append("chat_id", process.env.REACT_APP_CHAT_ID);
      cvFormData.append("document", formData.cvFile);
      cvFormData.append(
        "caption",
        `📄 السيرة الذاتية: ${formData.fullName || "متقدم"}`,
      );

      await fetch(
        `https://api.telegram.org/bot${process.env.REACT_APP_TOKEN}/sendDocument`,
        {
          method: "POST",
          body: cvFormData,
        },
      );
    }

    // Send the text message
    const response = await fetch(
      `https://api.telegram.org/bot${process.env.REACT_APP_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.REACT_APP_CHAT_ID,
          text: text,
          parse_mode: "Markdown",
        }),
      },
    );

    if (response.ok) {
      alert("✅ تم إرسال الطلب بنجاح");
      return true;
    } else {
      throw new Error("فشل في إرسال الطلب");
    }
  } catch (error) {
    console.error("خطأ في إرسال الطلب:", error);
    alert("❌ حدث خطأ في إرسال الطلب");
    return false;
  }
};

export { sendEmployerForm, sendEmployeeForm };
