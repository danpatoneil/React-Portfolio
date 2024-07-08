import NavigationTabs from "./NavigationTabs";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Portfolio";
import Portfolio from "./pages/Portfolio";
import { useState } from "react";

export default function Content() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe />;
        break;

      case "Contact":
        return <Contact />;
        break;

      case "Resume":
        return <Resume />;
        break;

      case "Portfolio":
        return <Portfolio />;
        break;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavigationTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
