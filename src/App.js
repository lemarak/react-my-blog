import "./App.css";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import Footer from "./Footer";
import Content from "./Content";

function App() {
  return (
    <body>
      <div className="container">
        <Header />
        <NavigationMenu />
        <Content />
        <Footer />
      </div>
    </body>
  );
}

export default App;
