import Item from "./Item";

import img1 from "./assets/img/img1.jpeg";
import img2 from "./assets/img/img2.jpg";

const MainContent = () => {
  return (
    <div>
      <Item
        title="Un article plus récent"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error voluptatem consequuntur, velit repellendus natus eum exercitationem corrupti nostrum. Asperiores!"
        picture={img1}
      />
      <Item
        title="Mon premier article"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error voluptatem consequuntur, velit repellendus natus eum exercitationem corrupti nostrum. Asperiores!"
        picture={img2}
      />
    </div>
  );
};

export default MainContent;
