import Button from "@material-ui/core/Button";

import React from "react";
import SwiperWrapper from "./SwiperWrapper";

const Swipers = () => {
  return (
    <SwiperWrapper className="text-center">
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </SwiperWrapper>
  );
};

export default Swipers;
