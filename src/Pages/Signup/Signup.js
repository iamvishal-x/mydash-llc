import Form from "../../Components/Form/Form";
import pic from "../../Images/image2.png";
import "./Signup.css";
const Signup = () => {
  return (
    <>
      <div className="signup">
        <div className="signup__left">
          <img src={pic} alt="" />
        </div>
        <div className="signup__right">
          <div className="signup--form">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
