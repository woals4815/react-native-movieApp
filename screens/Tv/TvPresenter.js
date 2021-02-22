import React from "react";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";

export default ({ loading, popular, topRated }) => (
  <ScrollContainer loading={loading}>
    <HorizontalSlider title={"Popular shows"}>
      {popular.map((show) => (
        <Vertical
          id={show.id}
          key={show.id}
          poster={show.poster_path}
          title={show.name}
          votes={show.vote_average}
        />
      ))}
    </HorizontalSlider>
    <HorizontalSlider title={"Top Rated"}>
      {topRated.map((show) => (
        <Vertical
          id={show.id}
          key={show.id}
          poster={show.poster_path}
          title={show.name}
          votes={show.vote_average}
        />
      ))}
    </HorizontalSlider>
  </ScrollContainer>
);
