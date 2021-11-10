import React from "react";

const Landing = () => {
  return (
    <div className="row landing">
      <div className="col-md-6 text-center text-md-left cards">
        <p className="text">
          Making time a good time by making food the good food.
        </p>
        <p className="text2">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment,
        </p>
        <div>
          <button className="book">Booking Now</button>
          <button className="food">Food Details</button>
        </div>
      </div>
      <div className="col-md-6 imgBox">
        <img src="img1.png" alt="foto" />
      </div>
    </div>
  );
};

export default Landing;
