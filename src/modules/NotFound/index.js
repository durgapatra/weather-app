import React from "react";
import ContainerLayout from "components/ContainerLayout";
import notFoundImage from "../../assets/images/notFound.png";
import "./index.scss";
const NotFound = props => {
  return (
    <ContainerLayout>
      <div className="error-page">
        <img
          className="error-image"
          src={notFoundImage}
          alt="404 error Page Not Found"
        />
      </div>
    </ContainerLayout>
  );
};

export default NotFound;
