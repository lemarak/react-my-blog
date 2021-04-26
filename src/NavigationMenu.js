import Link from "./Link";

const NavigationMenu = (props) => {
  return (
    <nav>
      <div>
        <Link name="Link 1" />
        <Link name="Link 1" />
        <Link name="Link 1" />
      </div>
      <div>
        <Link name="Right Link" />
      </div>
    </nav>
  );
};

export default NavigationMenu;
