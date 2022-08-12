import React from "react";
import undefined from "../../assets/404.svg";
import { Link } from "react-router-dom";
import "./NotFoundPAge.css";

const NotFoundPAge = () => {
  return (
    <div className="notfound_main">
      <div className="notfound_main-1">
        <img src={undefined} alt="404" className="notfound_image" />
        <p className="notfound_text">
          Вы находитесь на не существующей странице. Давайте вернемся
          <Link to="/"> назад</Link>.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPAge;
