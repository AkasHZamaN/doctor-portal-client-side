import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const ReverseBanner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={treatment} className="w-full max-w-sm rounded-lg shadow-2xl" alt=""/>
        <div>
          <h1 className="text-5xl font-bold">Exceptional Denter Care On Your Terms </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>get started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ReverseBanner;
