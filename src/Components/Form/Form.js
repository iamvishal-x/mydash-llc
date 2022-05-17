import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const navigate = useNavigate();

  const emailRegEx = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
  const nameRegEx = new RegExp("^[a-zA-Z ]+$");

  const [data, setData] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: "",
    number: "",
    tnc: true,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    rePassword: "",
    name: "",
    number: "",
    tnc: true,
  });

  const handleChange = (e) => {
    if (e.target.name === "number") {
      if (isNaN(e.target.value)) return;
      if (e.target.value.length > 10) return;
    }
    if (e.target.name === "email") {
      if (e.target.value.length > 30) return;
    }
    if (e.target.name === "name") {
      if (e.target.value.length > 30) return;
    }
    if (e.target.name === "password" || e.target.name === "rePassword") {
      if (e.target.value.length > 20) return;
    }
    if (e.target.name === "tnc") {
      setData((data) => ({
        ...data,
        tnc: !data.tnc,
      }));
      return;
    }
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const errorsCopy = { ...errors };
    for (const errorKey in errorsCopy) errorsCopy[errorKey] = "";
    // conditions
    if (data.number.length < 10 || data.number.length > 10) {
      errorsCopy.number = "Please enter a valid number";
    }
    if (!emailRegEx.test(data.email)) {
      errorsCopy.email = "Please enter a valid email";
    }
    if (!data.password || !data.rePassword) {
      errorsCopy.password = "Password does not match";
      errorsCopy.rePassword = "Password does not match";
    }
    if (data.password !== data.rePassword) {
      errorsCopy.password = "Password does not match";
      errorsCopy.rePassword = "Password does not match";
    }
    if (data.tnc === false) {
      errorsCopy.tnc = "Please agree to our T&C's";
    }

    setErrors(errorsCopy);
    const hasSomeErrors = !!Object.values(errorsCopy).filter((e) => e).length;
    if (hasSomeErrors) return;

    sessionStorage.setItem("userInfo", JSON.stringify(data));
    navigate("/dashboard");
  };

  return (
    <>
      <div className="form">
        <h2>Create an account</h2>
        <form className="form__container" onSubmit={handleRegister}>
          <div className="form__item">
            <label className="form__label"> Your email address </label>
            <input
              type="email"
              className="form__input"
              required
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error--msg">{errors.email}</p>}
          </div>

          <div className="form__item">
            <label className="form__label"> Your password </label>
            <input
              // required
              type="password"
              className="form__input"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error--msg">{errors.password}</p>}
          </div>

          <div className="form__item">
            <label className="form__label"> Confirm your password </label>
            <input
              required
              type="password"
              className="form__input"
              name="rePassword"
              value={data.rePassword}
              onChange={handleChange}
            />
            {errors.rePassword && (
              <p className="error--msg">{errors.rePassword}</p>
            )}
          </div>

          <div className="form__item">
            <label className="form__label"> Your full name </label>
            <input
              required
              type="text"
              className="form__input"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error--msg">{errors.name}</p>}
          </div>

          <div className="form__item">
            <label className="form__label"> Your phone number </label>
            <input
              type="number"
              className="form__input form__input--small"
              required
              name="number"
              onKeyDown={(e) =>
                ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
              }
              value={data.number}
              onChange={handleChange}
            />
            {errors.number && <p className="error--msg">{errors.number}</p>}
          </div>

          <div className="form__item-checkbox">
            <input
              type="checkbox"
              className="form__input--checkbox"
              name="tnc"
              checked={data.tnc === true}
              value={data.tnc}
              onChange={handleChange}
            />
            <label
              htmlFor="checkbox"
              className="form__label form__label--checkbox"
            >
              {" "}
              I read and agree to Terms and Conditions{" "}
            </label>
          </div>
          {errors.tnc && <p className="error--msg">{errors.tnc}</p>}

          <div className="form__button-container">
            <button className="form__button" type="submit">
              Create account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
