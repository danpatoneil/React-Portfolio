import NavigationTabs from "./NavigationTabs";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import { useState } from "react";

export default function Content() {

  const pages = ['About Me', 'Portfolio', 'Resume', 'Contact', ]
  const [currentPage, setCurrentPage] = useState("About Me");

  const renderPage = () => {
    //this switch case renders the page based on the info currently saved to the currentPage variable
    switch (currentPage) {
      case "About Me":
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

  const handlePageChange = (page) => {
    setCurrentPage(page);
}

  return (
    <div>
    {/* NavigationTabs contains all  */}
      <NavigationTabs
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        pageList={pages}
      />
      {renderPage()}
    </div>
  );
}
