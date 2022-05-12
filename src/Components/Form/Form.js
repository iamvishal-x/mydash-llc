import "./Form.css";

const Form = () => {
  return (
    <>
      <div className="form">
        <h2>Create an account</h2>
        <form className="form__container">
          <div className="form__item">
            <label className="form__label"> Your email address </label>
            <input type="text" className="form__input" />
          </div>
          <div className="form__item">
            <label className="form__label"> Your password </label>
            <input type="password" className="form__input" />
          </div>
          <div className="form__item">
            <label className="form__label"> Confirm your password </label>
            <input type="password" className="form__input" />
          </div>
          <div className="form__item">
            <label className="form__label"> Your full name </label>
            <input type="text" className="form__input" />
          </div>
          <div className="form__item">
            <label className="form__label"> Your phone number </label>
            <input type="text" className="form__input form__input--small" />
          </div>
          <div className="form__item-checkbox">
            <input type="checkbox" className="form__input--checkbox" />
            <label className="form__label form__label--checkbox">
              {" "}
              I read and agree to Terms and Conditions{" "}
            </label>
          </div>
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
