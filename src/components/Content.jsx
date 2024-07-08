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
      <NavigationTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}
