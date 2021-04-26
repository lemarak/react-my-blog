import ItemTitle from "./ItemTitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

import img3 from "./assets/img/img3.jpg";

const MainContent = () => {
  return (
    <div>
      <ItemTitle title="About Me" />

      <ItemPicture picture={img3} />
      <ItemDescription description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ducimus harum corporis quisquam laudantium hic minima tenetur in, dolor explicabo." />
    </div>
  );
};

export default MainContent;
