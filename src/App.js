import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

function App() {
  const data = {
    name: "HappyShoes",
    logo: "https://logoipsum.com/logo/logo-16.svg",
    company: "SZH Inc.",
    cover:
      "https://images.pexels.com/photos/4123897/pexels-photo-4123897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Welcome to our brand new HappyShoes website!",
    description:
      "Lorem ipsum velit cillum excepteur adipisicing voluptate mollit. Laboris deserunt reprehenderit commodo id id minim non voluptate irure pariatur nulla.",
  };

  return (
    <div className="App">
      <Header url={data.logo} webSiteName={data.name} />
      <Body
        cover={data.cover}
        title={data.title}
        description={data.description}
      />
      <Footer company={data.company} />
    </div>
  );
}

export default App;
