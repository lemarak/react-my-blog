import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const Item = () => {
  return (
    <article>
      <ItemTitle />
      <ItemSubtitle />
      <ItemPicture />
      <ItemDescription />
    </article>
  );
};

export default Item;
