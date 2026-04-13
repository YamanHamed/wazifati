import { Link, useNavigate } from "react-router-dom";
import InputFeild from "../components/InputFeild";
import Button from "../components/Button";
import { useEffect, useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function handleLogin() {
    if (
      formData.email !== "example@gmail.com" ||
      formData.password !== "1234"
    ) {
      alert("user is not defined");
      return;
    }
    if (formData.email !== "" && formData.password !== "") {
      const user = { ...formData };
      localStorage.setItem("user", user);
      navigate("/main");
    }
  }
  function handleSignUp() {
    if (formData.email !== "" && formData.password !== "") {
      const user = { ...formData };
      localStorage.setItem("user", user);
      navigate("/main");
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/main");
    }
  }, []);

  return (
    <div dir="rtl" className="page">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-header">
          {isSignUp ? <h2> مرحباً بك 👋 </h2> : <h2> مرحباً بعودتك 👋 </h2>}
          {isSignUp ? (
            <p>انشئ حسابك الان</p>
          ) : (
            <p>سجل دخولك للوصول الى حسابك</p>
          )}
        </div>

        <InputFeild
          label="البريد الالكتروني"
          type="email"
          placeholder="example@gmail.com"
          required="true"
          style={{ marginBottom: "20px" }}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputFeild
          label="كلمة المرور"
          type="password"
          placeholder="....."
          required="true"
          style={{ marginBottom: "20px" }}
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {isSignUp ? (
          <Button
            className="form-btn"
            onClick={handleSignUp}
            text=" انشاء الحساب"
          />
        ) : (
          <Button
            className="form-btn"
            onClick={handleLogin}
            text="تسجيل الدخول"
          />
        )}

        <p className="cross-word">
          <span> أو</span>
        </p>

        {isSignUp ? (
          <a
            href="#sign-up"
            onClick={() => {
              setIsSignUp(false);
            }}
          >
            لديك حساب؟
            <span className="accent"> سجل دخولك الان</span>
          </a>
        ) : (
          <a
            href="#log-in"
            onClick={() => {
              setIsSignUp(true);
            }}
          >
            ليس لديك حساب؟
            <span className="accent"> أنشئ حسابا جديدا </span>
          </a>
        )}
      </form>
    </div>
  );
};

export default Login;
