import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        {/* content is all the content that is not in the footer, simply because it made sense to bundle the info from the header and main body together */}
    <Content />
    <Footer />
    </div>
  );
}

export default App;
