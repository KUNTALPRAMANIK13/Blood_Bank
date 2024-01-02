import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerImage from "/src/assets/banner1.jpg";
import { useSelector } from "react-redux";

import Form from "../../components/Shared/Form/Form";
import Spinner from "../../components/Shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src={bannerImage} alt="LoginImage" />
          </div>

          <div className="col-md-4 form-container">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
