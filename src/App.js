import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import data from "./components/data.js";

function App() {
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
