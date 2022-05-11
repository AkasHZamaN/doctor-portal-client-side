import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{review.review}</p>
        <div class="flex justify-start items-center">
          <div class="avatar">
            <div class="w-16 mt-3 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
              <h4 className="text-xl">{review.name}</h4>
              <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;